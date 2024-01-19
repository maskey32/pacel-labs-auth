"use client";

import { useSelector } from "react-redux";
import Nav from "@components/Nav";

const UserDashboard = () => {
    const { userName, email} = useSelector((state) => state?.authReducer?.value);
    
    return (
        <section className="w-full flex-center flex-col">
            <Nav />
            <h1 className="head_text blue_gradient text-center sm: text-6xl">
                LoggedIn User Details
            </h1>
            <p className="desc text-center sm: text-xl max-w-2xl">
                Username: {userName}
            </p>
            <p className="desc text-center sm: text-xl max-w-2xl">
                email: {email}
            </p>
        </section>
    )
}

export default UserDashboard;