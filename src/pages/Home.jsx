import React from "react";

// Import your new local banner GIFs
import HeroBanner from "../images/Store Hero Banner.gif";
import AnimeBanner from "../images/Anime Collection.gif";
import FashionBanner from "../images/Fashion.gif";
import JewelryBanner from "../images/Jewlery.gif";

function Home() {
  return (
    <div className="home container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to PixelPop Market!</h1>
        <p>Your one-stop shop for fun merchandise and collectibles.</p>
        <img src={HeroBanner} alt="Store Hero Banner" />
      </section>

      {/* Featured Categories / Banners */}
      <section className="banners">
        <div className="banner">
          <img src={AnimeBanner} alt="Anime Collection" />
          <h3>Anime Collection</h3>
        </div>

        <div className="banner">
          <img src={FashionBanner} alt="Fashion" />
          <h3>Fashion</h3>
        </div>

        <div className="banner">
          <img src={JewelryBanner} alt="Jewelry" />
          <h3>Jewelry</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
