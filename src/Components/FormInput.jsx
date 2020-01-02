import React from 'react'
import './FormInput.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='FormInput' onChange={handleChange} {...otherProps} />
        {
            label ?
                (<label className={`${otherProps.value.length ? 'shrink' : ''} FormInput-label`}>
                    {label}
                </label>)
                : null
        }
    </div>
);

export default FormInput;