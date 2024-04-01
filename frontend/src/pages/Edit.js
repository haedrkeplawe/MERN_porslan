import { useLocation, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProduct, UpdateProduct } from "../utils/HandelEvent"

const Edit = () => {
    const id = useLocation().search.slice(4,)
    const [product, setProduct] = useState("")
    const [comp, setComp] = useState("")
    const [type, setType] = useState("")
    const [img, setImg] = useState("")
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        getProduct(id, setProduct, setComp, setType)
    }, [])

    if (redirect) {
        return <Navigate to={'/'} />
    }
    console.log(type);
    console.log(comp);
    return (
        <div className="add-page">
            <form className="add"
                onSubmit={(e) => UpdateProduct(e, id, img[0], type, comp, setRedirect)}
            >
                <div className="select">
                    <label htmlFor="inputGender" >company : </label>
                    <select required name="comp" id="inputGender"
                        onChange={e => setComp(e.target.value)}
                    >
                        <option hidden >{product.comp}</option>
                        <option>company one</option>
                        <option>company two</option>
                        <option>company three</option>
                    </select>
                </div>
                <div className="select">
                    <label htmlFor="inputGender" >النخب</label>
                    <select required name="type" id="inputGender" className="form-select"
                        onChange={e => setType(e.target.value)}
                    >
                        <option hidden >{product.type}</option>
                        <option
                        >type one
                        </option>
                        <option
                        >type two
                        </option>
                        <option
                        >type three
                        </option>
                    </select >
                </div >
                <div>
                    <input required type="file" name="image"
                        onChange={e => setImg(e.target.files)}
                    />
                </div>
                <div >
                    <button type="submit">Update Product</button>
                </div>
            </form >
        </div>
    )
}

export default Edit