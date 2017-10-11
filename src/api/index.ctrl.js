exports.getApi = (req, res) => {
  res.send(`${req.params.id} get api`);
}

exports.postApi = (req,res) => {
  res.send('post api');
}

exports.deleteApi = (req,res) => {
  res.send(`${req.params.id} delete api`);
}

exports.putApi = (req,res) => {
  res.send(`${req.params.id} put api`);
}

exports.patchApi = (req,res) => {
  res.send(`${req.params.id} patch api`);
}