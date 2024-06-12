import React, { useState } from "react";
import axios from "axios";

function UploadImg() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("image", selectedFile);

        axios
            .post("http://localhost:8080/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response => {
                setImageUrl(response.data.imageUrl);
                console.log(response)
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <br />
            <br />
            <center>
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUpload}>Upload Image</button>
                {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
            </center>
        </div>
    );
}

export default UploadImg;
