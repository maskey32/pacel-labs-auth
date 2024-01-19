"use client";

import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import Button from "./Button";
import TitleLink from "./TitleLink";
import { logOut } from "@redux/features/authSlice";

const Nav = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuth = useSelector((state) => state?.authReducer?.value?.isAuth);

    const signInHandler = () => {
        router.push('/sign-in');
    };

    const signOutHandler = () => {
        router.push('/');
        dispatch(logOut());
    };

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <TitleLink />
            <div className="sm:flex hidden">
                {isAuth ? (
                    <div className="flex gap-3 md:gap-5">
                        <Button
                            onClick={signOutHandler}
                            text='Sign Out'
                            type='button'
                        />
                    </div>
                ) : (
                    <>
                        <Button
                            onClick={signInHandler}
                            text='Sign In'
                            type='button'
                        />
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;