import { BiEdit } from "react-icons/bi";
import "./profile-header.css";


const ProfileHeader = () => {
    return (
        <div className="profile--header">
            <h2 className="header--title">Profile</h2>
            <div className="edit">
                <BiEdit className="icon" />
            </div>
        </div>
    )
}

export default ProfileHeader;