import React from "react";
import { DocumentIcon } from "@heroicons/react/24/solid";

export default function NoMatch() {
    return (
        <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
                <DocumentIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Hello world
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Hello world
                </p>
            </div>
        </div>
    );
}