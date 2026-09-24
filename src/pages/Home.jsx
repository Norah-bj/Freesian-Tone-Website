import React from 'react';
import Hero from '../components/home/Hero';
import BrandIntro from '../components/home/BrandIntro';
import FeaturedCollection from '../components/home/FeaturedCollection';
import MultiwayShowcase from '../components/home/MultiwayShowcase';
import MultiwayStory from '../components/home/MultiwayStory';
import MadeToOrder from '../components/home/MadeToOrder';
import LookbookTeaser from '../components/home/LookbookTeaser';
import OurStoryTeaser from '../components/home/OurStoryTeaser';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <BrandIntro />
      <FeaturedCollection />
      <MultiwayShowcase />
      <MultiwayStory />
      <MadeToOrder />
      <LookbookTeaser />
      <OurStoryTeaser />
      <FinalCTA />
    </main>
  );
}
