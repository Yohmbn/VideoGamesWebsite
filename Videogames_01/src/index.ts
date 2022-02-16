import express from "express";
import nunjucks from "nunjucks";
import { getGames } from "./getGames";
import * as readline from "readline";

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

app.get("/", (request, response) => {
  response.render("home"); // 🔎 See? "home"!
});

app.listen(2000, () => {
  console.log("Server started on http://localhost:2000");
});

getGames();

// app.set("view engine", "njk");

// app.get("/", (request, response) => {
//   response.render("home"); // 🔎 See? "home"!
// });
