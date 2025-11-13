import React from 'react';

function Home() {
  return (
    <div className="home container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to PixelPop Market!</h1>
        <p>Your one-stop shop for fun merchandise and collectibles.</p>
        <img
          src="https://images.unsplash.com/photo-1590608897129-79f6e49b6f90?auto=format&fit=crop&w=1200&q=80"
          alt="Store Hero Banner"
        />
      </section>

      {/* Featured Categories / Banners */}
      <section className="banners">
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1591012911203-9b7b6f69e4e7?auto=format&fit=crop&w=600&q=80"
            alt="Anime Collection"
          />
          <h3>Anime Collection</h3>
        </div>
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80"
            alt="Gaming Gear"
          />
          <h3>Gaming Gear</h3>
        </div>
        <div className="banner">
          <img
            src="https://images.unsplash.com/photo-1592847084144-d5026b56b8bc?auto=format&fit=crop&w=600&q=80"
            alt="Collectibles"
          />
          <h3>Collectibles</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
