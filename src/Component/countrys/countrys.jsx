import React, { use } from 'react';
import Country from '../Country/Country';

const Countrys = ({countriesPromiss}) => {
    const total = use(countriesPromiss);
    const cnti = total.countries
    
    return (
        <>
        <h2>totalcountry:{cnti.length}</h2>
        <div className=' grid grid-cols-4  '>
            
            {
                cnti.map(country => <Country country={country}></Country>)
            }
        </div>

        </>
    );
};

export default Countrys;