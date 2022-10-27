import axios from "axios";
const BASE_URL = "https://dummyjson.com";
export const apiInstance = async (
  method: string,
  url: string,
  data: object
) => {
  const res = await axios({ method, url: BASE_URL + url, data });
  if (res.status === 200) return res;
  return { errors: { msg: "error " } };
};
