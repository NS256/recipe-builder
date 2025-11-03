import React, { useState } from 'react';
import Ingredient from './Ingredient';
import CreateIngredient from './CreateIngredient';

export default function Recipe() {
    //create recipe state
    //  Object of cooking times
    //  each cooking time contains an array, 
    //  each array contains objects of each ingredient
    const [recipe, setRecipe] = useState({});

    
    

    return (
        <div className=" container recipe-container">
            <CreateIngredient recipe={recipe} setRecipe={setRecipe}/>
        </div>
    );
}