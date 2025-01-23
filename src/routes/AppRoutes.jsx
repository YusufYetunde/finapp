import { Route, Routes } from "react-router-dom";
import routesConst from "../constants/routeConst";
import LayoutContainer from "../layout/Layout";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routesConst.ROOT} element={<LayoutContainer />}>
        <Route path={routesConst.HOME} element={<Home />} />
      </Route>
      <Route path={routesConst.PAGE_NOT_FOUND} element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;