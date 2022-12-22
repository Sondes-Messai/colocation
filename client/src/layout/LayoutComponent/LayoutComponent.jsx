import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet, NavLink } from "react-router-dom";
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import FooterComponent from '../FooterComponent/FooterComponent';
import './LayoutComponent.css';
class LayoutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <>
                <HeaderComponent logout={this.props.logout} />
                <div className="app-divider"></div>
                <main className="container p-3" style={{ minHeight: '500px' }}>
                    <Outlet />
                </main>
                <div className="app-divider"></div>
                <FooterComponent />
            </>
        );
    }
}

export default LayoutComponent;