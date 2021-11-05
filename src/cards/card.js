import React from 'react';
import './style.css'

function Cards(props){
    return(
        <>
        <div className='section'>
        
        <div className='cardcontainer'>
            <img className='imagecards' src ={props.imgsrc} alt="imagehere"/>
            <div>
            <h4 className="price">Price is: {props.price}</h4>
            </div>
            <div>
            <h4 className="img">Image Name is: {props.imagename}</h4>
            </div>

        </div>
        </div>
        </>
    );
}
export default Cards;