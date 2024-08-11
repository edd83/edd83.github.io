import React from "react";
import { DocumentIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import NavbarYoga from "./NavbarYoga";
import AboutYoga from "./AboutYoga";
import ContactYoga from "./ContactYoga";
import EventYoga from "./EventYoga";
import DegreeYoga from "./DegreeYoga";

export default function Yoga() {
    return <main className="text-gray-400 bg-purple-900 body-font">
        <NavbarYoga />
        <AboutYoga />
        <DegreeYoga />
        <EventYoga />
        <ContactYoga />
    </main>
}