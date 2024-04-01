import { useState } from "react"
import { CreateProduct } from "../utils/HandelEvent"
import { Navigate } from "react-router-dom"

const Add = () => {
    const [comp, setComp] = useState("")
    const [type, setType] = useState("")
    const [img, setImg] = useState("")
    const [redirect, setRedirect] = useState(false)

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (

        <div className="add-page">
            <form className="add" encType="multipart/form-data"
                onSubmit={(e) => CreateProduct(e, img[0], type, comp, setRedirect)}
            >
                <div className="select">
                    <label htmlFor="inputGender" >company : </label>
                    <select name="comp" id="inputGender"
                        onChange={e => setComp(e.target.value)}
                    >
                        <option hidden >Choose here ...</option>
                        <option>company one</option>
                        <option>company two</option>
                        <option>company three</option>
                    </select>
                </div>
                <div className="select">
                    <label htmlFor="inputGender" >type : </label>
                    <select name="type" id="inputGender"
                        onChange={e => setType(e.target.value)}
                    >
                        <option hidden >Choose here ...</option>
                        <option >type one</option>
                        <option>type two</option>
                        <option>type three</option>
                    </select>
                </div>
                <div>
                    <input type="file" name="image"
                        // value={""}
                        onChange={e => setImg(e.target.files)}
                    />
                </div>
                <div >
                    <button type="submit"

                    >Add Product</button>
                </div>
            </form>
        </div>
    )
}

export default Add