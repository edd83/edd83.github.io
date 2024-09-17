import { Dialog, DialogPanel, DialogTitle, Button } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    let [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    function encode (data: { [x: string]: string | number | boolean; "form-name": string; name: string; email: string; message: string; }) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit (e: { preventDefault: () => void; }) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => setIsOpen(true))
            .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        frameBorder={0}
                        marginHeight={0}
                        marginWidth={0}
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=Sanary-sur-mer&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                {t('Contact.field1')}
                            </h2>
                            <p className="mt-1">
                                Sanary-sur-mer, France
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                {t('Contact.field2')}
                            </h2>
                            <a className="text-indigo-400 leading-relaxed">
                                lardet.eddy@email.com
                            </a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                {t('Contact.field3')}
                            </h2>
                            <p className="leading-relaxed">+33664513171</p>
                        </div>
                    </div>
                </div>
                <form
                    name="contact"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        {t('Contact.title')}
                    </h2>
                    <p className="leading-relaxed mb-5">
                        {t('Contact.desc')}
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            {t('Contact.form1')}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            {t('Contact.form2')}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            {t('Contact.form3')}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        {t('Contact.formBtn')}
                    </button>
                    <input type="hidden" name="form-name" value="contact" />
                    <a
                        href="https://cal.com/eddylardet"
                        target="_blank"
                        className="text-center text-white text-gray-400 bg-green-500 mt-5 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 hover:text-white rounded text-lg">
                        {t('Contact.formBtn2')}
                    </a>
                </form>
            </div>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => setIsOpen(false)}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                                {t('Contact.msgTitle')}
                            </DialogTitle>
                            <p className="mt-2 text-sm/6 text-white/50">
                                {t('Contact.msgDesc')}
                            </p>
                            <div className="mt-4">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t('Contact.msgBtn')}
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </section>
    );
}