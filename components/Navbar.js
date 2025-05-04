'use client'

import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    List,
    ListItemButton,
    useMediaQuery,
    useTheme,
    Container,
    Collapse,
} from '@mui/material';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Team', href: '#team' },
        { name: 'Contact', href: '#contact' }
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <AppBar
                position="fixed"
                color="transparent"
                elevation={scrolled ? 4 : 0}
                sx={{
                    bgcolor: scrolled ? 'white' : 'white',
                    transition: 'all 0.3s ease-in-out',
                    zIndex: theme.zIndex.drawer + 1
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ py: 1 }}>
                        {/* Logo */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <Typography color='primary' variant="h6">LOGO</Typography>
                        </Box>

                        {/* Desktop Menu */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <List sx={{ display: 'flex' }}>
                                    {
                                        navLinks?.map((link) => (
                                            <ListItemButton key={link.name} href={link.href}>
                                                {link.name}
                                            </ListItemButton>
                                        ))
                                    }
                                </List>
                            </Box>
                        )}

                        {/* Mobile Hamburger/Cross Menu Toggle */}
                        {isMobile && (
                            <IconButton
                                onClick={toggleMenu}
                                color="primary"
                                aria-label={menuOpen ? "close menu" : "open menu"}
                            >
                                {menuOpen ? <X size={24} /> : <Menu size={24} />}
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Full Screen Mobile Menu */}
            <Box
                sx={{
                    position: 'fixed',
                    top: '55px', // Adjust based on your navbar height
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: menuOpen ? 'calc(100vh - 64px)' : 0,
                    bgcolor: 'white',
                    zIndex: theme.zIndex.drawer,
                    overflow: 'hidden',
                    transition: 'height 0.3s ease-in-out',
                    boxShadow: menuOpen ? '0px 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Container maxWidth="xl">
                    <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center' }}>
                        <List sx={{display:'flex',flexDirection:'column',gap:2}}>
                            {navLinks.map((link) => (
                                <ListItemButton
                                    key={link.name}
                                    href={link.href}
                                    onClick={toggleMenu}
                                    sx={{
                                        py: 2,
                                    }}
                                >
                                    <Typography variant="body" sx={{fontSize:'18px'}}>{link.name}</Typography>
                                </ListItemButton>
                            ))}
                        </List>
                    </Box>
                </Container>
            </Box>

        </>
    );
};

export default Navbar;