import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { serverUrl } from "../services/serverUrl";
import { updateUserProfileApi } from "../services/allApi";
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
    const [open, setOpen] = useState(false);
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
        role: "",
        profileImg: null,
    });
    const [preview, setPreview] = useState("");
    const [existingImg, setExistingImg] = useState("");
    const [updateStatus, setUpdateStatus] = useState({});

    // Handle file input
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserDetails({ ...userDetails, profileImg: file });
            setPreview(URL.createObjectURL(file));
        }
    };

    // Handle form submission for updating the profile
    const handleUpdate = async () => {
        const { username, email, password, profileImg, role } = userDetails;

        if (!profileImg && !existingImg) {
            alert("Please upload a profile image.");
            return;
        }

        const reqBody = new FormData();
        reqBody.append("username", username);
        reqBody.append("email", email);
        reqBody.append("password", password);
        reqBody.append("role", role);
        reqBody.append("profileImg", profileImg || existingImg);

        const token = sessionStorage.getItem("token");
        const headers = {
            Authorization: `Bearer ${token}`,
            ...(profileImg && { "Content-Type": "multipart/form-data" }),
        };

        try {
            const result = await updateUserProfileApi(reqBody, headers);
            if (result.status === 200) {
                alert("Profile updated successfully!");
                const updatedUser = result.data;
                sessionStorage.setItem("existingUser", JSON.stringify(updatedUser));
                setUserDetails({
                    ...userDetails,
                    username: updatedUser.username,
                    email: updatedUser.email,
                    role: updatedUser.role,
                    profileImg: null,
                });
                setExistingImg(updatedUser.profileImg);
                setPreview("");
            } else {
                alert("Update failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during profile update:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    // Load user details from session storage on mount
    useEffect(() => {
        const user = sessionStorage.getItem("existingUser");
        if (user) {
            const parsedUser = JSON.parse(user);
            setUserDetails({
                username: parsedUser.username,
                email: parsedUser.email,
                password: parsedUser.password,
                role: parsedUser.role,
                profileImg: null,
            });
            setExistingImg(parsedUser.profileImg);
        }
    }, [updateStatus]);

    return (
        <>
            <div className="p-4 shadow" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                <div className="d-flex justify-content-between">
                    <h4 className="text-primary">Profile</h4>
                    <button onClick={() => setOpen(!open)} className="btn border-primary">
                        {open == true ? <FontAwesomeIcon icon={faAngleUp} /> :
                            <FontAwesomeIcon icon={faAngleDown} />}
                    </button>
                </div>
                <Collapse in={open}>
                    <div>
                        <div className="d-flex justify-content-center align-items-center flex-column mt-3">
                            <label htmlFor="profileImg" className="mb-4 d-flex flex-column align-items-center">
                                <input
                                    type="file"
                                    id="profileImg"
                                    style={{ display: "none" }}
                                    onChange={handleFile}
                                    onClick={() => document.getElementById("profileImg").click()}
                                />
                                <img
                                    src={
                                        preview ||
                                        (existingImg
                                            ? `${serverUrl}/upload/${existingImg}`
                                            : "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png")
                                    }
                                    alt="Profile Preview"
                                    style={{
                                        width: "250px",
                                        height: "200px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                    }}
                                />
                            </label>
                            <div className="w-100">
                                <button className="btn btn-primary w-100" onClick={handleUpdate}>
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        </>
    );
}

export default Profile;