import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">About</a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
