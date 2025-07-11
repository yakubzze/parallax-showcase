# Parallax Showcase - GSAP ScrollTrigger

Parallax effects showcase created using GSAP ScrollTrigger. The project demonstrates advanced techniques for creating depth and movement effects during page scrolling.

## 🎯 Project Goal

Creating a complete parallax effects showcase with focus on:
- **Professional visual quality**
- **Smooth 60fps animations**
- **Various parallax speeds**
- **Multi-layered depth effects**
- **Performance optimization**

## 📋 Project Status

### ✅ Completed Features
- Hero Section with multi-layered parallax
- Multi-Layer Parallax with 4 different layers
- Speed Variations demonstration
- Advanced SVG Path Drawing with glow effects
- Video on Scroll functionality
- Smooth scrolling navigation
- Performance monitoring
- Responsive design

### 🚧 Coming Soon
- **Depth Parallax Section** - Realistic depth effects with background images
  - Currently hidden in the interface
  - Will be available in a future update
  - Requires proper image assets and optimization

## ✨ Features

### 🎨 Showcase Sections

1. **Hero Section**
   - Multi-layered background parallax
   - Animated floating elements
   - SVG path animations
   - Grid pattern overlay

2. **Multi-Layer Parallax**
   - 4 layers with different speeds (0.1 - 0.4)
   - Each layer has its own content
   - Scale and fade effects for content

3. **Depth Parallax** *(Coming Soon - Not Ready Yet) ☺️*
   - Depth effect with mountains, clouds, trees
   - Different speeds for each element
   - Clip-path for realistic shapes
   - *Note: This section is currently hidden and will be available in a future update*

4. **Speed Variations**
   - Demonstration of different parallax speeds
   - From 0.05 (very slow) to 0.5 (very fast)
   - Interactive cards with hover effects

5. **Advanced Parallax**
   - Geometric shapes with rotation
   - Combination of parallax and transformations
   - Performance information

6. **Performance Monitoring**
   - Real-time FPS counter
   - Scroll speed monitor
   - Number of active parallax layers
   - Visual performance bar

### 🚀 Key Effects

- **ScrollTrigger Parallax**: Each element has its own parallax speed
- **Multi-Layer Depth**: Multi-layered depth effects
- **Smooth Animations**: Smooth transitions and animations
- **Performance Optimized**: Optimized for 60fps
- **Responsive Design**: Full responsiveness on all devices

## 🛠️ Technologies

- **HTML5** - Semantic structure
- **CSS3** - Modern styles and visual effects
- **GSAP 3.12.2** - Advanced animations
- **ScrollTrigger** - Parallax effects and scroll-triggered animations
- **JavaScript ES6+** - Interactivity and logic

## 📦 Installation and Setup

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yakubzie/parallax-showcase.git
   cd parallax-showcase
   ```

2. **Open in browser**
   ```bash
   # Use local server (optional)
   python -m http.server 8000
   # or
   npx serve .
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### File Structure

```
parallax-effect-gsap/
├── index.html          # Main HTML structure
├── styles.css          # CSS styles with visual effects
├── script.js           # GSAP and ScrollTrigger logic
└── README.md           # Project documentation
```

## 🎮 Usage

### Basic Parallax Effects

```javascript
// Example parallax implementation
gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
        trigger: ".section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
```

### Different Speeds

- **0.1** - Slow movement (standard parallax)
- **0.2** - Medium movement (noticeable effect)
- **0.3** - Fast movement (intense parallax)

## 📱 Responsiveness

The project is fully responsive and works on:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

### Mobile Optimizations

- Automatic disabling of some effects on mobile devices
- Optimized animations for better performance
- Touch-friendly interactions

## ⚡ Performance

### Optimizations

- **Throttled scroll events** - Limiting update frequency
- **Debounced resize** - Optimization when resizing window
- **RequestAnimationFrame** - Smooth animations
- **CSS transforms** - Hardware acceleration

## 📄 License

This project is available under the MIT license. You can freely use, modify, and distribute it.

## 🔮 Roadmap

### Planned Features

- [ ] **3D Parallax Effects** - 3D effects with CSS transforms
- [ ] **Mouse Parallax** - Interactive parallax effects on mouse movement
- [ ] **Video Parallax** - Background video support
- [ ] **WebGL Effects** - Advanced effects with WebGL
- [ ] **Preset System** - Ready-made parallax effect templates

### Optimizations

- [ ] **Lazy Loading** - Lazy loading for images
- [ ] **Intersection Observer** - Better visibility detection
- [ ] **Web Workers** - Background processing
- [ ] **Service Worker** - Caching and offline support

---

**Parallax Showcase** - Depth effects examples with GSAP ScrollTrigger 💻📱