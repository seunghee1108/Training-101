// 문제 86번 : Express.js에서 라우팅을 처리하는 코드를 작성해보세요.

const app = express();
const port = 3000;

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.use('/', router);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port}/ 에서 실행 중입니다.`);
});
