import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

// Utility function for default headers
const defaultHeaders = (token) => ({
    Authorization: `Bearer ${token}`,
});

// API: Register
export const registerApi = async (reqBody) => {
    try {
        const response = await commonApi("POST", `${serverUrl}/register`, reqBody, {});
        return response;
    } catch (error) {
        console.error("Register API error:", error.message || error);
        throw error; // Ensure the error propagates
    }
};

// API: Login
export const loginApi = async (reqBody) => {
    try {
        const response = await commonApi("POST", `${serverUrl}/login`, reqBody, {});
        return response;
    } catch (error) {
        console.error("Login API error:", error.message || error);
        throw error;
    }
};

// API: Booking
export const BookingApi = async (reqBody, token) => {
    try {
        const headers = token ? defaultHeaders(token) : {};
        const response = await commonApi("POST", `${serverUrl}/booking`, reqBody, headers);
        return response;
    } catch (error) {
        console.error("Booking API error:", error.message || error);
        throw error;
    }
};

// API: Get User Bookings
export const userVazhipadApi = async (searchKey, reqHeader) => {
    try {
        const response = await commonApi("GET", `${serverUrl}/user-booking?search=${searchKey}`, {}, reqHeader);
        return response;
    } catch (error) {
        console.error("Get User Booking API error:", error.message || error);
        throw error;
    }
};

// API: Remove User Booking
export const removeUserVazhipadApi = async (id, reqHeader) => {
    try {
        const response = await commonApi("DELETE", `${serverUrl}/remove-uservazipad/${id}`, {}, reqHeader);
        return response;
    } catch (error) {
        console.error("Remove User Booking API error:", error.message || error);
        throw error;
    }
};

// API: Update User Booking
export const updateUserVazhipadApi = async (id, reqBody, reqHeader) => {
    try {
        const response = await commonApi("PUT", `${serverUrl}/update-uservazipad/${id}`, reqBody, reqHeader);
        return response;
    } catch (error) {
        console.error("Update User Booking API error:", error.message || error);
        throw error;
    }
};

// API: Update User Profile
export const updateUserProfileApi = async (reqBody, reqHeader) => {
    try {
        const response = await commonApi("PUT", `${serverUrl}/update-userprofile`, reqBody, reqHeader);
        return response;
    } catch (error) {
        console.error("Update User Profile API error:", error.message || error);
        throw error;
    }
};
