import { useState } from "react";
import { Link } from 'react-router-dom';
import ContactUs from "./ContactUs";

function Jewelry({password}){
const [showText,setShowText] = useState(false);

const showTextClick = (element) => {
    element.showMore=!element.showMore 
    setShowText(!showText)
     }

    return( <div className="products">
    {password.map((element=>{
        const { id, name, price, image,  description, showMore }= element;
        return(<div className="productCard" key={ id }>  
        
            <img className="bigger" src={ image } alt="foto" width="380px" height="380px"/>
            <h3>{ name }</h3>           
            <h4> € { price }</h4>
            <p> { showMore ? description : description.substring(0, 40)} </p>
            <button className="seeMore" onClick={ ()=> showTextClick(element)}>{ showMore ? "Thu nhỏ" : "Xem thêm"}</button>
            <Link to="/contactus">
                <button className="ctaBtn"> Đặt lịch mua </button>
            </Link>

        </div>)
    }
    ))}
   </div>)  
}

export default Jewelry;
