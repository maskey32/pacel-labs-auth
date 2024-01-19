import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        isAuth: false,
        userName: "",
        id: "",
        email: "",
        image: "",
    }
};

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action) => {
            return {
                value: {
                    isAuth: true,
                    userName: action.payload,
                    id: "",
                    email: "",
                    image: "",
                }
            }
        },
    }
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
