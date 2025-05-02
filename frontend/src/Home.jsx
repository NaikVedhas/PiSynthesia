import React, { useState, useEffect } from "react";
import { Play, FileText, ChevronRight, Music, Menu, X } from "lucide-react";
import "./style.css";
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Navigation */}
      <nav className={`main-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo-container">
            <div className="logo-icon">
              <Music className="icon" />
            </div>
            <span className="logo-text">FluidSynth</span>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <div className="nav-links">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#demo" className="nav-link">
                Demo
              </a>
              <a href="#product" className="nav-link">
                Product
              </a>
              <a href="#docs" className="nav-link">
                Documentation
              </a>
            </div>
            <button className="cta-button">Get Early Access</button>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              <a
                href="#features"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#demo"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </a>
              <a
                href="#product"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </a>
              <a
                href="#docs"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Documentation
              </a>
              <button className="mobile-cta-button">Get Early Access</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background"></div>

        <div className="hero-content">
          <div className="hero-tag">Revolutionizing Music Creation</div>
          <h1 className="hero-title">
            Create Music With
            <br />
            Your Movement
          </h1>
          <p className="hero-description">
            FluidSynth transforms hand gestures into beautiful music. An
            intuitive interface that brings your sonic ideas to life.
          </p>
          <div className="hero-buttons">
            <button className="primary-button">
              <Play className="button-icon" />
              Watch Demo
            </button>
            <button className="secondary-button">
              <FileText className="button-icon" />
              Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section id="demo" className="demo-section">
        <div className="section-container">
          <h2 className="section-title">Experience FluidSynth</h2>
          <p className="section-description">
            See how musicians and producers are creating groundbreaking sounds
            with gesture-based control.
          </p>
          <div className="video-container">
            <video className="embedded-video" controls>
              <source src="/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Reimagine Music Creation</h2>
            <p className="section-description">
              FluidSynth's innovative technology enables intuitive control
              through natural movements.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature Card 1 */}
            <div className="feature-card blue-border">
              <div className="feature-icon blue">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Hand Gesture Control</h3>
              <p className="feature-description">
                Create melodic patterns and control effects through intuitive
                hand movements that feel natural and expressive.
              </p>
              <a href="#" className="feature-link blue-link">
                Learn more <ChevronRight className="link-icon" />
              </a>
            </div>

            {/* Feature Card 2 */}
            <div className="feature-card purple-border">
              <div className="feature-icon purple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18v-6m0 0V6m0 0h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Touch Sensitivity</h3>
              <p className="feature-description">
                Ultra-responsive pressure sensors detect subtle variations in
                touch, translating pressure into dynamics and expression.
              </p>
              <a href="#" className="feature-link purple-link">
                Learn more <ChevronRight className="link-icon" />
              </a>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card indigo-border">
              <div className="feature-icon indigo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="feature-title">Rotation Detection</h3>
              <p className="feature-description">
                Twist and turn motions are precisely tracked, allowing fluid
                control over parameters like filters and effects.
              </p>
              <a href="#" className="feature-link indigo-link">
                Learn more <ChevronRight className="link-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="product" className="product-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">The FluidSynth Controller</h2>
            <p className="section-description">
              Our flagship device is designed for musicians who demand
              expressive control and intuitive interaction.
            </p>
          </div>

          <div className="product-showcase">
            {/* Product Image */}
            <div className="product-image-container">
              <div className="product-image">
                <img src="/image1.jpg" alt="FluidSynth Controller" />
              </div>
            </div>

            {/* Product Details */}
            <div className="product-details">
              <div className="product-content">
                <div className="product-tag">Premium Hardware</div>
                <h3 className="product-title">Next-Gen Music Control</h3>
                <p className="product-description">
                  FluidSynth combines breakthrough sensor technology with
                  elegant design to create the most intuitive music interface
                  ever developed.
                </p>

                <div className="product-features">
                  <div className="product-feature">
                    <div className="feature-check blue">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="check-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4 className="feature-subheading">
                        Ultra-precise 3D tracking
                      </h4>
                      <p className="feature-detail">
                        0.1mm accuracy with 120Hz refresh rate for lag-free
                        response
                      </p>
                    </div>
                  </div>

                  <div className="product-feature">
                    <div className="feature-check purple">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="check-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4 className="feature-subheading">
                        Multi-zone touch detection
                      </h4>
                      <p className="feature-detail">
                        9 independent pressure-sensitive zones with 4096 levels
                        of sensitivity
                      </p>
                    </div>
                  </div>

                  <div className="product-feature">
                    <div className="feature-check indigo">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="check-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="feature-text">
                      <h4 className="feature-subheading">
                        Seamless connectivity
                      </h4>
                      <p className="feature-detail">
                        USB-C, MIDI, and low-latency Bluetooth 5.2 connectivity
                      </p>
                    </div>
                  </div>
                </div>

                <div className="product-cta">
                  <button className="primary-button">Pre-order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section id="docs" className="docs-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Comprehensive Documentation</h2>
            <p className="section-description">
              Everything you need to get started and master FluidSynth.
            </p>
          </div>

          <div className="docs-grid">
            <div className="doc-card blue-border">
              <div className="doc-icon blue">
                <FileText className="icon" />
              </div>
              <h3 className="doc-title">Getting Started</h3>
              <p className="doc-description">
                Learn the basics of FluidSynth and set up your device in
                minutes.
              </p>
              <a href="#" className="doc-link blue-link">
                View Guide <ChevronRight className="link-icon" />
              </a>
            </div>

            <div className="doc-card purple-border">
              <div className="doc-icon purple">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="doc-title">API Reference</h3>
              <p className="doc-description">
                Comprehensive documentation for developers and integrators.
              </p>
              <a href="#" className="doc-link purple-link">
                Explore API <ChevronRight className="link-icon" />
              </a>
            </div>

            <div className="doc-card indigo-border">
              <div className="doc-icon indigo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="doc-title">Tutorials</h3>
              <p className="doc-description">
                Step-by-step guides to help you create amazing music.
              </p>
              <a href="#" className="doc-link indigo-link">
                Watch Tutorials <ChevronRight className="link-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Join the FluidSynth Revolution</h2>
          <p className="cta-description">
            Be among the first to experience the future of music creation.
          </p>
          <div className="signup-container">
            <div className="signup-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="signup-button">Get Early Access</button>
            </div>
            <p className="signup-note">
              Join our waitlist. Limited spots available for beta testers.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <Music className="icon-small" />
                </div>
                <span className="footer-logo-text">FluidSynth</span>
              </div>
              <p className="footer-tagline">
                Revolutionizing music creation through intuitive gesture
                control.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="social-link">
                  <svg
                    className="social-icon"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-links-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li>
                  <a href="#" className="footer-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© 2025 FluidSynth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
