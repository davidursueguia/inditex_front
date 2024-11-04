import {Chip, TextField} from "@mui/material";
import {Container} from "./styles.ts";

interface Props {
    filterText: string;
    setFilterText: (filterText: string) => void;
    filteredCount: number;
}

const Filter = (props: Props) => {

    return (
        <Container>
            <Chip color="info" label={props.filteredCount}/>
            <TextField
                label={'Filter podcasts...'}
                variant={'outlined'}
                value={props.filterText}
                onChange={(e) => props.setFilterText(e.target.value)}/>
        </Container>
    );

}

export default Filter;
