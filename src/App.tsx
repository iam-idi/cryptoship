import { createRoutesFromElements, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import Learn from "./pages/Learn";
import NotFound from "./pages/NotFound";
import { homeDataLoader } from "./utils/homeDataLoader";
import ErrorElement from "./components/ErrorElement";
import { globalDataLoader } from "./utils/globalDataLoader";
// import { globalDataLoader } from "./utils/globalDataLoader";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" id="root" element={<RootLayout />}  errorElement={<ErrorElement />} loader={globalDataLoader}>
        <Route index element={<Home />} id="home" loader={homeDataLoader}></Route>
        <Route path="tools" element={<Tools />}></Route>
        <Route path="learn" element={<Learn />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  )

  return (
      <RouterProvider router={router} />
  )
}

export default App
