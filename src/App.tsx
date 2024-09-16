import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Product from "./pages/Dashboard/Product";
import ProfilePage from "./pages/Profile";
import WarrantyPage from "./pages/Warranty";
import ProductView from "./pages/Dashboard/ProductView";
import ProductNew from "./pages/Dashboard/ProductNew";
import ClaimForm from "./pages/Warranty/ClaimForm";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <Product />
            </>
          }
        />
        <Route path="/product/new" element={<ProductNew />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/warranty" element={<WarrantyPage />} />
        <Route path="/warranty/new" element={<ClaimForm />} />
      </Routes>
    </>
  );
}

export default App;
