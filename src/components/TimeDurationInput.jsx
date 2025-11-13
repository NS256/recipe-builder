import React, {useState, useEffect} from 'react';
import { normalizeTime } from '../utils/TimeUtilities';

export default function TimeDurationInput({name= "", inputClass, ingredient = {}, setIngredient, timeType, showHeading = true}) {

    useEffect(() => {
    
                const normalizedTime = normalizeTime(ingredient[timeType]);
    
    
                //if the values don't match, there's an issue in one of the fields so update them
                if (
                    normalizedTime.hours !== ingredient[timeType].hours ||
                    normalizedTime.minutes !== ingredient[timeType].minutes ||
                    normalizedTime.seconds !== ingredient[timeType].seconds 
                ) {
                    setIngredient( (prev) => ({
                    ...prev,
                    [timeType]: normalizedTime,
                })
                )
                }

                
            },[ingredient[timeType]]);

    const updateTime = (timeUnit, value) => {
        setIngredient((prev) => ({
            ...prev,
            [timeType]: { ...prev[timeType],
                [timeUnit]: value === '' ? 0 : parseInt(value),
            }
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
                        value={ingredient[timeType].hours}
                        onChange={(e) => updateTime('hours', e.target.value)}
                    />
                    <label htmlFor='minutes'>Minutes</label>
                    <input 
                        type='number'
                        name='minutes'
                        id='minutes'
                        className='create-ingredient-form time-input'
                        value={ingredient[timeType].minutes}
                        onChange={(e) => updateTime('minutes', e.target.value)}
                    />
                    <label htmlFor='seconds'>Seconds</label>
                    <input 
                        type='number'
                        name='seconds'
                        id='seconds'
                        className='create-ingredient-form time-input'
                        value={ingredient[timeType].seconds}
                        onChange={(e) => updateTime('seconds', e.target.value)}
                    />
                </div>
        </div>
        )
}