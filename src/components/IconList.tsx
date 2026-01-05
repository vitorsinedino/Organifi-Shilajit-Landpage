import GlyphosateFreeIcon from '../assets/glyphosate_free.png';
import DairyFreeIcon from '../assets/dairy_free.png';
import VeganIcon from '../assets/vegan.png';
import SoyFreeIcon from '../assets/soy_free.png';
import PlantBasedIcon from '../assets/plant_based.png';


function IconList() {
  const icons = [GlyphosateFreeIcon, DairyFreeIcon, VeganIcon, SoyFreeIcon, PlantBasedIcon];

  return (
    <div className="container">
      <ul className="icon-list">
        {icons.map((icon, index) => (
          // A unique 'key' prop is mandatory for performance and to avoid warnings
          <li key={index} className={`icon-item icon-item-${index + 1}`}>
            <img src={icon} alt={`${icon.replace('_', ' ')} icon`} loading="lazy" decoding="async" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IconList;