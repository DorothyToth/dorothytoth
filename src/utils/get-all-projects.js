import path from 'path';
import fs from 'fs/promises';

import parseProject from './parse-project.js';

const projectsDirectory = path.join(process.cwd(), 'projects')

export default async function getAllProjects() {

    let projectDirectories = await fs.readdir(projectsDirectory)

    if( process.env.INCLUDE_PROJECT_TEMPLATE !== 'true' ) {
        projectDirectories = projectDirectories.filter( directory => !directory.startsWith('_') )
    }

    const projectEntries = await Promise.all( projectDirectories.map( async dirEntry => { 

        const stats = await fs.lstat( path.join( projectsDirectory, dirEntry ) );

        // catching things like .DS_store and other non-entry-files
        if( !stats.isDirectory()  ) {
            console.log( `Skipping non-directory entry in projects folder: ${dirEntry}` )
            return;
        }

        const project = await parseProject(dirEntry)

        return {
            slugPartial: dirEntry,
            filename: dirEntry,
            ...project,
            slug: `/projects/${dirEntry}`,
        }

    } ) )

    // return any defined entries sorted by date to have newest first although right now we're comparing dates as strings which could break later
    return projectEntries.filter( Boolean ).sort( ( a, b ) => a.projectListingOrder - b.projectListingOrder );

}