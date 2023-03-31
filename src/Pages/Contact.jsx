const Contact = () => {
    return(
        <div className="contact" id="contact">
            <form action="" method="post">
                <label htmlFor="message">Votre Message</label>
                <textarea name="message" id="message" cols="60" rows="50"></textarea>
                <label htmlFor="email">email :</label>
                <input type="email" name="email" id="email" />
                <button type="submit">envoyer</button>
            </form>
        </div>
    )
}

export default Contact;