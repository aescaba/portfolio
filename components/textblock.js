

export default function TextBlock({ colSpan = "1/3", isBulleted = false, heading = "", body = [] }) {

    /*
        colSpan: string | columns to span (ex. 1/3, 2/3) - default is 1/3
        bulleted: boolean | is the body a bulleted list? - default is false
        heading: string | heading of the text block
        body: array (string) | body copy of the text block

        Renders a text block comprised of a heading and body copy
        Width is adjustable by the number of columns indicated
        Displays the body copy in a bulleted list if indicated
    */

    return (
        <div class={"flex-col lg:w-"+ `${colSpan}` + " lg:mb-8 text-base leading-7"}>
            <h3 class="uppercase text-base mb-2">{heading}</h3>
            {isBulleted ?
                <ul className="list-disc list-outside pl-4">
                    {body.map((bullet) => {
                        return (
                            <li key={bullet}>{bullet}</li>
                        );
                    })}
                </ul>
                : <p>{body}</p>}
        </div>
    );
}