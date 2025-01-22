import axios from "axios";

export const commonApi = async (httpRequest, url, reqBody, reqHeader) => {
    const reqConfig = {
        method: httpRequest,
        url,
        data: reqBody,
        headers: reqHeader || { "Content-Type": "application/json" },
    };

    try {
        const response = await axios(reqConfig);
        return response; // Successful response
    } catch (error) {
        // Properly format and throw the error
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error("API Error Response:", error.response.data);
            throw error.response; // Throw only the response for easier handling
        } else if (error.request) {
            // Request was made but no response received
            console.error("API Request Error:", error.request);
            throw new Error("No response from server. Please try again later.");
        } else {
            // Something else happened
            console.error("Unexpected Error:", error.message);
            throw new Error(error.message);
        }
    }
};
