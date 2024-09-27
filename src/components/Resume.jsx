const Resume = () => {
    return (
        <article className="resume active">

            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <i className="fa-solid fa-book-open-cover"></i>
                    </div>

                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">B.D.M High School</h4>

                        <span>2006 — 2021</span>

                        <p className="timeline-text">
                            Attended B.D.M High School where I developed a strong foundation in various subjects, participated in extracurricular activities, and honed my skills in critical thinking and problem-solving.
                        </p>

                    </li>
                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title">Hartron Skill Center (Ambala)</h4>

                        <span>2021 — 2022</span>

                        <p className="timeline-text">
                            Completed a Diploma in Web Technology (DWT) at Hartron Skill Center (Ambala), where I gained comprehensive knowledge and hands-on experience in web development technologies, including HTML, CSS, JavaScript, and various web development frameworks. This course equipped me with the skills necessary to design, develop, and maintain dynamic and responsive websites.
                        </p>
                    </li>
                </ol>

            </section>

            <section className="skill">

                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card">

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">Web design</h5>
                            <data value="75">75%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '75%' }}></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">PHP</h5>
                            <data value="85">85%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '85%' }}></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5">Nodejs</h5>
                            <data value="75">75%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '75%' }}></div>
                        </div>

                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Django</h5>
                            <data value="70">70%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '70%' }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">GraphQL</h5>
                            <data value="60">60%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '60%' }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">AppWrite</h5>
                            <data value="95">95%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '95%' }}></div>
                        </div>
                    </li>

                </ul>

            </section>

        </article>
    )
}

export default Resume;