import path from 'path';
import fs from 'fs/promises';
import matter from "gray-matter";

import markdownToHtml from './markdown-to-html.js';

const projectsDirectory = path.join(process.cwd(), 'projects')

export default async function parseProject( slug ) {

    let projectPath = path.join( projectsDirectory, `${ slug }.md` ) 
    try {
        await fs.access( path.join( projectsDirectory, slug ) );
        projectPath = path.join( projectsDirectory, slug, 'project.md' )
    } catch( err ) {
        // nothing, just need to use the try/catch to determine if the project is in a directory or just the root projects folder as a markdown file
    }
    
    const fileContents = await fs.readFile(projectPath, 'utf8')
    const { data, content } = matter(fileContents);

    return {
        ...data,
        content: await markdownToHtml(content)
    }

}