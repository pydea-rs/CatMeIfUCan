import axios from "axios";

const getEntities = (onSuccess = null, onFailure = null) =>
    axios
    .get("http://127.0.0.1:8000/api/entities/", {
        headers: { accept: "application/json" },
    })
    .then((res) => (onSuccess ? onSuccess(res) : console.log(res)))
    .catch((err) => (onFailure ? onFailure(err) : console.log(err)));

const uploadImage = (file, onSuccess = null, onFailure = null) => {
    console.log(file);
    const formData = new FormData();
    formData.append("image", file, file.name);
    formData.append("classification", "Receipt");
    return axios.post("http://127.0.0.1:8000/api/entities/", formData, {
        accept: "application/json",
        "content-type": "multipart/form-data",
    });
};
export default { getEntities, uploadImage };
