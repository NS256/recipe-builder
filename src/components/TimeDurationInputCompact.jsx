import React, {useState, useEffect} from 'react';
import { normalizeTime, recallTime, storeTime } from '../utils/TimeUtilities';

export default function TimeDurationInputCompact({name= "", inputClass, ingredient = {}, setIngredient, timeType, objInput = false, showHeading = true}) {



    //store the local time as an object
    const [newTime, setNewTime] = useState({});

    //add the value of the ingredient time into the newTime on load
    useEffect(() => {
        setNewTime(recallTime(ingredient[timeType]));
    },[]);


    //update the newTime object anytime the seconds is updated in the newIngredient
    /*useEffect(() => {
        const newTimeObj = recallTime(ingredient[timeType]);

        if (JSON.stringify(newTimeObj) !== JSON.stringify(newTime)){
            setNewTime(recallTime(ingredient[timeType]));
        }
        
    }, [ingredient[timeType]]);*/

    useEffect(() => {
        
                    const normalizedTime = normalizeTime(newTime);
        
        
                    //if the values don't match, there's an issue in one of the fields so update them
                    if (
                        normalizedTime.hours !== newTime.hours ||
                        normalizedTime.minutes !== newTime.minutes ||
                        normalizedTime.seconds !== newTime.seconds 
                    ) {
                        setNewTime(normalizeTime);
                    }

                    setIngredient(prev => ({
                        ...prev,
                        [timeType]: storeTime(newTime),
                    }));
    
                    
                },[newTime]);

    //update the newIngredient anytime the newTime is updated
    /*useEffect(() => {
        const newTimeSeconds = storeTime(newTime);

        // Only update parent when the computed seconds changed
        if (newTimeSeconds !== ingredient[timeType]) {
            setIngredient(prev => ({
                ...prev,
                [timeType]: newTimeSeconds,
            }));
        }

        // DO NOT call setNewTime(...) here — syncing newTime from the prop
        // is handled in the other useEffect which listens to ingredient[timeType].
    }, [newTime, ingredient, timeType, setIngredient]);*/

    const updateTime = (timeUnit, value) => {
        setNewTime((prev) => ({
            ...prev,
            [timeUnit]: value === '' ? 0 : parseInt(value),
        }))
    }

    return (
        <div className={`time-input-form ${inputClass}`}>
            {showHeading && <h4>{name}:</h4>}
                <div>
                    <label htmlFor='hours'>Hours</label>
                    <input 
                        type='number'
                        name='hours'
                        id='hours'
                        className='create-ingredient-form time-input'
                        value={newTime.hours}
                        onChange={(e) => updateTime('hours', e.target.value)}
                    />
                    <label htmlFor='minutes'>Minutes</label>
                    <input 
                        type='number'
                        name='minutes'
                        id='minutes'
                        className='create-ingredient-form time-input'
                        value={newTime.minutes}
                        onChange={(e) => updateTime('minutes', e.target.value)}
                    />
                    <label htmlFor='seconds'>Seconds</label>
                    <input 
                        type='number'
                        name='seconds'
                        id='seconds'
                        className='create-ingredient-form time-input'
                        value={newTime.seconds}
                        onChange={(e) => updateTime('seconds', e.target.value)}
                    />
                </div>
        </div>
        )
}