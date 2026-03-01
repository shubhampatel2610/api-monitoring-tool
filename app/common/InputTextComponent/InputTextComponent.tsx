"use client";

import { InputText } from "primereact/inputtext";
import { Field } from "../Types/FieldType";
import { observer } from "mobx-react";

interface InputTextComponentProps {
    field: Field
}

const InputTextComponent = observer((props: InputTextComponentProps) => {
    const { field } = props;

    const id = field?.label?.toLowerCase().replace(" ", "-");

    return (
        <div className="flex align-items-center">
            <InputText
                id={id}
                value={field?.value}
                onChange={(e) => field.setValue(e.target.value)}
                maxLength={100}
                placeholder={field?.label}
            />
        </div>
    )
});

export default InputTextComponent;