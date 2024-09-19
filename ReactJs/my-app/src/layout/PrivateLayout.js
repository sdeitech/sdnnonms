import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import Footer from "../component/Footer";
// import { useSelector } from "react-redux";

const PrivateLayout = ({ children }) => {
    //   let token = useSelector(state=> state.userReducer.token);
    let token = "abcd"
    let navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    return (
        <div className="layout">
            {/* <Sidebar /> */}
            <div className="content">
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default PrivateLayout;
