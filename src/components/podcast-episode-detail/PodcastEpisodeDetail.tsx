import {useParams} from "react-router-dom";
import {usePodcastEpisodeData} from "../../hooks/usePodcastEpisodeData";
import PodcastInfoCard from "../podcast-info-card/PodcastInfoCard.tsx";
import {usePodcastData} from "../../hooks/usePodcastData.ts";
import {Card} from "@mui/material";
import Separator from "../ui/separator/Separator.tsx";
import {PodcastPlayer} from "../podcast-player/PodcastPlayer.tsx";
import {useEffect} from "react";

export const PodcastEpisodeDetail = () => {
    const {podcastId = "", episodeId = ""} = useParams<{ podcastId: string; episodeId: string }>();
    const {selectedPodcast, isLoading} = usePodcastData();
    const {episode} = usePodcastEpisodeData(podcastId, episodeId);

    useEffect(() => {
        console.log('selected episode:', episode);
    }, [episode]);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            gap: '20px',
            padding: '20px'
        }}>
            <PodcastInfoCard selectedPodcast={selectedPodcast} isLoading={isLoading}/>
            <Card style={{height: 'fit-content'}}>
                {episode ? (
                    <>
                        <h3 style={{marginLeft: '10px', textAlign: 'left', fontSize: '1.2em', color: '#333'}}>
                            {episode.trackName}
                        </h3>
                        <Separator/>
                        <p style={{marginLeft: '10px', textAlign: 'left', fontSize: '1em', color: '#333'}}>
                            {episode.shortDescription ? episode.shortDescription : episode.description}
                        </p>
                        <Separator/>
                        <PodcastPlayer episode={episode}/>
                    </>
                ) : (
                    <div style={{marginLeft: '10px', textAlign: 'left', fontSize: '1em', color: '#333'}}>
                        Loading episode details...
                    </div>
                )}
            </Card>
        </div>
    );
};
