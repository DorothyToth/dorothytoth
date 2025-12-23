import chalk from 'chalk-template';

export default function missingCheck( projects ) {
    const missing = [];

    for (var i = 1; i <= projects.length; i++) {
        const project = projects.find( p => p.projectListingOrder=== i)
    if (!project) {
        missing.push(i);
    }
    }

    if( missing.length > 0) {
        console.log(chalk`🚨 {red There are missing projectListingOrder values in the projects array}: ${ missing }`);
        console.log( `Order / Project`)
        projects.forEach((project) => {
            console.log(chalk`{cyan ${project.projectListingOrder}}: ${ project.title }`);
        })
        process.exit(1);
    }
}