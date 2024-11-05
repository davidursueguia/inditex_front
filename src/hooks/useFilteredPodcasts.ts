import {useState, useMemo} from "react";
import {Podcast} from "../interfaces/Podcast.ts";
import {useTopPodcasts} from "./useTopPodcasts.ts";

const useFilteredPodcasts = () => {
    const { data: podcasts } = useTopPodcasts();
    const [filterText, setFilterText] = useState("");

    const filteredPodcasts = useMemo(() => {
        if (!podcasts) return [];
        return podcasts.filter((podcast: Podcast) =>
            podcast.title.label.toLowerCase().includes(filterText.toLowerCase())
        );
    }, [podcasts, filterText]);

    return {
        filterText,
        setFilterText,
        filteredPodcasts,
    };
};

export default useFilteredPodcasts;
