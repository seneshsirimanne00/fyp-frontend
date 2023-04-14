import axiosInstance from "./AxiosController";

export const sendComment = async () => {
    const Url = `/sendComment`;
    return await axiosInstance.post(Url,{});
  }; // use this to send the post request 