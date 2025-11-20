import React, {useEffect, useState} from 'react';
import '../styles/Ingredient.css'
import { timeToString } from '../utils/TimeUtilities';
import { capitalize } from '../utils/TextUtils';
import TimeDurationInputCompact from './TimeDurationInputCompact';


export default function Ingredient({action="cook", ingredient={},updateIngredient}) {
    const [editMode, setEditMode] = useState(false);
    const [newIngredient, setNewIngredient] = useState({...ingredient});

    useEffect(() => {
        //if edit mode is set to true, pull the ingredient into teh new ingredient state
        if (editMode) setNewIngredient(ingredient);
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
            <span className="ingredient-index">{ingredient.index}</span>
            <div className="ingredient-element-container container">
                <h3>Start {cookingAction[action]} the {(editMode) ? <input type='text' className='edit-ingredient-input edit-ingredient-name' name="item-name" value={newIngredient.name} onChange={(e) => setNewIngredient({...newIngredient, name: e.target.value })}/> : ingredient.name}</h3>
            </div>
            <div className="ingredient-element-container container">
                <p className='time-description subtext'>{
                    `${capitalize(action)} time: `}{(!editMode) && timeToString(ingredient[timeType]) }</p>
                    {(editMode) &&
                    <TimeDurationInputCompact ingredient={newIngredient} setIngredient={setNewIngredient} timeType={`${action}Time`} showHeading={false}/>}
            </div>
            {editMode && 
            <div className="ingredient-edit-buttons">
                <button type='button' onClick={handleSave}>Save</button>
                <button type='button' onClick={handleCancel}>Cancel</button>
            </div>}
        </div>
    );
}