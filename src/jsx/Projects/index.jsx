import EducationCategory from "./Education";
import EntertainmentCategory from "./Entertainment";
import UtilitiesCategory from "./Utilities";

import { useState } from "react";

const categories = [
    EducationCategory,
    EntertainmentCategory,
    UtilitiesCategory
];

function ProjectsContainer() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    
    return (
        <div className="w-3/4 mx-auto">
            <div>
                <ul>
                    {
                        categories.map((category, index) => {
                            return (
                                <li key={"project-cat-" + index} 
                                    onClick={() => setSelectedCategory(category)}
                                    className={selectedCategory === category ? "bg-content-default text-background-default" : "border-2 border-content-default"}
                                >
                                    {category.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="grid">
                {
                    selectedCategory.projects.map((project, index) => {
                        return <FeaturedProject {...project} key={"project-" + index}/>
                    })
                }
            </div>
        </div>
    )
}

function FeaturedProject({ title, descriptionComponent, repo, website, image }) {
    return (
        <div>
            <h1>{title}</h1>
            {
                website && (
                    <a href={website} target="_blank" rel="noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                        Visit website
                    </a>
                )
            }
            {
                repo && (
                    <a href={repo} target="_blank" rel="noreferrer">
                        <i className="devicon-github-original"></i>
                        View on GitHub
                    </a>
                )
            }
        </div>
    )
}

export default ProjectsContainer;