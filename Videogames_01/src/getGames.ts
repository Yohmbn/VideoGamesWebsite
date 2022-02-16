import request from "@fewlines-education/request";


export function getGames(): void {
  request("https://videogame-api.fly.dev/games", (error, html) => {
  if (error) {
    console.error(error);
  } else {
    const body = JSON.parse(html)
    console.log(body);
  }
});
}
