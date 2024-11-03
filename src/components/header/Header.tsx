import Status from "../status/Status.tsx";
import {Link} from "react-router-dom";
import Separator from "../ui/separator/Separator.tsx";
const Header = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Link to={'/'}><span id={'title'}>Podcaster</span></Link>
                <Status/>
            </div>
            <Separator/>
        </>
    );

}

export default Header;
