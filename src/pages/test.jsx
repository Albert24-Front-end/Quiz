import React from "react";
import { AppButton } from "../components/AppButton";

export const Test = () => {
    return (
        <div>
            <h1></h1>
            <div>
                <AppButton/>
                <AppButton/>
            </div>
        </div>
    );
};
// два и более элемента должны иметь общего родителя, здесь
// h1 и p должны быть обернуты в div