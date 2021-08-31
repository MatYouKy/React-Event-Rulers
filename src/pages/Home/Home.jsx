import React from 'react';
import { AboutUs } from '../AboutUs/AboutUs';
import { Services } from '../Services/Services';
import { Hero } from '../Hero/Hero';

export const Home = () => (
    <main id="/">
        <Hero />
        <AboutUs />
        <Services />
    </main>
)
