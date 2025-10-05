import React, { use } from 'react';
import Country from '../Country/Country';

const Countrys = ({countriesPromiss}) => {

    const total = use(countriesPromiss);
    const cnti = total.countries

    
    
    return (
        <>
        <h2 className='text-3xl text-center font-bold text-blue-700 uppercase bg-orange-200 p-[20px] mb-[20px]'>total country: {cnti.length}</h2>
        <h3 className='text-2xl font-bold uppercase text-center'>Total country visited : </h3>
        <div className=' grid grid-cols-4  '>
            
            {
                cnti.map(country => <Country country={country}></Country>)
            }
            
        </div>

        </>
    );
};

export default Countrys;