import useRole from "../../hooks/useRole";
import Heading from "../Shared/Heading/Heading";


const DashBoardHome = () => {
    const [role] = useRole();
    return (
        <div className="">
            <Heading heading={'Dashboard Home: Your Activity Center'} subHeading={'Step into your digital workspace where everything you need is at your fingertips. Organize your tasks, view key insights, and keep up with important updates.'}></Heading>

            {role === 'tourist' && <div className="text-center bg-slate-200 p-3 rounded-xl">
                <h2 className="text-xl font-semibold lg:text-2xl">Welcome to Tour Visor</h2>
                <p className="text-lg mt-4">Explore your personalized dashboard to stay on top of your travel plans. View your upcoming tours,keep on eye on booking, manage your wishlist, and share your travel stories. Get notified about special offers and important updates, and access customer support whenever you need help. Your journey starts here!</p>
            </div>}

            {role === 'guide' && <div className="text-center bg-slate-200 p-3 rounded-xl">
                <h2 className="text-xl font-semibold lg:text-2xl">Welcome to Tour Visor</h2>
                <p className="text-lg mt-4"> Manage your upcoming tours and stay informed about your assignments. Check out recent feedback and earnings, update your profile, and connect with other guides in the community. Your dashboard is designed to help you lead with ease and confidence.</p>
            </div>}

            {role === 'admin' && <div className="text-center bg-slate-200 p-3 rounded-xl">
                <h2 className="text-xl font-semibold lg:text-2xl">Welcome to Tour Visor</h2>
                <p className="text-lg mt-4">Access all the tools and information you need to manage the platform efficiently. Oversee user accounts, manage tour packages and monitor packages and manage all user. Dive into detailed reports and analytics to keep track of performance. Stay updated with the latest news and handle support requests effectively. Your admin hub ensures smooth operation and growth.</p>
            </div>}

        </div>
    );
};

export default DashBoardHome;