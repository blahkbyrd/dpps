import { content_list } from "../data/home_data";
import print from "../Assets/images/logo-gris.png";

const Article = (props) => {
    return(
        <div className="article-container">
                {
                    content_list.map(elem => {
                        if (elem.type === "p") {
                            return (
                                <p>{elem.text}</p>
                            )
                        }
                        else if (elem.type === "ul") {
                            return (
                                <ul>
                                    {
                                        elem.li.map(e => {
                                            return (
                                                <li><img src={print} alt="icon"/> {e}</li>
                                            )
                                        })
                                    }
                                </ul>
                            )
                        }
                        else if (elem.type === "em") {
                            return (
                                <p className="strong">{elem.text}</p>
                            )
                        }
                    })
                }
            </div>
    )
}
export default Article;