// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';

  }

  if (license === 'Apache 2.0') {
    return `https://img.shields.io/static/v1?label=License&message=Apache%202.0&color=blue`
  }


  if (license === 'GNU v3.0') {
    return `https://img.shields.io/static/v1?label=License&message=GNU%20v3.0&color=blue`
  }
  if (license === 'MIT') {
    return `https://img.shields.io/static/v1?label=License&message=MIT&color=blue`
  }
  if (license === 'Boost 1.0') {
    return `https://img.shields.io/static/v1?label=License&message=Boost%201.0&color=blue`
  }
  if (license === 'Creative Commons') {
    return `https://img.shields.io/static/v1?label=License&message=Creative%20Commons&color=blue`
  }
  if (license === 'Eclipse 2.0') {
    return `https://img.shields.io/static/v1?label=License&message=Eclipse%202.0&color=blue`
  }
  if (license === 'GNU v2.0') {
    return `https://img.shields.io/static/v1?label=License&message=GNU%20v2.0&color=blue`
  }
  if (license === 'GNU Lesser v2.1') {
    return `https://img.shields.io/static/v1?label=License&message=GNU%20Lesser%20v2.1s&color=blue`
  }
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licChoices = [
    { url: '' },
    { url: 'https://opensource.org/licenses/Apache-2.0' },
    { url: 'https://opensource.org/licenses/gpl-3.0.html' },
    { url: 'https://opensource.org/licenses/MIT' },
    { url: 'https://opensource.org/licenses/BSL-1.0' },
    { url: 'https://creativecommons.org/licenses/' },
    { url: 'https://opensource.org/licenses/EPL-2.0' },
    { url: 'https://opensource.org/licenses/gpl-2.0.php' },
    { url: 'https://opensource.org/licenses/lgpl-2.1.php' }
  ]
  if(license==='None'){
    return licChoices[0];
  }
  if(license==='Apache 2.0'){
    return licChoices[1]
  }
  if(license==='GNU v3.0'){
    return licChoices[2]
  }
  if(license==='MIT'){
    return licChoices[3]
  }
  if(license==='Boost 1.0'){
    return licChoices[4]
  }
  if(license==='Creative Commons'){
    return licChoices[5]
  }
  if(license==='Eclipse 2.0'){
    return licChoices[6]
  }
  if(license==='GNU v2.0'){
    return licChoices[7]
  }
  if(license==='GNU Lesser v2.1'){
    return licChoices[8]
  }

};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license==='None'){
    return ''
  }
  else {

    return `Licensed by ${license.name}`;


  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  
  return `# ${data.title}
  ---
  ![badge](${renderLicenseBadge(data.license)})

  ## Table of Contents
  * [Description](#description)
  * [Installation](#install)
  * [Usage](#usage)
  * [Test](#test)
  * [Contributions](#contribution)
  * [License Info](#license)
  * [Contact Info](#contact)

  
  ## Description
  ${data.description}
  ![My Website]()

  ---
  ## Installation
  ${data.installation}

  ---

  ## Usage
  ${data.usage}

  ---

  ## Test
  ${data.test}

  ---

  ## Contributions
  ${data.contributions}

  ---
  
  ## License Info
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ---

  ## Contact Info
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
