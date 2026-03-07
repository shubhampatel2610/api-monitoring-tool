/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "primereact/button";

interface ButtonProps {
    label?: string,
    className?: string,
    icon?: string,
    onClick?: (e?: any) => void,
    iconPos?: "top" | "right" | "bottom" | "left",
    disabled?: boolean,
    severity?: "secondary" | "success" | "info" | "warning" | "danger" | "help" | "contrast" | undefined,
    outlined?: boolean
}

const ButtonComponent = (props: ButtonProps) => {
    const {
        label,
        className,
        icon,
        onClick,
        iconPos,
        disabled,
        severity,
        outlined
    } = props;

    return (
        <Button
            className={className}
            label={label}
            icon={icon}
            iconPos={iconPos}
            onClick={onClick}
            disabled={disabled}
            severity={severity}
            outlined={outlined}
        />
    )
}

export default ButtonComponent;