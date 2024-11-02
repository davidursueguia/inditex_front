import {ColorRing} from "react-loader-spinner";
import {useTopPodcasts} from "../../hooks/useTopPodcasts.ts";

const Loader = () => {

    const {isLoading} = useTopPodcasts();

    return (
        <ColorRing
            visible={isLoading}
            height="40"
            width="40"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd']}
        />
    );

}

export default Loader;
