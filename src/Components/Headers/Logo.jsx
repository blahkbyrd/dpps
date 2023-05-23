const Logo = (props) =>{
    const logo_color = props.color;
    return(
        <div className="logo-container">
            
        <img src={`./logo-${logo_color}_silhouette.png`} alt="logo" className="logo" />
        <span className="brand-name">Des patounes pour un sourire</span>
        </div>
    )
}
export default Logo;


