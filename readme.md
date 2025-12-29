# dorothytoth.com

## Content Location

Within each `/projects/*` folder we manage everything for a specific project.  We require `data.yaml` and `content.html` that hold the "metadata" about a project as well as the page content for it.  Both of those files reference assets (images, pdfs, etc) using relative paths and thus it makes sense to have those files stored in the same directory as the data and content files. 

In order to properly publish this content to a webserver, however, we must run the `pnpm sync-project-assets` that will pull all `jpg`, `jpeg`, `png`, and `pdf` files from these project directories and push them to the matching directory in `/public/projects` where the server serves them.  