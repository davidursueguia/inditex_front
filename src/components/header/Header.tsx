import Loader from "../loader/Loader.tsx";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Link to={'/'}><span id={'title'}>Podcaster</span></Link>
                <Loader/>
            </div>
            <div id={'separator'} style={{backgroundColor: 'black', width: '100%', height: '3px'}}/>
        </>
    );

}

export default Header;
