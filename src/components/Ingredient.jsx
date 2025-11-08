import React from 'react';
import '../styles/Ingredient.css'
import { timeToString } from '../utils/TimeUtilities';
import { capitalize } from '../utils/TextUtils';

export default function Ingredient({action="cook", ingredient={},test}) {
    const cookingAction = {
        prep: "preparing",
        cook: "cooking",
        rest: "resting",
    }

    const timeType = `${action}Time`

    console.log(timeType);

    console.log(ingredient);
    console.log(test);

    return (
        <div className='recipe-ingredient ingredient-container'>
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