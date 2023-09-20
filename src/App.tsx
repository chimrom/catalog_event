import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Pages/Layout/Layout";
import { Catalog } from "./Pages/Catalog/Catalog";
import { Basket } from "./Pages/Basket/Basket";
import { NotFound } from "./Pages/NotFound/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Catalog />} />
                <Route path="/basket" element={<Basket />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
