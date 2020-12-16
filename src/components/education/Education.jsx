import "./Education.css";

export default function Education() {
    return (
        <div id="education-container">
            <div id="education">

                <h2 id="education-title">Full Stack Developer Certification</h2>
                <h3 id="education-desc">
                    FreeCodeCamp

                    <a href="https://www.freecodecamp.org/certification/pmay/full-stack" target="_blank" rel="noopener noreferrer">
                        <span id="edu-certificate">(view certificate)</span>
                    </a>
                </h3>
                <div>
                    <p className="education-para">
                        Open Source Curriculum divided in 6 Certifications
                        covering different aspects of development
                    </p>
                    <p className="education-para">
                        Course work comprising of of 100's of hours of exercises
                        and 30+ mini projects
                    </p>
                </div>

                <br />
                <br />

                <h2 id="education-title">
                    Bachelor of Engineering, Computer Science
                </h2>
                <h3 id="education-desc">
                    University of Mumbai - 6.86/10{" "}
                    <span id="education-date">(2014 - 2018)</span>
                </h3>
            </div>
        </div>
    );
}
