import {Link} from "react-router-dom";
import {Card} from "@mui/material";
import {Podcast} from "../../interfaces/Podcast.ts";

interface Props {
    podcast: Podcast[];
}

const PodcastList = (props: Props) => {
    return (
        <>
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
                    {props.podcast?.map((podcast: Podcast) => (
                        <Card
                            key={podcast.id.attributes["im:id"]}
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
                                alt={podcast["im:name"].label}
                                src={podcast["im:image"][0].label}
                            />
                            <Link to={/podcast/ + podcast.id.attributes["im:id"]}>
                                <div style={{display: 'grid', gap: '10px'}}>
                                    <span>{podcast["im:name"].label}</span>
                                    <span>{`Author: ${podcast["im:artist"].label}`}</span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PodcastList;
