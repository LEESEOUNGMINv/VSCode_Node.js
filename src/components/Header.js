import React, { Component } from "react";
import '../css/Header.css';

class Header extends Component{
    render(){
        return(
            <Router>
                <div className="logo">
                    Board
                </div>
                <div className="menu">
                    <Link to="/WriteForm"><div className="menu-item">작성하기</div></Link>
                </div>

                <div>
                    <div className="contant">
                        <Route exact path="" Component={WriteForm}/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Header;