# Alien Doge Memecoin Website Specification

## 1. Project Overview

**Project Name:** Alien Doge Memecoin Website
**Project Type:** Single-page cryptocurrency memecoin landing page
**Core Functionality:** A futuristic neon-themed website featuring scroll-based video animation of the Alien Doge character, with sections for about, tokenomics, roadmap, and community links.
**Target Users:** Cryptocurrency investors, memecoin enthusiasts, potential $ALIENDOGE token buyers

## 2. Technical Stack

- **Framework:** React 18 with Vite
- **Animation:** Custom scroll-based frame animation using React hooks
- **Styling:** CSS with CSS variables for theming
- **Icons:** Lucide React (lightweight icon library)
- **Fonts:** Google Fonts (Orbitron for headings, Rajdhani for body text)

## 3. UI/UX Specification

### Layout Structure

```
┌─────────────────────────────────────────┐
│              NAVIGATION                  │
├─────────────────────────────────────────┤
│                                         │
│            HERO SECTION                │
│    (Scroll-based frame animation)       │
│         "Alien Doge" title             │
│        Call-to-action buttons          │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│            ABOUT SECTION                │
│     Alien Doge story & mission          │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│          TOKENOMICS SECTION             │
│      Token distribution chart           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│          ROADMAP SECTION                │
│      Phase-based timeline               │
│                                         │
├─────────────────────────────────────────┤
│          COMMUNITY SECTION              │
│     Social media links                  │
├─────────────────────────────────────────┤
│              FOOTER                     │
│     Copyright & disclaimers             │
└─────────────────────────────────────────┘
```

### Responsive Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Visual Design

#### Color Palette
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Neon Green | `#39FF14` | Main accent, buttons, highlights |
| Dark Neon Green | `#00FF41` | Secondary accent, borders |
| Deep Black | `#0A0A0A` | Primary background |
| Pure Black | `#000000` | Section backgrounds |
| Dark Gray | `#1A1A1A` | Cards, containers |
| Light Gray | `#2A2A2A` | Borders, dividers |
| White | `#FFFFFF` | Primary text |
| Muted Green | `#1A3D1A` | Subtle accents |

#### Typography
- **Heading Font:** "Orbitron", sans-serif (futuristic, tech feel)
- **Body Font:** "Rajdhani", sans-serif (clean, readable)
- **Heading Sizes:**
  - H1: 4rem (mobile: 2.5rem)
  - H2: 3rem (mobile: 2rem)
  - H3: 1.5rem
- **Body Size:** 1.1rem (mobile: 1rem)
- **Line Height:** 1.6

#### Visual Effects
- **Neon Glow:** `box-shadow: 0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 40px #39FF14`
- **Text Glow:** `text-shadow: 0 0 10px #39FF14, 0 0 20px #39FF14`
- **Card Glow:** `box-shadow: 0 0 15px rgba(57, 255, 20, 0.3)`
- **Hover Transitions:** 0.3s ease-in-out
- **Background:** Subtle grid pattern with animated gradient overlay

### Components

#### Navigation Bar
- Fixed position at top
- Transparent background with blur effect
- Logo on left ("ALIENDOGE" in neon green)
- Navigation links on right (About, Tokenomics, Roadmap, Community)
- Mobile: Hamburger menu

#### Hero Section
- Full viewport height (100vh)
- Centered scroll-based frame animation canvas
- Animation plays as user scrolls (199 frames mapped to scroll position)
- Large title "ALIEN DOGE" with text glow effect
- Subtitle: "The Future of Memecoins Has Arrived"
- CTA buttons: "Buy Now" and "View Chart"
- Animated background with floating particles/grid

#### About Section
- Two-column layout (image + text)
- Left: Alien Doge illustration
- Right: Story text with mission statement
- Features: "From the stars", "Born to moon", "Community first"

#### Tokenomics Section
- Card-based layout
- Token distribution pie/chart visualization
- Stats cards: Total Supply, Liquidity Locked, Tax, Burn

#### Roadmap Section
- Vertical timeline design
- Phase indicators (Phase 1, Phase 2, Phase 3, Phase 4)
- Milestone items with completion status
- Neon green accent lines connecting phases

#### Community Section
- Social media link buttons
- Twitter/X, Telegram, Discord
- Large icons with hover glow effects

#### Footer
- Copyright text
- Disclaimer about cryptocurrency risks
- "Not financial advice" notice

## 4. Functionality Specification

### Core Features

#### Scroll-Based Frame Animation
- Load all 199 frames from img folder
- Map scroll position to frame number (0-198)
- Smooth interpolation between frames
- RequestAnimationFrame for performance
- Preload images to prevent flickering

#### Smooth Scrolling
- Smooth scroll to sections on nav click
- CSS scroll-behavior: smooth

#### Responsive Navigation
- Desktop: Horizontal nav links
- Mobile: Hamburger menu with slide-in panel

### User Interactions
- Hover effects on all interactive elements
- Button click animations
- Scroll-triggered section reveals (fade-in)
- Nav link smooth scroll

### Edge Cases
- Handle slow image loading with loading state
- Fallback for browsers without smooth scroll
- Handle window resize for animation canvas

## 5. Acceptance Criteria

### Visual Checkpoints
- [ ] Neon green (#39FF14) is the primary accent color throughout
- [ ] Black (#0A0A0A) is the primary background color
- [ ] All text is readable with proper contrast
- [ ] Neon glow effects are visible on headings and buttons
- [ ] Grid/tech background pattern is visible
- [ ] Responsive layout works on mobile, tablet, desktop

### Functional Checkpoints
- [ ] Hero animation plays smoothly when scrolling
- [ ] All 199 frames load and display correctly
- [ ] Navigation links scroll to correct sections
- [ ] All buttons have hover effects
- [ ] Mobile menu opens and closes correctly
- [ ] Page loads without console errors

### Animation Checkpoints
- [ ] Frame animation is smooth (60fps target)
- [ ] No frame skipping or flickering
- [ ] Animation responds to scroll position accurately

## 6. File Structure

```
doge/
├── index.html
├── package.json
├── vite.config.js
├── SPEC.md
├── public/
│   └── favicon.ico
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Navbar.css
    │   ├── Hero.jsx
    │   ├── Hero.css
    │   ├── FrameAnimation.jsx
    │   ├── FrameAnimation.css
    │   ├── About.jsx
    │   ├── About.css
    │   ├── Tokenomics.jsx
    │   ├── Tokenomics.css
    │   ├── Roadmap.jsx
    │   ├── Roadmap.css
    │   ├── Community.jsx
    │   ├── Community.css
    │   └── Footer.jsx
    │   └── Footer.css
    └── img/
        └── (199 frame images already present)
```
