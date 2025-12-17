import Image from '../assets/ensure.png';
import Artboard from '../assets/artboard.png';

function Ensurance() {
  const list = [
    {
      title: 'Purity',
      text: 'Every batch of our Shilajit Gummies undergoes rigorous testing to ensure it’s free from any contaminants.'
    },
    {
      title: 'High Potency',
      text: 'Harness the optimal concentration of Shilajit for maximum benefits. We make sure every gummy packs a punch!'
    },
    {
      title: 'Safety Ensured: ',
      text: "Our gummies are crafted with the utmost care and under strict quality control. With Organifi, you're not just choosing a product; you're choosing peace of mind."
    }
  ]

  return (
    <div className="section" id="ensurance">
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="grid-col">
            <img src={Image} alt="Ensurance" />
          </div>
          <div className="grid-col flex flex-col justify-center">
            <div className="section-header">
              <div className="section-subtitle">
                Your well-being is paramount.
              </div>
              <div className="section-title">
                <span className="section-title-rainbow">Organifi</span> ensures:
              </div>

            </div>
            <ul className="section-list">

              {list.map((item, index) => (
                <li key={index} className="section-list-item">
                  <img src={Artboard} alt="" />
                  <div className="section-text">
                    <strong>{item.title}</strong>: {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ensurance;