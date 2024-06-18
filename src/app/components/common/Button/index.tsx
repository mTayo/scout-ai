"use client";
/* eslint-disable react/button-has-type */
import React from 'react';
import AnimateElement from '../AnimateElement';

const Button = (props: any): JSX.Element => {
    const { text, action, className, icon, isLoading, disabled, animateClass, ...rest } = props;

    return (
        <AnimateElement className={animateClass}>
            {!icon ? (
                <button
                    type="button"
                    onClick={action}
                    className={` ${className} ${disabled ? 'button-disabled' : ''} ${isLoading ? 'not-allowed' : ''}`}
                    disabled={disabled}
                    {...rest}
                >
                    <div className="text-center w-full">{text}</div>
                </button>
            ) : (
                <button
                    type="button"
                    onClick={action}
                    className={`app-icon-button ${className} ${disabled ? 'button-disabled' : ''} ${isLoading ? 'not-allowed' : ''}`}
                    disabled={disabled}
                    {...rest}
                >
                    
                    <>
                        {text && <span>{text}</span>}
                        <span>{icon}</span>
                    </>
                 
                </button>
            )}
        </AnimateElement>
    );
};
export default Button;
