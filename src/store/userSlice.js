import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    users: [],
    success: false
}

export const fetchUsers = () => async (dispatch) => {
    try {
        console.log("here");
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        dispatch(setUsers(response.data))
    } catch (error) {

    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, data) => {
            state.users = data.payload
        }
    }
})

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;