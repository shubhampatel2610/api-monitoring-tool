import { Menubar } from 'primereact/menubar';
import MenubarStartComponent from './MenubarStartComponent';
import MenubarEndComponent from './MenubarEndComponent';
import AppConstants from '@/app/utils/AppConstants';

const MenubarComponent = () => {

    const menuItems = [
        {
            label: AppConstants.HOME_LABEL,
            icon: AppConstants.HOME_ICON
        }
    ];

    return <Menubar
        model={menuItems}
        start={<MenubarStartComponent />}
        end={<MenubarEndComponent />}
    />;
}

export default MenubarComponent;