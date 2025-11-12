import React, {useEffect, useState} from 'react';
import '../styles/Ingredient.css'
import { timeToString } from '../utils/TimeUtilities';
import { capitalize } from '../utils/TextUtils';


export default function Ingredient({action="cook", ingredient={},updateIngredient}) {
    const [editMode, setEditMode] = useState(false);
    const [newIngredient, setNewIngredient] = useState({});

    useEffect(() => {
        //if edit mode is set to true, pull the ingredient into teh new ingredient state
        if (editMode) {
            //set the new ingredient state to the current ingredient to begin editing
            setNewIngredient({...ingredient});
            return;
        } 

        

    }, [editMode]);
    const cookingAction = {
        prep: "preparing",
        cook: "cooking",
        rest: "resting",
    }

    const timeType = `${action}Time`;

    const toggleEdit = () => {
        setEditMode(prev => !prev);
    };

    const handleSave = () => {
        updateIngredient(newIngredient);
    };

    const handleDelete = () => {
        setIngredientList((prev) => prev.filter(element => element.id !== ingredient.id));
    };

    return (
        <div className='recipe-ingredient ingredient-container'>
            <div className='action-buttons'>
                <button onClick={toggleEdit}>
                    <i className="bi bi-pencil-square" />
                </button>
                <button onClick={handleDelete}>
                    <i className="bi bi-trash"></i>
                </button>
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