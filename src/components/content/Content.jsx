import ContentHeader from "../content-header/ContentHeader";
import Card from "../card/Card";
import "./content.css";

const Content = () => {
    return (
        <div className="content">
            <ContentHeader />
            <Card />
        </div>
    )
}

export default Content;