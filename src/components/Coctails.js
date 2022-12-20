import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Coctails = () => {
    const coctails = useLoaderData();
    console.log(coctails)
    return (
        <div>
            <h2>Coctails</h2>
        </div>
    );
};

export default Coctails;