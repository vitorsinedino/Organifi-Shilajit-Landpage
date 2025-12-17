import Image from "../assets/himalaya_mobile.png";

function Himalaya() {
  return (
    <div className="section" id="himalaya">
      <div className="container">
        <div className="section-content">
          <div className="section-header">
            <h1 className="section-title">
              Put the Power of the Himalayan Mountains
            </h1>
            <h1 className="section-title section-title-rainbow">
              Into Your Body's Cells
            </h1>
          </div>
          <p className="section-text">
            It takes thousands (if not millions) of years for Shilajit to form. It's the combination of plant matter, organic substances, and pure rainwater that gathers between layers upon layers of porous rock.
          </p>
          <p className="section-text">
            With the help of sunlight and time, this material seeps from the rock as a pure concentrated nutrient resin. And while this substance can form in many different places, it’s in the Himalayas that we see it form into its most perfect superfood state.
          </p>
        </div>
      </div>
      <img className="md:hidden" src={Image} alt="Himalaya Mountains" />
    </div>
  )
}

export default Himalaya;