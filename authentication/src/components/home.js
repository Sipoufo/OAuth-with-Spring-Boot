import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/user", {
                headers: { Authorization: "Bearer " + location.state.token },
            })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [location.state.token]);

    return (
        <div className="w-full h-full flex flex-col gap-6 bg-violet-800">
            <div className="bg-white px-8 py-4 flex flex-row justify-between">
                <h1 className="font-semibold text-xl">Auth React-SpringBoot</h1>
                <ul className="flex flex-row gap-4">
                    <li>
                        <button className="">Logout</button>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-xl text-white text-center">
                    Users who have already logged in
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-xl gap-4 px-6">
                    {data.map((user) => {
                        return (
                            <div className="p-4 shadow-lg bg-white flex flex-row items-center gap-4">
                                <img src={user.picture} className="w-20 h-20 object-cover" alt="picture"/>
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-lg font-semibold">Profile</h2>
                                    <p>FirstName: {user.firstName}</p>
                                    <p>LastName: {user.lastName}</p>
                                    <p>Email: {user.lastName}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home;
