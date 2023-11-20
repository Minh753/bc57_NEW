import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">ReactJS</NavLink>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/xem-chi-tiet" aria-current="page" style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Xem chi tiet <span className="visually-hidden">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/gio-hang"
                                style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>Giỏ Hàng</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/react-form" aria-current="page" style={({ isActive }) => isActive ? { border: '1px solid orange' } : {}}>React-form <span className="visually-hidden">(current)</span></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Option</NavLink>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <NavLink className="dropdown-item" to="/bt-change-color">Change color</NavLink>
                                <NavLink className="dropdown-item" to="/user">User </NavLink>
                            </div>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">
                        <input className="form-control me-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}