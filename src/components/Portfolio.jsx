import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [backend, setBackend] = useState([]);
    const [application, setApplication] = useState([]);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    const toggleCategory = () => {
        const btn = document.querySelector('[data-select]')
        btn.classList.toggle('active')
    }

    const changeCategory = (text) => {
        const select = document.querySelector('[data-select-value]');
        select.innerHTML = text;
    }

    const query = useQuery();
    const category = query.get('category');


    useEffect(() => {
        const btn = document.querySelector('[data-select]')
        btn.classList.toggle('active')
        axios.get('https://atugatranapi.pages.dev/Projects/index.json')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching the projects:', error);
            });
        axios.get('https://atugatranapi.pages.dev/backend/index.json')
            .then(response => {
                setBackend(response.data);
            })
            .catch(error => {
                console.error('Error fetching the projects:', error);
            });
        axios.get('https://atugatranapi.pages.dev/App/index.json')
            .then(response => {
                setApplication(response.data);
            })
            .catch(error => {
                console.error('Error fetching the projects:', error);
            });

    }, [category]);

    return (
        <article className="portfolio active">

            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">

                <ul className="filter-list">

                    <li className="filter-item">
                        <NavLink className={`${category == 'all' ? 'isActive' : ''}`} to='/Portfolio?category=all'>
                            <button data-filter-btn>All</button>
                        </NavLink>
                    </li>

                    <li className="filter-item">
                        <NavLink className={`${category == 'web-design' ? 'isActive' : ''}`} to='/Portfolio?category=web-design'>
                            <button data-filter-btn>Web design</button>
                        </NavLink>
                    </li>

                    <li className="filter-item">
                        <NavLink className={`${category == 'application' ? 'isActive' : ''}`} to='/Portfolio?category=application'>
                            <button data-filter-btn>Applications</button>
                        </NavLink>
                    </li>

                    <li className="filter-item">
                        <NavLink className={`${category == 'web-developmenmt' ? 'isActive' : ''}`} to='/Portfolio?category=web-developmenmt'>
                            <button data-filter-btn>Web development</button>
                        </NavLink>
                    </li>

                </ul>

                <div className="filter-select-box">

                    <button className="filter-select" data-select onClick={() => toggleCategory(category)}>
                        <div className="select-value" data-select-value>Select category</div>
                        <div className="select-icon">
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>

                    </button>

                    <ul className="select-list">

                        <li className="select-item">
                            <NavLink onClick={()=> changeCategory("All")} to='/Portfolio?category=all'>
                                <button  data-all data-select-btn>All</button>
                            </NavLink>
                        </li>

                        <li className="select-item">
                            <NavLink  onClick={()=> changeCategory("Web design")} to='/Portfolio?category=web-design'>
                                <button data-web-design data-select-item>Web design</button>
                            </NavLink>
                        </li>

                        <li className="select-item">
                            <NavLink onClick={()=> changeCategory("Applications")} to='/Portfolio?category=application'>
                                <button data-application data-select-item>Applications</button>
                            </NavLink>
                        </li>

                        <li className="select-item">
                            <NavLink onClick={()=> changeCategory("Web development")} to='/Portfolio?category=web-developmenmt'>
                                <button data-web-developmenmt data-select-item>Web development</button>
                            </NavLink>
                        </li>

                    </ul>

                </div>

                <ul className="project-list">
                    {
                        // <Route path="/" element={<About />} />
                    }
                    {
                        category != "application" && category != "web-developmenmt" && projects.map((project, index) => (
                            <li key={index} className="project-item active" data-filter-item data-category="web design">
                                <a target='_new' href={project.demo}>
                                    <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <i className="fa-solid fa-eye"></i>
                                        </div>
                                        <img src={project.img} alt="img" loading="lazy" style={{ minHeight: '15em', maxHeight: '15em', objectFit: 'fill' }} />
                                    </figure>

                                    <h3 className="project-title">{project.title}</h3>

                                    <p className="project-category">Web Design</p>
                                </a>
                            </li>
                        ))
                    }{
                        category != "application" && category != "web-design" && backend.map((project, index) => (
                            <li key={index} className="project-item active" data-filter-item data-category="web development">
                                <a target='_new' href={project.demo}>
                                    <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <i className="fa-solid fa-eye"></i>
                                        </div>
                                        <img src={project.img} alt="img" loading="lazy" style={{ minHeight: '15em', maxHeight: '15em', objectFit: 'fill' }} />
                                    </figure>

                                    <h3 className="project-title">{project.title}</h3>

                                    <p className="project-category">Web Development</p>
                                </a>
                            </li>
                        ))
                    }{
                        category != "web-developmenmt" && category != "web-design" && application.map((project, index) => (
                            <li key={index} className="project-item active" data-filter-item data-category="applications">
                                <a target='_new' href={project.demo}>
                                    <figure className="project-img">
                                        <div className="project-item-icon-box">
                                            <i className="fa-solid fa-eye"></i>
                                        </div>
                                        <img src={project.img} alt="img" loading="lazy" style={{ minHeight: '15em', maxHeight: '15em', objectFit: 'fill' }} />
                                    </figure>

                                    <h3 className="project-title">{project.title}</h3>

                                    <p className="project-category">Applications</p>
                                </a>
                            </li>
                        ))
                    }
                </ul>

            </section>

        </article>
    )
}

export default Portfolio;