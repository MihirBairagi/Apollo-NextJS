import React from 'react'
import BannerSection from './components/BannerSection'
import PageUSP from './components/PageUSP'
import AboutCompany from './components/AboutCompany'
import ServiceSection from './components/ServiceSection'

export default function Home() {
  return (
  <>
    <BannerSection/>
    <PageUSP/>
    <AboutCompany/>
    <ServiceSection/>
  </>
  )
}
