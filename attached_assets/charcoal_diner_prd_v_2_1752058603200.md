# Product Requirements Document (PRD)

## Project: The Charcoal Diner – Demo Website

**Platform:** Replit (HTML/CSS/JS stack)

---

## Objective

Create a static, visually striking demo website for "The Charcoal Diner" — a fictional premium Indian restaurant. The goal is to showcase design, discoverability, and presentation quality for future client work. This website should feel real, look modern, and include SEO + LLM-friendly structure for AI indexing.

---

## Functional Requirements

| Feature                     | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| Static Website              | Pure HTML/CSS/JS (no backend)                                           |
| Ultra-Modern Design         | TailwindCSS or custom CSS for sleek, clean aesthetic                    |
| Responsive Layout           | Mobile-first design, smooth scaling across devices                      |
| High-Quality Food Imagery   | Banner, menu photos, hero shots from royalty-free food image sources    |
| Smooth Animations           | Page transitions, hover effects, scroll reveals (e.g., AOS, GSAP, CSS)  |
| Interactive Menu Section    | Clickable categories, maybe filterable (pure front-end)                 |
| Contact Info Section        | Click-to-call, email, Google Maps embed (optional)                      |
| Opening Hours & Address     | Structured clearly for schema + real-feel UX                            |
| Testimonials Section (Fake) | Hardcoded quotes to boost credibility                                   |
| Call to Action              | "Reserve Now" or "Order on WhatsApp" button (just link to WhatsApp URL) |

---

## SEO + LLM Optimization Requirements

| Element                      | Implementation Approach                                |
| ---------------------------- | ------------------------------------------------------ |
| Schema Markup (JSON-LD)      | `Restaurant`, `LocalBusiness`, `Menu`, `Review` schema |
| Meta Tags                    | Title, description, OpenGraph for social sharing       |
| Sitemap                      | Add a basic `sitemap.xml` manually                     |
| robots.txt                   | Allow indexing                                         |
| Realistic Contact & Location | Fake Khammam-based location + realistic phone/email    |

---

## Design Direction

- **Font:** Modern sans-serif (e.g., Inter, Poppins, DM Sans)
- **Colors:** Charcoal black, burnt orange, warm greys
- **Imagery:** Realistic food hero shots from Unsplash/Pexels
- **Animations:** Subtle entrance reveals, hover zooms, fade-ins

---

## Sample Menu – The Charcoal Diner

### ✨ Signature Dish: **Charcoal Chicken Biryani**

Juicy, marinated chicken cooked over charcoal and layered with saffron rice — a house special.

**Image URL:** [Charcoal Chicken Biryani](https://www.pexels.com/photo/biryani-served-on-plate-6602825/)\
(Save image locally as `/images/charcoal-biryani.jpg`)

### 🔥 Signature Starters

| Dish Name                 | Price | Description                                 |
| ------------------------- | ----- | ------------------------------------------- |
| Charcoal Chicken Tikka    | ₹249  | Juicy chicken marinated in smoked spices    |
| Tandoori Stuffed Mushroom | ₹199  | Smoky mushrooms stuffed with cheese & herbs |
| Angara Paneer Tikka       | ₹229  | Paneer cubes grilled with fiery masala      |

### 🍛 Mains

| Dish Name               | Price | Description                                   |
| ----------------------- | ----- | --------------------------------------------- |
| Bhuna Ghost             | ₹349  | Slow-cooked mutton in thick roasted masala    |
| Charcoal Butter Chicken | ₹319  | Creamy, smoky twist on the classic            |
| Dal Charcoal-e-Diner    | ₹199  | Signature black lentils slow-cooked overnight |
| Paneer Lababdar         | ₹239  | Cottage cheese in a rich Mughlai gravy        |

### 🍺 Rice & Bread

| Item                | Price |
| ------------------- | ----- |
| Chicken Dum Biryani | ₹299  |
| Tandoori Roti       | ₹25   |
| Butter Naan         | ₹35   |
| Jeera Rice          | ₹129  |

### 🍨 Desserts & Beverages

| Item                 | Price |
| -------------------- | ----- |
| Smoky Gulab Jamun    | ₹99   |
| Matka Kulfi          | ₹129  |
| Mint Masala Soda     | ₹49   |
| Charcoal Cold Coffee | ₹89   |

**All images to be saved under **``** directory:**

```
/images/
├── charcoal-biryani.jpg
├── chicken-tikka.jpg
├── paneer-tikka.jpg
├── butter-chicken.jpg
├── dal-charcoal.jpg
├── biryani.jpg
├── kulfi.jpg
├── cold-coffee.jpg
```

---

## File/Folder Structure

```plaintext
/the-charcoal-diner/
├── index.html
├── style.css (or Tailwind config)
├── /images/
│   ├── [food images listed above]
├── /js/
│   └── animations.js (optional for AOS/GSAP)
├── sitemap.xml
├── robots.txt
├── schema.json (injected or embedded in <head>)
```

---

## Deployment Plan

- Use Replit as the development and demo environment
- Export for Netlify or Vercel if needed for further deployment
- Target domain for demo: `charcoaldiner.replit.app`

---

## Timeline

| Phase   | Task                          | ETA   |
| ------- | ----------------------------- | ----- |
| Phase 1 | Base structure + hero section | Day 1 |
| Phase 2 | Menu + About + Contact        | Day 2 |
| Phase 3 | Animations + Schema + Polish  | Day 3 |

