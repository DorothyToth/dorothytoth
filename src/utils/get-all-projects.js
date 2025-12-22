import path from 'path';
import fs from 'fs/promises';

import parseProject from './parse-project.js';

const projectsDirectory = path.join(process.cwd(), 'projects')

export default async function getAllProjects() {

    const projectsFiles = await fs.readdir(projectsDirectory)

    const projectEntries = await Promise.all( projectsFiles.map( async dirEntry => { 

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