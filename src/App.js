import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AgentAccount from "./screens/AgentAccount";
import BusinessAccount from "./screens/businessAccount";
import BusinessEntery from "./screens/business/bussinessEntry";
import CustomerAccount from "./screens/customerAccount";
import Home from "./screens/home";
import Register from "./screens/Register";
import  store  from './store/index';
import { Provider } from 'react-redux';
import Home2 from "./screens/home2";
import BusinessSearch from "./screens/business/businessSearch";

export default function BasicExample() {
  return (
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="home2" element={<Home2/>} />
      <Route path="business_Account" element={<BusinessAccount/>} />
      <Route path="register" element={<Register/>} />
      <Route path="Customer_Account" element={<CustomerAccount/>} />
      <Route path="Agent_Account" element={<AgentAccount/>} />
      {/* <Route path="Enter" element={<BusinessEntery/>} /> */}
      <Route path="Business_Entery" element={<BusinessEntery/>} />
      <Route path="Business_Search" element={<BusinessSearch/>} />
    </Routes>

  </Provider>
  );
};