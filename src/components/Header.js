import React, { Component } from "react";
import '../css/Header.css';
import WriteForm from './WriteForm';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <Router>
                <div>
                    <div className="logo">
                        Board
                    </div>
                    <div className="menu">
                        <Link to="/WriteForm"><div className="menu-item">작성하기</div></Link>
                    </div>
                </div>

                <div>
                    <div className="contant">
                        <Route exact path="/WriteForm" component={WriteForm} />
                    </div>
                </div>
            </Router>
        )
    }
}


export default Header;