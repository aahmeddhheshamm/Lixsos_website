export type Toast = { id: number; message: string; type: 'success' | 'error' }

let nextId = 0

export const useToast = () => {
  const toasts = useState<Toast[]>('toasts', () => [])

  const dismiss = (id: number) => {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  const show = (message: string, type: Toast['type'] = 'success', duration = 5000) => {
    const id = ++nextId
    toasts.value = [...toasts.value, { id, message, type }]
    if (import.meta.client) setTimeout(() => dismiss(id), duration)
  }

  return { toasts, show, dismiss }
}
