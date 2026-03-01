/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method } from "axios";
import dashboardStore from "../store/DashboardStore";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

interface RequestConfig<T = any> {
    method: Method;
    url: string;
    payload?: T;
    config?: AxiosRequestConfig;
}

interface GlobalResponse<T = any> {
    success: boolean;
    data: T | T[];
}

export async function axiosClient<T = any>({ method, url, payload, config }: RequestConfig<T>) {
    try {
        dashboardStore.setGlobalLoading(true);
        dashboardStore.setGlobalError(false);
        dashboardStore.setGlobalErrorMessage("");

        const response: GlobalResponse = await axiosInstance.request({
            method,
            url,
            data: payload,
            ...config,
        });

        return response.data;
    } catch (err: any) {
        console.error("API Error:", err);

        const errorMessage = err.response?.data?.message || err.message || "Something went wrong!";
        dashboardStore.setGlobalError(true);
        dashboardStore.setGlobalErrorMessage(errorMessage);

        throw err;
    } finally {
        dashboardStore.setGlobalLoading(false);
    }
}