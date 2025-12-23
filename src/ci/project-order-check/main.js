import getAllProjects from "../../utils/get-all-projects.js";
import dupCheck from './dup-check.js';
import missingCheck from "./missing-check.js";

const projects = await getAllProjects();

await dupCheck( projects );
await missingCheck( projects)