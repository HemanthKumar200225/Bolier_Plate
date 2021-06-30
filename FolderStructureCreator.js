#!/usr/bin/env node

const fs = require("fs");
const ProjectName = process.argv[2] || Project;

// Creating the Project Folder
fs.mkdir(ProjectName, { recursive: true }, (err) => {
    if (err)
    {
        console.log("Failed to Create folder with the given project name!...");
        throw err;
    } 
  });

// Creating the file app.js
fs.appendFile( `${ProjectName}/App.js`,
    `
function App() {
    return (
        <>
        // your code goes here
        </>
    )
}
export default App;`,
    function (err) {
        if (err) throw err;
    });

// Creating the file index.js
fs.appendFile( `${ProjectName}/index.js`,
    `import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
<React.StrictMode>
    <App/>
</React.StrictMode>,
document.getElementById('root')
)`,
    function (err) {
        if (err) throw err;
    });

// Creating the file style.css
fs.appendFile( `${ProjectName}/style.css`,
    `
*{
    margin: 0px;
    padding: 0px;
}`,
    function (err) {
        if (err) throw err;
    });

// Console log the Successful folder structure creation
console.log(`The folder structure for the project "${ProjectName}" is successfully created`);