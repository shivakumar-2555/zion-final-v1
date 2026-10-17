# Zion Print Tech Solutions - Static Website

This folder is the standalone website. It uses HTML pages, one shared CSS file, one small JavaScript file for shared navigation and product rendering, and JSON data.

## File map

- `index.html`: Home page.
- `about/index.html`: About page.
- `contact/index.html`: Contact page and inquiry form.
- `products/index.html`: Product category directory.
- `products/*/index.html`: Category pages.
- `css/style.css`: Shared layout and visual styles.
- `js/site.js`: Shared header, footer, mobile menu, and product list rendering.
- `data/products.json`: Product and category data.
- `images/`: Copied website images.
- `docs/`: Copied brochures and reference documents.
- `favicon.ico`: Browser icon asset.
- `og.png`: Social sharing preview image.

## Run locally

Open this folder in a terminal and run:

`python -m http.server 3000`

Then open `http://localhost:3000`.

Edit `index.html` for home content, `css/style.css` for design, and `data/products.json` for catalogue content.
