export default function BuildNotes() {

    const envVarKeys = [
        'GITHUB_SHA',
        'GITHUB_RUN_ID',
        'REPO_UPDATED_AT',
        'GITHUB_REF_NAME',
    ]


    return (
        <ul className="build-notes">
            {
                envVarKeys.map( key => {
                    return <li key={ key }>{ key }: { process.env[ key ] }</li>
                })
            }
        </ul>
    )
}