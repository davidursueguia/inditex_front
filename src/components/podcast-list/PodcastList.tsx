import {Link} from "react-router-dom";
import {Podcast} from "../../interfaces/Podcast.ts";
import {
    GridContainer,
    ListContainer,
    PodcastAuthor,
    PodcastImage,
    PodcastInfo,
    PodcastName,
    StyledCard
} from "./styles.ts";

interface Props {
    podcast: Podcast[];
}

const PodcastList = (props: Props) => {
    return (
        <ListContainer>
            <GridContainer>
                {props.podcast?.map((podcast: Podcast) => (
                    <StyledCard
                        key={podcast.id.attributes["im:id"]}
                    >
                        <PodcastImage
                            alt={podcast["im:name"].label}
                            src={podcast["im:image"][0].label}
                        />
                        <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                            <PodcastInfo>
                                <PodcastName>{podcast["im:name"].label.toUpperCase()}</PodcastName>
                                <PodcastAuthor>{`Author: ${podcast["im:artist"].label}`}</PodcastAuthor>
                            </PodcastInfo>
                        </Link>
                    </StyledCard>
                ))}
            </GridContainer>
        </ListContainer>
    );
};

export default PodcastList;
