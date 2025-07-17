import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-text">TopChicks</span>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Premium Quality
              <span className="highlight"> Poultry Products</span>
            </h1>
            <p className="hero-description">
              Discover the finest selection of farm-fresh chickens and poultry products. 
              We deliver quality, freshness, and taste directly to your doorstep.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Shop Now</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <span>🐔</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose TopChicks?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">Organic & Natural</h3>
              <p className="feature-description">
                100% organic feed and natural farming practices for healthier poultry
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3 className="feature-title">Fresh Delivery</h3>
              <p className="feature-description">
                Same-day delivery service ensuring maximum freshness and quality
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">
                Hand-selected, farm-raised chickens meeting the highest standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">15K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Farm Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.8%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image">
                <span>🐓</span>
              </div>
              <h3 className="product-title">Free-Range Chickens</h3>
              <p className="product-description">Premium free-range chickens raised with care</p>
              <div className="product-price">$12.99/lb</div>
              <button className="btn btn-outline">Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image">
                <span>🥚</span>
              </div>
              <h3 className="product-title">Farm Fresh Eggs</h3>
              <p className="product-description">Daily fresh eggs from happy, healthy hens</p>
              <div className="product-price">$4.99/dozen</div>
              <button className="btn btn-outline">Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image">
                <span>🍗</span>
              </div>
              <h3 className="product-title">Organic Chicken Cuts</h3>
              <p className="product-description">Premium cuts prepared by expert butchers</p>
              <div className="product-price">$8.99/lb</div>
              <button className="btn btn-outline">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="footer-title">TopChicks</h4>
              <p className="footer-description">
                Your trusted source for premium poultry products and farm-fresh quality.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <ul className="footer-links">
                <li>📧 info@topchicks.com</li>
                <li>📞 (555) 123-4567</li>
                <li>📍 123 Farm Road, City, State</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 TopChicks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App