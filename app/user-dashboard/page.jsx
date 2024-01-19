"use client";

import { useSelector } from "react-redux";

const UserDashboard = () => {
    const userName = useSelector((state) => state?.authReducer?.value?.userName);
    return (
        <section>
            User Dashboard
        </section>
    )
}

export default UserDashboard;