import { useEffect } from 'react';
import Head from 'next/head';
//= Layout
import MainLayout from '@layouts/Main';
//= Components
import TopNav from '@components/Navbars/DigitalNav/TopNav';
import Navbar from '@components/Navbars/DigitalNav';
import Header from '@components/Digital/Header';
import About from '@components/Digital/About';
import Services from '@components/Digital/Services';
import ChooseUs from '@components/Digital/ChooseUs';
import Portfolio from '@components/Digital/Portfolio';
import Testimonials from '@components/Digital/Testimonials';
import Team from '@components/Digital/Team';
import Blog from '@components/Digital/Blog';
import Contact from '@components/Digital/Contact';
import Footer from '@components/Digital/Footer';

const HomeDigitalAgency = () => {
  useEffect(() => {
    document.body.classList.add('index-main');
    return () => document.body.classList.remove('index-main');
  }, []);

  return (
    <>
      <Head>
        <title>Dezyne Technologies-Designing Next</title>
      </Head>

      <MainLayout scrollTopText>
        <TopNav />
        <Navbar />
        <Header />
        <main>
          <About />
          <Services />
          <ChooseUs />
          <Portfolio />
          <Testimonials />
          <Team />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </MainLayout>
    </>
  )
}

export default HomeDigitalAgency;