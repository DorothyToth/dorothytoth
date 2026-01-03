import classNames from "classnames";
import Link from "next/link";

export default function HomeFeaturedCard( { slugPartial, title, description, buttons, heroImg, doubleWideImg,homepageLocation } ) {

    const classes = classNames( {
        'case-study-card': true,
        [ `case-study-card-location-${ homepageLocation }` ]: true
    })

    const imageLocation = `/projects/${ slugPartial }/${ homepageLocation === "featured" ? doubleWideImg : heroImg }`;

    return (
        <div id={ slugPartial } className={ classes }>
            <Link href={ `/projects/${ slugPartial }` }><img src={ imageLocation } /></Link>
            <h5>{ title }</h5>
            <h6>{ description }</h6>
            {/* <div className="buttons">
                {
                    buttons &&
                    buttons.map( ( btnObj, idx ) => {
                        return (
                            <a key={ idx } href={ `/projects/${ slugPartial }/${ btnObj.url }` } target="_blank">
                                <button className={ idx === 0 ? "blue" : "" }><h6>{ btnObj.label }</h6></button>
                            </a>
                        )
                    })
                }
            </div> */}
        </div>
    )
}