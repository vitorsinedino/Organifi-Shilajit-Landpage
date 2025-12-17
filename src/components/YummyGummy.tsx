import Image from '../assets/yummy_gummy_mobile.png';

function YummyGummy() {
  return (
    <div className="section" id="yummyGummy">
      <div className="container">
        <div className="section-content">
          <div className="section-header">
            <div className="section-subtitle">
              Shilajit That Actually Tastes Good
            </div>
            <div className="section-title">
              Why The Yummy <span className="gummy">Gummy</span>?
            </div>
          </div>
          <div className="section-text">
            Historically, Shilajit has been consumed as a resin—a method not always convenient or enjoyable… In fact, usually it tastes down right disgusting. That’s why we’ve transformed this ancient remedy into a modern, tasty treat.
          </div>
          <div className="section-text">
            Gummies provide an easy, chewable format, making the intake of Shilajit effective but also totally tasty. No mess, no fuss, just pure cellular energy at your fingertips.
          </div>
        </div>
      </div>
      <img src={Image} className="md:hidden" alt="Yummy Gummy" />
    </div>
  )
}

export default YummyGummy;