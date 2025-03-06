import React, { useEffect, useState } from "react";
import { FaCamera, FaSave, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { firestore } from "../configs/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

const ProfileUpdate = () => {
    const uid = useSelector((state) => state.user.uid);

    const [formData, setFormData] = useState({
        username: "",
        displayName: "",
        bio: "",
        skills: [],
        github: "",
        linkedin: "",
        twitter: "",
        profilePic: null,
    });

    const [loading, setLoading] = useState(true); // Fetch hone tak loading state

    // 🔹 Firestore se data fetch karna
    useEffect(() => {
        const fetchProfileData = async () => {
            if (!uid) return;
            const docRef = doc(firestore, "users", uid);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
                setFormData(docSnap.data()); // 🔥 Firestore ka data form me pre-fill
            }
            setLoading(false); // Data load ho gaya
        };

        fetchProfileData();
    }, [uid]);

    // 🔹 Input Change Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // 🔹 Skills Change Handler (Convert String to Array)
    const handleSkillsChange = (e) => {
        const skillsArray = e.target.value.split(",").map(skill => skill.trim());
        setFormData((prev) => ({ ...prev, skills: skillsArray }));
    };

    // 🔹 Enter Button Click Se Form Submit Na Ho
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
        }
    };

    // 🔹 Profile Picture Upload
    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, profilePic: e.target.files[0] }));
    };

    // 🔹 Form Submit (Firestore me save karna)
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = doc(firestore, "users", uid);
            await setDoc(docRef, formData);
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    if (loading) return <p className="text-center text-gray-400">Loading profile...</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 text-white rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-black dark:text-white">Edit Profile</h2>
            <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} className="mt-6 space-y-4">

                {/* Profile Picture Upload */}
                <div className="flex flex-col items-center">
                    <label className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-500 cursor-pointer">
                        {formData.photoUrl ? (
                            <img
                                src={URL.createObjectURL(formData.photoUrl)}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full relative flex items-center justify-center text-gray-400 dark:text-gray-300">
                                <FaUser className="w-16 h-20 dark:text-gray-300" />
                                <FaCamera className="absolute text-white opacity-0 hover:opacity-100 duration-300 hover:text-gray-500 dark:hover:text-gray-400 cursor-pointer" />
                            </div>
                        )}
                        <input type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                </div>

                {/* Username */}
                <div>
                    <label className="block font-medium text-gray-700 dark:text-gray-300">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-200 text-black focus:outline-none dark:bg-gray-700 dark:border border-gray-600 dark:text-gray-300"
                        placeholder="Enter your username"
                    />
                </div>

                {/* Full Name */}
                <div>
                    <label className="block font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.displayName}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-200 text-black focus:outline-none dark:bg-gray-700 dark:border border-gray-600 dark:text-gray-300"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Bio */}
                <div className="relative">
                    <label className="block font-medium">Bio</label>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-200 text-black focus:outline-none dark:bg-gray-700 dark:border border-gray-600 dark:text-gray-300"
                        placeholder="Write something about yourself..."
                        maxLength={150}
                    />
                    <p className="text-right absolute bottom-1.5 right-1.5 text-sm text-gray-400">
                        {formData.bio?.length}/150
                    </p>
                </div>

                {/* Skills Input */}
                <div>
                    <label className="block font-medium text-gray-700 dark:text-gray-300">Skills</label>
                    <input
    type="text"
    name="skills"
    value={(formData.skills || []).join(", ")}
    onChange={handleSkillsChange}
    className="w-full p-2 mt-1 rounded bg-gray-200 text-black focus:outline-none dark:bg-gray-700 dark:border border-gray-600 dark:text-gray-300"
    placeholder="Enter skills (comma separated)"
/>

                </div>

                {/* Social Media Links */}
                <div>
                    <label className="block font-medium">GitHub</label>
                    <input type="text" name="github" value={formData.github} onChange={handleChange} className="w-full p-2 mt-1 rounded bg-gray-200 dark:bg-gray-700 border border-gray-600" placeholder="GitHub Profile Link" />
                </div>

                {/* Submit & Cancel Buttons */}
                <div className="flex gap-2">
                    <Link to="/" className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md flex items-center gap-1 justify-center">
                        <FaTimes /> Cancel
                    </Link>
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md flex items-center gap-1 justify-center cursor-pointer">
                        <FaSave /> Save
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ProfileUpdate;
