import {Card, styled} from "@mui/material";

export const Container = styled('div')`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    padding: 20px;
`;

export const EpisodeCard = styled(Card)`
    height: fit-content;
`;

export const EpisodeTitle = styled('h3')`
    margin-left: 10px;
    text-align: left;
    font-size: 1.2em;
    color: #333;
`;

export const EpisodeDescription = styled('p')`
    margin-left: 10px;
    text-align: left;
    font-size: 1em;
    color: #333;
`;

export const LoadingMessage = styled('div')`
    margin-left: 10px;
    text-align: left;
    font-size: 1em;
    color: #333;
`;
