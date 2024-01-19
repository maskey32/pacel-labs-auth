"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@components/Button";
import Input from "@components/Input";
import { useDispatch } from "react-redux";


const SignInPage = () => {
    const dispatch = useDispatch();
    const [loginDetails, setLoginDetails] = useState({
        userName: "",
        email: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        dispatch(login(loginDetails));
        setLoginDetails((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setLoginDetails({
            userName: "",
            email: "",
        });
    };

    return (
        <div className="px-10 py-20">
        <h1 className="head_text text-center sm: text-6xl mb-4">Sign In</h1>
        <p className="desc text-center sm: text-xl max-w-2xl mb-8">
            <Link href="/">Go to Home</Link>
        </p>
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                name="userName"
                value={loginDetails.userName}
                onChange={handleInputChange}
                placeholder="Your username"
                required
            />
            <Input
                type="email"
                name="email"
                value={loginDetails.email}
                onChange={handleInputChange}
                placeholder="Your email"
                required
            />
            <Button type="submit" text="Sign In" />
        </form>
        </div>
    );
};

export default SignInPage;