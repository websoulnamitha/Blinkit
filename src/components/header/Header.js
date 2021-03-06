import  React,{useState} from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import {AppBar,Toolbar,Typography,useMediaQuery,useTheme} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


export default function Header() {

// code for dropdown
const [anchorEl,setAnchorEl]=useState(null);
const openMenu=Boolean(anchorEl);
const handleClick=(e)=>{
    setAnchorEl(e.currentTarget)
};

const handleClose=()=>{
    setAnchorEl(null);
};
// dropdown code ends

    return (
        <>
        <Link to="/" ></Link> 
        <Link to="/cart">Cart</Link> 
        <Typography
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true':undefined}
                            onClick={handleClick}
                            >Profile 
                            </Typography>
                            {/* dropdown items */}

                            <Menu id="basic-menu" anchorEl={anchorEl}  open={openMenu}  onClose={handleClose} style={{marginLeft:"340px"}}>
                                <MenuItem onClick={handleClose}><Link to="/myorders">My orders</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/savedaddress">savedaddress</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/mywallet">My wallet</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/faq">Faq's</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/logout">Logout</Link></MenuItem>
                    

                            </Menu>

                            {/* dropdown items ends */}



                            <Typography
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true':undefined}
                            onClick={handleClick}
                            >categories
                            </Typography>
                            {/* dropdown items */}

                            <Menu id="basic-menu" anchorEl={anchorEl}  open={openMenu}  onClose={handleClose}>
                                <MenuItem onClick={handleClose}><Link to="/atta">atta, rice & dal </Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/masala">masala ,oil & more </Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/fruits">vegitables & fruits</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/cleaning">cleaning essentials</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/breakfast">breakfast & instant food</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/bakery">bakery & biscuits</Link></MenuItem>
                                <MenuItem onClick={handleClose}><Link to="/personalcare">Personal care</Link></MenuItem>


                            </Menu>
        

        </>
  );
}