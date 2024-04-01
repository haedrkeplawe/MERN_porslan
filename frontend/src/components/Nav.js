import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="#"
                    style={{ color: "white" }}
                >Location Company
                    ?
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main"
                    aria-controls="main"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    +
                </button>
                <div className="collapse navbar-collapse" id="main">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link p-2 p-lg-3 active"
                                aria-current="page"
                                to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link p-2 p-lg-3" to="/add">Add Product</Link>
                        </li>
                    </ul>
                    <div className="search ps-2 pe-3 d-none d-lg-block">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav