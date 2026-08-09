# Autumn Projects — Company Website

A marketing website for **Autumn Projects Ltd** (an indigenous civil, mechanical, and oil & gas engineering firm based in Port Harcourt, Nigeria), built with **React**, **React Router**, and **Tailwind CSS**.

The site includes a full homepage (animated hero slideshow, about, services, projects gallery, logo marquee, CTA), dedicated About / Services / Projects / Contact pages, dynamic per-service detail pages, and a one-time animated intro loader.

---

## Tech Stack

- **React** — component architecture
- **React Router (`react-router-dom`)** — client-side routing, including dynamic routes (`/services/:slug`)
- **Tailwind CSS** — utility-first styling
- **react-icons** — icon set (`react-icons/fa`)

---

## Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navbar with hover/tap Services dropdown
│   ├── Footer.jsx
│   ├── IntroLoader.jsx         # One-time animated splash screen
│   └── ScrollToTop.jsx         # Resets scroll position on route change
│
├── pages/
│   ├── home/
│   │   ├── Hero.jsx            # Slideshow hero with animated text + CTAs
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx        # Homepage gallery teaser + modal
│   │   ├── LogoScroll.jsx      # Infinite logo marquee
│   │   └── CTA.jsx             # Full-bleed image CTA with fixed-bg effect
│   │
│   ├── about/
│   │   ├── AboutHero.jsx
│   │   ├── OurStory.jsx
│   │   ├── MissionVision.jsx
│   │   ├── Values.jsx
│   │   ├── StatsBar.jsx
│   │   └── AboutCTA.jsx
│   │
│   ├── services/
│   │   ├── ServicesHero.jsx
│   │   ├── ServicesIntro.jsx
│   │   ├── ServicesGrid.jsx
│   │   ├── OurProcess.jsx
│   │   ├── ServicesCTA.jsx
│   │   ├── ServiceDetailHero.jsx
│   │   ├── ServiceOverview.jsx
│   │   └── RelatedServices.jsx
│   │
│   ├── projects/
│   │   ├── ProjectsHero.jsx
│   │   ├── FeaturedProject.jsx
│   │   ├── ProjectsFilter.jsx
│   │   ├── ProjectsGallery.jsx
│   │   ├── ProjectModal.jsx
│   │   └── ProjectsCTA.jsx
│   │
│   └── contact/
│       ├── ContactHero.jsx
│       ├── ContactInfoPanel.jsx
│       ├── ContactForm.jsx
│       └── ContactMap.jsx
│
├── data/
│   ├── services.js              # Single source of truth for all services
│   └── projects.js              # Single source of truth for all projects
│
└── App.jsx                      # Route definitions
```

`data/services.js` and `data/projects.js` are shared across every component that needs that data (nav dropdown, homepage grid, services listing page, service detail page, related-services, contact form's service picker) — content is edited once and reflected everywhere.

---

## Design System

| Element | Value |
|---|---|
| Background (dark sections) | `#0B0C0E` / `#111315` |
| Background (light sections) | `#F7F7F5` / `#FFFFFF` |
| Accent | `red-500` / `red-600` |
| Signature detail | Diagonal safety-yellow (`#FFC107`) hazard-stripe accent, used sparingly near images — a nod to the company's Shell SPDC safety-award history |

Recurring interaction patterns used throughout: image scale-up on card hover, underline-grow-and-redden on hover, fade/slide-in on scroll or on slide change, and a consistent solid-red primary / outlined-white secondary button pairing.

---

## Setup

```bash
npm install
npm run dev
```

Routing requires `react-router-dom`. If it's not already installed:

```bash
npm install react-router-dom
```

### Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/services` | Services listing |
| `/services/:slug` | Individual service detail |
| `/projects` | Projects gallery |
| `/contact` | Contact |

---

## Challenges & Solutions

### 1. Background slideshow couldn't cross-fade between images
**Problem:** A single `background-image` on the hero section can't smoothly transition between different image URLs — swapping the `url()` value just hard-cuts.
**Solution:** Rendered each slide as its own absolutely-positioned, full-size `<div>` stacked on top of each other, with only the active slide's `opacity` set to `1`. A `transition-opacity duration-1000` on each layer produces a genuine crossfade instead of a jump cut.

### 2. Slide-change text animations only played once
**Problem:** Title and paragraph elements were reused across slide changes, so their CSS animations (slide-down / slide-up) only fired on first mount, not on every subsequent slide.
**Solution:** Gave each animated element a `key` tied to the current slide index (`key={`title-${current}`}`). Changing the `key` forces React to unmount/remount the element on every slide change, which restarts the CSS animation each time.

