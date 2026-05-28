
export default function WorkHeading({ title, client }) {
    
    /*
        title: string | short blurb describing the purpose of the project
        client: string | who the project was for
    */

    return (
        <div class="flex-col lg:w-2/3 mb-10 leading-8">
            <div class="mb-2 text-2xl">
                <h1 class=" font-bold">{title}</h1> 
            </div>

            <div class="mb-4 text-lg">
                <p class="uppercase">{client}</p>
            </div>
        </div>
    );
}