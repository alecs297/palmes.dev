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
        <div>

        </div>
    )
}

function FeaturedProject({ title, descriptionComponent, repo, website }) {
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