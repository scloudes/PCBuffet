import axios from "axios";

const ENDPOINT = "category";

export default function getCategories(id) {
  return axios.get(ENDPOINT).then((res) => {
    return res.data;
  });
}
