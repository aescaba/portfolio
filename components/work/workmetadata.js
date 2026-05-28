
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
        <div class="flex flex-col lg:flex-row gap-10 mb-10">

            <TextBlock
                numCols = "3"
                isBulleted = {true}
                heading = "Responsibilities"
                body = {responsibilities}
            />

            <TextBlock
                numCols = "3"
                isBulleted = {false}
                heading = "Role"
                body = {role}
            />

            <TextBlock
                numCols = "3"
                isBulleted = {false}
                heading = "Tools"
                body = {tools}
            />
        </div>
    );
}