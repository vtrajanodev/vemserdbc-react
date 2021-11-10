import { Menu } from "../Menu/Menu";
import './Footer.modules.css'

export const Footer = () => {
    return (
        <div className="footer">
            <Menu />
            <address>
                Rua dos Alfeneiros, 4.
            </address>
        </div>
    );
}