import express from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import api from './api';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();

router.use('/', api);
app.use(router);

app.listen(config.port,()=>{
  console.log(`${config.port} is opened!`);
});
 