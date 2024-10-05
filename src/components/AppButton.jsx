import React from "react";

export const AppButton = ({buttonText="Далее", isDisabled, buttonClick, buttonType="button"}) => {
    return (
        <button disabled={isDisabled} type={buttonType} onClick={buttonClick} id="next-button">
            {buttonText}
        </button>
    )
}