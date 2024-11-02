import Filter from "../filter/Filter.tsx";
import PodcastList from "../podcast-list/PodcastList.tsx";
import {useTopPodcasts} from "../../hooks/useTopPodcasts.ts";
import {Podcast} from "../../interfaces/Podcast.ts";
import {useState} from "react";

const PodcastPage = () => {
    const {data: podcasts} = useTopPodcasts();
    const [filterText, setFilterText] = useState("");

    const filteredPodcasts = podcasts?.filter((podcast: Podcast) =>
        podcast.title.label.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Filter filterText={filterText} setFilterText={setFilterText} filteredCount={filteredPodcasts?.length} />
            <PodcastList podcast={filteredPodcasts}/>
        </>
    );
};

export default PodcastPage;
