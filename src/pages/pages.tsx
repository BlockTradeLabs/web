import Home from "./main/home";
import Register from "./auth/register";
import Login from "./auth/login";
import ResetPassword from "./auth/resetPassword";
import About from "./main/about";
import Services from "./main/services";
import ServiceDetails from "./main/serviceDetails";
import Team from "./main/team";
import TeamDetails from "./main/teamDetails";
import Contact from "./main/contact";
import NotFound from "./notFound";
import HowItWorks from "./main/how-it-works";
import FAQ from "./main/faq";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "Home",
  },
  {
    path: "register",
    element: <Register />,
    title: "Sign Up",
  },
  {
    path: "login",
    element: <Login />,
    title: "Sign In",
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
    title: "Reset Password",
  },
  {
    path: "services",
    title: "Services",
    children: [
      {
        path: "",
        element: <Services />,
        title: "All Services",
      },
      {
        path: ":id",
        element: <ServiceDetails />,
        title: "Service",
      },
    ],
  },
  {
    path: "about",
    title: "About",
    children: [
      {
        path: "",
        element: <About />,
        title: "About Us",
      },
      {
        path: "team",
        title: "Teams",
        children: [
          {
            path: "",
            element: <Team />,
            title: "All Team",
          },
          {
            path: ":id",
            element: <TeamDetails />,
            title: "Member",
          },
        ],
      },
    ],
  },
  {
    path: "contact",
    element: <Contact />,
    title: "contact",
  },
  {
    path: "how-it-works",
    title: "How it works",
    children: [
      {
        path: "",
        element: <HowItWorks />,
        title: "How it works",
      },
    ],
  },
  {
    path: "faq",
    title: "Frequently Asked Questions",
    children: [
      {
        path: "",
        element: <FAQ />,
        title: "Frequently Asked Questions",
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    title: "404",
  },
];

export default pagesData;
