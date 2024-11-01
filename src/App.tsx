import './App.css'
import PodcastList from "./components/podcast-list/PodcastList.tsx";
import Header from "./components/header/Header.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                <PodcastList/>
            </BrowserRouter>
        </>
    )
}

export default App
