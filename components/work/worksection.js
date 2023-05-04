
export default function WorkSection({ children }) {

    /*
        children: the section content

        these are for SECTIONS of a work page
            ex. Process section, Preview section, Overview section
    */

    return (
        <div class="mb-10 lg:mb-20">
            {children}
        </div>
    );
}