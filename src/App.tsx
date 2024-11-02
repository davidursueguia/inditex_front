import './App.css';
import Header from "./components/header/Header.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PodcastDetail from "./components/podcast-detail/PodcastDetail.tsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import PodcastPage from "./components/podcast-page/PodcastPage.tsx";

const queryClient = new QueryClient();

const App = () => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <Routes>
                    <Route path="/" element={<PodcastPage/>}/>
                    <Route path="/podcast/:id" element={<PodcastDetail/>}/>
                </Routes>
                <ReactQueryDevtools/>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
