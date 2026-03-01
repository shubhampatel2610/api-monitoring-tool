"use client";

import styles from "./MenubarComponent.module.css";
import InputTextComponent from "../../common/InputTextComponent/InputTextComponent";
import dashboardStore from "../../store/DashboardStore";
import { observer } from "mobx-react";
import { Avatar } from "primereact/avatar";

const MenubarEndComponent = observer(() => {
    const searchField = dashboardStore.searchField;

    return (
        <div className={styles.menubarndComponentContainer}>
            <InputTextComponent field={searchField} />
            <Avatar
                size="large"
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
            />
        </div>
    )
});

export default MenubarEndComponent;