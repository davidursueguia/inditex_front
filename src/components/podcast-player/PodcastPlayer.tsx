import {PodcastEpisode} from "../../interfaces/PodcastEpisode.ts";

interface Props {
    episode: PodcastEpisode | undefined;
}

export const PodcastPlayer = (props: Props) => {
    const {episode} = props;

    return (
        <div>
            {episode ? (
                <audio controls>
                    <source src={episode.episodeUrl} type="audio/mp3"/>
                    Your browser does not support the audio element.
                </audio>
            ) : (
                <div>Loading episode...</div>
            )}
        </div>
    );
};
