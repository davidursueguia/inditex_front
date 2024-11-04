import { Skeleton} from "@mui/material";
import Separator from "../ui/separator/Separator.tsx";
import {Podcast} from "../../interfaces/Podcast.ts";
import {Link} from "react-router-dom";
import {Artist, DescriptionText, DescriptionTitle, PodcastImage, StyledCard, Title} from "./styles.ts";

interface Props {
    selectedPodcast: Podcast | undefined;
    isLoading: boolean
}

const PodcastInfoCard = (props: Props) => {
    const {selectedPodcast, isLoading} = props;

    return (
        <StyledCard>
            {isLoading ? (
                <Skeleton variant="rectangular" width="100%" height={200} />
            ) : (
                selectedPodcast && (
                    <div style={{ textAlign: 'center' }}>
                        <Link to={'/podcast/' + selectedPodcast.id.attributes["im:id"]}>
                            <PodcastImage
                                alt={selectedPodcast["im:name"].label}
                                src={selectedPodcast["im:image"][2].label}
                            />
                            <Separator/>
                            <div style={{textAlign: 'left'}}>
                                <Title>{selectedPodcast["im:name"].label}</Title>
                                <Artist>by {selectedPodcast["im:artist"].label}</Artist>
                            </div>
                        </Link>
                        <Separator />
                        <DescriptionTitle>Description:</DescriptionTitle>
                        <DescriptionText>{selectedPodcast.summary.label}</DescriptionText>
                    </div>
                )
            )}
        </StyledCard>
    );
};

export default PodcastInfoCard;
