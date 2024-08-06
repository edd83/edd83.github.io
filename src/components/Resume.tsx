import React from "react";
import { DocumentIcon } from "@heroicons/react/24/solid";

export default function Resume() {
    return (
        <section id="resume">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <DocumentIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Resume
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        Check my resume to have a better view on my experiences.
                    </p>
                    <br />
                    <a
                        href="./Eddy Lardet CV EN.pdf"
                        target="_blank"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Open
                    </a>
                </div>
            </div>
        </section>
    );
}