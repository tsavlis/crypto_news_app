import { GET_GAMES } from "../types";
import axios from "axios";

export function getGames() {
  const request = axios({
    method: "GET",
    url: `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25470e1aac5b44b889cf7bc59276e55a`
  })
    .then(response => {
      const articles = [];
      for (let key in response.data) {
        articles.push({
          ...response.data[key],
          id: key
        });
      }
      return articles;
    })
    .catch(e => {
      return false;
    });
  return {
    type: GET_GAMES,
    payload: request
  };
}

const url =
  "https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-20&sortBy=publishedAt&apiKey=25470e1aac5b44b889cf7bc59276e55a";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
