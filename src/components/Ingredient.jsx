import React from 'react';
import '../styles/Ingredient.css'
import { timeToString } from '../utils/TimeUtilities';
import { capitalize } from '../utils/TextUtils';


export default function Ingredient({action="cook", ingredient={},setIngredientList}) {
    const cookingAction = {
        prep: "preparing",
        cook: "cooking",
        rest: "resting",
    }

    const timeType = `${action}Time`;

    const handleDelete = () => {
        setIngredientList((prev) => prev.filter(element => element.id !== ingredient.id));
    };

    return (
        <div className='recipe-ingredient ingredient-container'>
            <div className='action-buttons'>
                <button onClick={handleDelete}><i class="bi bi-trash"></i></button>
            </div>
            <div className="ingredient-element-container container">
                <h3>Start {cookingAction[action]} the {ingredient.name}</h3>
            </div>
            <div className="ingredient-element-container container">
                <p className='time-description subtext'>{
                    `${capitalize(action)} time: ${timeToString(ingredient[timeType])}`}</p>
            </div>
        </div>
    );
}