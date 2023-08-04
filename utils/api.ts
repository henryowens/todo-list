import { AxiosResponse } from "axios";

export const getAxiosData = <T, D>(
  axiosPromise: Promise<AxiosResponse<T, D>>
) => axiosPromise.then(({ data }) => data);
