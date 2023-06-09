const Primarybutton = (props) => {
    const content = props.content;
    const action = props.action;

    return (
        <button className="btn primary-btn" onClick={action}>{content}</button>
    )
}


export default Primarybutton