import React, { useState } from "react";
import FileUploadAPI from "../services/file-upload";
// File Upload
const Upload = () => {
  const [file, setFile] = useState([]);
  const [message, setMessage] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    console.log("I am Formdata:", formData.get("file"));

    try {
      const response = await FileUploadAPI(formData);
      console.log(response);
      console.log(response.msg);
      setMessage(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>{message.msg}</h2>

      {/* Upload file  */}
      <h1>File Upload</h1>
      <form method="POST" encType="multipart/form-data">
        <input type="file" name="file" onChange={handleFileChange} />
        <button type="button" onClick={handleSubmit}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
