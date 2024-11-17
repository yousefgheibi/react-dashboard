import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from "react-icons/bi";
import "./card.css";

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


const Card = () => {
    return (
        <div className="card--container">
            {courses.map((item)=> (
                <div className="card">
                    <div className="card--cover">{item.icon}</div>
                    <div className="card--title">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card;