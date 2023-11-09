import React , { Component } from "react";
//npm install react-router-dom
import {BrowserRouter as Router} from 'react-router-dom'; 
//npm install @material-ui/core --force
import {Table,TableHead,TableRow,TableCell, AppBar} from '@material-ui/core';
//npm install @material-ui/icons --force
import BorderList from './BoradList';
import '../css/App.css';

class MainList extends Component{
    state = {
        board : ''
    }

    //생명 주기
    componentDidMount(){
        this.callApi()
            .then(res => this.setState(({board: res}))) // arrow function : 화살표 함수 : 변수를 전달하면서 기능 구현
            .catch(err => console.log(err));
            console.log("this.state.board =>"+ this.state.board);
    }

    /*
        async/await 는 Promise를 더욱 쉽게 사용할 수 있도록 해주는 ES8(ES2017) (자바스크립트)문법이다
        이 문법을 사용하기 위해서 함수의 앞부분에 async 키워드를 추가하고,
        해당 함수 내부에서 Promise 앞부분에 await 키워드를 사용한다.

        이렇게 하면 Promise가 끝날때까지 기다리고, 결과값을 특정함수에 담을 수 있다.
        Promise는 콜백지옥 같은 코드가 형성되지 않게 하는 방안으로 ES6에 도입된 기능이다.
    */

    callApi = async() =>{
        const response = await fetch('/api/boardList'); // await fetch('url'); = json 형식으로 가져온 리스트(boardList)를 받아와서 response에 담는다.
        const body = await response.json();
        console.log("body ==> " + body);
        return body;
    }

    render(){
        return(
            <Router>
                <div display="flex" alignitems="center" justifyContent="center">
                    <AppBar position="static">
                        <div>Header</div>
                    </AppBar>
                    <br/>

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

                    { //setState()에 의해 board 값이 select한 결과로 변경후 boardList에 props 형태로 react_board_tbl 테이블의 게시판 정보가 전달
                      //porps로 전달된 값들은 반드시 대문자 컬럼
                    }

                    {this.state.board 
                    ? 
                    this.state.board.map((bo, index) => {
                        return <BorderList key={index}
                                    board_no={bo.BOARD_NO}
                                    board_title={bo.BOARD_TITLE}
                                    board_content={bo.BOARD_CONTENT}
                                    board_email={bo.BOARD_EMAIL}
                                    board_regdate={bo.BOARD_REGDATE}/>
                    }) 
                    : ''
                    }
                </div>
            </Router>
        );
    }
}

export default MainList;