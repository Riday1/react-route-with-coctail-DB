import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Coctail = ({ coctail }) => {
    // console.log(coctail)
    const { strDrinkThumb, strAlcoholic, strCategory, idDrink } = coctail;
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(`/coctail/${idDrink}`);
    }
    return (
        <div className='coctail'>

            <img src={strDrinkThumb} alt="" />
            <h3>Type : {strAlcoholic}</h3>
            <p>Category : {strCategory}</p>
            <button onClick={handleNavigate} className='btn-show-details'>Show Detials</button>

        </div>
    );
};

export default Coctail;