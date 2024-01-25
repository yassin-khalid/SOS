import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Route, Routes, redirect } from "react-router-dom";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            loader={() => redirect("/ar")}
            element={
              <Landing language={i18n.resolvedLanguage as "en" | "ar"} />
            }
          />
          <Route path="/en" element={<Landing language="en" />} />
          <Route path="/ar" element={<Landing language="ar" />} />
          <Route
            path="/privacy"
            element={
              <PrivacyPage language={i18n.resolvedLanguage as "en" | "ar"} />
            }
          />

          <Route path="/en/privacy" element={<PrivacyPage language="en" />} />
          <Route path="/ar/privacy" element={<PrivacyPage language="ar" />} />
          <Route
            path="/customer-terms"
            element={
              <TermsPage
                terms="customer-terms"
                language={i18n.resolvedLanguage as "en" | "ar"}
              />
            }
          />
          <Route
            path="/en/customer-terms"
            element={<TermsPage terms="customer-terms" language="en" />}
          />
          <Route
            path="/ar/customer-terms"
            element={<TermsPage terms="customer-terms" language="ar" />}
          />
          <Route
            path="/service-terms"
            element={
              <TermsPage
                terms="service-terms"
                language={i18n.resolvedLanguage as "en" | "ar"}
              />
            }
          />

          <Route
            path="/en/service-terms"
            element={<TermsPage terms="service-terms" language="en" />}
          />
          <Route
            path="/ar/service-terms"
            element={<TermsPage terms="service-terms" language="ar" />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
