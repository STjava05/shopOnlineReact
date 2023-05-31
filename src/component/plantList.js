
import { plantList } from "./dataPlant.js";
import "../style/shoppingList.css"; 
import PlantItem from "./plantItem.js"; 
import imgPlant from "../assets/monstera.jpg";




function DisplayPlantList({ cart, updateCart }) {
    // Small detail: categories come from the previous part to recover all the unique categories of plants.
    
    const categories = plantList.reduce(
            (acc, elem) =>
                acc.includes(elem.category) ? acc : acc.concat(elem.category),
                []
        )
        
        return (
            <div className='jh-shopping-list'>
                <ul>
                    {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                    ))}
                </ul>
                <ul className='jh-plant-list'>
                    {plantList.map(({ id, cover, name, water, light }) => (
                        <div key={id}>
                            <PlantItem cover={cover} name={name} water={water} light={light} />
                            <button onClick={() => updateCart(cart + 1)}>Add</button>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
    
    export default DisplayPlantList;