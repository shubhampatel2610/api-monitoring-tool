import AppConstants from "../../app/utils/AppConstants"

const AppLogo = () => {
    return (
        <svg height="60" viewBox="0 0 420 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
            </defs>

            <circle cx="50" cy="50" r="30" fill="url(#blueGradient)" opacity="0.1" />
            <circle cx="50" cy="50" r="30" stroke="url(#blueGradient)" strokeWidth="2" />

            <path d="M28 50C35 40 65 40 72 50C65 60 35 60 28 50Z"
                stroke="url(#blueGradient)"
                strokeWidth="2.5"
                fill="none" />

            <polyline points="34,50 42,50 48,44 54,58 60,50 68,50"
                fill="none"
                stroke="url(#blueGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round" />

            <text x="105" y="58"
                fontFamily="Segoe UI, sans-serif"
                fontSize="36"
                fontWeight="600"
                fill="#0F172A">
                {AppConstants.LOGO_INSIGHT_LABEL}<tspan fill="url(#blueGradient)">{AppConstants.LOGO_API_LABEL}</tspan>
            </text>
        </svg>
    )
}

export default AppLogo
