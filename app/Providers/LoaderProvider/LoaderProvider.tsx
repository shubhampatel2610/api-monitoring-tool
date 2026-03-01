"use client";

import { observer } from "mobx-react-lite";
import { ProgressSpinner } from "primereact/progressspinner";
import dashboardStore from "@/app/store/DashboardStore";
import styles from "./LoaderProvider.module.css";
import AppConstants from "@/app/utils/AppConstants";

const GlobalLoader = observer(() => {
    if (!dashboardStore.globalLoading) {
        return null;
    };

    return (
        <div className={styles.loadingOverlay}>
            <div className={styles.loadingContent}>
                <ProgressSpinner
                    style={{ width: "50px", height: "50px" }}
                    strokeWidth="4"
                    animationDuration=".8s"
                />
                <span className={styles.loadingText}>{AppConstants.LOADING_TEXT}</span>
            </div>
        </div>
    );
});

export default GlobalLoader;