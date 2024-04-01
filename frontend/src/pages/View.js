import { Link } from "react-router-dom"
import "./View.css"
import { useLocation, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getProduct, DeleteProduct, BaseUrl } from "../utils/HandelEvent"

const View = () => {
    const id = useLocation().search.slice(4,)
    const [product, setProduct] = useState("")
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        getProduct(id, setProduct)
    }, [])

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <>
            <div>
                <img src={BaseUrl + product.image} alt="" />
            </div>
            <div className="btnn">
                <Link to={"/edit?id=" + product._id}>Update</Link>
                <button
                    onClick={(e) => {
                        DeleteProduct(e, product._id, setRedirect)
                    }}
                    style={{ backgroundColor: "red" }}
                >Delete</button>
            </div>
        </>
    )
}

export default View