import { httpGet, httpPost, httpPut } from './request';

exports.getApi = (req, res) => {
  const uri = req.params.uri;
  res.send(`${uri} get api`);
}

exports.postApi = (req,res) => {
  res.send('post api');
}

exports.deleteApi = (req,res) => {
  const uri = req.params.uri;
  res.send(`${uri} delete api`);
}

exports.putApi = (req,res) => {
  const uri = req.params.uri;
  res.send(`${uri} put api`);
}

exports.patchApi = (req,res) => {
  const uri = req.params.uri;
  res.send(`${uri} patch api`);
}