import usePackages from "../../hooks/usePackages";
import ImageHeader from "../Shared/ImageHeader/ImageHeader";
import photo1 from '../../assets/images/highway.jpg'
import PackageCard from "../Home/PackageCard";
import Heading from "../Shared/Heading/Heading";


const AllPackages = () => {
    const [packages] = usePackages();
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
        </div>
    );
};

export default AllPackages;