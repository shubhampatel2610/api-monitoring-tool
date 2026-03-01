import AppConstants from "@/app/utils/AppConstants"

const AppLogo = () => {
    return (
        <svg height="60" viewBox="0 0 420 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="blueGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#2563EB" />
                    <stop offset="100%" stop-color="#06B6D4" />
                </linearGradient>
            </defs>

            <circle cx="50" cy="50" r="30" fill="url(#blueGradient)" opacity="0.1" />
            <circle cx="50" cy="50" r="30" stroke="url(#blueGradient)" stroke-width="2" />

            <path d="M28 50C35 40 65 40 72 50C65 60 35 60 28 50Z"
                stroke="url(#blueGradient)"
                stroke-width="2.5"
                fill="none" />

            <polyline points="34,50 42,50 48,44 54,58 60,50 68,50"
                fill="none"
                stroke="url(#blueGradient)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round" />

            <text x="105" y="58"
                font-family="Segoe UI, sans-serif"
                font-size="36"
                font-weight="600"
                fill="#0F172A">
                {AppConstants.LOGO_INSIGHT_LABEL}<tspan fill="url(#blueGradient)">{AppConstants.LOGO_API_LABEL}</tspan>
            </text>
        </svg>
    )
}

export default AppLogo
