import React from "react";

export const AppInput = ({inputText, errorText, inputPlaceholder, inputType, inputValue, inputChange, hasError}) => {
    return(
        <label className={`input-wrapper ${hasError && "_error"}`} htmlFor="username"> {/*когда у input-wrapper hasError = true, тогда к input-wrapper добавляется класс _error*/ }
              {inputText}
              <input
                required
                type={inputType}
                name="username"
                id="username"
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={(event) => inputChange(event.target.value)}
              />
              {hasError && <span id="error-message" >{errorText}</span>} {/*когда hasError = true, тогда span = {errorText}*/ } 
            </label>
            // && - тогда сделай то-то, добавь это
    )
}