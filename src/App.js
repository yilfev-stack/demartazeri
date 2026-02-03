import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { ROUTE_MAP } from "./data/routes";

// Pages
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import SolutionsPage from "./pages/SolutionsPage";
import SolutionDetailPage from "./pages/SolutionDetailPage";
import ApplicationsPage from "./pages/ApplicationsPage";
import ApplicationDetailPage from "./pages/ApplicationDetailPage";
import SectorsPage from "./pages/SectorsPage";
import SectorDetailPage from "./pages/SectorDetailPage";
import ValveMaintenancePage from "./pages/ValveMaintenancePage";
import DocumentationPage from "./pages/DocumentationPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import VideosPage from "./pages/VideosPage";
import EnergyTransitionPage from "./pages/EnergyTransitionPage";
import CustomerStoriesPage from "./pages/CustomerStoriesPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import FaqPage from "./pages/FaqPage";

// Components
import CookieConsent from "./components/CookieConsent";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const routes = ROUTE_MAP;
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path={routes.tr.valveMaintenance} element={<ValveMaintenancePage />} />
            <Route path={routes.en.valveMaintenance} element={<ValveMaintenancePage />} />
            <Route path={routes.az.valveMaintenance} element={<ValveMaintenancePage />} />

            <Route path={routes.tr.products} element={<ProductsPage />} />
            <Route path={`${routes.tr.products}/:slug`} element={<ProductDetailPage />} />
            <Route path={routes.en.products} element={<ProductsPage />} />
            <Route path={`${routes.en.products}/:slug`} element={<ProductDetailPage />} />
            <Route path={routes.az.products} element={<ProductsPage />} />
            <Route path={`${routes.az.products}/:slug`} element={<ProductDetailPage />} />

            <Route path={routes.tr.services} element={<ServicesPage />} />
            <Route path={`${routes.tr.services}/:slug`} element={<ServiceDetailPage />} />
            <Route path={routes.en.services} element={<ServicesPage />} />
            <Route path={`${routes.en.services}/:slug`} element={<ServiceDetailPage />} />
            <Route path={routes.az.services} element={<ServicesPage />} />
            <Route path={`${routes.az.services}/:slug`} element={<ServiceDetailPage />} />

            <Route path={routes.tr.solutions} element={<SolutionsPage />} />
            <Route path={`${routes.tr.solutions}/:slug`} element={<SolutionDetailPage />} />
            <Route path={routes.en.solutions} element={<SolutionsPage />} />
            <Route path={`${routes.en.solutions}/:slug`} element={<SolutionDetailPage />} />
            <Route path={routes.az.solutions} element={<SolutionsPage />} />
            <Route path={`${routes.az.solutions}/:slug`} element={<SolutionDetailPage />} />

            <Route path={routes.tr.applications} element={<ApplicationsPage />} />
            <Route path={`${routes.tr.applications}/:slug`} element={<ApplicationDetailPage />} />
            <Route path={routes.en.applications} element={<ApplicationsPage />} />
            <Route path={`${routes.en.applications}/:slug`} element={<ApplicationDetailPage />} />
            <Route path={routes.az.applications} element={<ApplicationsPage />} />
            <Route path={`${routes.az.applications}/:slug`} element={<ApplicationDetailPage />} />

            <Route path={routes.tr.industries} element={<SectorsPage />} />
            <Route path={`${routes.tr.industries}/:slug`} element={<SectorDetailPage />} />
            <Route path={routes.en.industries} element={<SectorsPage />} />
            <Route path={`${routes.en.industries}/:slug`} element={<SectorDetailPage />} />
            <Route path={routes.az.industries} element={<SectorsPage />} />
            <Route path={`${routes.az.industries}/:slug`} element={<SectorDetailPage />} />

            <Route path={routes.tr.about} element={<AboutPage />} />
            <Route path={routes.en.about} element={<AboutPage />} />
            <Route path={routes.az.about} element={<AboutPage />} />

            <Route path={routes.tr.contact} element={<ContactPage />} />
            <Route path={routes.en.contact} element={<ContactPage />} />
            <Route path={routes.az.contact} element={<ContactPage />} />

            <Route path={routes.tr.faq} element={<FaqPage />} />
            <Route path={routes.en.faq} element={<FaqPage />} />
            <Route path={routes.az.faq} element={<FaqPage />} />

            <Route path={routes.tr.docs} element={<DocumentationPage />} />
            <Route path={routes.en.docs} element={<DocumentationPage />} />
            <Route path={routes.az.docs} element={<DocumentationPage />} />

            <Route path={routes.tr.news} element={<NewsPage />} />
            <Route path={`${routes.tr.news}/:slug`} element={<NewsDetailPage />} />
            <Route path={routes.en.news} element={<NewsPage />} />
            <Route path={`${routes.en.news}/:slug`} element={<NewsDetailPage />} />
            <Route path={routes.az.news} element={<NewsPage />} />
            <Route path={`${routes.az.news}/:slug`} element={<NewsDetailPage />} />

            <Route path={routes.tr.videos} element={<VideosPage />} />
            <Route path={routes.en.videos} element={<VideosPage />} />
            <Route path={routes.az.videos} element={<VideosPage />} />

            <Route path={routes.tr.energyTransition} element={<EnergyTransitionPage />} />
            <Route path={routes.en.energyTransition} element={<EnergyTransitionPage />} />
            <Route path={routes.az.energyTransition} element={<EnergyTransitionPage />} />

            <Route path={routes.tr.customerStories} element={<CustomerStoriesPage />} />
            <Route path={routes.en.customerStories} element={<CustomerStoriesPage />} />
            <Route path={routes.az.customerStories} element={<CustomerStoriesPage />} />

            <Route path={routes.tr.privacy} element={<PrivacyPolicyPage />} />
            <Route path={routes.en.privacy} element={<PrivacyPolicyPage />} />
            <Route path={routes.az.privacy} element={<PrivacyPolicyPage />} />

            <Route path={routes.tr.cookies} element={<CookiePolicyPage />} />
            <Route path={routes.en.cookies} element={<CookiePolicyPage />} />
            <Route path={routes.az.cookies} element={<CookiePolicyPage />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </div>
    </LanguageProvider>
  );
}

export default App;
