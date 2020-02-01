import React from 'react';
import './CustomButton.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button
        className={`
            ${inverted ? 'inverted' : ''} 
            ${isGoogleSignIn ? 'google-sign-in': ''} 
            CustomButton
        `}
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;