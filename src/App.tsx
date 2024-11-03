import './App.css';
import Header from "./components/header/Header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PodcastDetail from "./components/podcast-detail/PodcastDetail.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import PodcastPage from "./components/pages/PodcastPage.tsx";
import {PodcastEpisodeDetail} from "./components/podcast-episode-detail/PodcastEpisodeDetail.tsx";

const queryClient = new QueryClient();

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <Routes>
                    <Route path="/" element={<PodcastPage/>}/>
                    <Route path="/podcast/:podcastId" element={<PodcastDetail/>}/>
                    <Route path="/podcast/:podcastId/episode/:episodeId" element={<PodcastEpisodeDetail />}/>
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
