import { Field } from "../common/Types/FieldType";

export const getBadgeSeverityByMethod = (methodName: string) => {
    switch (methodName?.toUpperCase()) {
        case "GET": {
            return "info";
        }
        case "POST": {
            return "success";
        }
        case "PUT": {
            return "warning";
        }
        case "PATCH": {
            return null;
        }
        case "DELETE": {
            return "danger";
        }
        default: {
            return null;
        }
    }
}

export const getBadgeSeverityByStatus = (statusCode: number) => {
    switch (statusCode) {
        case 200: {
            return "success";
        }
        case 500: {
            return "danger";
        }
        case 400: {
            return "warning";
        }
        case 404: {
            return null;
        }
        default: {
            return null;
        }
    }
}

export const checkNumber = (value: string) => {
    const numberCheckRegex = /[0-9]/;
    return numberCheckRegex.test(value);
}

export const validateFormFields = (formFields: Field[]) => {
    let isValid = true;

    formFields.forEach((field) => {
        field.validate();

        if (!field.value || field.value.trim() === "" || field.error?.trim()) {
            isValid = false;
        }
    });

    return isValid;
}

export const checkUrl = (value: string) => {
    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
}