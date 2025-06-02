// src/Components/NavSec.jsx
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FormControlLabel, FormGroup, Modal, Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import MenuFloatIcon from './MenuFloatIcon';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const NavSec = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [open, setOpen] = useState(false);

  const location = useLocation(); // <-- Added to get current path

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleSmoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '1rem',
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-color)',
        }}
        className="mx-lg-5"
      >
        <div className='d-flex'>
          <img src={logo} alt="" width='45' />
          <h4 style={{ color: 'var(--text-color)', fontSize: '2rem', position: "relative", top: "3px", right: "3px" }}>am.</h4>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',
              backgroundColor: 'var(--btn-bg-color)',
              color: 'var(--btn-text-color)',
              '&:hover': {
                backgroundColor: 'var(--btn-bg-color)',
                opacity: 0.9,
              },
            }}
          >
            <a
              href="https://github.com/SAMUVELREEGAN"
              style={{ textDecoration: 'none', color: 'var(--btn-text-color)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>

          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch checked={darkMode} onChange={() => { setDarkMode(!darkMode); window.location.reload(); }} />}
            />
          </FormGroup>
        </div>
      </div>

      {/* Conditionally render Floating Menu Icon and Modal ONLY if path is NOT '/visitors' */}
      {location.pathname !== '/visitors' && location.pathname !== '/model' &&  (
        <>
          <MenuFloatIcon onClick={() => setOpen(true)} />

          <Modal open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                width: 250,
                bgcolor: 'background.paper',
                color: 'text.primary',
                p: 4,
                m: 'auto',
                mt: '15%',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <h3>Navigate</h3>
              {[
                { label: 'Home', id: 'home' },
                { label: 'About', id: 'about' },
                { label: 'Projects', id: 'projects' },
                { label: 'Skills', id: 'skills' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <p
                  key={item.id}
                  onClick={() => handleSmoothScroll(item.id)}
                  style={{
                    margin: '1rem 0',
                    cursor: 'pointer',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {item.label}
                </p>
              ))}

              <Link to="/visitors" style={{ textDecoration: 'none' ,pointerEvents: 'none', // disables click
    opacity: 0.5,}} onClick={() => setOpen(false)}>
                <p
                  style={{
                    margin: '1rem 0',
                    cursor: 'pointer',
                    color: '#2e7d32',
                    fontWeight: 'bold',
                  }}
                >
                  Visitors
                </p>
              </Link>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};

export default NavSec;
