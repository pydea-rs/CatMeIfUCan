import axios from "axios";

const root = "https://grateful-lake-plastic.glitch.me/",
    apiRoot = `${root}api/`,
    entitiesPath = `${apiRoot}entities/`,
    entityClassPath = `${apiRoot}predictions/entity/`;

const getEntities = (onSuccess = null, onFailure = null) =>
    axios
        .get(entitiesPath, {
            headers: { accept: "application/json" },
        })
        .then((res) => (onSuccess ? onSuccess(res) : console.log(res)))
        .catch((err) => (onFailure ? onFailure(err) : console.log(err)));

const uploadImage = (file) => {
    console.log(file);
    const formData = new FormData();
    formData.append("image", file, file.name);
    formData.append("classification", "Receipt");
    return axios.post(entitiesPath, formData, {
        accept: "application/json",
        "content-type": "multipart/form-data",
    });
};

const getClassifications = (entityID) =>
    axios.get(`${entityClassPath}${entityID}/`, {
        headers: { accept: "application/json" },
    });

export default {
    routes: { root, apiRoot, entities: entitiesPath },
    getEntities,
    getClassifications,
    uploadImage,
};
