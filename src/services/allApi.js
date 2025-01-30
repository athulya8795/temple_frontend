import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

// Utility function for default headers
const defaultHeaders = (token = "") => ({
    Authorization: token ? `Bearer ${token}` : "",
});

//  Centralized API error handling
const handleApiError = (error, apiName) => {
    console.error(`${apiName} API error:`, error.response?.data?.message || error.message || error);
    throw error;
};

// ===================== AUTHENTICATION APIs ===================== //

//  Register API
export const registerApi = async (reqBody) => {
    try {
        return await commonApi("POST", `${serverUrl}/register`, reqBody, {});
    } catch (error) {
        handleApiError(error, "Register");
    }
};

//  Login API
export const loginApi = async (reqBody) => {
    try {
        return await commonApi("POST", `${serverUrl}/login`, reqBody, {});
    } catch (error) {
        handleApiError(error, "Login");
    }
};

// ===================== BOOKING APIs ===================== //

//  Book a service
export const BookingApi = async (reqBody, token) => {
    try {
        return await commonApi("POST", `${serverUrl}/booking`, reqBody, defaultHeaders(token));
    } catch (error) {
        handleApiError(error, "Booking");
    }
};

// Get User Bookings
export const userVazhipadApi = async (searchKey, reqHeader) => {
    try {
        return await commonApi("GET", `${serverUrl}/user-booking?search=${searchKey}`, {}, reqHeader);
    } catch (error) {
        handleApiError(error, "Get User Booking");
    }
};

// Remove User Booking
export const removeUserVazhipadApi = async (id, reqHeader) => {
    try {
        return await commonApi("DELETE", `${serverUrl}/remove-uservazipad/${id}`, {}, reqHeader);
    } catch (error) {
        handleApiError(error, "Remove User Booking");
    }
};

// Update User Booking
export const updateUserVazhipadApi = async (id, reqBody, reqHeader) => {
    try {
        return await commonApi("PUT", `${serverUrl}/update-uservazipad/${id}`, reqBody, reqHeader);
    } catch (error) {
        handleApiError(error, "Update User Booking");
    }
};

// Update User Profile
export const updateUserProfileApi = async (reqBody, reqHeader) => {
    try {
        return await commonApi("PUT", `${serverUrl}/update-userprofile`, reqBody, reqHeader);
    } catch (error) {
        handleApiError(error, "Update User Profile");
    }
};

// ===================== TESTIMONY APIs ===================== //

// Submit Testimony
export const submitTestimony = async (reqBody) => {
    try {
        return await commonApi("POST", `${serverUrl}/add`, reqBody, {});
    } catch (error) {
        handleApiError(error, "Submit Testimony");
    }
};

// Fetch Testimonies
export const fetchTestimonies = async () => {
    try {
        const response = await commonApi("GET", `${serverUrl}/all`, {}, {});
        return response.data;
    } catch (error) {
        handleApiError(error, "Fetch Testimonies");
    }
};

// get all bookings
export const getUserBookingapi = async (reqHeader) => {
    try {
        const response = await commonApi("GET", `${serverUrl}/all-bookings`, {}, reqHeader);
        return response;  // ✅ Return the full response so we can check `status`
    } catch (error) {
        handleApiError(error, "Fetch Bookings");
        return { data: [] };  // ✅ Return an empty array to prevent errors
    }
};

// get all bookings
export const getUserTestimonyapi = async (reqHeader) => {
    try {
        const response = await commonApi("GET", `${serverUrl}/all-testimony`, {}, reqHeader);
        return response;  // ✅ Return the full response so we can check `status`
    } catch (error) {
        handleApiError(error, "Fetch Bookings");
        return { data: [] };  // ✅ Return an empty array to prevent errors
    }
};

export const getUserapi = async (reqHeader) => {
    try {
        const response = await commonApi("GET", `${serverUrl}/all-users`, {}, reqHeader);
        return response;  // ✅ Return the full response so we can check `status`
    } catch (error) {
        handleApiError(error, "Fetch Bookings");
        return { data: [] };  // ✅ Return an empty array to prevent errors
    }
};