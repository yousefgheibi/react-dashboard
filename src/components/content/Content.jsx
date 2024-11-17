import ContentHeader from "../content-header/ContentHeader";
import Card from "../card/Card";
import "./content.css";
import TeacherList from "../teacher-list/TeacherList";

const Content = () => {
    return (
        <div className="content">
            <ContentHeader />
            <Card />
            <TeacherList />
        </div>
    )
}

export default Content;