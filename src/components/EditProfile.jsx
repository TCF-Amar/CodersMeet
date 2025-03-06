import React, { useState } from "react";

const EditProfile = () => {
    const [formData, setFormData] = useState({
        username: "",
        bio: "",
        github: "",
        linkedin: "",
        twitter: "",
        profilePic: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({ ...prev, profilePic: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Profile Data:", formData);
        // Yahan API call kar sakte ho data update karne ke liye
    };

    return (<div className="">

        <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg  ">
            <h2 className="text-2xl font-semibold text-center">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

                {/* Profile Picture Upload */}
                <div className="flex flex-col items-center">
                    <label className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-500 cursor-pointer">
                        {formData.profilePic ? (
                            <img
                                src={URL.createObjectURL(formData.profilePic)}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                Upload
                            </div>
                        )}
                        <input type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                </div>

                {/* Username */}
                <div>
                    <label className="block font-medium">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:border-gray-400"
                        placeholder="Enter your username"
                    />
                </div>

                {/* Bio */}
                <div>
                    <label className="block font-medium">Bio</label>
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:border-gray-400"
                        placeholder="Write something about yourself..."
                        maxLength={150}
                    />

                </div>
                
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, nulla cumque voluptatibus repellat fugiat, quasi eos debitis ipsum vero sed asperiores. Sapiente tempora molestiae earum debitis reiciendis non fuga velit.</p>
                {/* Social Media Links */}
                <div>
                    <label className="block font-medium">GitHub</label>
                    <input
                        type="text"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:border-gray-400"
                        placeholder="GitHub Profile Link"
                    />
                </div>

                <div>
                    <label className="block font-medium">LinkedIn</label>
                    <input
                        type="text"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:border-gray-400"
                        placeholder="LinkedIn Profile Link"
                    />
                </div>

                <div>
                    <label className="block font-medium">Twitter</label>
                    <input
                        type="text"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring focus:border-gray-400"
                        placeholder="Twitter Profile Link"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
                >
                    Save Changes
                </button>
            </form>
        </div>
    </div>
    );
};

export default EditProfile;
