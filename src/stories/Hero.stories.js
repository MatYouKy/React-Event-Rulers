import { Hero } from '../pages/Hero/Hero';
import { MemoryRouter } from 'react-router-dom';

export default {
    component: Hero,
    title: 'Components/Hero',
    decorators: [
        Story =>(
            <MemoryRouter>
                <Hero />
            </MemoryRouter>
        )
    ]
};

export const HeroImg = () => <Hero />;