# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners and managers of small and mid-sized businesses in Egypt and the Gulf. They are looking for one partner to build a website or app, run their digital marketing, or move their operations onto an ERP. They read in English or Arabic and judge an agency mostly by the work it has shipped.

## Product Purpose

The marketing site for LIXSOS Technologies (Cairo): a software development and digital marketing agency that also builds and sells its own product, LIXSOS ERP. Success is a visitor who trusts the work enough to book a call, start a project, or request an ERP demo.

## Positioning

The same team that builds a client's website or app also builds the ERP that runs the client's operations, and it is bilingual (Arabic/English) from the ground up. Software, marketing and ERP come from one partner.

## Operating Context

- Visitors arrive from search, social (LinkedIn, Instagram, Behance) and referrals, on phones as often as desktops.
- Contact by email (support@lixsos.com) and phone/WhatsApp (+20 128 936 3389).

## Capabilities and Constraints

- Nuxt 4 static site (`npm run generate`), deployed to GitHub Pages at lixsos.com.
- English at `/`, Arabic at `/ar` with full RTL. Every visual change must work in both directions and both scripts.
- Light and dark themes exist today; both must keep working.
- Pages: home, services (+ detail per service), work (+ case study per project), ERP, about, contact.

## Brand Commitments

- Name: LIXSOS Technologies / ليكسوس للتكنولوجيا. Logo files in `public/logo.png`, `public/favicon.svg`, `app/components/LogoMark.vue`.
- Brand colours come from the logo: navy ground (#0e1330 / #0b1030), the cyan → blue → violet spectrum of the mark and the X (#22d3ee, #3b82f6, #8b5cf6), and the soft lavender of "TECHNOLOGIES" (#9aa3c7). The logo keeps its gradient.
- English type is Roboto (user requirement, 2026-10-28). Arabic keeps Amiri / Noto Sans Arabic.
- Hover states use one colour everywhere (the brand blue); no per-item hover colours.

## Evidence on Hand

- Real project work with screenshots: `public/projects/*.jpg`, data in `app/data/projects.ts`.
- Real service and ERP module descriptions: `app/data/site.ts`, `app/data/erp.ts`.
- **Not real yet:** the stats (projects, clients, ERP companies, countries) and the testimonials are placeholders. Do not show them until real figures and quotes exist. Do not invent replacements.

## Product Principles

1. Lead with the shipped work; it is the strongest proof the agency has.
2. Say it plainly. Business owners want to know what you build, for whom, and how to start.
3. Arabic is a first-class reading experience, not a translation layer.
4. No claims the agency cannot back up.
