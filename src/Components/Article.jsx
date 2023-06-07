import { content_list } from "../data/home_data";
import print from "../Assets/images/logo-gris.png";

const Article = (props) => {
    return(
        <div className="article-container">
                <p>{content_list[0].text}</p>
            </div>
    )
}
export default Article;