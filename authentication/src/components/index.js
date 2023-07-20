import React from "react";
import { Outlet } from "react-router-dom";

const IndexAut = () => {
    return(
        <div className="w-screen h-screen bg-white">
            <Outlet />
        </div>
    )
}

export default IndexAut;