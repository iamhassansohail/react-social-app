// Library
import React from 'react';
import LoaderSpinner from "react-loader-spinner";
import {Colors} from "../../Utils/CommonContants";

const Loader = (props) => {
    return (
        <>
            <LoaderSpinner
                type="Audio"
                color={props.color ? props.color : Colors.SUCCESS}
                height={props.height ? props.height : 100}
                width={props.width ? props.width : 100}
            />
        </>
    )
}

export default Loader;