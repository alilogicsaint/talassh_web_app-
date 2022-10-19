import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AgentAccount from "./screens/AgentAccount";
import BusinessAccount from "./screens/businessAccount";
import BusinessEntery from "./screens/business/BusinessEntery";
import CustomerAccount from "./screens/customerAccount";
import Home from "./screens/home";
import Register from "./screens/Register";
import  store  from './store/index';
import { Provider } from 'react-redux';
import Home2 from "./screens/home2";
import BusinessSearch from "./screens/business/BusinessSearch";
import ExpertSearch from "./screens/Expert/expertSearch";
import ExpertEntry from "./screens/Expert/expertEntery";
import HelperEntry from "./screens/laberHelper/HelperEntery";
import HelperSearch from "./screens/laberHelper/HelperSearch";
import  { BasicTable } from "./components/DataTable";

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
      <Route path="Expert_Entery" element={<ExpertEntry/>} />
      <Route path="Expert_Search" element={<ExpertSearch/>} />
      <Route path="Helper_Entry" element={<HelperEntry/>} />
      <Route path="Helper_Search" element={<HelperSearch/>} />
      <Route path="example" element={<BasicTable/>} />
    </Routes>

  </Provider>
  );
};