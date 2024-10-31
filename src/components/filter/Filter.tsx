import {Component} from 'react';
import {Chip, TextField} from "@mui/material";

class Filter extends Component {
    render() {
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
                <Chip color="info" label={'100'}/>
                <TextField
                    label={'Filter podcasts...'}
                    variant={'outlined'}
                    onClick={() => {
                        console.log('TODO');
                    }}/>
            </div>
        );
    }
}

export default Filter;
