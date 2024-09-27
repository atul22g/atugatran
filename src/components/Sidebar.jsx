const Sidebar = () => {
    const toggleSidebar = () => {   
        const sidebar = document.querySelector('[data-sidebar]')
        sidebar.classList.toggle('active')
    }

    return (
        <aside className="sidebar" data-sidebar>

            <div className="sidebar-info">

                <figure className="avatar-box">
                    <img src="profile.png" alt="Atul Goyal" width="60" style={{ padding: "8px" }} />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Atul Goyal">Atul Goyal</h1>

                    <p className="title">Full Stack developer</p>
                </div>

                <button className="info_more-btn" data-sidebar-btn onClick={()=> toggleSidebar()}>
                    <span>Show Contacts</span>

                    <i className="fa-solid fa-chevron-down"></i>
                </button>

            </div>

            <div className="sidebar-info_more">

                <div className="separator"></div>

                <ul className="contacts-list">

                    <li className="contact-item">

                        <div className="icon-box">
                            <i className="fa-regular fa-envelope"></i>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <a href="mailto:atul22gcoders@gmail.com" className="contact-link">atul22gcoders@gmail.com</a>
                        </div>

                    </li>
                    <li className="contact-item">

                        <div className="icon-box">
                            <i className="fa-regular fa-calendar-days"></i>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>

                            <time dateTime="2004-08-06">Aug 06, 2004</time>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address>Ambala, Haryana, India</address>
                        </div>

                    </li>

                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://github.com/Atugatran" className="social-link">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://www.instagram.com/atul857086/" className="social-link">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>

            </div>

        </aside>
    )
}

export default Sidebar