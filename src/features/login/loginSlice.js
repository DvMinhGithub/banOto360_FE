import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import { httpPost } from '~/services';

export const loginUser = createAsyncThunk('user/fetchUser', async (body, { rejectWithValue }) => {
    try {
        const response = await httpPost('http://localhost:8080/api/v1/admins/login', body);
        return response;
    } catch (error) {
        console.log('Error fetching user:', error);
        return rejectWithValue('Lỗi khi lấy dữ liệu người dùng');
    }
});

const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log('🚀 ~ file: loginSlice.js:33 ~ .addCase ~ action:', action);
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Something went wrong.';
            });
    },
});

export default authSlice.reducer;
