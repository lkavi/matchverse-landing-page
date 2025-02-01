import { createBrowserRouter } from "react-router-dom";
import App from "./App";
// import About from "./routes/about"
// import Contact from "./routes/Contact";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    // {path: "/about", element: <About />},
    // {path: "/contact", element: <Contact />}
  ])