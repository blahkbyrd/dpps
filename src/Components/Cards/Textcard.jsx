const Textcard = (props) => {
    const title = props.title;
    const content = props.content;
    return(
        <div className="text-catd">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}


export default Textcard;