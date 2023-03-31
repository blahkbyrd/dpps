const Planning = () =>{
    return(
        <div className="planning" id="planning">
            <h2 className="title">Prendre un rdv</h2>
            <form action="" method="post">
                <label htmlFor="date">date</label>
                <input type="date" name="date" id="date" />
                <label htmlFor="time">Horaire</label>
                <input type="datetime" name="time" id="time" />
                <button type="submit">prendre RDV</button>
            </form>
        </div>
    )
}

export default Planning;