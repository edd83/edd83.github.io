import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { projects } from "../data";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t, i18n } = useTranslation();
    
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        {t('Projects.title')}
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        {t('Projects.desc')}
                    </p>
                </div>
                <div className="flex flex-wrap -m-6">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.image}
                            className="sm:w-1/2 w-100% p-6">
                            <div className="h-full flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <br />
                {t('Projects.endText')}
            </div>
        </section>
    );
}