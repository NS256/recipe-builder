import React from 'react';

export default function Ingredient({action="cook", ingredient={},test}) {
    const cookingAction = {
        prep: "preparing",
        cook: "cooking",
        rest: "resting",
    }

    const timeType = `${action}Time`

    console.log(ingredient);
    console.log(test);

    return (
        <div className='recipe-ingredient ingredient-container'>
            <h3>Start {cookingAction[action]} the {ingredient.name}</h3>
            <div>
                <p className='time-description subtext'>{
                    `${action} time: ${ingredient[timeType]}`}</p>
            </div>
        </div>
    );
}