

export default function TextBlock({ isBulleted = false, heading = "", body = [] }) {

    /*
        bulleted: boolean | is the body a bulleted list?
        heading: string | heading of the text block
        body: array (string) | body copy of the text block
    */

    return (
        <div class="flex-col w-1/3">
            <h3 class="uppercase text-base mb-2">{heading}</h3>
            {isBulleted ?
                <ul className={"list-disc list-outside pl-4 text-sm"}>
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