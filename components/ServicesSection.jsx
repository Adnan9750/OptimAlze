'use client'

import { Box, Chip, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, LayoutGrid, Palette, Smartphone } from 'lucide-react'

const ServicesSection = () => {

    const servicesData = [
        {
            icon: <LayoutGrid className="h-6 w-6" />,
            title: "Web Development",
            description:
                "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
            color: "bg-blue-500/10 text-blue-500",
        },
        {
            icon: <Smartphone className="h-6 w-6" />,
            title: "Mobile Apps",
            description:
                "Native and cross-platform mobile applications designed for seamless functionality across iOS and Android devices.",
            color: "bg-purple-500/10 text-purple-500",
        },
        {
            icon: <Palette className="h-6 w-6" />,
            title: "UI/UX Design",
            description:
                "User-centered design solutions that create intuitive, engaging interfaces and meaningful user experiences.",
            color: "bg-pink-500/10 text-pink-500",
        },
        {
            icon: <Cloud className="h-6 w-6" />,
            title: "Cloud Solutions",
            description:
                "Scalable cloud infrastructure and solutions for reliable, secure, and efficient business operations.",
            color: "bg-emerald-500/10 text-emerald-500",
        },
    ]

    return (
        <>
            <section id="services" className="py-24 bg-[#F5F5F580]">
                <Container maxWidth='lg'>
                    <Box className="mb-16 text-center">
                        <Chip variant='outlined' label="Our Services" className="mb-3" />
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 'bold',
                                mb: 3,
                                color: '#333',
                                fontSize: { xs: '1.875rem', md: '2.25rem' },
                                lineHeight: 1.2
                            }}
                        >
                            What We Offer
                        </Typography>

                        <Typography variant='body1' component='p'
                            sx={{
                                color: 'text.secondary',
                                maxWidth: '700px',
                                mx: 'auto'
                            }}
                        >
                            Optim Alze solutions tailored to meet your business needs
                            and drive your success in the digital landscape.
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {
                            servicesData?.map((service, index) => (
                                <Grid key={index} item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="group relative bg-white h-[240px] rounded-xl p-6 shadow-sm border border-transparent 
                                transition-all duration-300 hover:shadow-md hover:border-red-200 hover:-translate-y-1"
                                    >
                                        <Box className={`inline-flex p-3 rounded-lg mb-4 ${service.color}`}>
                                            {service.icon}
                                        </Box>
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#BC1C1C] transition-colors">
                                            {service.title}
                                        </h3>
                                        <Typography variant='body2' sx={{ color: 'text.secondary', mb: 4 }}>
                                            {service.description}
                                        </Typography>
                                    </motion.div>
                                </Grid>
                            ))
                        }
                    </Grid>

                </Container>
            </section>
        </>
    )
}

export default ServicesSection
