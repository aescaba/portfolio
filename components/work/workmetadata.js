
// function Heading(heading){
//     return <h3 class="uppercase text-base font-semibold">{heading}</h3>
// }

import TextBlock from "../textblock";

export default function WorkMetadata({ responsibilities, role, tools }) {

    /*
        responsibilities: array (strings) | responsibilities on a project
        role: string | official role on a project
        tools: string | tools used on a project
    */

    return (
        <div class="flex justify-between flex-col lg:flex-row mb-10">

            <TextBlock
                isBulleted = {true}
                heading = "Responsibilities"
                body = {responsibilities}
            />

            <TextBlock
                isBulleted = {false}
                heading = "Role"
                body = {role}
            />

            <TextBlock
                isBulleted = {false}
                heading = "Tools"
                body = {tools}
            />
        </div>
    );
}