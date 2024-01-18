import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Home, { carsLoader } from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Contacts from "./pages/Contacts";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
        <Route index element={<Home />} loader={carsLoader} />
        <Route path="about" element={<About />}>
          <Route path="upload" element={<Home />} />
          <Route path="stats" element={<Home />}></Route>
        </Route>
        <Route path="membership" element={<Membership />} />
        <Route path="events" element={<Events />} />
        <Route path="team" element={<Team />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
