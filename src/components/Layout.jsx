import React from 'react';
import {Header} from "./Header";
import {Tabs} from "./Tabs";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>

            <Outlet />

            <footer>
                <Tabs />
            </footer>
        </>
    );
};

export {Layout};