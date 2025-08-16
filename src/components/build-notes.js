export default function BuildNotes() {
    // these have to be explicitly referenced, any variable/loop structure causes them to not be inlined during the build
    // https://nextjs.org/docs/pages/guides/environment-variables#loading-environment-variables
    return (
        <ul className="build-notes">
            <li>NEXT_PUBLIC_GITHUB_SHA: { process.env.NEXT_PUBLIC_GITHUB_SHA }</li>
            <li>NEXT_PUBLIC_GITHUB_RUN_ID: { process.env.NEXT_PUBLIC_GITHUB_RUN_ID }</li>
            <li>NEXT_PUBLIC_REPO_UPDATED_AT: { process.env.NEXT_PUBLIC_REPO_UPDATED_AT }</li>
            <li>NEXT_PUBLIC_GITHUB_REF_NAME: { process.env.NEXT_PUBLIC_GITHUB_REF_NAME }</li>
            <li>GITHUB_REF_NAME: { process.env.GITHUB_REF_NAME }</li>
        </ul>
    )
}