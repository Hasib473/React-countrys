import React, {  useState } from 'react';

const Country = ({country}) =>{

    const [visited, setVisited] =useState(false)


    const btnclicked =() =>{
        {
            visited ? setVisited(false) : setVisited(true)
        }
    }

  

    const countryName =(country.name.common);
    const flagImg=(country.flags.flags.png)
    const population =(country.population.population)
    const countryArea =(country.area.area)
    const countryRegion =(country.region.region)
    return (
    
         <div  className={`m-[10px] p-[20px] rounded-2xl shadow-2xl ${
        visited ? "bg-red-200" : "bg-green-200"
      }`} >
            <img className='w-auto h-auto bg-red-100 p-[20px] rounded-2xl' src={flagImg} alt="" />
            <h3 className=''>Name:{countryName}</h3>
            <h2>Population:{population}</h2>
            <h2>Area:{countryArea} km<sup>2</sup></h2>
            <h2>Region:{countryRegion}</h2>
            <button onClick={btnclicked} className='bg-amber-500 p-2 m-2 rounded-2xl w-25 text-white hover:bg-blue-500 cursor-pointer hover:text-black'>
                {
                    visited? 'Visited' : 'Not visited'
                }
            </button>
        </div>
       
    );
};

export default Country;