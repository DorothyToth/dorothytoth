export default function projectContentVariableReplacement(projectContentString, projectData) {
    // Replace placeholders in the format {{ key }} including variance in whitespace with corresponding values from projectData
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_the_replacement
    return projectContentString.replace(/\{\{\s*(\w+)\s*\}\}/g, (match, firstCaptureGroup) => {
        if (firstCaptureGroup in projectData) {
            // Escape quotes in the text for safety
            return projectData[firstCaptureGroup].replace(/"/g, '&quot;');
        }
        throw new Error(`Missing project data value for key: ${firstCaptureGroup}`);
    });
}