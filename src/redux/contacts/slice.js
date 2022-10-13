import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContacts, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

  export const contactSlice = createSlice({
    name: 'contacts',

    initialState: {
      contacts: [],
      isLoadig: false,
      error: null,
      filter: '',
    },

    reducers: {
      filterContact(state, action) {
        console.log(action);
        state.filter = action.payload;
      },      
    },

    extraReducers: {
      [fetchContacts.pending]: handlePending,
      [addContacts.pending]: handlePending,
      [deleteContact.pending]: handlePending,
      [fetchContacts.rejected]: handleRejected,
      [addContacts.rejected]: handleRejected,
      [deleteContact.rejected]: handleRejected,
      [fetchContacts.fulfilled](state, action) {
         state.isLoading = false;
         state.error = null;
         state.contacts = action.payload;
        },
      [addContacts.fulfilled](state, action) {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      },
      [deleteContact.fulfilled](state, action) {
        state.isLoadig = false;
        state.error = null;
        const index = state.contacts.findIndex(contact => contact.id === action.payload);
        state.contacts.splice(index, 1);
      },
      [logOut.fulfilled](state) {
        state.contacts = [];
        state.error = null;
        state.isLoading = false;
      },

    },
  });
  
  export const {  filterContact } = contactSlice.actions;

  export const contactReducer = contactSlice.reducer;










// import axios from "axios";
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = "https://6339f23c471b8c3955687d6a.mockapi.io";

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get("/contacts");
//       return response.data;
      
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addContacts = createAsyncThunk(
//   'contacts/addContacts',
//   async ({name, phone}, thunkAPI) => {
//     try {
//       const response = await axios.post("/contacts", { name, phone });
//       return response.data;

//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

//   export const contactSlice = createSlice({
//     name: 'contacts',

//     initialState: {
//       contacts: [],
//       isLoadig: false,
//       error: null,
//       filter: '',
//     },

//     reducers: {
//       filterContact(state, action) {
//         console.log(action);
//         state.filter = action.payload;
//       },      
//     },

//     extraReducers: {
//       [fetchContacts.pending](state) {
//         state.isLoadig = true;
//         state.error = null;
//       },
//       [fetchContacts.fulfilled](state, action) {
//         state.isLoadig = false;
//         state.error = null;
//         state.contacts = action.payload;
//       },
//       [fetchContacts.rejected](state, action) {
//         state.isLoadig = false;
//         state.error = action.payload;
//       },


//       [addContacts.pending](state) {
//         state.isLoadig = true;
//       },
//       [addContacts.fulfilled](state, action) {
//         state.isLoadig = false;
//         state.error = null;
//         state.contacts.push(action.payload);
//       },
//       [addContacts.rejected](state, action) {
//         state.isLoadig = false;
//         state.error = action.payload;
//       },


//       [deleteContact.pending](state) {
//         state.isLoadig = true;
//       },
//       [deleteContact.fulfilled](state, action) {
//         state.isLoadig = false;
//         state.error = null;
//         state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
//       },
//       [deleteContact.rejected](state, action) {
//         state.isLoadig = false;
//         state.error = action.payload;
//       },
//     },
//   });
  
//   export const {  filterContact } = contactSlice.actions;

//   export default contactSlice.reducer;
