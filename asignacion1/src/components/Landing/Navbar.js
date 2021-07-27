import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from '../../action/auth';

import '../../styles/css/Innecesary/header.css'
import '../../styles/css/Innecesary/styles.css'
import { searchChange } from '../../action/search';


export const Navbar = () => {
    const ruta = useSelector(state => state.rutas)
    const state = useSelector(state => state?.auth)
    const [formState, setFormState] = useState({
        searchValue:''
    })
    const dispatch = useDispatch();
    
    const {searchValue} = formState;

    useEffect(() => {
        if (formState.searchValue.length >= 3) {
            dispatch(searchChange(formState.searchValue))
        }else{
            dispatch(searchChange(''))
        }
    }, [formState, dispatch])

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    const handleLogout = () => {
        dispatch( startLogout() )
    }
    return (
        <>
        {
            ruta==="/screens/signUp" || ruta==="/screens/signIn"
            ?
            <>
            </>
            :
            <header>

                <nav className="header">
                    <NavLink
                        exact
                        to="/screens/landing"
                    >
                        <img src={`./images/appland.png`} className="logo" alt=""/>
                    </NavLink>
                    
                
                    <NavLink
                        exact
                        to="/screens/especificProduct"
                    >
                        <p id="about">About Us</p>
                    </NavLink>

                    <NavLink
                        exact
                        to="/screens/category"
                    >
                    
                        <p id="shopping">Shopping</p>
                    </NavLink>
                    
                    <input 
                        type="search"
                        maxLength="255"
                        placeholder="&#xf002; Search" 
                        id="icon" 
                        className="icono"
                        name="searchValue"
                        value={searchValue}
                        onChange={handleInputChange} 
                    />


                    <div id="sign">
                        {!state?.name
                            ? <>
                                <NavLink
                                    exact
                                    to="/screens/signUp"
                                >
                                    <button type="submit" id="signUp" className="btn btn-color">Sign Up</button>
                                </NavLink>
                                <NavLink
                                    exact
                                    to="/screens/signIn"
                                >
                                    <button type="submit" id="signIn" className="btn btn-color">Sign In</button>
                                </NavLink>
                            </>
                            :<>
                                <span>{state.name}</span>
                                <img style={{width:"50px", height:"50px", borderRadius:"25px"}} src={state.photo} alt="profile" />
                                <button id="logOut" className="btn btn-color" onClick={handleLogout}>LogOut</button>
                            </>
                        }
                    </div>
                    
                
                    
                    
                </nav>
                
            </header>
        }
            
        </>
    )
}
