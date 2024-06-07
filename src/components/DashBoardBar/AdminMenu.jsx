import MenuItem from "./MenuItem";
import { CgAddR } from 'react-icons/cg'
import { LuUserSquare } from 'react-icons/lu'
import { CgProfile } from "react-icons/cg";

const AdminMenu = () => {
    return (
        <>
            <MenuItem address={'admin-profile'} icon={CgProfile} label={'My Profile'} ></MenuItem>
            <MenuItem address={'add-package'} icon={CgAddR} label={'Add Package'} ></MenuItem>
            <MenuItem address={'manage-users'} icon={LuUserSquare} label={'Manage Users'} ></MenuItem>
        </>
    );
};

export default AdminMenu;