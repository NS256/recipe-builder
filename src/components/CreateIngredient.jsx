import React, {useEffect, useState} from 'react';
import { normalizeTime } from '../utils/IngredientUtilities';
import '../styles/CreateIngredient.css';

export default function CreateIngredient({recipe, setRecipe}) {

    //states to store each value from the form
        const [ingredient,setIngredient] = useState({
            name: "",
            quantity: 1,
            prepTime: 0,
            cookTime: {
                hours: 0,
                minutes: 0,
                seconds: 0,
            },
            restTime: 0,
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

        }
    
        const handleCancel = () => {
    
        }

        const toggleShowFormDetails = () => {
            setShowAllFormDetails(!showAllFormDetails)
        }

        const updateCookingTime = (unit, value) => {
            // Always pass a number to state, converting empty string to 0
            const numeric = value === '' ? 0 : parseInt(value);
            setIngredient(prev => ({
                ...prev,
                cookTime: {
                    ...prev.cookTime,
                    [unit]: numeric,
                },
            }));
        };

    return (<>
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
                        <div>
                            <label htmlFor='prepTime'>Preparation time:</label>
                            <input type='number' name='prepTime' id='prepTime' className='create-ingredient-form' value={ingredient.prepTime} onChange={(e) => {
                                setIngredient({...ingredient, prepTime: e.target.value})}}/>
                        </div>
                    </>
                )
            }
            
            <div>
                <h4>Cooking time:</h4>
                <div>
                    <label htmlFor='hours'>Hours</label>
                    <input 
                        type='number'
                        name='hours'
                        id='hours'
                        className='create-ingredient-form time-input'
                        value={ingredient.cookTime.hours}
                        onChange={(e) => updateCookingTime('hours', e.target.value)}
                    />
                    <label htmlFor='minutes'>Minutes</label>
                    <input 
                        type='number'
                        name='minutes'
                        id='minutes'
                        className='create-ingredient-form time-input'
                        value={ingredient.cookTime.minutes}
                        onChange={(e) => updateCookingTime('minutes', e.target.value)}
                    />
                    <label htmlFor='seconds'>Seconds</label>
                    <input 
                        type='number'
                        name='seconds'
                        id='seconds'
                        className='create-ingredient-form time-input'
                        value={ingredient.cookTime.seconds}
                        onChange={(e) => updateCookingTime('seconds', e.target.value)}
                    />
                    <button onClick={toggleShowFormDetails} className='create-ingredient-form form-btn hide-details'>{(!showAllFormDetails)? "+" : "-"}</button>
                </div>
            </div>

            {
                showAllFormDetails && (
                    <div>
                        <label htmlFor='restTime'>Resting time:</label>
                        <input type='number' name='restTime' id='restTime' className='create-ingredient-form' value={ingredient.restTime} onChange={(e) => {
                            setIngredient({...ingredient, restTime: e.target.value})}}/>
                </div>
                )
            }
            
            <div>
                <button type="submit">Submit</button>
            </div>
        </div>
    </form></>);
}