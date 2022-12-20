import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coctail from './Coctail';

const Coctails = () => {
    const coctails = useLoaderData().drinks;
    // console.log(coctails)
    return (
        <div>
            <h2>Coctails</h2>
            <div className='coctail-container'>
                {
                    coctails.map(coctail => <Coctail
                        key={coctail.idDrink}
                        coctail={coctail}
                    ></Coctail>)
                }
            </div>
        </div>
    );
};

export default Coctails;