import Image from "next/image";

// import PageTitle from "../pagetitle";
import WorkHeading from "./workheading";
import WorkMetadata from "./workmetadata";

export default function WorkPage({
    title = "",
    client = "",
    coverSrc = "",
    coverAltText = "",
    responsibilities = [],
    role ="",
    tools = "",
    children
}) {

    /*
        title: string | project title
        client: string | the project's client

        coverSrc: string(???) | path for the cover photo
        coverAltText : string | alt text for the cover photo

        responsibilities: array (strings) | responsibilities on a project
        role: string | official role on a project
        tools: string | tools used on a project

        children: the work sample content
    */

    return (
        <div class="font-light text-xl leading-8 pb-24">

            <WorkHeading
                title={title}
                client={client}
            />

            <Image className="mb-10" src={coverSrc} alt={coverAltText} />

            <WorkMetadata
                responsibilities={responsibilities}
                role={role}
                tools={tools}
            />

            {children}
        </div>
    );
}