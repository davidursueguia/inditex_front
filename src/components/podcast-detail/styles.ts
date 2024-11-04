import styled from '@mui/material/styles/styled';
import {Card, TableCell, tableCellClasses, TableRow} from "@mui/material";
import {Link} from "react-router-dom";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    '&:hover': {
        backgroundColor: theme.palette.action.selected, // Cambia este color según tu preferencia
    },
}));

export const Container = styled('div')`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    padding: 20px;
`;

export const EpisodesContainer = styled('div')`
    display: grid;
    align-content: baseline;
    gap: 20px;
`;

export const EpisodesCard = styled(Card)`
    border-radius: 8px;
`;

export const Title = styled('h3')`
    margin-left: 10px;
    text-align: left;
    font-size: 1.2em;
    color: #333;
`;

export const EpisodeLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    &:hover {
        text-decoration: underline;
    }
`;
