import React, {useEffect, useState} from 'react';
import { normalizeTime } from '../utils/IngredientUtilities';
import { storeTime } from '../utils/TimeUtilities';
import '../styles/CreateIngredient.css';
import TimeDurationInput from './TimeDurationInput';

export default function CreateIngredient({recipe, setRecipe, ingredientList, setIngredientList}) {

    //states to store each value from the form, cooktime, preptime and restTime should be stored in seconds
        const [ingredient,setIngredient] = useState({
            name: "",
            quantity: 1,
            prepTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            cookTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            restTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
        })
        const [showAllFormDetails, setShowAllFormDetails] = useState(false);

        //use effect for handling out of bounds on cooking times
        useEffect(() => {

            const normalizedTime = normalizeTime(ingredient.cookTime);


            //if the values don't match, there's an issue in one of the fields so update them
            if (
                normalizedTime.hours !== ingredient.cookTime.hours ||
                normalizedTime.minutes !== ingredient.cookTime.minutes ||
                normalizedTime.seconds !== ingredient.cookTime.seconds 
            ) {
                setIngredient(
                    {
                        ...ingredient,
                        cookTime: normalizedTime,
                    }
                )
            }
        },[ingredient.cookTime]);


        
    
        const handleSubmit = (e) => {
            e.preventDefault();
            //NEED TO ADD CHECK FOR IF FOOD ITEM ALREADY EXISTS ON SUBMIT (CONFIRM)

            //convert the cooktime to seconds
            const cookTime = storeTime(ingredient.cookTime);
            const prepTime = storeTime(ingredient.prepTime);
            const restTime = storeTime(ingredient.restTime);

            //add to ingredient list state

            setIngredientList([
                ...ingredientList,
                {
                    id: (ingredientList.length +1),
                    ...ingredient,
                    prepTime,
                    cookTime,
                    restTime,

                }
            ])

            handleResetForm();

            // check if a cooktime of that many seconds is already in the recipe 

        }
    
        const handleResetForm = () => {
            console.log("Resetting form");

            const defaultIngredientState = {
                name: "",
                quantity: 1,
                prepTime: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                },
                cookTime: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                },
                restTime: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                },
            }
            console.log(
                "details reset"
            )

            setIngredient(defaultIngredientState);
        }

        const toggleShowFormDetails = () => {
            setShowAllFormDetails(!showAllFormDetails)
        }

        const updateCookingTime = (unit, timeType, value) => {
            // Always pass a number to state, converting empty string to 0
            const numeric = value === '' ? 0 : parseInt(value);
            setIngredient(prev => ({
                ...prev,
                [timeType]: {
                    ...prev[timeType],
                    [unit]: numeric,
                },
            }));
        };



    return (<div className="create-ingredient-container">
    <form className="create-ingredient create-ingredient-form container" onSubmit={(e) => handleSubmit(e)}>
        <h2>Add an ingredient...</h2>    
        <div className='create-ingredient create-ingredient-form inputs'>
            <div>
                <label htmlFor='name'>Ingredient:</label>
                <input type='text' autoFocus name='name' id='name' className='create-ingredient-form' value={ingredient.name} onChange={(e) => {
                    setIngredient({...ingredient, name: e.target.value})}}/>
            </div>
            {
                showAllFormDetails && (
                    <>
                        <div>
                            <label htmlFor='quantity'>Quantity:</label>
                            <input type='number' min={1} autoFocus name='quantity' id='quantity' className='create-ingredient-form' value={ingredient.quantity} onChange={(e) => {
                                setIngredient({...ingredient, quantity: e.target.value})}}/>
                        </div>
                        <TimeDurationInput name="Preparation time" inputClass="prep-time-form" ingredient={ingredient} setIngredient={setIngredient} timeType={"prepTime"}/>
                    </>
                )
            }
            
            <div className='cooking-time'>
                <TimeDurationInput name="Cooking time" inputClass="cook-time-form" ingredient={ingredient} setIngredient={setIngredient} timeType={"cookTime"}/>
                
                
                
            </div>

            {
                showAllFormDetails && (
                    <div>
                        <TimeDurationInput name="Resting time" inputClass="rest-time-form" ingredient={ingredient} setIngredient={setIngredient} timeType={"restTime"}/>
                    </div>

                    
                )
            }
            
            <div>
                <button onClick={toggleShowFormDetails} className='create-ingredient-form form-btn hide-details'>{(!showAllFormDetails)? "+" : "-"}</button>
                <button type="submit" className='create-ingredient-form form-btn submit-form' onClick={handleSubmit}>Submit</button>
                <button type="reset" onClick={handleResetForm} className='create-ingredient-form form-btn clear-form'>Clear</button>
            </div>
        </div>
    </form></div>);
}