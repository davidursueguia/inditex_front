import PodcastService from "../services/PodcastService.ts";
import {useQuery} from "react-query";

export const useTopPodcasts = () => {
    const TIME_CACHE = 24 * 60 * 60 * 1000; //24 hours

    return useQuery('topPodcasts', PodcastService.getTopPodcasts, {
        staleTime: TIME_CACHE,
        cacheTime: TIME_CACHE,
        refetchOnWindowFocus: false
    });
};
