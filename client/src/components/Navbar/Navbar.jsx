import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
import { useAuthContext } from '../../context/AuthContext';
import { removeToken } from '../../helpers';
import { Space } from 'antd';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const products = useSelector(state => state.cart.products)
    const { user } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        window.location.reload(true);
        navigate("/", { replace: true });
    };
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className='left'>
                    <div className="item">
                        <img src="/img/fr.png" alt="" />
                    </div>
                    <div className="item">
                        <span>EUR €</span>
                    </div>
                    <Space />
                </div>
                <div className='center'>
                    <Link className="link" to="/">
                        <img src="https://i.imgur.com/QGpe5Io.png" alt="" />
                    </Link>
                </div>
                <div className='right'>
                    <div className='item'>
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className='item'>
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <div className="auth_buttons">
                            {user ? (
                                <>
                                    <div className='item'>
                                        <Link className="link" to="/profile"><PersonOutlineIcon /></Link>
                                    </div>
                                    <div className='item'>
                                        <Link className="link" to="/" onClick={handleLogout} >Logout</Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='item'>
                                        <Link className="link" to="/login">Login</Link>
                                    </div>
                                </>

                            )}
                        </div>

                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>

                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar