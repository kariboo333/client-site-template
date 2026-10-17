# Instructions for Claude: this client's website

This repository is a small business website. It is plain HTML and CSS with no build step. Every push to the `main` branch deploys automatically to Cloudflare Workers within about a minute. The site owner is usually not technical: explain changes in plain English and never ask them to run commands.

## Client profile (fill in at setup, keep current)

| Field | Value |
|---|---|
| Business name | [[BUSINESS NAME]] |
| Owner | [[FULL NAME]] |
| What they do | [[ONE LINE]] |
| Audience | [[WHO THE SITE IS FOR]] |
| Domain | [[DOMAIN]] |
| Contact email | [[EMAIL]] |
| Booking link | [[BOOKING LINK]] |
| Payment links | [[STRIPE LINKS, one per offer]] |
| Contact form | [[FORMSPREE URL]] |
| Newsletter form | [[BREVO / FORMSPREE ACTION URL, or "none"]] |
| Voice | [[e.g. warm, plain, no jargon, British spelling, first person "I"]] |
| Words to avoid | [[e.g. "journey", "unlock", "empower", clinical claims]] |
| Brand colours | Set in the `:root` block at the top of `site.css` |
| Fonts | Cormorant Garamond (headings) and Manrope (body), loaded from Google Fonts in each page head |

## Files

| File | What it is |
|---|---|
| `index.html` | The homepage: hero, struggles, how I help, offers, steps, testimonial, about, FAQ, newsletter, contact |
| `offers.html` | Hidden menu card with prices and payment buttons. Not in the menu, `noindex`, blocked in `robots.txt`. The owner sends the link privately. |
| `privacy.html` | Privacy policy (UK GDPR). Update it whenever a new tool collects personal data. |
| `404.html` | Page-not-found page |
| `site.css` | All styles. Brand colours are in the `:root` block at the top. |
| `site.js` | Mobile menu and form sending. Rarely needs changes. |
| `img/` | Photos: `hero.jpg`, `about.jpg`, `contact.jpg`, `og.jpg` (1200×630 share image) |
| `robots.txt`, `sitemap.xml` | Search engine files. Add every new public page to `sitemap.xml`. |
| `_redirects` | Old address → new address, one per line, `301` |

## Rules for every edit

1. **Change only what was asked.** Do not rewrite, shorten or "improve" other text, layout or sizes unless asked.
2. **Keep the owner's words.** When they give exact wording, use it exactly.
3. **Never invent facts:** no made-up testimonials, numbers, qualifications, client names or prices. If something is missing, leave it out and say so.
4. **Never put personal data on the site:** no bank details, home address, client names or health information.
5. **Health and therapy claims:** no promises of cure or outcomes, and nothing that breaks the owner's professional body's guidelines.
6. **Mobile first:** after any layout change, check the page at 390px width with no sideways scroll, and keep the photo, headline and main button near the top.
7. **Keep SEO intact:** every public page keeps a unique `<title>`, a meta description under 155 characters, `og:` tags and a canonical link. Photos keep descriptive `alt` text.
8. **Keep the hidden page hidden:** `offers.html` stays `noindex`, stays out of the menu and the sitemap, and stays disallowed in `robots.txt`.
9. **Before publishing**, search all files for `[[`. Any placeholder left means the page isn't finished: list them for the owner.
10. **Publish:** commit with a short plain-English message and push to `main`. Tell the owner what changed, and that it is live in about a minute (refresh, or close and reopen the tab on a phone).

## Common requests

| Owner says | Do |
|---|---|
| "Change my prices" | Edit `.price` in `offers.html` (and `index.html` if prices are shown there) |
| "Add a testimonial" | Add it to the quote section in `index.html`, word for word, with the name format they give |
| "New photo" | They attach it. Save it to `img/` under the existing name, resized to under 400 KB, and keep the `alt` text accurate |
| "Add an event" | Add a section or a new page, with an `Event` JSON-LD block (name, date, location, offers/price, URL) so Google can show it |
| "Change colours" | Edit only the `:root` values in `site.css`, and check button text stays readable |
| "Add a page" | Copy the structure of `offers.html` (header, footer, fonts, `site.css`), give it its own title and description, and add it to `sitemap.xml` and the menu if public |
| "Undo that" | `git revert` the last commit and push |
