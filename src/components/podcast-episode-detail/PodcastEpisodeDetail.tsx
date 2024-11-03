import {useParams} from "react-router-dom";
import {usePodcastEpisodeData} from "../../hooks/usePodcastEpisodeData";
import PodcastInfoCard from "../podcast-info-card/PodcastInfoCard.tsx";
import {usePodcastData} from "../../hooks/usePodcastData.ts";
import {Card} from "@mui/material";
import Separator from "../ui/separator/Separator.tsx";
import {PodcastPlayer} from "../podcast-player/PodcastPlayer.tsx";

export const PodcastEpisodeDetail = () => {
    const {podcastId = "", episodeId = ""} = useParams<{ podcastId: string; episodeId: string }>();
    const {selectedPodcast, isLoading} = usePodcastData();
    const {episode} = usePodcastEpisodeData(podcastId, episodeId);

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            gap: '20px',
            padding: '20px'
        }}>
            <PodcastInfoCard selectedPodcast={selectedPodcast} isLoading={isLoading}/>
            <Card style={{height: 'fit-content'}}>
                <h3 style={{marginLeft: '10px', textAlign: 'left', fontSize: '1.2em', color: '#333'}}>
                    {episode?.trackName}
                </h3>
                <Separator/>
                <p style={{marginLeft: '10px', textAlign: 'left', fontSize: '1em', color: '#333'}}>
                    {episode?.shortDescription}
                </p>
                <Separator/>
                <PodcastPlayer episode={episode}/>
            </Card>
        </div>
    );
};
