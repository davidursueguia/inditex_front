import Filter from "../filter/Filter.tsx";
import PodcastList from "../podcast-list/PodcastList.tsx";
import useFilteredPodcasts from "../../hooks/useFilteredPodcasts.ts";

const PodcastPage = () => {
    const { filterText, setFilterText, filteredPodcasts } = useFilteredPodcasts();

    return (
        <>
            <Filter filterText={filterText} setFilterText={setFilterText} filteredCount={filteredPodcasts?.length} />
            <PodcastList podcast={filteredPodcasts}/>
        </>
    );
};

export default PodcastPage;
