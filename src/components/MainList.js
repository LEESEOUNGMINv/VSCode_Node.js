import React , { Component } from "react";
//npm install react-router-dom
import {BrowserRouter as Router} from 'react-router-dom'; 
//npm install @material-ui/core --force
import {Table,TableHead,TableRow,TableCell} from '@material-ui/core';
//npm install @material-ui/icons --force
import BorderList from './BoradList';

class MainList extends Component{
    state = {
        board : ''
    }

    //생명 주기

    render(){
        return(
            <Router>
                <div>
                    <h3 align='center'>게시판 목록</h3>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><b>No</b></TableCell>
                                <TableCell><b>Title</b></TableCell>
                                <TableCell><b>Content</b></TableCell>
                                <TableCell><b>Email</b></TableCell>
                                <TableCell><b>Regdate</b></TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>

                    {this.state.board 
                    ? 
                    this.state.board.map((bo, index) => {
                        return <BorderList key={index}
                                    board_no={bo.board_no}
                                    board_title={bo.board_title}
                                    board_content={bo.board_content}
                                    board_email={bo.board_email}
                                    board_regdate={bo.board_regdate}/>
                    }) 
                    : ''
                    }
                    
                </div>
            </Router>
        );
    }
}

export default MainList;