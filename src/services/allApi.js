import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

// Default headers for APIs that require authentication
const defaultHeaders = (token) => ({
    Authorization: `Bearer ${token}`,
});

// Register
export const registerApi = async (reqBody) => {
    try {
        return await commonApi("POST", `${serverUrl}/register`, reqBody, {});
    } catch (error) {
        console.error("Register API error:", error);
        throw error; // Rethrow for higher-level handling
    }
};

// Login
export const loginApi = async (reqBody) => {
    try {
        return await commonApi("POST", `${serverUrl}/login`, reqBody, {});
    } catch (error) {
        console.error("Login API error:", error);
        throw error;
    }
};

// Booking
export const BookingApi = async (reqBody, token) => {
    try {
        return await commonApi(
            "POST",
            `${serverUrl}/booking`,
            reqBody,
            token ? defaultHeaders(token) : {}
        );
    } catch (error) {
        console.error("Booking API error:", error);
        throw error;
    }
};

// get user booking
export const userVazhipadApi = async (reqHeader) => {
    try {
        return await commonApi("GET", `${serverUrl}/user-booking`, {}, reqHeader);
    } catch (error) {
        console.error("userVazhipad API error:", error);
        throw error;
    }
};

// remove user api
export const removeUserVazhipadApi = async (id,reqHeader) => {
    try {
        return await commonApi("DELETE", `${serverUrl}/remove-uservazipad/${id}`, {}, reqHeader);
    } catch (error) {
        console.error("userVazhipad API error:", error);
        throw error;
    }
};

// update booking
export const updateUserVazhipadApi = async (id,reqBody,reqHeader) => {
    try {
        return await commonApi("PUT", `${serverUrl}/update-uservazipad/${id}`, reqBody, reqHeader);
    } catch (error) {
        console.error("userVazhipad API error:", error);
        throw error;
    }
};