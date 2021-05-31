import React from 'react'


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
                <div className="container-xl">
                    <a className="navbar-brand" href="#">Tienda Computacion</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07XL">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Ultimos Ingresos</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown07XL" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                                <ul className="dropdown-menu" aria-labelledby="dropdown07XL">
                                <li><a className="dropdown-item" href="#">Teclados</a></li>
                                <li><a className="dropdown-item" href="#">Procesadores</a></li>
                                <li><a className="dropdown-item" href="#">Impresoras</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form>
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
