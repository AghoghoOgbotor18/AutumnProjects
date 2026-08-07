import React, { useEffect } from 'react'
import AboutHero from '../components/About/AboutHero'
import OurStory from '../components/About/OurStory'
import MissionVision from '../components/About/MissionVision'
import Values from '../components/About/Values'
import AboutCTA from '../components/About/AboutCTA'
import StatsBar from '../components/About/StatsBar'

const About = () => {

    useEffect(() => {
        scrollTo({top: 0, behavior: "smooth"})
    })
    return (
        <div>
        <AboutHero />
        <OurStory />
        <MissionVision />
        <Values />
        <StatsBar />
        <AboutCTA />
        </div>
    )
}

export default About
