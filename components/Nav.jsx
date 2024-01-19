"use client";

import useSetUpProvider from "@/customHooks/useSetupProvider";
import Button from "./Button";
import TitleLink from "./TitleLink";

const Nav = () => {
    const { 
        session,
        providers,
        signIn,
        signOut
    } = useSetUpProvider();

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <TitleLink />
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md: gap-5">
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
                                onClick={() => signIn(provider.id)}
                                text='Sign In'
                            />
                        ))}
                    </>
                )}
            </div>
        </nav>
    )
}

export default Nav;