import {ColorRing} from "react-loader-spinner";
import {useIsFetching} from "react-query";

const Status = () => {

    const isFetching = useIsFetching();

    return (
        <ColorRing
            visible={isFetching > 0}
            height="40"
            width="40"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#1e3a8a', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd']}
        />
    );

}

export default Status;
