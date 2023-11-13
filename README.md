# node.js
 -기존 SpringBoot(backEnd) + React(frontEnd) + Oracle
 -현 node.js(backEnd) + React(frontEnd) + Oracle

# 프로젝트 생성
 //npm install -g create-react-app
 //npx create-react-app board-node # npx create-react-app 플젝명
 //Visual Studio Code 에서 File - Open Folder > board-node
 //new - Terminal > Command Prompt로 변경 후 
 //cd board-node
 //board-node > npm start

# css 폴더 생성 / 모든 css 

# src > components 폴더 생성 > 하위에 작성

# MainList.js
 //npm install react-router-dom     //"react-dom": "^18.2.0", → 버전 낮추기
 //npm install @material-ui/core --force
 //npm install @material-ui/icons --force
# App.js

# WriteForm.js
# Header.js     # Header.css

# BoardList.js
 //npm install moment --force

# MainList.js > 내일 작성
# src > oracle 폴더 생성 > 하위에 작성

# dbConfig.js → SpringBoot의 properties.config.xml에 해당
 //url : cmd 창에서 ipconfig ip 주소 확인
 //[IPv4 주소 . . . . . . . . . : 192.168.0.89]
 //단, AWS RDS 사용시 발급받은 url 기술

module.exports = {
    user : process.env.MODE_ORACLEDB_USER || "scott_01",
    password : process.env.MODE_ORACLEDB_PASSWORD || "tiger",
    connectString : process.env.MODE_ORACLEDB_CONNECTIONSTRING || "192.168.0.89/xe"
}

# db.js (CRUD 작성) → node.js
 //CRUD
 //테이블 생성
 //scott_01 계정에서 실행
<!-- DROP TABLE react_board_tbl CASCADE constraints;

CREATE TABLE react_board_tbl (
    board_no		NUMBER			PRIMARY KEY,
    board_title		VARCHAR2(100)	,
    board_content	VARCHAR2(100)	,
    board_email		VARCHAR2(100)	,
    board_regdate	DATE DEFAULT sysdate
);

SELECT * FROM react_board_tbl;

INSERT INTO react_board_tbl(board_no, board_title, board_content, board_email)
VALUES (1, '타이틀1', '내용1', 'hong@mail.com');

INSERT INTO react_board_tbl(board_no, board_title, board_content, board_email)
VALUES (2, '타이틀2', '내용2', 'hong@mail.com');

INSERT INTO react_board_tbl(board_no, board_title, board_content, board_email)
VALUES (3, '타이틀3', '내용3', 'hong@mail.com');

INSERT INTO react_board_tbl(board_no, board_title, board_content, board_email)
VALUES (4, '타이틀4', '내용4', 'hong@mail.com');

INSERT INTO react_board_tbl(board_no, board_title, board_content, board_email)
VALUES (5, '타이틀5', '내용5', 'hong@mail.com');

commit

SELECT * FROM react_board_tbl ORDER BY board_no DESC -->
 
# 실행
 //게시판 목록 타이틀만 뜬다

 # package.json 에서 확인
 # nodemon 설치
 //npm install nodemon -g
 
 # oracledb 설치
 //npm install oracledb --force     # "oracledb": "^6.2.0", 설치됨

 # express 설치
 //npm install express --force      # "express": "^4.18.2", 설치됨

 # body-parser 설치
 //npm install body-parser --force  # "body-parser": "^1.20.2", 설치됨

 # db.js
 //require('모듈') → 해당 모듈을 설치한다.

 # "proxy": "http://localhost:5000", 추가

 # -------------------------------------------------

 # nodemon 실행 - 경로 주의 (cd src/oracle)
 //workspace_react > board-node > cd src / oracle > nodemon db.js
 //nodemon db.js

# NJS-138: connections to this database server version are not supported by node-oracledb in Thin mode
# NJS-138 오류
 workspace_react>board-node> npm install react@^17.0.1 react-dom@^17.0.1   # 버전 다운
    workspace_react>board-node> npm install react-router-dom@^5.2.0 --force
     workspace_react>board-node> workspace_react>board-node> npm install oracledb@^5.5.0 

# 글작성
# db.js
 //sql문 추가
 //화면 : 작성하기
 //-nodemon 재실행 / CTRL+C / nodemon db.js

 # npm start