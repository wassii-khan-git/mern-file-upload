import axios from "axios";

const URL = import.meta.env.REACT_API_URL;

const FileUploadAPI = async (form) => {
  try {
    const response = await axios.post(`${URL}/upload`, form);
    console.log("I am File Upload Response: ", response);
    return response.data;
  } catch (error) {
    console.log("I am File Upload Error:", error);
    return error;
  }
};
export default FileUploadAPI;
