
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
                h3 = "Responsibilities"
                body = {responsibilities}
            />

            <TextBlock
                isBulleted = {false}
                h3 = "Role"
                body = {role}
            />

            <TextBlock
                isBulleted = {false}
                h3 = "Tools"
                body = {tools}
            />
        </div>
    );
}