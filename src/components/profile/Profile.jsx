import ProfileHeader from "../profile-header/ProfileHeader";
import userImage from "../../assets/profile.jpg";
import "./profile.css";
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from "react-icons/bi";


const courses = [
    {
        title: 'Web Development',
        duration: '2 Hours',
        icon: <BiLogoHtml5 />,
    },
    {
        title: 'App Development',
        duration: '3 Hours',
        icon: <BiLogoAndroid />,
    },
    {
        title: 'UX & UI',
        duration: '1 Hours',
        icon: <BiBuilding />,
    },
]

const Profile = () => {
    return (
        <div className="profile">
            <ProfileHeader />

            <div className="user--profile">
                <div className="user--detail">
                    <img src={userImage} />
                    <h3 className="username">Yousef Gheibi</h3>
                    <span className="profession">Teacher</span>
                </div>

                <div className="user-courses">
                    {courses.map((course) => (
                        <div className="course">
                            <div className="course--detail">
                                <div className="course-cover">{course.icon}</div>
                                <div className="course-name">
                                    <h5 className="title">{course.title}</h5>
                                    <span className="duration">{course.duration}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile;