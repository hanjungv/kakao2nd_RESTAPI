import express from 'express';
import indexCtrl from './index.ctrl';

const api = express.Router();
api.get('/:id',indexCtrl.getApi);
api.post('/',indexCtrl.postApi);
api.delete('/:id',indexCtrl.deleteApi);
api.put('/:id',indexCtrl.putApi);
api.patch('/:id',indexCtrl.patchApi);

export default api;