import {
    createBrowserRouter,
} from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Community from "../pages/Community/Community";
import Blogs from "../pages/Blogs/Blogs";
import AboutUs from "../pages/Blogs/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import PackageDetailsCard from "../pages/Home/PackageDetailsCard";
import AllPackages from "../pages/AllPackages/AllPackages";
import TourGuideDetailsCard from "../pages/Home/TourGuides/TourGuideDetailsCard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/community',
                element: <Community></Community>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactUs',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/package-details',
                element: <PackageDetailsCard></PackageDetailsCard>
            },
            {
                path: '/all-packages',
                element: <AllPackages></AllPackages>
            },
            {
                path: '/tour-guide-details',
                element: <TourGuideDetailsCard></TourGuideDetailsCard>
            },
        ]
    },
    { path: '/login', element: <Login></Login>},
    { path: '/register', element: <Register></Register> },
]);