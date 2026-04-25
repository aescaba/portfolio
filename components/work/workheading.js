
export default function WorkHeading({ title, client }) {
    
    /*
        title: string | short blurb describing the purpose of the project
        client: string | who the project was for
    */

    return (
        <div class="flex-col lg:w-2/3 mb-10 lg:mb-20">
            <div class="mb-2 text-lg leading-6">
                <h1 class=" font-bold">{title}</h1> 
            </div>

            <div class="mb-4 text-lg leading-8">
                <h2 class=" uppercase">{client}</h2>
            </div>
        </div>
    );
}