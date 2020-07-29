
module.exports = function(app){
  
  const UploadController = require('../app/controllers/UploadController.js');

  app.get('/api/users', UploadController.getAll);

  app.post('/api/upload', UploadController.upload);

  app.post('/api/uploadMany', UploadController.uploadMany);

};
