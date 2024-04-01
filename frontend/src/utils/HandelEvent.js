import axios from "axios"

const BaseUrl = "https://mern-porslan-api.onrender.com/"

const getAllProduct = (setProduct) => {
    axios.get(BaseUrl).then(response => {
        setProduct(response.data);
    })
}

const getProduct = (id, setProduct, setComp, setType) => {
    axios.get(BaseUrl + "view/" + id).then(response => {
        setProduct(response.data);
        if (setComp && setType) {
            setComp(response.data.comp)
            setType(response.data.type)
        }
    })
}

const CreateProduct = (e, img, type, comp, setRedirect) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", img);
    formData.append("type", type);
    formData.append("comp", comp);
    axios.post(BaseUrl + "user/add", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then(response => {
        setRedirect(true)
    })
}

const UpdateProduct = (e, id, img, type, comp, setRedirect) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", img);
    formData.append("type", type);
    formData.append("comp", comp);
    axios.post(BaseUrl + "user/add/" + id, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then(response => {
        setRedirect(true)
    })
}

const DeleteProduct = (e, id, setRedirect) => {
    e.preventDefault()
    axios.get(BaseUrl + "delete/" + id).then(response => {
        setRedirect(true)
    })
}

export {
    BaseUrl,
    getAllProduct,
    getProduct,
    CreateProduct,
    UpdateProduct,
    DeleteProduct
}