import React from 'react'
import './searchbar.css';
function Searchbar({setSearchvalue}){
return(
    <>
    <div className='outer'>
        <div className='search_cont'>
            <div className='inner'>
            <p>Search your favourite cocktail</p>
            <input type="text" placeholder="search your favourite cocktail"  onChange={(e)=>{setSearchvalue(e.target.value)}}/>
            </div>
        </div>

    </div>
    </>
);
}
export default Searchbar;