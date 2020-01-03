import React from 'react';
import './SignInSignUpPage.scss';
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

const SignInSignUpPage = () => {
    return (
        <div className='SignInAndSignUp'>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInSignUpPage;