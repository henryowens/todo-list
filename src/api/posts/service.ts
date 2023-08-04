import axios from "axios";
import { GetPostReponse } from "./models";
import { getAxiosData } from "../../../utils/api";

const postsApiService = {
  get: () => getAxiosData(axios.get<GetPostReponse>("/posts")),
};

export default postsApiService;
