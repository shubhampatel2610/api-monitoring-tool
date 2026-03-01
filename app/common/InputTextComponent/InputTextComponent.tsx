"use client";

import { InputText } from "primereact/inputtext";
import { Field } from "../Types/FieldType";
import { observer } from "mobx-react";

interface InputTextComponentProps {
    field: Field,
    showError?: boolean
}

const InputTextComponent = observer((props: InputTextComponentProps) => {
    const { field, showError } = props;

    const id = field?.label?.toLowerCase().replace(" ", "-");

    return (
        <div className="flex flex-col align-items-center">
            <InputText
                id={id}
                value={field?.value}
                onChange={(e) => field.setValue(e.target.value)}
                maxLength={100}
                placeholder={field?.label}
                onBlur={() => field.validate()}
                invalid={!!field?.error}
            />
            {showError && <small className="text-red-500">{field?.error}</small>}
        </div>
    )
});

export default InputTextComponent;