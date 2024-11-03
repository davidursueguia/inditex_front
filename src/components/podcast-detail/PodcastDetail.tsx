import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card} from "@mui/material";
import {PodcastEpisode} from "../../interfaces/PodcastEpisode.ts";
import {useTopPodcasts} from "../../hooks/useTopPodcasts.ts";
import {Podcast} from "../../interfaces/Podcast.ts";
import Separator from "../ui/separator/Separator.tsx";
import {usePodcastDetails} from "../../hooks/usePodcastDetails.ts";

const PodcastDetail = () => {
    const {id} = useParams();
    const [selectedPodcast, setSelectedPodcast] = useState<Podcast>();
    const {data: podcasts} = useTopPodcasts();
    const podcastDetails = usePodcastDetails(id ? id : '');
    const [podcastEpisodes, setPodcastEpisodes] = useState<PodcastEpisode[]>();

    useEffect(() => {
        if (id && podcastDetails) {
            setSelectedPodcast(podcasts.find((podcast: Podcast) => podcast.id.attributes["im:id"] === id));
            setPodcastEpisodes(podcastDetails.data.results);
            console.log(podcastDetails.data.results);
        }
    }, [id, podcastDetails, podcasts]);

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr'}}>
            <Card>
                {selectedPodcast && (
                    <div>
                        <img alt={selectedPodcast["im:name"].label}
                             src={selectedPodcast["im:image"][2].label}/>
                        <Separator/>
                        {selectedPodcast.title.label} by {selectedPodcast["im:artist"].label}
                        <Separator/>
                        {selectedPodcast.summary.label}
                    </div>
                )}
            </Card>
            <div>
                <Card>
                    {'Episodes ' + podcastEpisodes?.length}
                </Card>
                <Card>
                    {podcastEpisodes?.map((episode: PodcastEpisode) => (
                        <div>
                            {episode.trackName}
                        </div>
                    ))}
                </Card>
            </div>
        </div>
    );
};

export default PodcastDetail;
