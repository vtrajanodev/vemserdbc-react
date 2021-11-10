import './CardHome.modules.css'
import logo from '../../assets/cogumelo.jpeg'

export const CardHome = ({ cogumelo }) => {
    return (
        <>
            <div className="column">
                <img className="imgLogo" src={logo} alt="Imagem cogumelo" />
                <span>{cogumelo}</span>
            </div>
        </>
    );
}