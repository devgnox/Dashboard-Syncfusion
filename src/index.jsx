import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
import "./index.css";
import {ContextProvider} from './context/ContextProvider'

const app=document.getElementById('root');
const root=createRoot(app);

root.render(<ContextProvider><App /></ContextProvider>);