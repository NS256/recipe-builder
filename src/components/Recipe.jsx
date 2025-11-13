import React, { useState, useEffect } from 'react';
import Ingredient from './Ingredient';
import CreateIngredient from './CreateIngredient';
import SetTimeInstruction from './SetTimeInstruction';
import '../styles/Recipe.css';
import { timeToString } from '../utils/TimeUtilities';

export default function Recipe() {
    //create recipe state
    //  Object of cooking times in seconds
    //  Each time contains an array of ids of items with that cooking time
    
    const [ingredientList, setIngredientList] = useState([]);

    const [recipe, setRecipe] = useState({});

    //build the recipe state on the updating the ingredient state
     useEffect(() => {
        let recipeObj = {};

        /*recipe obj will store the prep, cook and rest times but they'll each be a sum so fit into the recipe without adding extra states */

        ingredientList.forEach(item => {
            let restTime = item.restTime;
            let cookTime = item.cookTime + restTime;
            let prepTime = item.prepTime + cookTime;

            //add restTime to the recipe as long as it's greater than 0
            if (restTime > 0){
                if(!recipeObj[restTime]) recipeObj[restTime] = [];
                recipeObj[restTime].push({
                id: item.id,
                type: "rest",
            });
            };

            //add cookTime to the recipe as long as it's greater than 0
            if (item.cookTime > 0){
                if(!recipeObj[cookTime]) recipeObj[cookTime] = [];
                recipeObj[cookTime].push({
                id: item.id,
                type: "cook",
            });
            };

            //add prepTime to the recipe as long as it's greater than 0
            if (item.prepTime > 0){
                if(!recipeObj[prepTime]) recipeObj[prepTime] = [];
                recipeObj[prepTime].push({
                id: item.id,
                type: "prep",
            });
            };
                
        });
        
        setRecipe(recipeObj);

     }, [ingredientList]);

    const handleClear = () => {
        console.log("Recipe cleared");
        setIngredientList([]);

    }

    const updateIngredient = (newIngredient, action) => {
        //return if the new ingredient is an empty object
        switch (action) {
            case "PUT":
                if (Object.keys(newIngredient).length === 0) return;
                setIngredientList([
                    ...ingredientList.filter(el => el.id !== newIngredient.id),
                    newIngredient
                ])
                break;
            case "DEL":
                setIngredientList((prev) => prev.filter(element => element.id !== newIngredient.id));
                break;
        }
        
    }
    
     console.log(Object.keys(recipe).sort((a, b) => Number(b) - Number(a)));
    return (
        <div className=" container recipe-container">
            <CreateIngredient recipe={recipe} setRecipe={setRecipe} ingredientList={ingredientList} setIngredientList={setIngredientList}/>
            <div className='recipe'>
                {  
                    Object.keys(recipe).sort((a, b) => Number(b) - Number(a)).map((key, index) => (
                        <React.Fragment key={key}>
                            {recipe[key].map((item) => {
                                const ingredient = ingredientList.find(ingredient => ingredient.id === item.id);
                                return <Ingredient key={item.id} action={item.type} ingredient={ingredient} updateIngredient={updateIngredient}/>;
                            })}
                            {(Object.keys(recipe).length > index + 1) && 
                                <SetTimeInstruction 
                                timeTillNext={
                                    timeToString(key - Number.parseInt(Object.keys(recipe)
                                    .sort((a, b) => Number(b) - Number(a))[index + 1]))
                                } />
                            }
                        </React.Fragment>
                    ))
                }
                {
                    (ingredientList.length > 0 && 
                    <>
                        <SetTimeInstruction timeTillNext={
                        timeToString(Number.parseInt(
                            Object.keys(recipe)
                        .sort((a, b) => Number(a) - Number(b))[0]))
                } />
                        <h2>Food's Ready!</h2>
                    </>)
                }
                
                {(ingredientList.length > 0) && 
                    <div className='clear-recipe-container'>
                        <button className='clear-recipe' type='button' onClick={handleClear}>Clear recipe</button>
                    </div>
                }
                
            </div>
        </div>
    );
}