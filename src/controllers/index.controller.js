import fs from "node:fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const getPomodoros = () => {
  fs.readFile(join(__dirname, "../data/pomodoros.data.json"), (error, data) => {
    if (error) {
      console.log(error);
      throw err;
    }

    const pomodoroData = JSON.parse(data);

    let dataObj = Object.entries(pomodoroData);
    let pomodoros = [];
    dataObj.forEach((pomodoro) => {
      pomodoros.push([pomodoro[1].id, pomodoro[1].title]);
    });
    return pomodoros;
  });
};

console.log(getPomodoros());

export const indexController = (req, res) => {
  res.render("index.ejs", { pomodoros: getPomodoros() });
};

export const createPomodoro = (req, res) => {
  res.render("index.ejs", { pomodoros: getPomodoros() });
};
