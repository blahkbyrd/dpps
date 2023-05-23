const ContactForm = () => {

    return(
    <div className="form-container form-contact">
        <form action="" method="post">
                <label htmlFor="subject">sujet</label>
                <select name="subject" id="subject">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <label htmlFor="email">email :</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="name">nom</label>
                <input type="text" name="name" id="name" />
                <label htmlFor="message">message</label>
                <textarea name="message" id="message" cols="60" rows="10"></textarea>
                <div className="btn-container">
                <button className="btn primary-btn" type="submit">envoyer</button>
                <button className="btn cancel-btn" type="button">annuler</button>
                </div>
               
            </form>
    </div>
    )
}

export default ContactForm;