import React, { Component } from "react";
import BorderList from './BoradList';
import {Table,TableHead,TableRow,TableCell} from '@material-ui/core';

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
                <form action="" method="POST">
                    <input type="hidden" name="board_no" value={this.props.board_no}/>   {/* where절에서 key 비교하기 위해 hidden으로 board_no를 전달 */}
                    {/* 리스트 결과 */}
                    <Table>
                        <TableRow>
                            <TableCell width="20%" name="board_no" value={this.props.board_no}>{this.props.board_no}</TableCell>
                            <TableCell width="20%" name="board_title" >{this.props.board_title}</TableCell>
                            <TableCell width="20%" name="board_content" >{this.props.board_content}</TableCell>
                            <TableCell width="20%" name="board_email" >{this.props.board_email}</TableCell>
                            <TableCell width="20%" name="board_regdate" >{this.props.board_regdate}</TableCell>
                            <TableCell width="10%"><input type="button" class="btn" value="수정" onClick={this.displayUpdateClick}/></TableCell>
                            <TableCell width="10%"><input type="button" class="btn" value="삭제" onClick={this.displayDeleteClick}/></TableCell>
                        </TableRow>
                    </Table>
                </form>
            </div>
        );
    }
}

export default BoardList;