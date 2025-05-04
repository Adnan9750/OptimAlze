'use client'

import React, { useEffect, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    IconButton,
    List,
    ListItemButton,
    useMediaQuery,
    useTheme,
    Container,
} from '@mui/material';
import { Code, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const handleScroll = () => {
            // Handle the scrolled state for navbar background
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }

            // Determine active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            let currentSection = 'home';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top of the viewport (with some tolerance)
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                        break;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    
    // Scroll to top on page refresh
    useEffect(() => {
        // Check if this is a page load/refresh (not just a component re-render)
        // We can use performance.navigation in older browsers or pageshow event
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'instant' // Use 'smooth' for animated scroll
            });
        };
        
        // Run on component mount which includes page refresh
        scrollToTop();
        
        // Handle browser history navigation
        window.addEventListener('pageshow', (event) => {
            // The persisted property is true if the page was cached by the browser
            if (event.persisted) {
                scrollToTop();
            }
        });
        
        return () => {
            window.removeEventListener('pageshow', scrollToTop);
        };
    }, []);

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

    // Handle click on nav items to update active section
    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId.substring(1)); // Remove the # from href
        if (menuOpen) {
            toggleMenu();
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                color="transparent"
                elevation={scrolled ? 1 : 0}
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
                            <Box sx={{display:'flex',gap:1,alignItems:'center'}}>
                                <Code className="h-6 w-6 text-[#B91C1C]" />
                                <Typography color='secondary' variant="h6">Optim Alze</Typography>
                            </Box>
                        </Box>

                        {/* Desktop Menu */}
                        {!isMobile && (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <List sx={{ display: 'flex' }}>
                                    {
                                        navLinks?.map((link) => (
                                            <ListItemButton 
                                                key={link.name} 
                                                href={link.href}
                                                onClick={() => handleNavClick(link.href)}
                                                sx={{
                                                    color: activeSection === link.href.substring(1) ? '#B91C1C' : 'inherit',
                                                    fontWeight: activeSection === link.href.substring(1) ? 600 : 400,
                                                    '&:hover': {
                                                        color: '#B91C1C'
                                                    }
                                                }}
                                            >
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
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {navLinks.map((link) => (
                                <ListItemButton
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.href)}
                                    sx={{
                                        py: 2,
                                        color: activeSection === link.href.substring(1) ? '#B91C1C' : 'inherit',
                                        fontWeight: activeSection === link.href.substring(1) ? 600 : 400,
                                        '&:hover': {
                                            color: '#B91C1C'
                                        }
                                    }}
                                >
                                    <Typography 
                                        variant="body1" 
                                        sx={{ 
                                            fontSize: '18px',
                                            color: 'inherit'
                                        }}
                                    >
                                        {link.name}
                                    </Typography>
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