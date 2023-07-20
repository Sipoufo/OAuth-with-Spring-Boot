import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React from "react";

const Auth = () => {
    let navigate = useNavigate();

    const login = (data, token) => {
        axios
            .post(
                "http://localhost:8080/user",
                {
                    firstName: data.family_name,
                    lastName: data.given_name,
                    email: data.email,
                    picture: data.picture,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                    },
                }
            )
            .then((Response) => {
                navigate("/home", { state: { token } });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-full h-full flex justify-center items-center p-6 text-sm lg:text-base">
            <div className="w-full h-full flex flex-col lg:flex-row gap-6 lg:gap-4 max-w-screen-2xl">
                {/* Image */}
                <div className="flex lg:hidden lg:w-1/2 h-44 lg:h-full">
                    <img
                        src={process.env.PUBLIC_URL + "/images/login.png"}
                        className="w-full h-full object-cover rounded-2xl"
                        alt="login"
                    />
                </div>

                {/* Form */}
                <div className="lg:w-1/2 flex justify-center lg:items-center overflow-y-auto">
                    <div className="w-full xl:w-8/12 flex flex-col gap-4">
                        {/* Description */}
                        <h1 className="text-2xl lg:text-3xl font-bold">
                            Welcome Back 👋
                        </h1>
                        <p>
                            Today is a new day. It's your day. You shape it.
                            Sign in to start managing your projects.
                        </p>
                        {/* Form */}
                        <form className="flex flex-col gap-4 mt-4">
                            <div className="flex flex-col gap-1">
                                <label className="font-semibold">Email</label>
                                <input
                                    type="email"
                                    className="bg-[#F7FBFF] border-2 border-[#D4D7E3] focus:border-[#D4D7E3] p-4 rounded-xl"
                                    placeholder="Example@email.com"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="font-semibold">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="bg-[#F7FBFF] border-2 border-[#D4D7E3] focus:border-[#D4D7E3] p-4 rounded-xl"
                                    placeholder="Example@email.com"
                                />
                            </div>
                            <div className="text-end">
                                <a href="/" className="text-[#1E4AE9]">
                                    Forget password ?
                                </a>
                            </div>
                            <button className="bg-[#162D3A] px-2 py-4 rounded-xl text-white text-base lg:text-xl font-medium">
                                Sign In
                            </button>
                        </form>
                        <div className="flex flex-row items-center gap-2 mt-2">
                            <div className="border border-gray-200 grow"></div>
                            <p className="text-gray-600">Or Sign in with</p>
                            <div className="border border-gray-200 grow"></div>
                        </div>
                        <div className="flex flex-row justify-center gap-4 mt-2">
                            <GoogleOAuthProvider clientId="597687459650-higakd5vatp2bb6rqqgel04av37rrm8a.apps.googleusercontent.com">
                                <GoogleLogin
                                    onSuccess={(credentialResponse) => {
                                        console.log(credentialResponse);
                                        const dataDecode = jwtDecode(
                                            credentialResponse.credential
                                        );
                                        console.log(dataDecode);
                                        login(
                                            dataDecode,
                                            credentialResponse.credential
                                        );
                                    }}
                                    onError={() => {
                                        console.log("Login Failed");
                                    }}
                                    useOneTap
                                />
                            </GoogleOAuthProvider>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="hidden lg:flex lg:w-1/2 h-44 lg:h-full">
                    <img
                        src={process.env.PUBLIC_URL + "/images/login.png"}
                        className="w-full h-full object-cover rounded-2xl"
                        alt="login"
                    />
                </div>
            </div>
        </div>
    );
};

export default Auth;
