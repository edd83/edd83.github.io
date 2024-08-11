import { ArrowRightIcon } from "@heroicons/react/24/solid";
import i18n, { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t, i18n } = useTranslation();

    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        Eddy Lardet
                    </a>
                </nav>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <a href="#skills" className="mr-5 hover:text-white">
                        {t('NavBar.Nav1')}
                    </a>
                    <a href="#resume" className="mr-5 hover:text-white">
                        {t('NavBar.Nav2')}
                    </a>
                    <a href="#projects" className="mr-5 hover:text-white">
                        {t('NavBar.Nav3')}
                    </a>
                    <a href="#testimonials" className="mr-5 hover:text-white">
                        {t('NavBar.Nav4')}
                    </a>
                </nav>
                <button
                    onClick={() => (i18n.language === "en") ? changeLanguage('fr') : changeLanguage('en')}
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-1 focus:outline-none rounded text-base mt-4 md:mt-0">
                    <img src="./flag-uk-fr.jpg" className="h-5 w-8 rounded" />
                </button>
                <a
                    href="#contact"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    {t('NavBar.Nav5')}
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}