import { useLoaderData } from "react-router-dom";


const PackageDetailsCard = () => {
    const packageDetails = useLoaderData();
    // const {_id, img, tourType, tripTitle, location, price, aboutTour,tourDuration, tourPlan} = packageDetails
    console.log(packageDetails);
    return (
        <div>
            <h3>single package details</h3>
        </div>
    );
};

export default PackageDetailsCard;