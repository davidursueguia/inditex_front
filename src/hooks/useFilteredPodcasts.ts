import {useState, useMemo} from "react";
import {Podcast} from "../interfaces/Podcast.ts";
import {useTopPodcasts} from "./useTopPodcasts.ts";

const useFilteredPodcasts = () => {
    const { data } = useTopPodcasts();
    const [filterText, setFilterText] = useState("");

    const filteredPodcasts = useMemo(() => {
        if (!data) return [];
        return data.filter((podcast: Podcast) =>
            podcast.title.label.toLowerCase().includes(filterText.toLowerCase())
        );
    }, [data, filterText]);

    return {
        filterText,
        setFilterText,
        filteredPodcasts,
    };
};

export default useFilteredPodcasts;
