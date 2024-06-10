import { useParams } from "react-router-dom";
import usePackages from "../../../hooks/usePackages";
import ImageHeader from "../../Shared/ImageHeader/ImageHeader";
import img1 from '../../../assets/images/highway.jpg'
import PackageCard from "../PackageCard";

const PackageTourTypes = () => {
    const { type } = useParams();
    const [packages] = usePackages();
    const matches = packages.filter(pack => pack.tourType === type)

    return (
        <div>
            <ImageHeader img1={img1} heading={'Get your heart racing with our Tours'} shortDis={'Thrill Seekers : Conquer the Great Outdoors'}></ImageHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-4 mt-10">
                {
                    matches.map(pack => <PackageCard key={pack._id} pack={pack}></PackageCard>)
                }
            </div>
        </div>
    );
};

export default PackageTourTypes;