import { Adress } from "./components/Adress/Adress";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainHome } from "./components/MainHome/MainHome";
import { TextHome } from "./components/TextHome/TextHome";

function App() {
    return (
        <>
            <Header />
            <MainHome />
            <TextHome />
            <Adress />
            <Footer />
        </>
    );
}

export default App;
