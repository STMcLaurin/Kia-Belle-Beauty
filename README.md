# Kia Belle Beauty

**Where Beauty Meets Innovation**  
*Discover · Shop · Shine*

Kia Belle Beauty is a luxury-inspired beauty discovery and AI-assisted creative marketing platform. It combines a curated beauty shopping experience with commercial video production services for beauty entrepreneurs and brands.

## Business divisions

### Kia Belle Shop

A curated destination for beauty products and inspiration across six categories:

- Fragrances
- Makeup
- Nails
- Skincare
- Haircare
- Accessories

**Planned commerce model:** First, links to approved third-party affiliate retailers; later, direct product sales with verified inventory, secure checkout, and fulfillment.

### Kia Belle Creative Studio

AI-assisted beauty advertising and content creation services, including product commercials, short-form promotional videos, branded content, and marketing campaigns.

The portfolio includes two original concept commercials:

- **Miss Honey Paris** — `assets/Miss_Honey_Perfume_Commercial.mp4`
- **Secret Plus Beauty Rose** — `assets/Elegance_Perfume_Commercial.mp4` (existing source filename retained)

Portfolio videos are examples of independent creative work, not claims of endorsement or official brand partnerships.

## Website pages

| Area | Files |
| --- | --- |
| Home | `index.html` |
| Beauty storefront | `shop.html`, `collections.html` |
| Product categories | `fragrances.html`, `makeup.html`, `nails.html`, `skincare.html`, `haircare.html`, `accessories.html` |
| Creative services | `studio.html`, `services.html`, `portfolio.html` |
| Company and contact | `about.html`, `contact.html`, `disclosures.html` |

## Design system

The brand uses coordinated but distinct visual identities:

- **Kia Belle Shop:** blush pink, rose gold, champagne, and ivory.
- **Kia Belle Creative Studio:** midnight black, gold, and cream.

Core colors:

| Color | Hex |
| --- | --- |
| Blush Pink | `#F8D7DC` |
| Rose Gold | `#B76E79` |
| Champagne | `#F3E1C8` |
| Ivory | `#FFF8F0` |
| Midnight Black | `#141414` |
| Gold | `#D4AF37` |

Typography: **Playfair Display** for headings, **Montserrat** for body copy, and **Allura** for selected accents.

## Tech stack

- HTML5
- CSS3 (`css/style.css`)
- Vanilla JavaScript (`js/interaction.js`)
- Local images and MP4 videos in `assets/`
- Google Fonts (requires internet access)

The pages include their own HTML content and do **not** rely on JavaScript to render the main page body. JavaScript provides lightweight interactions such as the mobile menu and contact inquiry copy functionality.

## Run locally

1. Download or clone the repository.
2. Keep the root `.html` files and the `assets/`, `css/`, and `js/` directories together.
3. Open `index.html` in your browser.

For a local server (optional):

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`.

## Deploy to Vercel

1. Push the **entire website folder** to a GitHub repository.
2. In Vercel, choose **Add New → Project**, and import this repository.
3. Select **Other** as the framework preset.
4. Leave the build command empty; deploy the static files directly.
5. Set the root directory to the folder containing `index.html` (repository root if files are uploaded there).
6. Deploy and test navigation, image loading, mobile responsiveness, and portfolio playback.

Do not upload just `index.html`; referenced asset and style folders are needed.

## Current limitations and roadmap

- [x] Fifteen linked HTML pages
- [x] Coordinated luxury brand styling and page banners
- [x] Six category images
- [x] Portfolio featuring the two edited perfume commercials
- [x] Responsive layout and mobile navigation
- [x] Disclosure information page
- [ ] Approved affiliate merchants and live tracking links
- [ ] Verified product catalog and product-level details
- [ ] Real email/contact form backend
- [ ] Product management dashboard and authentication
- [ ] Stripe checkout for inventory that can actually be fulfilled
- [ ] Order management, shipping, and inventory integration
- [ ] Production testing, analytics, accessibility and legal review

## Affiliate, creative, and product transparency

Some future shop links may be affiliate links. When activated, these should be clearly disclosed and should route only to authorized retailer product pages. AI-generated product imagery and concept commercials must not misrepresent actual products or suggest an unauthorized brand partnership.

Kia Belle-branded products shown in some design concepts are current inventory listings.

## Business contact

Use the site's Contact page for the current inquiry-copy workflow. A live submission service and dedicated business contact details can be added once configured.

---

**Kia Belle Beauty** — *Beauty. Elegance. Innovation.*
