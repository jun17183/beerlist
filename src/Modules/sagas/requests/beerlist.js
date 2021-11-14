import axios from "axios";

export function requestGetBeerlist() {
  return axios.request({
    method: "get",
    url: "https://api.punkapi.com/v2/beers"
  })
}