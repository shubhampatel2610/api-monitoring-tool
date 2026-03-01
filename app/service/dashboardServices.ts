import { axiosClient } from "../utils/axiosClient";

export const fetchAPIData = async () => {
    const response = await axiosClient({
        method: "GET",
        url: "/monitors",
    });

    return response;
}