import {Card, Skeleton} from "@mui/material";
import Separator from "../ui/separator/Separator.tsx";
import {Podcast} from "../../interfaces/Podcast.ts";
import {Link} from "react-router-dom";

interface Props {
    selectedPodcast: Podcast | undefined;
    isLoading: boolean
}

const PodcastInfoCard = (props: Props) => {
    const {selectedPodcast, isLoading} = props;

    return (
        <Card style={{height: 'fit-content', padding: '20px', borderRadius: '8px'}}>
            {isLoading ? (
                <Skeleton variant="rectangular" width="100%" height={200}/>
            ) : (
                selectedPodcast && (
                    <div style={{textAlign: 'center'}}>
                        <Link to={'/podcast/' + selectedPodcast.id.attributes["im:id"]}>
                            <img
                                alt={selectedPodcast["im:name"].label}
                                src={selectedPodcast["im:image"][2].label}
                                style={{width: '100%', maxWidth: '200px', borderRadius: '8px', marginBottom: '15px'}}
                            />
                            <Separator/>
                            <div style={{textAlign: 'left'}}>
                                <h2 style={{fontSize: '1.5em', color: '#333', margin: '10px 0'}}>
                                    {selectedPodcast["im:name"].label}
                                </h2>
                                <p style={{color: '#666', fontStyle: 'italic'}}>by {selectedPodcast["im:artist"].label}</p>
                            </div>
                        </Link>
                        <Separator/>
                        <h3 style={{textAlign: 'left'}}>Description:</h3>
                        <p style={{fontSize: '1em', fontStyle: 'italic', color: '#666'}}>{selectedPodcast.summary.label}</p>
                    </div>
                )
            )}
        </Card>
    );
};

export default PodcastInfoCard;
