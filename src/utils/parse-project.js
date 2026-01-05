import path from 'path';
import yaml from 'js-yaml';
import fs from 'fs/promises';

const projectsDirectory = path.join(process.cwd(), 'projects')

export default async function parseProject( slug ) {

    const dataFilePath = path.join( projectsDirectory, slug, 'data.yaml' );
    const contentFilePath = path.join( projectsDirectory, slug, 'content.html' );

    const data = yaml.load( await fs.readFile( dataFilePath, 'utf8' ) );
    const content = await fs.readFile( contentFilePath, 'utf8' );

    return {
        ...data,
        content: content.toString()
    }

}