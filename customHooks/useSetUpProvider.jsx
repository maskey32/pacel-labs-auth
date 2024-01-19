"use client";

import { useEffect, useState } from "react";
import { getProviders, useSession, signIn, signOut } from "next-auth/react";

const useSetUpProvider = () => {
    const { data: session } = useSession();

    const [providers, setProviders] = useState(null);

    const setUpProvider = async () => {
        const response = await getProviders();

        setProviders(response);
    };

    useEffect(() => {
        setUpProvider();
    }, []);

    return {
        session,
        providers,
        signIn,
        signOut
    }
}

export default useSetUpProvider;