export default function dupCheck(projects) {

    const uniqueOrders = [...new Set(projects.map((project) => project.projectListingOrder))];

    if (uniqueOrders.length !== projects.length) {
        console.log("There are duplicate projectListingOrder values in the projects array.");
        process.exit(1);
    }

}