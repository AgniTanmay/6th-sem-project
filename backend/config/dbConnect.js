const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://WASIF321:Ansari738871@wasifdatabase.wdcjr.mongodb.net/project",
      {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
      },
      () => {
        console.log('DB connected');
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
