import { CardHome } from '../CardHome/CardHome';
import './MainHome.modules.css'

export const MainHome = () => {
    return (
        <>
            <h3>Estamos aprendendo React com o melhor professor de todos</h3>
            <div className="row">
                <CardHome cogumelo="cogumelo 1"/>
                <CardHome cogumelo = "cogumelo 2"/>
                <CardHome cogumelo = "cogumelo 3"/>
            </div>

        </>
    );
}