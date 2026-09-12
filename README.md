# Cart Picker - E-Commerce Website 🛒

A modern, responsive e-commerce web application built with pure HTML5, CSS3, and Vanilla JavaScript. Developed as part of the Full Stack Web Development (FSWD) program.

---

## 🌟 Features

### 1. 🏠 Home Page (`index.html`)
- **Top Notification Bar**: Displays promotions & shipping guarantees with a close/dismiss action.
- **Sticky Navigation Bar**: Smooth sticky header with logo, navigation links, shopping cart, profile icon, and mobile hamburger toggle.
- **Off-Canvas Mobile Drawer**: Slide-in navigation drawer for mobile and tablet screens.
- **Hero Showcase**: Eye-catching hero banner highlighting new collections with quick call-to-action buttons.
- **Featured Brands**: Showcase of popular partner brand logos (Adidas, Nike, Steam, Discord, Assassin Polo).
- **New Arrivals & Most Wanted**: Product grids with pricing, discount tags, star ratings, customer review counts, and wishlist toggles.
- **Special Offer Banner**: High-conversion promotional section for limited-time offers.
- **Newsletter Subscription**: Clean email signup box for customer engagement.
- **Comprehensive Footer**: Quick navigation links, customer support information, and contact details.

### 2. 🛍️ Collections Page (`collections.html`)
- **Real-Time Live Search**: Instantly filters products as you type without reloading the page.
- **Dynamic Empty State**: Shows a "No more results!" message when search keywords don't match any item.
- **Categorized Products**: Features diverse product collections including fashion apparel, watches, shoes, handbags, and lifestyle essentials.

### 3. 📩 Contact Us Page (`contact.html`)
- **Interactive Contact Form**: Client-side validated form fields for Name, Email, Subject, and Message.
- **Real-Time Input Validation**:
  - Empty field detection with visual error feedback.
  - Regex-based email format validation (`name@domain.ext`).
- **Company Info Cards**: Direct email, telephone, operating hours, and location information.

### 4. 📱 Full Mobile Responsiveness
- Custom media queries tailored for desktop, tablet, and mobile devices (768px and below).
- Optimized layout with flexible wrapping, legible typography, and tap-friendly buttons.
- Zero horizontal overflow across all screen sizes.

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure, accessibility, and meta viewport configuration |
| **CSS3** | Flexbox, CSS Grid, custom properties, animations, and media queries |
| **Vanilla JavaScript** | DOM manipulation, live search filter, interactive side drawer, and form validation |
| **Google Sans Font** | Modern, clean typography |

---

## 📂 Project Structure

```plaintext
FSWD-Proj5-E-commerce-Site/
│
├── index.html          # Main landing / home page
├── collections.html    # Product collection & search page
├── contact.html        # Contact information & message form
│
├── home.css            # Stylesheet for Home page
├── style.css           # Stylesheet for Collections page
├── contact.css         # Stylesheet for Contact page
│
├── script.js           # JavaScript for Home & Contact pages
├── collection.js       # Live search & script for Collections page
│
├── assests/            # Assets directory
│   ├── brands-logo/    # Partner brand logos
│   ├── products-items/ # Product catalog images
│   └── *.png           # UI icons (cart, user, truck, wishlist, etc.)
│
└── README.md           # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
You only need a modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).

### Running Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/n4zr-sketcher/FSWD-Proj5-E-commerce-Site.git
   ```

2. **Navigate into the project folder**:
   ```bash
   cd "FSWD-Proj5-E-commerce-Site"
   ```

3. **Open the project**:
   - Double-click `index.html` to open it directly in your browser.
   - Or run a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     ```
     Then visit `http://localhost:8000` in your browser.

---