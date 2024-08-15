import React from 'react'
import Cursor from '../components/Cursor'
import LinesBackground from '../components/LinesBackground/LinesBackground'
import StyleSwitcher from '../components/StyleSwitcher/StyleSwitcher'
import Footer from '../components/Footer/Footer'
import MobileMenu from '../components/MobileMenu/MobileMenu'
import MobileMenuSideBar from '../components/MobileMenuSideBar'
import Sidebar from '../components/Sidebar/Sidebar'
import SidebarNav from '../components/SidebarNav'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import Skills from '../components/Skills/Skills'
import ResumeSection from '../components/ResumeSection'
import ProjectsSection from '../components/ProjectsSection'
import BlogSection from '../components/BlogSection'
import Testimonial from '../components/Testimonial'
import ContactSection from '../components/ContactSection'
import MapComponent from '../components/MapComponent'
const Home = () => {
  return (
    <div>
     
      <div class="minfo__contentBox relative mx-auto max-w-container xl:max-2xl:max-w-65rem *:py-5 xl:*:py-3.5 *:max-w-content max-xl:*:mx-auto xl:*:ml-auto xl:max-2xl:*:max-w-50rem">
        <Cursor />
        <MobileMenu />
        <MobileMenuSideBar />
        <Sidebar />
        <SidebarNav />
        <Hero />
        <AboutUs />
        <Services />
        <Skills />
        <ResumeSection />
        <ProjectsSection />
      {/* <BlogSection /> */}  
        <Testimonial />
        <ContactSection />
        <MapComponent />
      </div>
      <LinesBackground />
       {/* <StyleSwitcher /> */}
      <Footer />
    </div>
  )
}

export default Home