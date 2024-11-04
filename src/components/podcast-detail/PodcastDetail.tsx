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
import {StyledTableCell, StyledTableRow} from "./styles.ts";
import {Link, useLocation} from "react-router-dom";
import PodcastInfoCard from "../podcast-info-card/PodcastInfoCard.tsx";

const PodcastDetail = () => {
    const location = useLocation();
    const {selectedPodcast, podcastEpisodes, isLoading} = usePodcastData();

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '20px', padding: '20px'}}>
            <PodcastInfoCard selectedPodcast={selectedPodcast} isLoading={isLoading} />
            <div style={{display: 'grid', alignContent: 'baseline', gap: '20px'}}>
                <Card style={{borderRadius: '8px'}}>
                    <h3 style={{marginLeft: '10px', textAlign: 'left', fontSize: '1.2em', color: '#333'}}>
                        {'Episodes: ' + (podcastEpisodes?.length || 0)}
                    </h3>
                </Card>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell align={'left'}>Title</StyledTableCell>
                                <StyledTableCell align="right">Date</StyledTableCell>
                                <StyledTableCell align="right">Duration</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {isLoading ? (
                                Array.from(new Array(5)).map((_, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell>
                                            <Skeleton/>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Skeleton/>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Skeleton/>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            ) : (
                                podcastEpisodes && podcastEpisodes.map((row) => (
                                    <StyledTableRow
                                        key={row.trackId}
                                    >
                                        <StyledTableCell component="th" scope="row">
                                            <Link
                                                to={`${location.pathname}/episode/${row.trackId}`}>{row.trackName}</Link>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{formatDate(row.releaseDate)}</StyledTableCell>
                                        <StyledTableCell
                                            align="right">{formatMillisecondsToMinutesSeconds(row.trackTimeMillis)}</StyledTableCell>
                                    </StyledTableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default PodcastDetail;
