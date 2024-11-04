import {
    Card,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    Skeleton
} from "@mui/material";
import {formatDate, formatMillisecondsToMinutesSeconds} from "../../utils/dateTimeUtils.ts";
import {usePodcastData} from "../../hooks/usePodcastData.ts";
import {
    Container,
    EpisodeLink,
    EpisodesCard,
    EpisodesContainer,
    StyledTableCell,
    StyledTableRow,
    Title
} from "./styles.ts";
import {Link, useLocation} from "react-router-dom";
import PodcastInfoCard from "../podcast-info-card/PodcastInfoCard.tsx";

const PodcastDetail = () => {
    const location = useLocation();
    const {selectedPodcast, podcastEpisodes, isLoading} = usePodcastData();

    return (
        <Container>
            <PodcastInfoCard selectedPodcast={selectedPodcast} isLoading={isLoading} />
            <EpisodesContainer>
                <EpisodesCard>
                    <Title>{'Episodes: ' + (podcastEpisodes?.length || 0)}</Title>
                </EpisodesCard>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align="left">Title</StyledTableCell>
                                <StyledTableCell align="right">Date</StyledTableCell>
                                <StyledTableCell align="right">Duration</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {isLoading ? (
                                Array.from(new Array(5)).map((_, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell>
                                            <Skeleton />
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Skeleton />
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Skeleton />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            ) : (
                                podcastEpisodes && podcastEpisodes.map((row) => (
                                    <StyledTableRow key={row.trackId}>
                                        <StyledTableCell component="th" scope="row">
                                            <EpisodeLink to={`${location.pathname}/episode/${row.trackId}`}>
                                                {row.trackName}
                                            </EpisodeLink>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{formatDate(row.releaseDate)}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            {formatMillisecondsToMinutesSeconds(row.trackTimeMillis)}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </EpisodesContainer>
        </Container>
    );
};

export default PodcastDetail;
