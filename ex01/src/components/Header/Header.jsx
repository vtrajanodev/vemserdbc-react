import { HeaderLogo } from '../HeaderLogo/HeaderLogo';
import { Menu } from '../Menu/Menu';
import styles from './Header.modules.css'


export const Header = () => {
    return (
        <div>
            <header>
                <Menu />
                <HeaderLogo />
            </header>
        </div>
    );
}