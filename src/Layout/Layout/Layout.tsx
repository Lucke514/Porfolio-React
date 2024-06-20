import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "@Shared/Footer/Footer";
import Header from "@Shared/Header/Header";

export default function Layout() {
    return (
        <React.Fragment>
            <Header />
                <main className="min-h-[72vh]">
                    <Outlet />
                </main>
            <Footer />
        </React.Fragment>
    )
}