import React from 'react';
import './mainlayout.scss';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import ModalRender from '../components/pages/Modal/Modal';

import DialogRender from '../containers/Dialog';
import manageUser from '../containers/manageUser.js';
import manageRoom from '../containers/manageRooms.js';

function Mainlayout() {
    return (
        <div className="container-mainlayout">
            <div className="header-mainlayout">
                Xin chao, admin
            </div>
            <div className="body-mainlayout">
                <Router>
                    <div className="sidebar-menu">
                        <div><NavLink className="nav-link" to="/"><i className="fa fa-user"> Quản lý User</i></NavLink></div>
                        <div><NavLink className="nav-link" to="/room"><i className="fa fa-home"> Quản lý Room</i></NavLink></div>
                        {/* <div><NavLink className="nav-link" to="/about">Quản lý Comment</NavLink></div> */}
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/" exact component={manageUser} />
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