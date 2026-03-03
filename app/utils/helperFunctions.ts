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