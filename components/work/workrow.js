
export default function WorkRow({ children }) {

    /*
        children: the row content

        these are for ROWS within SECTIONS of a work page.
        will go to 2 columns bc of flex - do not use if you want paragraphs to stack (make new component for that later?)
            ex. image left / text right row in the Process section
    */

    return (
        <div class="flex flex-col mb-10 lg:mb-20 lg:flex-row gap-8 lg:gap-12">
            {children}
        </div>
    );
}