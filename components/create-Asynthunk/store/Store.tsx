import { configureStore } from "@reduxjs/toolkit";
import { SignupUser } from "./SignupUser";

export  const Store=configureStore({
    reducer:{
         UserSignup:SignupUser
    }
}) 