"use client";

import { useRouter } from "next/navigation";
import useSetUpProvider from "@/customHooks/useSetUpProvider";
import { logIn, logOut } from "@redux/features/authSlice";
import { useDispatch } from "react-redux";
import Button from "./Button";
import TitleLink from "./TitleLink";

const Nav = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { 
        session,
        providers,
        signIn,
        signOut
    } = useSetUpProvider();

    const signInHandler = (provider) => {
        signIn(provider.id);
    };

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <TitleLink />
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Button
                            onClick={signOut}
                            text='Sign Out'
                        />
                    </div>
                ) : (
                    <>
                        {providers && 
                            Object.values(providers).map((provider) => (
                            <Button
                                key={provider.name}
                                onClick={() => signInHandler(provider)}
                                text='Sign In'
                            />
                        ))}
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;