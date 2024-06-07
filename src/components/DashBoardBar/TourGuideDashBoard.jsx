import MenuItem from "./MenuItem";
import { MdAssignmentTurnedIn } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const TourGuideDashBoard = () => {
    return (
        <div>
            <MenuItem address={'guide-profile'} icon={CgProfile } label={'My Profile'} ></MenuItem>
            <MenuItem address={'my-assigned-tours'} icon={MdAssignmentTurnedIn} label={'My Assigned Tours'} ></MenuItem>
        </div>
    );
};

export default TourGuideDashBoard;