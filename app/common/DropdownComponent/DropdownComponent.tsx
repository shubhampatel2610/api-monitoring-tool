/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Field } from "../Types/FieldType";
import { observer } from "mobx-react";
import "../../../app/globals.css";
import { Dropdown } from "primereact/dropdown";

type DropdownOption = {
    label: string;
    value: string;
};

interface DropdownComponentProps {
    field: Field,
    options: DropdownOption[];
    showError?: boolean,
    showLabel?: boolean,
    className?: string,
    onChange?: (e?: any) => void;
}

const DropdownComponent = observer((props: DropdownComponentProps) => {
    const { field, showError = true, showLabel = true, className, options, onChange } = props;

    const id = field?.label?.toLowerCase().replace(" ", "-");

    return (
        <div className="flex flex-col">
            {(field?.label && showLabel) && <label className="globalLabel">{field?.label}</label>}
            <Dropdown
                className={className}
                options={options}
                optionLabel="label"
                id={id}
                value={field?.value}
                onChange={(e) => {
                    field.setValue(e.target.value);
                    onChange?.(e);
                }}
                maxLength={100}
                placeholder={field?.placeholder}
                onBlur={() => field.validate()}
                invalid={!!field?.error}
            />
            {showError && <small className="errorText">{field?.error}</small>}
        </div>
    )
});

export default DropdownComponent;