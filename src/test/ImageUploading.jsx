import React, { useState } from "react";

function ImageUpload() {
    const [file, setFile] = useState(null);
    const [base64Image, setBase64Image] = useState("");

    const handleImageUpload = e => {
        e.preventDefault();
        const image = e.target.files[0];
        setFile(image);

        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
            setBase64Image(reader.result);
        };
    };

    return (
        <div>
            <form>
                <input type="file" onChange={handleImageUpload} />
            </form>
            {file && <img src={URL.createObjectURL(file)} alt="preview" />}
            {base64Image && (
                <div>
                    <p>Base64 String:</p>
                    <textarea value={base64Image} readOnly={true} />
                </div>
            )}
        </div>
    );
}

export default ImageUpload;
