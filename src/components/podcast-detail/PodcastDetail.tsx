import {
    Card,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    Skeleton
} from "@mui/material";
import Separator from "../ui/separator/Separator.tsx";
import {formatDate, formatMillisecondsToMinutesSeconds} from "../../dateTimeUtils.ts";
import {usePodcastData} from "../../hooks/usePodcastData.ts";
import {StyledTableCell, StyledTableRow} from "./styles.ts";

const PodcastDetail = () => {
    const {selectedPodcast, podcastEpisodes, isLoading} = usePodcastData();

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '20px', padding: '20px'}}>
            <Card style={{height: 'fit-content', padding: '20px', borderRadius: '8px'}}>
                {isLoading ? (
                    <Skeleton variant="rectangular" width="100%" height={200}/>
                ) : (
                    selectedPodcast && (
                        <div style={{textAlign: 'center'}}>
                            <img
                                alt={selectedPodcast["im:name"].label}
                                src={selectedPodcast["im:image"][2].label}
                                style={{width: '100%', maxWidth: '200px', borderRadius: '8px', marginBottom: '15px'}}
                            />
                            <Separator/>
                            <h2 style={{fontSize: '1.5em', color: '#333', margin: '10px 0'}}>
                                {selectedPodcast.title.label}
                            </h2>
                            <p style={{color: '#666'}}>by {selectedPodcast["im:artist"].label}</p>
                            <Separator/>
                            <p style={{fontSize: '1em', color: '#666'}}>{selectedPodcast.summary.label}</p>
                        </div>
                    )
                )}
            </Card>
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
                                            {row.trackName}
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
