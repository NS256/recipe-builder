import React, {useEffect, useState} from 'react';
import '../styles/Ingredient.css'
import { timeToString } from '../utils/TimeUtilities';
import { capitalize } from '../utils/TextUtils';
import TimeDurationInput from './TimeDurationInput';


export default function Ingredient({action="cook", ingredient={},updateIngredient}) {
    const [editMode, setEditMode] = useState(false);
    const [newIngredient, setNewIngredient] = useState({});

    useEffect(() => {
        //if edit mode is set to true, pull the ingredient into teh new ingredient state
        if (editMode) setNewIngredient({...ingredient});
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
        updateIngredient(newIngredient,"PUT");
        toggleEdit();
    };

    const handleCancel = () => {
        toggleEdit();
    };

    const handleDelete = () => {
        updateIngredient(ingredient,"DEL");
    };

    return (
        <div className='recipe-ingredient ingredient-container'>
            <div className='action-buttons'>
                {/**Show/hide the edit button based on if editMode is selected or not */}
                {!editMode &&
                    <button onClick={toggleEdit}>
                        <i className="bi bi-pencil-square" />
                    </button>
                }
                <button onClick={handleDelete}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
            <div className="ingredient-element-container container">
                <h3>Start {cookingAction[action]} the {(editMode) ? <input type='text' value={newIngredient.name} onChange={(e) => setNewIngredient({...newIngredient, name: e.target.value })}/> : ingredient.name}</h3>
            </div>
            <div className="ingredient-element-container container">
                <p className='time-description subtext'>{
                    `${capitalize(action)} time: `}{(editMode)? /*<TimeDurationInput ingredient={ingredient} timeType={cookingAction[action]}/>*/"" : timeToString(ingredient[timeType]) }</p>
            </div>
            {editMode && 
            <div className="ingredient-edit-buttons">
                <button type='button' onClick={handleSave}>Save</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </div>}
        </div>
    );
}