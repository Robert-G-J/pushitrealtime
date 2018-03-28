import Pusher from "pusher";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// apply cors middleware to enable CORS
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pusher = new Pusher({
  appId: "APP_ID"
});
