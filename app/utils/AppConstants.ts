class AppConstants {
    // App Logo Constants
    static LOGO_INSIGHT_LABEL = "Insight";
    static LOGO_API_LABEL = "API";

    // Menubar Constants
    static HOME_LABEL = "Home";

    // Icon Constants
    static PI_PREFIX = "pi";
    static HOME_ICON = `${this.PI_PREFIX} pi-home`;

    // Field Constants
    static REQUIRED_POSTFIX = "is required";
    static MINIMUM_PREFIX = "minimum";
    static MAXIMUM_PREFIX = "maximum";
    static CHARS_REQUIRED_POSTFIX = "characters required";
    static CHARS_ALLOWED_POSTFIX = "characters allowed";
    static REQUEST_ENTER_PREFIX = "Please enter";
    static NUMBER_FIELD_POSTFIX = "numbers only";
    static URL_FIELD_POSTFIX = "valid url";

    // Global Search Field Constants
    static SEARCH_FIELD = {
        name: "globalSearch",
        label: "Search APIs",
        placeholder: "Search",
        type: "text"
    }

    static LOADING_TEXT = "Loading...";

    // Api Landing Page Constants
    static METHOD_HEADER = "Method";
    static NAME_HEADER = "API Name";
    static URL_HEADER = "API Url";
    static LAST_CHECKED_HEADER = "Last Checked";
    static TOTAL_CHECKS_HEADER = "Total Checks";
    static UPTIME_PERCENTAGE_HEADER = "Up Time %";
    static AVJ_RESPONSE_TIME_HEADER = "Average Response Time";

    static TIME_STAMP_HEADER = "Checked At";
    static RESPONSE_TIME_HEADER = "Response Time";
    static STATUS_CODE_HEADER = "Status Code";
    static STATUS_HEADER = "Status";

    // Add Edit Api Popup Constants
    static ADD_API_BTN_LABEL = "Add API";
    static API_NAME_FIELD = {
        name: "apiName",
        label: "Name",
        placeholder: "Enter API Name",
        type: "text"
    }
    static API_URL_FIELD = {
        name: "apiUrl",
        label: "Url",
        placeholder: "Enter API Url",
        type: "url"
    }
    static API_METHOD_FIELD = {
        name: "apiMethod",
        label: "Method",
        placeholder: "Select API Method",
        type: "text"
    }
    static API_TIMEOUT_FIELD = {
        name: "apiTimeout",
        label: "Timeout",
        placeholder: "Enter API Timeout (seconds)",
        type: "number"
    }
    static API_INTERVAL_FIELD = {
        name: "apiIntervan",
        label: "Interval",
        placeholder: "Enter API Interval (seconds)",
        type: "number"
    }
    static API_MONITORING_TYPE_FIELD = {
        name: "apiMonitoringType",
        label: "Monitoring Type",
        placeholder: "Select API Monitoring Type",
        type: "string"
    }

    static API_METHOD_OPTIONS = [
        {
            label: "GET",
            value: "get"
        },
        {
            label: "POST",
            value: "post"
        },
        {
            label: "PUT",
            value: "put"
        },
        {
            label: "PATCH",
            value: "patch"
        },
        {
            label: "DELETE",
            value: "delete"
        }
    ]

    static API_MONITORING_TYPE_OPTIONS = [
        {
            label: "Manual",
            value: "manual"
        },
        {
            label: "Scheduled",
            value: "scheduled"
        }
    ]

    static SCHEDULED_MONITORING_TYPE = "scheduled";

    static SAVE_BTN_LABEL = "Save";
    static CANCEL_BTN_LABEL = "Cancel";
}

export default AppConstants;