import CareScale from "./careScale.js";
import "../style/plantitem.css";


function PlantItem({id, cover, name, water, light}) {

    function handleClick(name) {
        alert(`Vous voulez acheter 1 ${name} ? Très bon choix 🌱✨`)
    }

    return(

        <li key={id} className='jh-plant-item' /* onClick={handleClick} */ onClick={()=>handleClick(name)}>
            <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale  careType='water' scaleValue={water} />
                <CareScale  careType='light' scaleValue={light} />
            </div>
            
         </li>

    )
}

export default PlantItem;