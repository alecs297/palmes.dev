import { useState } from "react";
import Typewritter from "../Typewritter";
import Projects from "./projects";

const categories = Projects.categories;

function ProjectsContainer() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    
    return (
        <div className="w-full lg:w-3/4 clear-both mx-auto h-min-[75vh]">
            <div className="w-1/12 hidden lg:inline-block float-left">
                <h1 className="text-content-greyed vertical-lr h-full text-4xl text-center uppercase tracking-wider -scale-100 font-black">
                    {"/** Work in perpetual progress */"}
                </h1>
            </div>
            <div className="w-full h-full lg:w-11/12 inline-block">
                <ul className="flex flex-wrap space-x-4 space-y-2">
                    <li className="w-full lg:w-auto text-5xl lg:text-3xl tracking-tight px-2 py-2 font-bold select-none block my-8 lg:my-0 lg:inline">
                        Projects' Showcase
                    </li>
                    {
                        categories.map((category, index) => {
                            return (
                                <li key={"project-cat-" + index} 
                                    onClick={() => setSelectedCategory(category)}
                                    className={"px-2 py-1 border-2 w-max inline " + (selectedCategory === category ? " font-bold border-content-default bg-content-default text-background-default select-none" : " border-black/0 cursor-pointer")}
                                >
                                    {category.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="w-full h-full grid border-t-4 border-content-default">
                    <span className="px-2 py-2 min-h-[10vh]">
                        <Typewritter options={{
                            writeMs: 1,
                            loop: false
                        }} cursorClassName={"text-content-default bg-content-default mx-1"}>
                            {selectedCategory.description}
                        </Typewritter>
                    </span>
                    <div className="flex flex-wrap w-full justify-center gap-4 p-2">
                        {
                            selectedCategory.projects.map((project, index) => {
                                return <FeaturedProject {...project} key={"project-" + index}/>
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

function FeaturedProject({ title, description, repo, website, image }) {
    return (
        <div className="bg-background-accent w-max rounded-lg px-2 py-2 w-full h-full">
            <h1 className="select-none text-content-primary font-bold text-2xl">{title}</h1>
            {
                repo && (
                    <a className="inline" href={repo} target="_blank" rel="noreferrer">
                        <i className="devicon-github-original mr-2"></i>
                        Open source
                    </a>
                )
            }
            {
                website && (
                    <div className="block w-full h-full">
                        <a className="inline" href={website} target="_blank" rel="noreferrer">
                            <span className="h-4 w-4 inline-flex mr-2 align-baseline">
                                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-500"></span>
                                <span className="inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                            </span>
                            Live demo
                        </a>
                    </div>
                    
                    
                )
            }
        </div>
    )
}

export default ProjectsContainer;