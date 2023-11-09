import React, { Component } from "react";
import {Table,TableRow,TableCell, Input} from '@material-ui/core';
import '../css/default.css'
import moment from 'moment' // 날짜 타입
//npm install moment --force


class BoardList extends Component{
    constructor (props){
        super(props)
        this.state = {
            value : '',
            show_update : 'block',
            show_delete : 'none'
        }
    }

    //수정버튼 클릭
    displayUpdateClick = (e) => {
        this.setState({
            show_update : 'block',
            show_delete : 'none'
        });
    }
    //삭제버튼 클릭
    displayDeleteClick = (e) => {
        this.setState({
            show_update : 'none',
            show_delete : 'block'
        });
    }

    //<input> 첫글자 소문자 => HTML 태그
    //<Input> 첫글자 대문자 => @material-ui/core에서 제공하는 input box로 라인 형태로 제공
    render(){
        return(
            <div>
                <form action="/api/boardUpdate" method="POST">
                    <input type="hidden" name="board_no" value={this.props.board_no}/>   {/* where절에서 key 비교하기 위해 hidden으로 board_no를 전달 */}
                    {/* 리스트 결과 */}
                    <Table>
                        <TableRow>
                            <TableCell width="20%" name="board_no" value={this.props.board_no}>{this.props.board_no}</TableCell>
                            <TableCell width="20%" name="board_title" >{this.props.board_title}</TableCell>
                            <TableCell width="20%" name="board_content" >{this.props.board_content}</TableCell>
                            <TableCell width="20%" name="board_email" >{this.props.board_email}</TableCell>
                            <TableCell width="20%" name="board_regdate" >{moment(this.props.board_regdate).format('YYYY-MM-DD hh:mm')}</TableCell>
                            <TableCell width="10%"><input type="button" class="btn" value="수정" onClick={this.displayUpdateClick}/></TableCell>
                            <TableCell width="10%"><input type="button" class="btn" value="삭제" onClick={this.displayDeleteClick}/></TableCell>
                        </TableRow>
                    </Table>

                    {/* 수정화면 */}
                    <div className="list" style={{display: this.state.show_update}}>
                        <Table>
                            <TableRow>
                                <TableCell>
                                    <Input type="text" name="board_title" placeholder={this.props.board_title}/>
                                </TableCell>
                                <TableCell>
                                    <Input type="textarea" name="board_content" placeholder={this.props.board_content}/>
                                </TableCell>
                                <TableCell>
                                    <Input type="text" name="board_email" placeholder={this.props.board_email}/>
                                </TableCell>
                                <TableCell>
                                    {moment(this.props.board_regdate).format('YYYY-MM-DD hh:mm')}
                                </TableCell>
                                <TableCell>
                                    <input type="submit" class="btn" value="수정" color="primary"/>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </div>
                </form>
                {/* 삭제화면 */}
                <div className="delete" style={{display: this.state.show_delete}}>
                    <form action="/api/boardDelete" method="POST">
                    <input type="hidden" name="board_no" value={this.props.board_no}/>
                        <Table>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell></TableCell>
                                <TableCell>
                                    <span align="center">삭제하시겠습니까?</span>
                                </TableCell>
                                <TableCell>
                                    {moment(this.props.board_regdate).format('YYYY-MM-DD hh:mm')}
                                </TableCell>
                                <TableCell>
                                    <input type="submit" class="btn" value="삭제" color="primary"/>
                                </TableCell>
                            </TableRow>
                        </Table>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default BoardList;