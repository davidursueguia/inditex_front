import './App.css';
import PodcastList from "./components/podcast-list/PodcastList.tsx";
import Header from "./components/header/Header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PodcastDetail from "./components/podcast-detail/PodcastDetail.tsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<PodcastList/>}/>
                <Route path="/podcast/:id" element={<PodcastDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
