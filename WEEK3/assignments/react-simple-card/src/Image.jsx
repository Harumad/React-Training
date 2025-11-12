import React from "react";

function Image ({src,alt}){
    return(
        <img
        src={src}
        alt={"alt" || "card image"}
        className="w-28 h-28 object-cover rounded-sm"/>
    );

}

export default Image;