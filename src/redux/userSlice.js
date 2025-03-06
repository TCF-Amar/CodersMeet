import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { firestore } from "../configs/firebase";
import { doc, getDoc } from "firebase/firestore";

const initialState = {
  uid: null,
  userData: null,
  loading: true,
  error: null,
};
// 🔹 Firestore se User Data Fetch Karne Wala Thunk
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userId, { rejectWithValue }) => {
    try {
      const userDoc = await getDoc(doc(firestore, "users", userId));
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        return rejectWithValue("User data not found");
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ✅ Async thunk to sign out the user
export const signOutUser = createAsyncThunk(
  "user/signOutUser",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await signOut(firebaseAuth);
      dispatch(clearUser()); // Redux store reset karne ke liye
      return null;
    } catch (err) {
      return rejectWithValue({ message: err.message, code: err.code || "signout_error" });
    }
  }
);



const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUid: (state, action) => {
      state.uid = action.payload; // Set the uid
    },
    clearUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userData = { ...state.userData, ...action.payload }; 
        state.loading = false;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
       // ✅ Sign Out Cases
       .addCase(signOutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setUid, setUserData, clearUser } = userSlice.actions;
export default userSlice.reducer;
  