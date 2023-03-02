// import { Layout } from 'layout/Layout';
// import { cloneElement } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import { routes } from 'rourtes/routes';
// import { Shop, Contact, About, Home } from './views';
import { GlobalStyle } from './GlobalStyles/GlobalStyled';
import { Header } from 'layout/Header';
import { Hero } from './Hero/Hero';
export const App = () => {
  return (
    <>
      <>
        <Header />
        <Hero />
        {/* <Layout /> */}
        {/* <Shop />
        <Contact />
        <About />
        <Home /> */}
        <GlobalStyle />
      </>
    </>
    // <Routes>
    //   <Route pash={routes.HOME} element={Layout}>
    //     <Route index element={<Home />} />
    //     <Route path={routes.SHOP} element={<Shop />} />
    //     <Route path={routes.ABOUT} element={<About />} />
    //     <Route path={routes.CONTACT} element={<Contact />} />
    //   </Route>
    //   <Route path="*" element={<Navigate to={routes.HOME} replese />} />
    // </Routes>
  );
};
