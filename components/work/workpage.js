import PageTitle from "../pagetitle";

export default function WorkPage({ title, children }) {

    /*
        title: string - page title
        children: the work sample content
    */

    return (
        <div class="font-light text-xl leading-8 pb-24">
            <PageTitle title={title} />
            {children}
        </div>
    );
}