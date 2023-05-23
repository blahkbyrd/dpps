import Article from "../Article";

const Textcard = (props) => {
    const title = props.title;
    return (
        <div className="text-card">
            <h4>{title}</h4>
            <Article/>
            <div className="button-plus">
                <div className="line-plus"></div>
                <div className="line-plus"></div>
            </div>
        </div>
    )
}


export default Textcard;