import classNames from "classnames";
import Image from 'next/image'
import Link from "next/link";

export default function HomeFeaturedCard( { slugPartial, title, description, cardImgAltText, heroImg, doubleWideImg,homepageLocation } ) {

    const classes = classNames( {
        'case-study-card': true,
        [ `case-study-card-location-${ homepageLocation }` ]: true
    })

    const imageLocation = `/projects/${ slugPartial }/${ homepageLocation === "featured" ? doubleWideImg : heroImg }`;

    return (
        <div id={ slugPartial } className={ classes }>
            <Link href={ `/projects/${ slugPartial }` }>
                <img 
                    src={ imageLocation } 
                    alt={ cardImgAltText }
                />
            </Link>
            <h5>{ title }</h5>
            <h6>{ description }</h6>
        </div>
    )
}