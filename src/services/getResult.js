import axios from "axios";

const ENDPOINT = "result";

export default function getResult(data) {
  return axios.post(ENDPOINT, data).then((res) => {
    return res.data;
  });
}
