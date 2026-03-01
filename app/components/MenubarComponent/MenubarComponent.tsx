import AppLogo from '@/public/Logo/AppLogo';
import { Menubar } from 'primereact/menubar';

const MenubarComponent = () => {
    const menuItems = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope'
        }
    ];

    return <Menubar model={menuItems} start={<AppLogo />} />
}

export default MenubarComponent;