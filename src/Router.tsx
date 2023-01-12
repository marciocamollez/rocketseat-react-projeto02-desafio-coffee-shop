import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { DefaultLayout } from "./layouts/DefaultLayout";
import FinishedOrder from "./pages/FinishedOrder";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<FinishedOrder />} />
      </Route>
    </Routes>
  );
}
