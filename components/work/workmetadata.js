
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
        <div class="flex-row mb-10">

<TextBlock
isBulleted={true}
heading="Responsibilities"
body={responsibilities}
/>

            <div class="flex-col w-1/3">
                {/* <Heading heading={"Responsibilities"}/> */}
                {/* {responsibilities.map((point) => {
                        return (
                            <li key={point}>{point}</li>
                        );
                    })} */}
            </div>
            <div class="flex-col w-1/3">
                <h3 class="uppercase text-base">Role</h3>
                <p>{role}</p>
            </div>

            <div class="flex-col w-1/3">
                <h3 class="uppercase text-base">Tools</h3>
                <p>{tools}</p>
            </div>

            {/* <div class="mb-2 text-lg leading-6">
                <h1 class=" font-bold">{title}</h1> 
            </div>

            <div class="mb-4 text-lg leading-8">
                <h2 class="uppercase">{client}</h2>
            </div> */}
        </div>
    );
}