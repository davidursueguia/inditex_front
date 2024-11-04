import Status from "../status/Status.tsx";
import {Link} from "react-router-dom";
import {HeaderContainer} from "./styles.ts";
import {Separator} from "../ui/separator/styled.ts";

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
