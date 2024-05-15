'use client'

import { Provider } from "react-redux";
import {Store} from "./store/Store";

export const ProviderComp=({children}:any)=>{

    return <Provider store={Store}>{children}</Provider>

}