### 3. `background-attachment: fixed` doesn't work on mobile
**Problem:** iOS Safari (and some Android browsers) ignore `background-attachment: fixed`, silently falling back to normal scrolling — so a "fixed" background CTA looked broken on phones.
**Solution:** Explored a `position: fixed` + real-time `clip-path` technique (clipping a viewport-pinned layer to the section's current on-screen bounds) as a fully cross-platform alternative. Ultimately kept the simpler literal `background-attachment: fixed` per final direction, with the known platform limitation documented rather than hidden.

### 4. Project gallery modal needed swipe, keyboard nav, and scroll-lock
**Problem:** A basic image modal isn't enough on its own — needed arrow-key navigation, touch swipe on mobile, and to stop the page scrolling behind the modal while it's open.
**Solution:** Tracked `touchStartX` on `onTouchStart`, compared against `onTouchEnd`'s position to detect swipe direction past a threshold. Added a `keydown` listener for `Escape` / arrow keys. Set `document.body.style.overflow = 'hidden'` while the modal is open, restored on close/unmount via the `useEffect` cleanup function.

### 5. Infinite logo marquee needed a seamless loop and hover-to-pause
**Problem:** A naive scrolling marquee either jumps visibly when it loops, or can't be paused cleanly.
**Solution:** Rendered the logo set twice back-to-back inside a `flex w-max` container, both halves running the identical `translateX(0) → translateX(-100%)` keyframe — so the moment the first set scrolls off-screen, the second (identical) set is exactly in position to continue seamlessly. Hover pause used `group` + `group-hover:[animation-play-state:paused]` applied to both halves simultaneously, so they stay in sync.

### 6. Google Maps embed rejected with "Invalid 'pb' parameter"
**Problem:** The `pb`-encoded embed URL format requires a real, fully-generated string from Google — a placeholder or hand-written one is always rejected.
**Solution:** Switched to Google's simpler query-based embed format (`https://www.google.com/maps?q=<address>&output=embed`), which needs no encoded parameter and works with a plain address string. Documented the alternative (Maps → Share → Embed a map) for anyone who wants a precise pin rather than an address search.

### 7. Darkening an embedded Google Map
**Problem:** The free iframe embed doesn't support Google's native dark-mode map styling (that requires the JS API + an API key).
**Solution:** Applied a CSS `filter` (`invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)`) directly to the iframe — inverting the map's colors then correcting the resulting hue shift, producing a convincing dark theme without any API key or extra setup.

### 8. Internal links returned 404 in production but worked locally
**Problem:** Buttons used plain `<a href="/about">`, which triggers a full server request. Local dev servers auto-fallback unknown routes to `index.html`, masking the issue — but most static production hosts don't, so direct navigation to a client-side-only route 404'd live.
**Solution:** Replaced all internal `<a href>` tags with React Router's `<Link to>` / `<NavLink to>` for client-side navigation. Also documented the still-necessary second fix: configuring the host (Netlify `_redirects`, Vercel `rewrites`, etc.) to fall back to `index.html` for any unmatched route, since direct URL visits and page refreshes are still real server requests regardless of link type.

### 9. Page scroll position persisted across route changes
**Problem:** React Router doesn't reset scroll position on navigation by default — visiting a new page could open scrolled halfway down.
**Solution:** Added a `ScrollToTop` component using `useLocation()` to detect route changes, firing `window.scrollTo(0, 0)` on every `pathname` change. Rendered once inside `<BrowserRouter>`, returns `null` since it has no visual output.

### 10. Featured project and swipeable gallery modal shared state incorrectly
**Problem:** Initially, a single `activeIndex` state tried to serve both the standalone "featured project" spotlight and the filterable project grid — causing the modal's prev/next navigation to misbehave when a category filter excluded the featured project.
**Solution:** Split into two fully independent states: `featuredOpen` (boolean) for the single-image featured spotlight, and `galleryIndex` for the swipeable, filter-aware grid modal. `ProjectModal` was updated to auto-hide its arrows/counter when given a single-item array, so the same component serves both cases cleanly.

### 11. Intro loader excavator flashed back to start position
**Problem:** The excavator's drive-across animation class was conditionally applied only while `stage === 'driving'`. Removing the class when the stage changed also discarded the animation's `forwards` end-state, snapping the element back to its default position for one frame before the opacity fade masked it.
**Solution:** Kept the animation class permanently applied (never conditionally removed), and used a separately-toggled `opacity` style to handle the fade-out. Since the animation is never yanked away, `animation-fill-mode: forwards` correctly holds its final position.

### 12. Intro loader's "road" line lingered after the panels opened
**Problem:** The center seam line had no transition tied to the loader's `stage`, so it stayed fully visible for the entire panel-split animation and only disappeared instantly when the component unmounted.
**Solution:** Added a `transition-opacity duration-300` to the seam line with `opacity-0` applied as soon as `stage === 'opening'`, so it fades out in sync with the panels splitting apart rather than lingering after the reveal.

### 13. Reusing the same visual motif without repeating sections
**Problem:** With Homepage About, About page, and Service detail pages all needing an image + hazard-stripe accent treatment, there was a risk of every page looking identical.
**Solution:** Varied the stripe's corner placement (top-left vs bottom-right), image count (two overlapping images vs one), and surrounding content per page, keeping the motif recognizable as a brand signature without making each section feel copy-pasted.

---

## Known Placeholders to Replace Before Launch

- All image paths (`/images/...`) — swap for actual project assets
- Phone number, email, and social links in `Footer` / `ContactInfoPanel`
- Google Maps embed `src` — replace with the real office address or Share → Embed URL
- `StatsBar` — `[XX]+` years of experience and projects completed
- Contact form submission logic — currently simulated with `setTimeout`; needs a real backend/API route or service (e.g. EmailJS, Formspree)
- Confirm legal entity name (`Adland Projects Nigeria Limited` vs `Autumn Projects Ltd` appears inconsistently across early drafts — pick one and standardize sitewide)