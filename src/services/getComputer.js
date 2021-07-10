import axios from "axios";

const ENDPOINT = "computer";

export default function getComputer(id) {
  return axios.get(`${ENDPOINT}/${id}`).then((res) => {
    return res.data;
  });
}
