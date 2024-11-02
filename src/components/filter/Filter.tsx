import {Chip, TextField} from "@mui/material";

interface Props {
    filterText: string;
    setFilterText: (filterText: string) => void;
    filteredCount: number;
}

const Filter = (props: Props) => {

    return (
        <div style={{
            float: "right",
            marginTop: "10px",
            marginRight: "10px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px"
        }}>
            <Chip color="info" label={props.filteredCount}/>
            <TextField
                label={'Filter podcasts...'}
                variant={'outlined'}
                value={props.filterText}
                onChange={(e) => props.setFilterText(e.target.value)}/>
        </div>
    );

}

export default Filter;
