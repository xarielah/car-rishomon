import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL ?? "";
const searchCar = (q: string) =>
  axios.get(BASE_URL + `&filters={"mispar_rechev": "` + q + `"}`);

export default searchCar;
