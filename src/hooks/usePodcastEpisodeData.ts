import { useState, useEffect } from "react";
import {PodcastEpisode} from "../interfaces/PodcastEpisode.ts";
import {usePodcastDetails} from "./usePodcastDetails.ts";

interface UsePodcastEpisodeDataResult {
    episode: PodcastEpisode | undefined;
    isLoading: boolean;
}

export const usePodcastEpisodeData = (podcastId: string, episodeId: string): UsePodcastEpisodeDataResult => {
    const [episode, setEpisode] = useState<PodcastEpisode | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const podcastDetails = usePodcastDetails(podcastId);

    useEffect(() => {
        if (podcastDetails.data) {
            const foundEpisode = podcastDetails.data.results.find(
                (ep: PodcastEpisode) => ep.trackId === parseInt(episodeId)
            );
            setEpisode(foundEpisode);
        }
        setIsLoading(podcastDetails.isLoading);
    }, [podcastDetails, episodeId]);

    return { episode, isLoading };
};
