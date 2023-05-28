import React, { useState, useEffect } from "react"
import "./navbar.css"
import { Link } from 'react-scroll';
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Button } from "@mui/material";
import { TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  right: '20px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(3, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  const [Width, setWidth] = useState(window.innerWidth);
  const [Respon, setRespon] = useState(Width < 768);
  const [ShowLoginButton, setShowLoginButton] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const history = useHistory();


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
    setRespon(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const handleMobileButtonClick = () => {
    setMobile(!Mobile);
    setShowLoginButton(true);
  }

  const handleLoginButtonClick = () => {
    setShowLoginButton(true);
    history.push('/login');
  }

  const top = () => {
    window.scrollTo(0, 0);
    history.push('/');
  };

  const home = () => {
    history.push('/');
  };

  return (
    <BrowserRouter>
      <nav className='navbar'>
        <h3 className='logo'>Zavisit</h3>
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to="/" onClick={top} className='navbar-component'>
            <li className="nav-item">Home</li>
          </Link>
          <Link activeClass="active"
            to="product"
            onClick={home}
            spy={true} className='navbar-component'>
            <li className="nav-item">Product</li>
          </Link>
          <Link activeClass="active"
            to="faq"
            onClick={home}
            spy={true} className='navbar-component'>
            <li className="nav-item">Faq</li>
          </Link>
        </ul>
        {Width >= 768 && (
          <Search>
            <SearchIconWrapper>
              <i className="fa fa-search"><SearchIcon /></i>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleSearch}
            />
          </Search>
        )}
        {ShowLoginButton &&
          <Link
            to='/login'
            className={Respon ? "button-mobile button-mobile-position" : "button-desktop"}
            style={{ display: Mobile ? "none" : "block" }}
            activeClass="active"
            spy={true}
            onClick={handleLoginButtonClick}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ borderRadius: 75, marginRight: "20px", padding: "5px 10px", fontSize: "16px" }}
            >
              <li>LogIn</li>
            </Button>
          </Link>

        }
        <button className='mobile-menu-icon' onClick={handleMobileButtonClick}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </BrowserRouter>
  )
}

export default Navbar
