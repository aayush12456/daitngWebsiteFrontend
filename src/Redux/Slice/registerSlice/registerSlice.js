import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios/axios'
export const userRegisterAsync = createAsyncThunk(
  'userRegister/userRegisterAsync',
  async (registerObj, { rejectWithValue }) => {
    try {
      const response = await axios.post('/signup', registerObj, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (!response.status === 200) {
        throw new Error('Failed to add register data to mongodb database.');
      }
    

      const Responedata = response.data;
      console.log('response data',Responedata)
            const token = response.data.token;
      sessionStorage.setItem("register token", token);
            const name=response.data.user.firstName
      sessionStorage.setItem('name',name)
          const images=response.data.user.images[0]
      sessionStorage.setItem('profileImage',images)
         const email=response.data.user.email
         sessionStorage.setItem('signupEmail',email)
         const userId=response.data.user._id
         sessionStorage.setItem('userId',userId)
         const personalSignUpData={
          firstName:response.data.user.firstName,
          DOB:response.data.user.DOB,
          aboutUser:response.data.user.aboutUser,
          city:response.data.user.city,
          drinking:response.data.user.drinking,
          eating:response.data.user.eating,
          education:response.data.user.education,
          phone:response.data.user.phone,
          gender:response.data.user.gender,
          profession:response.data.user.profession,
          smoking:response.data.user.smoking,
          images:response.data.user.images,
          interest:response.data.user.interest,
          looking:response.data.user.looking,
          relationship:response.data.user.relationship,
          zodiac:response.data.user.zodiac,
          language:response.data.user.language,
        }
        sessionStorage.setItem('signupObject',JSON.stringify(personalSignUpData))
      return Responedata;
      
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState: {
    registerData: {}, // Initialize responseData in the state


  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegisterAsync.fulfilled, (state, action) => {
      state.registerData = action.payload; // Update responseData in the state after successful login
      console.log(state.registerData)
    });
    // Additional extra reducers if needed
    builder.addCase(userRegisterAsync.rejected, (state, action) => {
      state.responseData = action.payload; // Update responseData even for rejected login attempt
    });
  },
});

export default userRegisterSlice.reducer;
export const userRegisterSliceAction = userRegisterSlice.actions;