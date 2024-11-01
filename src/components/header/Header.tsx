import {Component} from 'react';
import Filter from "../filter/Filter.tsx";
import Loader from "../Loader/Loader.tsx";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Link to={'/'}><span id={'title'}>Podcaster</span></Link>
                    <Loader/>
                </div>
                <div id={'separator'} style={{backgroundColor: 'black', width: '100%', height: '3px'}}/>
                <Filter/>
            </>
        );
    }
}

export default Header;
