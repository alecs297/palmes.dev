const techs = [
    [
        {
            name: "C",
            logo: "c-plain",
            url: "https://en.wikipedia.org/wiki/C_(programming_language)"
        },
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
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS"
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
        }
    ],
    [
        {
            name: "Linux",
            logo: "linux-plain",
            url: "https://www.linux.org/"
        },
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
            name: "Selenium",
            logo: "selenium-plain",
            url: "https://www.selenium.dev/"
        },
        {
            name: "Flask",
            logo: "flask-original",
            url: "https://flask.palletsprojects.com/en/2.0.x/"
        },
        {
            name: "SQLAlchemy",
            logo: "sqlalchemy-plain",
            url: "https://www.sqlalchemy.org/"
        }
    ],
    [
        {
            name: "Spring",
            logo: "spring-plain",
            url: "https://spring.io/"
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
        }
    ]
    
];

function TechDescription() {
    return (
        <div className="text-md tracking-tight md:text-xl p-6 bg-stone-1000 w-full 2xl:w-5/6 space-y-3">
            <p>Some HR guy on Linkedin once said : <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 to-cyan-500">languages and frameworks don't matter.</span></p>

            <p>While his post is probably inspired by a motivational quote from Facebook, <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 to-cyan-500">he is right</span>.</p>

            <p>Software engineering is not bound to a specific tool.</p>
            
            <p><span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 to-cyan-500">However</span>, mastering the right <span className="line-through decoration-3 decoration-red-700">deprecated JavaScript</span> framework for the job does save a lot of time.</p>

            <p>I'm <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 to-cyan-500">always learning new things</span>, but these are some of my <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-200 to-cyan-500">favorite</span> languages and frameworks I use for building stuff.</p>

            <p>Feel free to check out my
                <span onClick={() => {window.open(
                    "https://github.com/alecs297",
                    "_blank"
                )}} className="font-bold text-xl mx-1 cursor-pointer underline">
                    <i className="devicon-github-original"></i> GitHub
                </span> for some of my projects.
            </p>
        </div>
    );
}

function TechTitle() {
    return (
        <h1 className="font-extrabold text-4xl md:text-6xl p-3 bg-stone-900 w-fit -translate-x-3">I <span className="text-pink-600 text-5xl md:text-7xl font-black tracking-tighter">&lt;3</span> tech</h1>
    );
}

function TechList() {
    return (
        <div className="w-screen md:w-2/3 px-3 md:px-0 md:mx-3 h-screen float-right sticky">
            <div className="mx-3">
                <TechTitle/>
                <TechDescription     />
                <div className="grid grid-cols-7 gap-2 p-3 2xl:px-12 xl:gap-8 content-evenly w-full 2xl:w-5/6 2xl:mx-0 font-bold bg-stone-1000">
                    {
                        techs.reduce((a, b) => a.concat(b), []).map((tech, index) => {
                            return (
                                <div key={"tech-" + index} className="w-fit inline-block my-1">
                                    <a target="_blank" rel="noreferrer noopener" href={tech.url}>
                                        <i className={`devicon-${tech.logo} text-4xl xl:text-7xl`}></i>
                                        <p className="hidden xl:block text-center text-xs pt-2">{tech.name}</p>
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