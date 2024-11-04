import styled from '@mui/material/styles/styled';
import {Card} from "@mui/material";

export const StyledCard = styled(Card)`
    height: fit-content;
    padding: 20px;
    border-radius: 8px;
`;

export const PodcastImage = styled('img')`
    width: 100%;
    max-width: 200px;
    border-radius: 8px;
    margin-bottom: 15px;
`;

export const Title = styled('h2')`
    font-size: 1.5em;
    color: #333;
    margin: 10px 0;
`;

export const Artist = styled('p')`
    color: #666;
    font-style: italic;
`;

export const DescriptionTitle = styled('h3')`
    text-align: left;
`;

export const DescriptionText = styled('p')`
    font-size: 1em;
    font-style: italic;
    color: #666;
`;
