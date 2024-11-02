import './App.css';
import PodcastList from "./components/podcast-list/PodcastList.tsx";
import Header from "./components/header/Header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PodcastDetail from "./components/podcast-detail/PodcastDetail.tsx";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <Routes>
                    <Route path="/" element={<PodcastList/>}/>
                    <Route path="/podcast/:id" element={<PodcastDetail/>}/>
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
