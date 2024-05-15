import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const SignupUser = createAsyncThunk(
  "user-signup",
  async (formdata, error) => {
    console.log("Formdata =>", formdata);
    try {
      const fetchdata = await fetch(
        "https://we-ticket-backend.vercel.app/api/signup",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );

      const response = await fetchdata.json();
      console.log(response);
      return response;
    } catch (error) {
      return error;
    }
  }
);

const SLice = createSlice({
  name: "user",
  initialState: {
    isloading: false,
    iserror: false,
    error: null,
    userData: null,
  },
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(SignupUser.fulfilled, (state, action) => {
      state.iserror = false;
      state.isloading = false;
      state.userData = action.payload.result;
      console.log(action.payload.result);
    });
    builders.addCase(SignupUser.rejected, (state, action: any) => {
      state.iserror = true;
      state.isloading = false;
      state.error = action.error;
    });
    builders.addCase(SignupUser.pending, (state, action) => {
      state.iserror = false;
      state.isloading = true;
    });
  },
});

export default SLice.reducer;
