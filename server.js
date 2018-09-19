import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

//Import models and routes
import Game from './app/models/game';
import { 
    getGames, 
    getGame, 
    postGame, 
    deleteGame 
} from './app/routes/game';

const app = express();
const port = process.env.PORT || 8080;

//DB connection via Mongoose
const options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
mongoose.Promise = global.Promise;

mongoose.connect('YOUR_MONGO_CONNECTION', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//Body Parser and Morgan Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

//Static assets for Express
app.use(express.static(__dirname + '/client/dist'));

//Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//API Routes
app.route('/games')
    //Create Game
    .post(postGame)
    //Get all Games
    .get(getGames);
    
app.route('/games/:id')
    //Get Single Game
    .get(getGame)
    //Delete Single Game
    .delete(deleteGame);

//Return Homepage
app.route('*').get((req, res) => {
    res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`Listening on port ${port}`);