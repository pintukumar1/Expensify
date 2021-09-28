import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const header = () => (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" exact activeClassName="is-active">Dashboard </NavLink>
            <NavLink to="/create" activeClassName="is-active">Add Expense </NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help Page </NavLink>
        </header>
    )

export default header