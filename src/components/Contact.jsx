const Contact = () => {
    return (
        <article className="contact active">

            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>

            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6879.330268174588!2d76.92764284141235!3d30.44559339837149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fba3a37b0a617%3A0x93d31319ded886bb!2sJatwar%2C%20Haryana%20134201!5e0!3m2!1sen!2sin!4v1727456013248!5m2!1sen!2sin"
                        width="400" height="300" loading="lazy"></iframe>
                </figure>
            </section>

            <section className="contact-form">

                <h3 className="h3 form-title">Contact Form</h3>

                <form action="#" className="form" data-form>

                    <div className="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

                        <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
                    </div>

                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <ion-icon name="paper-plane"></ion-icon>
                        <span>Send Message</span>
                    </button>

                </form>

            </section>

        </article>
    )
}

export default Contact;