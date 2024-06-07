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
import TourGuides from "../pages/Home/TourGuides/TourGuides";
import AllStories from "../pages/StorySection/AllStories";
import SingleStoryDetails from "../pages/StorySection/SingleStoryDetails";
import DashBoardLayout from "../Layout/DashBoardLayout";
import AddPackage from "../pages/Dashboard/AdminDashBoard/AddPackage";
import ManageUsers from "../pages/Dashboard/AdminDashBoard/ManageUsers";
import MyBooking from "../pages/Dashboard/TouristDashBoard/MyBooking";
import MyWishlist from "../pages/Dashboard/TouristDashBoard/MyWishlist";
import TouristRequest from "../pages/Dashboard/TouristDashBoard/TouristRequest";
import MyAssignedTours from "../pages/Dashboard/GuideDashBoard/MyAssignedTours";
import TouristProfile from "../pages/Dashboard/TouristDashBoard/TouristProfile";
import GuideProfile from "../pages/Dashboard/GuideDashBoard/GuideProfile";
import AdminProfile from "../pages/Dashboard/AdminDashBoard/AdminProfile";


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
                path: '/package-details/:id',
                element: <PackageDetailsCard></PackageDetailsCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/packages/${params.id}`)
            },
            {
                path: '/all-packages',
                element: <AllPackages></AllPackages>
            },
            {
                path: '/tour-guide-details/:id',
                element: <TourGuideDetailsCard></TourGuideDetailsCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/guides/${params.id}`)
            },
            {
                path: '/tour-guides',
                element: <TourGuides></TourGuides>
            },
            {
                path: '/all-stories',
                element: <AllStories></AllStories>
            },
            {
                path: '/story/:id',
                element: <SingleStoryDetails></SingleStoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/stories/${params.id}`)
            },
        ]
    },
    { path: '/login', element: <Login></Login> },
    { path: '/register', element: <Register></Register> },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            // tourist
            {
                path: 'tourist-profile',
                element: <TouristProfile></TouristProfile>
            },
            {
                path: 'my-bookings',
                element: <MyBooking></MyBooking>
            },
            {
                path: 'my-wishlist',
                element: <MyWishlist></MyWishlist>
            },
            {
                path: 'tourist-request',
                element: <TouristRequest></TouristRequest>
            },
            // tour guide
            {
                path: 'guide-profile',
                element: <GuideProfile></GuideProfile>
            },
            {
                path: 'my-assigned-tours',
                element: <MyAssignedTours></MyAssignedTours>
            },
            // admin
            {
                path: 'admin-profile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: 'add-package',
                element: <AddPackage></AddPackage>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
        ]
    }
]);