import express from 'express';
import indexCtrl from './index.ctrl';

const api = express.Router();
api.get('/:uri',indexCtrl.getApi);
api.post('/:uri',indexCtrl.postApi);
api.delete('/:uri',indexCtrl.deleteApi);
api.put('/:uri',indexCtrl.putApi);
api.patch('/:uri',indexCtrl.patchApi);

export default api;