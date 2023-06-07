const Imagecard = (props) =>{
    
    const source = props.source;
    const alternative = props.alternative;
    

    return(
        <div className="image-card"  >
            <img src={source} alt={alternative} />
        </div>
    
    )
}

export default Imagecard;