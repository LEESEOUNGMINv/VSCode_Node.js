//-----------------------------------------------------------------설정
var oracledb = require('oracledb')
var dbConfig = require('./dbConfig.js')     //경로주의

// express 기본 모듈
var express = require('express');
var http = require('http');
var path = require('path');

// express 객체 생성
var app = express();

// proxy설정 설정포트와 기본설정 포트가 일치해야함
// apckage.json → "proxy" : "http://localhost:5000",
// 기본 속성 설정
app.set('port',process.env.PORT || 5000); //PORT || 포트번호 → 포트 중복 안되게

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var router = express.Router();

//오라클 자동 커밋 설정
oracledb.autoCommit = true;

//-----------------------------------------------------------------CRUD
// 데이터 조회
app.get('/api/boardList', function(){
    console.log('[ boardList ]');   //nodemon 콘솔에서 확인
    oracledb.getConnection({
        user:dbConfig.user,
        password:dbConfig.password,
        connectString : dbConfig.connectString
        },
        function(err, connection){
            if(err){
                console.log('접속 실패',err);
                console.error(err.message);
                return;
            }
            console.log('접속 성공');
            let query = 'SELECT * FROM react_board_tbl ORDER BY board_no DESC';
            connection.execute(query,[],{outFormat:oracledb.OBJECT},function(err, result){
                if(err){
                    console.error(err.message);
                    doRelease(connection);
                    return;
                }
                console.log(result.rows); //데이터
                doRelease(connection, result.rows); //connection 해제
                response.send(result.rows);
            });
        }); //getConnection(), function{}

        //DB연결 해제
        function doRelease(connection, rowList){
            connection.release(function(err, rows){
                if(err){
                    console.error(err.message);
                }
                // DB 종료시까지 모두 완료되었을때 응답 데이터 변환
                console.log('list size : ' + rowList.lingth);
                console.log(rowList); //nodemon 콘솔창에 select 결과
            });
        } //doRelease()
}); //app.get()

// 데이터 등록

// 데이터 수정

// 데이터 삭제

// DB 연결 해제

//-----------------------------------------------------------------

// 라우터 객체를 app 객체에 등록
app.use("/", router);
// 페이지 오류 처리
app.all("*", function(req, res){
    res.status(404).send("<h3>ERROR - 페이지를 찾을 수 없습니다.</h3>")
});
// express 서버 시작
http.createServer(app).listen(app.get('port'),function(){
    console.log('Express Server listening in port' + app.get('port'));
});