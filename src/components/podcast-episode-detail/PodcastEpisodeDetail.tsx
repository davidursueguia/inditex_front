import {useParams} from "react-router-dom";
import {usePodcastEpisodeData} from "../../hooks/usePodcastEpisodeData";
import PodcastInfoCard from "../podcast-info-card/PodcastInfoCard.tsx";
import {usePodcastData} from "../../hooks/usePodcastData.ts";
import {Card} from "@mui/material";
import Separator from "../ui/separator/Separator.tsx";
import {PodcastPlayer} from "../podcast-player/PodcastPlayer.tsx";
import {useEffect} from "react";
import {Container, EpisodeCard, EpisodeDescription, EpisodeTitle, LoadingMessage} from "./styles.ts";

export const PodcastEpisodeDetail = () => {
    const {podcastId = "", episodeId = ""} = useParams<{ podcastId: string; episodeId: string }>();
    const {selectedPodcast, isLoading} = usePodcastData();
    const {episode} = usePodcastEpisodeData(podcastId, episodeId);

    return (
        <Container>
            <PodcastInfoCard selectedPodcast={selectedPodcast} isLoading={isLoading} />
            <EpisodeCard>
                {episode ? (
                    <>
                        <EpisodeTitle>{episode.trackName}</EpisodeTitle>
                        <Separator />
                        <EpisodeDescription>
                            {episode.shortDescription ? episode.shortDescription : episode.description}
                        </EpisodeDescription>
                        <Separator />
                        <PodcastPlayer episode={episode} />
                    </>
                ) : (
                    <LoadingMessage>Loading episode details...</LoadingMessage>
                )}
            </EpisodeCard>
        </Container>
    );
};
