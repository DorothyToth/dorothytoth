export default function ProjectCard( { slugPartial, title, subtitle, content, buttons, heroImg } ) {
    return (
        <div id={ slugPartial } className="categoryGridArea">
            <a href={ buttons[ 0 ].url } target="_blank"><img src={ heroImg } /></a>
            <h5>{ title }</h5>
            <h6>{ subtitle }</h6>
            <div dangerouslySetInnerHTML={ { __html: content } } />
            <div className="buttons">
                {
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