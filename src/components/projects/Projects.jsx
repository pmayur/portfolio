import "./Projects.css";
import { BACKEND, FRONTEND, ANDROID } from "../../util/text";

export default function Projects() {
    let backendProjects = createProjectList(BACKEND);
    let frontendProjects = createProjectList(FRONTEND);
    let androidProjects = createProjectList(ANDROID)


    return (
        <div id="project-container">
            <div id="container">
                <div className="project">
                    <h2 className="project-section">Back End Focused</h2>
                    {backendProjects}
                </div>
                <div className="project">
                    <h2 className="project-section">Front End Focused</h2>
                    {frontendProjects}
                </div>
                <div className="project">
                    <h2 className="project-section">Android Apps</h2>
                    {androidProjects}
                </div>
            </div>
        </div>
    );
}

const createProjectList = (list) => {
    return list.map((project, index) => {
        return (
            <div key={index}>
                <h4 className="project-title">{project.TITLE}</h4>
                <p className="project-desc">{project.DESC[0]}</p>
                <p className="project-desc">{project.DESC[1]}</p>
            </div>
        );
    });
};
