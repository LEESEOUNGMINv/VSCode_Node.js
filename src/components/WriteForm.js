import React, { Component } from "react";
import '../css/default.css';
import WriteForm from './WriteForm';
//npm install react-router-dom
import {BrowserRouter as Router} from 'react-router-dom'; 
//npm install @material-ui/core --force
import {Table,TableHead,TableRow,TableCell} from '@material-ui/core';

class WriteForm extends Component{
    constructor(props){
        super(props)
        this.state = {value : ''}
    }
    render(){
        return(
            <form>
                <h3 align="center">게시글 등록</h3>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>TITLE</TableCell>
                            <TableCell>CONTENT</TableCell>
                            <TableCell>EMAIL</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <input type="text" name="board_title" placeholder="제목을 입력하세요."/>
                            </TableCell>
                            <TableCell>
                                <input type="text" name="board_content" placeholder="내용을 입력하세요."/>
                            </TableCell>
                            <TableCell>
                                <input type="text" name="board_email" placeholder="이멜을 입력하세요."/>
                            </TableCell>
                            <TableCell>
                                <input class="btn" type="submit" value="글작성" color="primary"/>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </form>
        );
    }
}

export default WriteForm;