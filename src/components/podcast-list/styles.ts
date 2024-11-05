import {Card, styled} from "@mui/material";

export const ListContainer = styled('div')`
    margin-top: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GridContainer = styled('div')`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 100px;
    padding: 10px;
`;

export const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 90px;
    align-items: center;
    overflow: visible;
    position: relative;
    padding-top: 60px;

    &:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    }
`;

export const PodcastImage = styled('img')`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const PodcastInfo = styled('div')`
    display: grid;
    gap: 10px;
    text-align: center;
`;

export const PodcastName = styled('span')`
    color: black;
`;

export const PodcastAuthor = styled('span')`
    color: grey;
`;
