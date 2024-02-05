import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://65c09f7adc74300bce8c5b25.mockapi.io/api/v1',
});

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkApi) => {
    try {
        const response = await instance.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, thunkApi) => {
        try {
            const response = await instance.post('/contacts', { name, phone });
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async ({ id }, thunkApi) => {
        try {
            console.log(id);
            const response = await instance.delete(`/contacts/${id}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);
