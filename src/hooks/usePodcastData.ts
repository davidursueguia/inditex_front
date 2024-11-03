import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Podcast} from "../interfaces/Podcast.ts";
import {PodcastEpisode} from "../interfaces/PodcastEpisode.ts";
import {useTopPodcasts} from "./useTopPodcasts.ts";
import {usePodcastDetails} from "./usePodcastDetails.ts";


interface UsePodcastDataResult {
    selectedPodcast: Podcast | undefined;
    podcastEpisodes: PodcastEpisode[] | undefined;
    isLoading: boolean;
}

export const usePodcastData = (): UsePodcastDataResult => {
    const {podcastId: id} = useParams<{ podcastId: string }>();
    const [selectedPodcast, setSelectedPodcast] = useState<Podcast>();
    const [podcastEpisodes, setPodcastEpisodes] = useState<PodcastEpisode[]>();

    const {data: podcasts} = useTopPodcasts();
    const podcastDetails = usePodcastDetails(id ? id : '');

    useEffect(() => {
        if (id && podcasts && podcastDetails.data && podcastDetails.data.results) {
            setSelectedPodcast(podcasts.find((podcast: Podcast) => podcast.id.attributes["im:id"] === id));
            setPodcastEpisodes(podcastDetails.data.results);
        }
    }, [id, podcastDetails, podcasts]);

    return {
        selectedPodcast,
        podcastEpisodes,
        isLoading: podcastDetails.isLoading
    };
};
