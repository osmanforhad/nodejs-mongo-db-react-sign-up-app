const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeUrls = require('./routes/route');
const cors = require('cors');

dotenv.config()


const app = express();

const connectionString = process.env.DATABASE_ACCESS

mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
        // useFindAndModify: false
    })
    .then(() => {
        console.log(`Database Connection Sucessfull`)
    }).catch(err => {
        console.log(`db error ${err.message}`);
        process.exit(-1)
    })

app.use(express.json());
app.use(cors());
app.use('/app', routeUrls);

app.listen(4000, () => console.log("server is up and running"));