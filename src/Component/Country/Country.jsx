import React, { use } from 'react';

const Country = ({country}) =>{
    const countryName =(country.name.common);
    const flagImg=(country.flags.flags.png)
    return (
    
         <div className='border-2 border-green-500  m-[10px] p-[20px] rounded-2xl '>
            <img className='w-[200px] bg-red-100 p-[20px] rounded-2xl' src={flagImg} alt="" />
            <h3 className=''>Name:{countryName}</h3>
        </div>
       
    );
};

export default Country;