import logo from '../../assets/cogumelo.jpeg'
import '../HeaderLogo/HeaderLogo.modules.css'

export const HeaderLogo = () => {
    return (
        <>
            <img className="imgLogo" src={logo} alt="imagem cogumelo" />
        </>
    );
}