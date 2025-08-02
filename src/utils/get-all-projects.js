import path from 'path';
import fs from 'fs/promises';

import parseProject from './parse-project.js';

const projectsDirectory = path.join(process.cwd(), 'projects')

export default async function getAllProjects() {

    const projectsFiles = await fs.readdir(projectsDirectory)

    const projectEntries = await Promise.all( projectsFiles.map( async dirEntry => { 

        const stats = await fs.lstat( path.join( projectsDirectory, dirEntry ) );
        const isDir = stats.isDirectory();

        // catching things like .DS_store and other non-entry-files
        if( !isDir && !dirEntry.endsWith( '.md' ) ) {
            return;
        }

        const slugPartial = isDir ? dirEntry : dirEntry.replace( '.md', '' );
        const project = await parseProject(slugPartial)

        return {
            slugPartial,
            filename: dirEntry,
            ...project,
            slug: `/projects/${slugPartial}`,
        }

    } ) )

    // return any defined entries sorted by date to have newest first although right now we're comparing dates as strings which could break later
    return projectEntries.filter( Boolean ).sort( ( a, b ) => a.order - b.order );

}