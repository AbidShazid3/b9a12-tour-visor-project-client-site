import Heading from "../../Shared/Heading/Heading";
import { TbBeachOff } from "react-icons/tb";
import { SiAdventofcode } from "react-icons/si";
import { MdHistoryEdu } from "react-icons/md";
import { FaPersonWalkingArrowLoopLeft, FaPersonHiking } from "react-icons/fa6";
import FindPackage from "./FindPackage";
import { Link } from "react-router-dom";

const TourTypes = () => {

    const categories = [
        { type: 'Adventure', icon:<SiAdventofcode className="text-3xl mt-1"/> },
        { type: 'Historical', icon:<MdHistoryEdu className="text-3xl mt-1" /> },
        { type: 'Walking', icon:<FaPersonWalkingArrowLoopLeft className="text-3xl mt-1" /> },
        { type: 'Beach', icon:<TbBeachOff className="text-3xl mt-1" />},
        { type: 'Hiking', icon:<FaPersonHiking className="text-3xl mt-1" />}
    ];

    return (
        <div className="mt-20">
            <Heading
                heading={'Tour Types'} subHeading={'Welcome to our Tour Types and discover the stories behind'}
            ></Heading>
            <div className="flex flex-wrap justify-around">
                {
                    categories.map(category => (
                        <Link className="transition-transform duration-300 transform hover:scale-110" to={`/package/${category.type}`} key={category.type}>
                            <div className="avatar">
                                <div className="w-24 rounded-full border-2 border-black cursor-pointer">
                                    <div className="flex flex-col justify-center items-center p-4">
                                        {category.icon}
                                        <h3 className="text-xs font-bold">{category.type}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <FindPackage></FindPackage>
        </div>
    );
};

export default TourTypes;