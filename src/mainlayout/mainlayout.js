import React from 'react';
import './mainlayout.scss';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ModalRender from '../components/pages/Modal/Modal';
import Button from '../components/core/button/button';
import DialogRender from '../containers/Dialog';
import manageUser from '../containers/manageUser.js';
import manageRoom from '../containers/manageRooms.js';

import logo from '../asset/image/logo2.png';

function Mainlayout() {
    return (
        <div className="container-mainlayout">
            <div className="header-mainlayout">
                <div className="header-logo">
                    <img src={logo} alt="no-logo" />
                </div>
                <div className="header-info">
                    <span className="user">
                        <i className="fa fa-user"> Xin chào, Admin </i>
                    </span>
                    <span>
                        <Button
                            icon={<i className="fa fa-sign-out"></i>}
                            title={"Log-out"}
                            cls={"btn-cancel"}
                        />
                    </span>
                </div>
            </div>
            <div className="body-mainlayout">
                <Router>
                    <div className="sidebar-menu">
                        <div><NavLink className="nav-link" to="/user"><i className="fa fa-user"> Quản lý User</i></NavLink></div>
                        <div><NavLink className="nav-link" to="/room"><i className="fa fa-home"> Quản lý Room</i></NavLink></div>
                        {/* <div><NavLink className="nav-link" to="/about">Quản lý Comment</NavLink></div> */}
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/user" exact component={manageUser} />
                            <Route path="/room" exact component={manageRoom} />
                            {/* <Route path="/about" component={Login} /> */}
                        </Switch>
                    </div>
                </Router>
            </div>
            <ModalRender />
            <DialogRender />
        </div>
    )
}

export default Mainlayout;