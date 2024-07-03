import { useState } from "react";
import { data } from "./data";

function Buttons({ filteredJewelry }){
    const [products, setProducts] = useState(data);
    
    return(
        <div className="cont">
        
            <button className="change" onClick={ ()=> filteredJewelry("anillo") }>Nhẫn </button>
            <button className="change" onClick={ ()=> filteredJewelry("pendientes") }>Khuyên tai </button>
            <button className="change" onClick={ ()=> filteredJewelry("pulsera") }>Vòng tay</button>
        </div>
    )
}

export default Buttons;

