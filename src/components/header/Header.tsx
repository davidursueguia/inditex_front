import Status from "../status/Status.tsx";
import {Link} from "react-router-dom";
import Separator from "../ui/separator/Separator.tsx";
import {HeaderContainer} from "./styles.ts";

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <Link to={'/'}><span id={'title'}>Podcaster</span></Link>
                <Status/>
            </HeaderContainer>
            <Separator/>
        </>
    );

}

export default Header;
