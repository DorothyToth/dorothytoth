# dorothytoth.com

## HTML Validation

The HTML within the site should really be valid from an HTML spec perspective.  That's not always the case and there are things known to be invalid so this isn't enabled within CI as a formal check right now.  But to try to work towards this as a goal the `pnpm` script exists to run a validation check agaist the `./out` directory (where the build site lands) and `./projects` (where the majority of the content for the site is maintained).  This runs with `standard` and `a11y` presets as they seem the most reasonable.  The `recommended` preset gets awfully agressive although it might make sense to run that preset against the `out` directory as `nextjs` should produce some really compliant html.

```sh
pnpm validate-html
```

Once this is running clean it'll get enabled as a check to keep things clean and semantic.  

## Content Location

Within each `/projects/*` folder we manage everything for a specific project.  We require `data.yaml` and `content.html` that hold the "metadata" about a project as well as the page content for it.  Both of those files reference assets (images, pdfs, etc) using relative paths and thus it makes sense to have those files stored in the same directory as the data and content files. 

In order to properly publish this content to a webserver, however, we must run the `pnpm sync-project-assets` that will pull all `jpg`, `jpeg`, `png`, and `pdf` files from these project directories and push them to the matching directory in `/public/projects` where the server serves them.  

## Project Templates

The `/projects/_project-template` project is handled a little special.  Well really we handle any project in this special way if it starts with a `_` in the directory name.  These are for local development usage and copy/paste usage when creating a new real project.  These are excluded from the site by default but can be included by creating a `.env.local` file in the root of the project that includes this line:

```sh
INCLUDE_PROJECT_TEMPLATE=true
```

This will tell the site to include projects whose folders start with `_` if you're working on styling a new template or something.
