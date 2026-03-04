"use client";

import dashboardStore from "@/app/store/DashboardStore";
import styles from "../LandingDashboardComponent.module.css";
import InputTextComponent from "@/app/common/InputTextComponent/InputTextComponent";
import { observer } from "mobx-react";
import ButtonComponent from "@/app/common/ButtonComponent/ButtonComponent";
import AppConstants from "@/app/utils/AppConstants";

const LandingPageHeader = observer(() => {
    const searchField = dashboardStore.searchField;

    return (
        <div className={styles.headerComponent}>
            <InputTextComponent field={searchField} />
            <ButtonComponent
                label={AppConstants.ADD_API_BTN_LABEL}
                icon="pi pi-plus"
                iconPos="right"
            />
        </div>
    )
})

export default LandingPageHeader;