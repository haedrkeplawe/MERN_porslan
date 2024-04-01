import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAllProduct, BaseUrl } from "../utils/HandelEvent"
import { ChoseeHandel } from "../utils/HandelFunction"

const Galearys = () => {
    const [product, setProduct] = useState("")
    useEffect(() => {
        getAllProduct(setProduct)
    }, [])
    return (
        <section className="galearys">
            <div className="container">
                <h1>Gallery</h1>
                <p
                    style={{
                        fontSize: "xx-large",
                        color: "#868d8a"
                    }}
                >company name!</p>
                <div className="galeary">
                    <ul>
                        <li className="active"
                            onClick={() => ChoseeHandel("all")}
                        >all</li>
                        <li
                            onClick={() => ChoseeHandel("type one")}
                        >type one</li>
                        <li
                            onClick={() => ChoseeHandel("type two")}
                        >type two</li>
                        <li
                            onClick={() => ChoseeHandel("type three")}
                        >type three</li>
                    </ul>
                    <div className="content">
                        {product && product.map(product => {
                            return (
                                <div className="box show"
                                    key={product._id}
                                    data-type={product.type}
                                >
                                    <div className="image"
                                        style={{
                                            position: "relative"
                                        }}
                                    >
                                        <Link
                                            style={{
                                                width: "100%",
                                                position: "absolute",
                                                height: "100%"
                                            }}
                                            to={"/view?id=" + product._id}
                                        >
                                        </Link>
                                        <img src={BaseUrl + product.image} />
                                    </div>
                                    <div className="text">
                                        <h4>{product.type}</h4>
                                        <h4>{product.comp}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button className="more" id="more">More Product</button>
            </div>
        </section >
    )
}

export default Galearys