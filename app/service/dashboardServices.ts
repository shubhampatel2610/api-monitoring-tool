/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosClient } from "../utils/axiosClient";

export const fetchAPIData = async () => {
    const response = await axiosClient({
        method: "GET",
        url: "/monitors",
    });

    return response;
}

export const saveAPIData = async (payload: any) => {
    const response = await axiosClient({
        method: "POST",
        url: "/monitors",
        payload: payload
    });

    return response;
}