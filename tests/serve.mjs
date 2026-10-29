// Serves the generated site (.output/public) the way GitHub Pages does, for the Playwright tests:
// `/path` redirects to `/path/`, folders serve index.html, unknown paths get 404.html with a 404 status,
// and text files are gzipped so transfer sizes match production.
import { createServer } from 'node:http'
import { createReadStream, existsSync, statSync } from 'node:fs'
import { extname, join, normalize } from 'node:path'
import { createGzip } from 'node:zlib'

const root = join(import.meta.dirname, '..', '.output', 'public')
const port = Number(process.env.PORT || 4173)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.xsl': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}
const compressible = /^(text\/|application\/(json|xml)|image\/svg)/

if (!existsSync(root)) {
  console.error('No .output/public found. Run `npm run generate` first.')
  process.exit(1)
}

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')
  const path = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '')
  let file = join(root, path)

  if (existsSync(file) && statSync(file).isDirectory()) {
    if (!path.endsWith('/')) {
      res.writeHead(301, { Location: `${path}/${url.search}` })
      return res.end()
    }
    file = join(file, 'index.html')
  }

  let status = 200
  if (!existsSync(file)) {
    status = 404
    file = join(root, '404.html')
  }

  const type = types[extname(file)] || 'application/octet-stream'
  const gzip = compressible.test(type) && /\bgzip\b/.test(req.headers['accept-encoding'] || '')
  res.writeHead(status, {
    'Content-Type': type,
    'Cache-Control': 'no-cache',
    ...(gzip ? { 'Content-Encoding': 'gzip', Vary: 'Accept-Encoding' } : {}),
  })
  const stream = createReadStream(file)
  ;(gzip ? stream.pipe(createGzip()) : stream).pipe(res)
}).listen(port, () => console.log(`Serving ${root} on http://localhost:${port}`))
