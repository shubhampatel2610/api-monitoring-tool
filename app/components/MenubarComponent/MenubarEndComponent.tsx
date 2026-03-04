import styles from "./MenubarComponent.module.css";
import { Avatar } from "primereact/avatar";

const MenubarEndComponent = () => {

    return (
        <div className={styles.menubarndComponentContainer}>
            <Avatar
                size="large"
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
            />
        </div>
    )
};

export default MenubarEndComponent;