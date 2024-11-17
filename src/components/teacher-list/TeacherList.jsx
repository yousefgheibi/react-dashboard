import "./teacher-list.css";
import Profile from "../../assets/profile.jpg"

const teachers = [
    {
        image: Profile,
        name: 'Prof. Jhone Doe',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Profile,
        name: 'Prof. Jhone Doe',
        duration: '20 hours lesson',
        cost: '100',
    },
    {
        image: Profile,
        name: 'Prof. Jhone Doe',
        duration: '20 hours lesson',
        cost: '100',
    }
]

const TeacherList = () => {
    return (
        <div className="teacher--list">
            <div className="list--header">
                <h2>Teachers</h2>
                <select>
                    <option value="english">English</option>
                    <option value="persian">Persian</option>
                </select>
            </div>

            <div className="list--container">
                {teachers.map((teacher) => (
                    <div className="list">
                        <div className="teacher--detail">
                            <img src={teacher.image} />
                            <h2>{teacher.name}</h2>
                        </div>
                        <span>{teacher.duration}</span>
                        <span>${teacher.cost}/hr.</span>
                        <span className="teacher--todo">:</span>
                    </div>
                ))}

            </div>
        </div>
    )

}

export default TeacherList;