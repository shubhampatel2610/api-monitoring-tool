import { Menubar } from 'primereact/menubar';
import MenubarStartComponent from './MenubarStartComponent';
import MenubarEndComponent from './MenubarEndComponent';

const MenubarComponent = () => {

    const menuItems = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        }
    ];

    return <Menubar
        model={menuItems}
        start={<MenubarStartComponent />}
        end={<MenubarEndComponent />}
    />;
}

export default MenubarComponent;