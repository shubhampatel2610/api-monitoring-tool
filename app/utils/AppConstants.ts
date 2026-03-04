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

    // Global Search Field Constants
    static SEARCH_FIELD = {
        name: "globalSearch",
        label: "Search APIs",
        placeholder: "Search"
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

    static ADD_API_BTN_LABEL = "Add API";
}

export default AppConstants;