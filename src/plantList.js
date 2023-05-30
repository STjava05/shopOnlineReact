
import { plantList } from "./dataPlant.js";
import "./style/shoppingList.css"; 
import PlantItem from "./plantItem.js"; 
import imgPlant from "./assets/monstera.jpg";
import QuestionForm from "./questionFrom.js";



function DisplayPlantList() {
    return(
    <>
        <ul className="jh-plant-list">
            {plantList.map((plant) => 
            (<>
                <PlantItem 
                name={plant.name}   
                cover={imgPlant} 
                id={plant.id} 
                water={plant.water} 
                light={plant.light} 
                />

                <QuestionForm />


            
            
            
            </>
                
            ))}
        </ul>
        
    
    </>
    
    )

}
export default DisplayPlantList;