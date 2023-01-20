import {
  URL_BACK_SUGGESTIONS,
} from "../../constants/urls/urlBackEnd";
import apiBackEnd from "./api.Backend";

export function suggestions(author, id) {
  return apiBackEnd
    .post(URL_BACK_SUGGESTIONS + author + "/" + id)
    .then((response) => {
      return response;
    });
}


