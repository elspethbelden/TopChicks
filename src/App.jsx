import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Top Chicks</h1>
          <p className="hero-subtitle">
            Discover the finest selection of premium poultry and farm-fresh products
          </p>
          <button className="cta-button">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Top Chicks?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🐔</div>
              <h3>Premium Quality</h3>
              <p>Hand-selected, farm-raised chickens with the highest standards</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Organic & Natural</h3>
              <p>100% organic feed and natural farming practices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Fresh Delivery</h3>
              <p>Direct from farm to your table with same-day delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Farm Partners</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App