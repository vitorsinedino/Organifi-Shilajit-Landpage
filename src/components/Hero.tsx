import Image from "../assets/shilajit_mobile.png";

function Hero() {
  return (
    <div className="section hero-section">
      <div className="container">
        <h1 className="main-title">
          <span className="text-[#FBFB87]">Shilajit </span>
          <span className="text-[#142B46]">Gummies</span>
        </h1>
        <div className="main-subtitle">
          The Ultimate ATP-Boosting, Anti-Aging Chew
        </div>
      </div>
      <img className="md:hidden" src={Image} alt="" />
      <div className="container mt-[80px] relative z-99">
        <div className="main-info flex items-center justify-between">
          <div className="hero-content">
            <p className="main-text">
              Fuel Your Day with Cellular Energy: Go beyond just feeling energized; power your cells from within. Rich in Shilajit, our gummies directly boost the production of ATP - <strong>your body's very essence of energy</strong>.
            </p>
            <a className="main-button" href="#productSection">
              Secure your Offer
            </a>
          </div>
          <div >
            <p className="new-costumers">
              Save 25% on our BRAND NEW Shilajit Gummies for new customers!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;