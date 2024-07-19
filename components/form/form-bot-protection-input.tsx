import React from "react";
import {TFormBotProtectionInput} from "@/helpers/types";

export default function FormBotProtectionInput({value, onChange}: TFormBotProtectionInput) {
    return (
        <input type="text"
               name="gender"
               id="gender"
               value={value}
               onChange={onChange}
               className="hidden"
               autoComplete="off"
               tabIndex={-1}
        />
    )
}