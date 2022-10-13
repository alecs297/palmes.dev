const techs = [
    [
        {
            name: "Node.js",
            logo: "nodejs-plain",
            url: "https://nodejs.org/"
        },
        {
            name: "PHP",
            logo: "php-plain",
            url: "https://www.php.net/"
        },
        {
            name: "C",
            logo: "c-plain",
            url: "https://en.wikipedia.org/wiki/C_(programming_language)"
        },
        {
            name: "Python",
            logo: "python-plain",
            url: "https://www.python.org/"
        },
        {
            name: "Java",
            logo: "java-plain",
            url: "https://www.java.com/en/"
        },
        {
            name: "HTML5",
            logo: "html5-plain",
            url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        },
        {
            name: "CSS3",
            logo: "css3-plain",
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
        },
        {
            name: "JavaScript",
            logo: "javascript-plain",
            url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        }
    ],
    [
        {
            name: "PostgreSQL",
            logo: "postgresql-plain",
            url: "https://www.postgresql.org/"
        },
        {
            name: "SQLite",
            logo: "sqlite-plain",
            url: "https://www.sqlite.org/index.html"
        },
        {
            name: "MySQL",
            logo: "mysql-plain",
            url: "https://www.mysql.com/"
        },
        {
            name: "SQLAlchemy",
            logo: "sqlalchemy-plain",
            url: "https://www.sqlalchemy.org/"
        },
    ],
    [
        {
            name: "Nginx",
            logo: "nginx-original",
            url: "https://www.nginx.com/"
        },
        {
            name: "Apache",
            logo: "apache-plain",
            url: "https://httpd.apache.org/"
        }
    ],
    [
        {
            name: "Git",
            logo: "git-plain",
            url: "https://git-scm.com/"
        },
        {
            name: "Docker",
            logo: "docker-plain",
            url: "https://www.docker.com/"
        }
    ],
    [
        {
            name: "Express.js",
            logo: "express-original",
            url: "https://expressjs.com/"
        },
        {
            name: "Socket.io",
            logo: "socketio-plain",
            url: "https://socket.io/"
        },
        {
            name: "Electron.js",
            logo: "electron-original",
            url: "https://www.electronjs.org/"
        },
        {
            name: "React",
            logo: "react-original",
            url: "https://reactjs.org/"
        },
        {
            name: "Discord.js",
            logo: "discordjs-plain",
            url: "https://discord.js.org/"
        },
        {
            name: "Three.js",
            logo: "threejs-original",
            url: "https://threejs.org/"
        },
        {
            name: "Bootstrap",
            logo: "bootstrap-plain",
            url: "https://getbootstrap.com/"
        },
        {
            name: "Tailwind",
            logo: "tailwindcss-plain",
            url: "https://tailwindcss.com/"
        },
    ]
    
];



function TechList() {
    return (
        <div className="w-screen md:w-1/2 px-3 md:px-0 md:mx-3 h-screen float-right sticky">
            <div className="mx-3">
                <h1 className="font-extrabold text-4xl md:text-6xl p-3 bg-stone-900 w-fit">Tech I <span className="text-pink-500 font-mono tracking-tighter font-black">&lt;3</span> and work with.</h1>
                <div className="flex-wrap gap-2 md:gap-2 justify-center mx-auto w-full font-mono">
                    {
                        techs.reduce((a, b) => a.concat(b), []).map((tech, index) => {
                            return (
                                <div key={"tech-" + index} className="w-fit inline-block m-3">
                                    <a target="_blank" rel="noreferrer noopener" href={tech.url}>
                                        <i className={`devicon-${tech.logo} text-4xl md:text-7xl`}></i>
                                        <p className="hidden  md:block text-center text-xs">{tech.name}</p>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TechList;