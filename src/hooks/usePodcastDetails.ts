import PodcastService from "../services/PodcastService";
import { useQuery } from "react-query";

export const usePodcastDetails = (podcastId: string) => {
    const TIME_CACHE = 24 * 60 * 60 * 1000; // 24 hours

    return useQuery(
        ['podcastDetails', podcastId],
        () => PodcastService.getPodcastDetail(podcastId),
        {
            staleTime: TIME_CACHE,
            cacheTime: TIME_CACHE,
            refetchOnWindowFocus: false
        }
    );
};
