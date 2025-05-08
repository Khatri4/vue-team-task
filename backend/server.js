const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require("./config.json");
const carRoutes = require('./routes/carRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/cars', carRoutes);

let url = `mongodb+srv://${config.usernmae}:${config.userpassword}@${config.clustername}.${config.userstring}.mongodb.net/${config.dbname}?retryWrites=true&w=majority&appName=Valtech`;
 
mongoose
  .connect(url)
  .then((res) => {
    console.log("DB Connected");
     app.listen(config.PORT, () => {
        console.log(`Server running on port ${config.PORT}`);
      });
  })
  .catch((error) => {
    console.log("Error", error);
  });