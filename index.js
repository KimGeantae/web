const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// body-parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));

// 정적 파일 제공
app.use(express.static('public'));

// 로그인 페이지 라우트
app.get('/', (req, res) => {
    res.render('login');
});

// 로그인 처리 라우트
app.post('/login', (req, res) => {
    const { id, password } = req.body;
    if (id === '12345' && password === 'hi') {
        res.redirect('/success');
    } else {
        res.send(<script>
                alert('사원번호와 패스워드를 다시 확인해주세요');
                window.location.href = '/';
            </script>
        `);
    }
});

// 성공 페이지 라우트
app.get('/success', (req, res) => {
    res.render('dashboard');
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
