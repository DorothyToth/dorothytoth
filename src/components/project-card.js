import classNames from "classnames";
import Link from "next/link";

export default function ProjectCard( { slugPartial, title, subtitle, content, buttons, heroImg, homepageLocation } ) {

    const classes = classNames( {
        'case-study-card': true,
        [ `case-study-card-location-${ homepageLocation }` ]: true
    })

    return (
        <div id={ slugPartial } className={ classes }>
            <Link href={ `/projects/${ slugPartial }` }><img src={ heroImg } /></Link>
            <h5>{ title }</h5>
            <h6>{ subtitle }</h6>
            <div className="buttons">
                {
                    buttons &&
                    buttons.map( ( btnObj, idx ) => {
                        return (
                            <a key={ idx } href={ btnObj.url } target="_blank">
                                <button className={ idx === 0 ? "blue" : "" }><h6>{ btnObj.label }</h6></button>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}