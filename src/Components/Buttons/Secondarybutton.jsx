const Secondarybutton = (props) => {
    const content = props.content;
    const action = props.action;

    return (
        <button className="secondary-btn" onClick={action}>{content}</button>
    )
}


export default Secondarybutton