

export default function TextBlock({
    colSpan = "1/3",
    isBulleted = false,
    heading = "",
    subheading = "",
    textBefore = "",
    body = [],
    textAfter = "" }) {

    /*
        colSpan: string | columns to span (ex. 1/3, 2/3) - default is 1/3
        isBulleted: boolean | is the body a bulleted list? - default is false
        heading: string | heading of the text block
        subheading: string | subheading of the text block
        textBefore: string | if the body is bulleted, text that's not bulleted before the list
        body: array (string) | body copy of the text block
        textAfter: string | if the body is bulleted, text that's not bulleted after the list

        Renders a text block comprised of a heading and body copy
        Width is adjustable by the number of columns indicated
        Displays the body copy in a bulleted list if indicated
    */

    return (
        <div className={"flex-col lg:w-" + `${colSpan}` + " lg:mb-8 text-base leading-7"}>
            <h3 className="uppercase text-base mb-4">{heading}</h3>
            <h4 className="uppercase text-base mb-4">{subheading}</h4>
            <p className="mb-2">{textBefore}</p>
            {isBulleted ?
<<<<<<< HEAD
                <ul className="list-disc list-outside marker:text-xs pl-4">
                    {body.map((bullet) => {
                        return (
                            <li key={bullet}>{bullet}</li>
                        );
                    })}
                </ul>
=======
                <>
                    <ul className="list-disc list-outside pl-5">
                        {body.map((bullet) => {
                            return (
                                <li key={bullet}>{bullet}</li>
                            );
                        })}
                    </ul>
                </>
>>>>>>> db6cbbc5095cae0703612b662e6111b6d502958b
                : <p>{body}</p>}
            <p className="mt-4">{textAfter}</p>
        </div>
    );
}