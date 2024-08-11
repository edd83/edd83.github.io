import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { degreeYoga } from "../data";

export default function DegreeYoga() {
    return (
        <section id="degreeYoga">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center">
                    <img
                        className="inline-block object-cover h-100 w-96 rounded"
                        alt="hero"
                        src="./YogaKundalini.jpg"
                    />
                    <br />
                    <br />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Diplômes
                    </h1>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {degreeYoga.map((degree) => (
                        <div key={degree} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {degree}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}