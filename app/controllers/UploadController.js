const multer = require('multer');
// var upload = multer({ dest: 'public/images' }).single('file')


//-- set storage destination and filename
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/images')
  },
  filename: function (req, file, cb) {
    console.log(file);
    console.log(file.mimetype.split('/')[1]);
    console.log(file.fieldname + '-' + Date.now()+ '.' + file.mimetype.split('/')[1]);
    
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
  }
})

var upload = multer({ storage: storage }).single('file')


module.exports = {

  // Get all users from mongodb
  // GET /api/users
  getAll: async (req, res) => {
    res.send('users')
  },


  // Upload single file
  // POST /api/upload
  upload: async (req, res) => {
    upload(req, res, function (err) {
      if (err) {
        res.send(err);
        console.log(err);
      } 
      else {
        res.send('Everything went fine');
      }
    })
  },


  // Upload multiple files
  // POST /api/uploadMany
  uploadMany: async (req, res) => {
    res.send('a');
  },

};
