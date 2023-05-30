
import { plantList } from "./dataPlant.js";

function DisplayPlantList() {
    return(<ul>
        {plantList.map((plant) => (<li key={plant.id} >{plant.name}{plant.isBestSale && <span>🔥</span> }</li>))}
    </ul>)

}
export default DisplayPlantList;