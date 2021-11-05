import React, { useState }  from "react";
import Data from '../data/data';
import Cards from "../cards/card";
import './style.css'
import Searchbar from "../body/searchbar";

function Cats(){
    const [searchvalue,setSearchvalue]=useState("");
    return (
        <div >
        <Searchbar setSearchvalue={setSearchvalue}/> 
        <h1 className='heading'>Cocktails</h1>
        <div className="lop">
        {Data.filter((name)=>{   
        if(searchvalue===" "){
          return name;
        }else if(name.imageName.toLowerCase().includes(searchvalue.toLocaleLowerCase()) || name.price==searchvalue){
         return <Cards
         imgsrc={name.image}
         price={name.price}
         imagename={name.imageName}/> 
        }
      }).map((val)=>{
        return(
            <Cards
            imgsrc={val.image}
            price={val.price}
            imagename={val.imageName}/>
        );
      })}
      </div>
        </div>
    );
   
}
export default Cats;