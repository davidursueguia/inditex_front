import {useEffect, useState} from "react";
import {Card} from "@mui/material";
import PodcastService from "../../services/PodcastService.ts";
import {RESPONSE} from "../../services/api.ts";

const PodcastList = () => {

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        try {
            //fetchPodcasts();
            // @ts-expect-error
            setPodcasts(RESPONSE.feed.results);
        } catch (error) {
            console.error('Error fetching top podcasts:', error);
        }

    }, []);

    const fetchPodcasts = () => {
        console.log('Fetching top podcasts...');
        PodcastService.getTopPodcasts().then((result: any) => {
            console.log('Podcasts fetched:', result);
            setPodcasts(result.feed.results);
        });
    }

    return (
        <div style={{
            marginTop: '150px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '100px',
                padding: '10px',
            }}>
                {podcasts && podcasts.map((podcast: any) => (
                    <Card
                        key={podcast.id}
                        sx={{
                            ':hover': {
                                boxShadow: 20,
                            },
                        }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '90px',
                            alignItems: 'center',
                            overflow: 'visible',
                            position: 'relative',
                            paddingTop: '60px'
                        }}
                    >
                        <img
                            style={{
                                height: '100px',
                                width: '100px',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '0',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                            }}
                            alt={podcast.name}
                            src={podcast.artworkUrl100}
                        />
                        <div style={{display: 'grid', gap: '10px'}}>
                            <span>{podcast.name}</span>
                            <span>{`Author: ${podcast.artistName}`}</span>
                        </div>
                    </Card>


                ))}
            </div>
        </div>
    );
};

export default PodcastList;
