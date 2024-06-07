import MenuItem from "./MenuItem";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { LuBookmarkPlus } from "react-icons/lu";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

const TouristMenu = () => {
    return (
        <div>
            <MenuItem address={'/dashboard'} icon={CgProfile} label={'My Profile'} ></MenuItem>
            <MenuItem address={'my-bookings'} icon={BsJournalBookmarkFill} label={'My Bookings'} ></MenuItem>
            <MenuItem address={'my-wishlist'} icon={LuBookmarkPlus} label={'My Wishlist'} ></MenuItem>
            <MenuItem address={'tourist-request'} icon={VscGitPullRequestCreate} label={'Request to Admin'} ></MenuItem>
        </div>
    );
};

export default TouristMenu;