import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import Loader from "./components/Loader/Loader.jsx";

const Home = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campers" element={<CatalogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
