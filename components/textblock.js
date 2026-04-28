

export default function TextBlock({ numCols = 1, isBulleted = false, heading = "", body = [] }) {

    /*
        numCols: int | number of columns in the row
        bulleted: boolean | is the body a bulleted list?
        heading: string | heading of the text block
        body: array (string) | body copy of the text block

        Renders a text block comprised of a heading and body copy
        Width is adjustable by the number of columns indicated
        Displays the body copy in a bulleted list if indicated
    */

    return (
        <div class={"flex-col w-1/"+ `${numCols}` + " text-sm"}>
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