import usePackages from "../../hooks/usePackages";
import ImageHeader from "../Shared/ImageHeader/ImageHeader";
import photo1 from '../../assets/images/highway.jpg'
import PackageCard from "../Home/PackageCard";
import Heading from "../Shared/Heading/Heading";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


const AllPackages = () => {
    const [packages] = usePackages();
    const navigate = useNavigate();

    return (
        <div className="mt-10">
            <ImageHeader
                img1={photo1} heading={'All Tour Packages'} shortDis={'Discover the beauty and diversity of Bangladesh with our exclusive tour packages. Whether you`re seeking beach relaxation, wildlife adventures, or historical explorations, we have the perfect itinerary to make your journey unforgettable.'}
            ></ImageHeader>
            <div className="mt-5">
                <Heading
                    heading={'Explore The Packages'} subHeading={'Welcome to our all package section. Find your best package!'}
                ></Heading>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    packages.map(pack => <PackageCard key={pack._id} pack={pack}></PackageCard>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <button onClick={() => navigate(-1)} className="text-lg md:text-2xl font-bold p-2 hover:bg-gray-100 rounded-lg flex items-center gap-2 text-red-500"><FaArrowLeft /> Go Back</button>
            </div>
        </div>
    );
};

export default AllPackages;