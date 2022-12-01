import { BrowserRouter, Route, Routes } from "react-router-dom";

import { publicRoutes } from "./publicRoute";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ route, page }) => {
          return <Route key={route} path={route} element={page} />;
        })}

        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}
