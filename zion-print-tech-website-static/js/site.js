const root = document.body.dataset.root || '.';
const link = (path) => `${root}/${path}`.replace('//', '/');

// Insert Header and Footer
document.querySelector('[data-site-header]')?.insertAdjacentHTML('afterend', `<div class="utility-bar"><div class="container utility-inner"><span>Flexographic &amp; Packaging Machinery Supply</span><div><a href="tel:+918179334344">+91 81793 34344</a> <a href="mailto:info@zionprinttech.com">info@zionprinttech.com</a></div></div></div><header class="site-header"><nav class="container nav"><a class="brand" href="${link('index.html')}"><img src="${link('images/logo.png')}" alt="ZION PRINT TECH SOLUTIONS"></a><input class="menu-checkbox" type="checkbox" id="menu-toggle"><label class="menu-toggle" for="menu-toggle">☰</label><div class="nav-links"><a href="${link('index.html')}">Home</a><a href="${link('about/index.html')}">About Us</a><a href="${link('products/index.html')}">Products</a><a href="${link('contact/index.html')}">Contact Us</a></div><a class="button nav-cta" href="${link('contact/index.html')}">Contact Us →</a></nav></header>`);
document.querySelector('[data-site-footer]')?.insertAdjacentHTML('afterend', `<footer class="site-footer"><div class="container footer-grid"><div><img class="footer-logo" src="${link('images/logo.png')}" alt="ZION PRINT TECH SOLUTIONS"><p>Flexographic printing machinery, packaging machinery, and application support services.</p></div><div><h3>Quick Links</h3><a href="${link('about/index.html')}">About Us</a><a href="${link('products/index.html')}">Products</a><a href="${link('contact/index.html')}">Contact Us</a></div><div><h3>Contact</h3><a href="tel:+918179334344">+91 81793 34344</a><a href="mailto:info@zionprinttech.com">info@zionprinttech.com</a></div></div><div class="copyright">© 2026 Zion Print Tech Solutions. All rights reserved.</div></footer>`);

// Load Products by Category
const category = document.querySelector('[data-category]')?.dataset.category;
if (category) {
  fetch(`${root}/data/products.json`)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const categoryContainer = document.querySelector('[data-category]');
      const filteredProducts = data.products.filter((product) => product.category === category);
      categoryContainer.innerHTML = filteredProducts.length > 0
        ? filteredProducts.map((product) => `<article class="product-item"><img src="${root}${product.image}" alt="${product.name}"><div><h2>${product.name}</h2><ul>${product.features.map((feature) => `<li>${feature}</li>`).join('')}</ul><a class="text-link" href="mailto:info@zionprinttech.com?subject=${encodeURIComponent(product.name)}">Request information →</a></div></article>`).join('')
        : '<p>More products are being added to this category.</p>';
    })
    .catch((error) => {
      console.error('Error loading products:', error);
      document.querySelector('[data-category]').innerHTML = '<p>Error loading products. Please try again later.</p>';
    });
}

// Menu Toggle Handler
document.addEventListener('DOMContentLoaded', function() {
  const menuCheckbox = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuCheckbox && navLinks) {
    menuCheckbox.addEventListener('change', function() {
      navLinks.classList.toggle('active', this.checked);
    });
    
    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        menuCheckbox.checked = false;
        navLinks.classList.remove('active');
      });
    });
  }
});

// Button Click Handlers
document.addEventListener('click', function(e) {
  const button = e.target.closest('.button');
  if (button) {
    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
    
    // Remove active state after animation
    setTimeout(() => {
      button.classList.remove('active');
      button.setAttribute('aria-pressed', 'false');
    }, 300);
  }
});

// Form Submission Handler
document.addEventListener('submit', function(e) {
  const form = e.target;
  if (form.classList.contains('inquiry-form')) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      // Simulate submission delay and restore
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Inquiry →';
        alert('Thank you! Your inquiry has been sent. We will contact you shortly.');
        form.reset();
      }, 1500);
    }
  }
});

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const menuCheckbox = document.getElementById('menu-toggle');
    if (menuCheckbox) {
      menuCheckbox.checked = false;
      document.querySelector('.nav-links')?.classList.remove('active');
    }
  }
});

// Active Link Highlighting
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a, .site-footer a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href.replace(/\.\//g, '').replace(/\/index\.html/g, ''))) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
});

// Smooth Scroll Behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});