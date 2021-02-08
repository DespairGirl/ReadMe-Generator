// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licChoices =[
  {name:'None'},
  {name:'Apache%202.0',url: 'https://opensource.org/licenses/Apache-2.0' },
  {name:'GNU%20v3.0',url:'https://opensource.org/licenses/gpl-3.0.html'},
  {name:'MIT',url:'https://opensource.org/licenses/MIT'},
  {name: 'Boost%20v1.0' ,url:'https://opensource.org/licenses/BSL-1.0'},
  {name:'Creative%20Commons',url:'https://creativecommons.org/licenses/'},
  {name:'Eclipse%202.0',url:'https://opensource.org/licenses/EPL-2.0'},
  {name: 'GNU%20v2.0',url:'https://opensource.org/licenses/gpl-2.0.php'},
  {name:'GNU%20Lesser%20v2.1',url:'https://opensource.org/licenses/lgpl-2.1.php'}
]

const userLic=(lic) => {
  for(licPick of licChoices){
    if (licPick.name===lic)
    return licPick
  }
};
function renderLicenseBadge(lic) {
  let licPick=userLic(lic)

  if(licPick.name==="None"){
    return '';
  }
  else{

  return `![badge](https://img.shields.io/static/v1?label=license&message=${licPick.name}&color=blue)`

    
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(lic) {
  let licPick= userLic(lic);

  if(licPick.name==="None"){
    return '';
  }
  else{

  return licPick.url;

    
  }

  



};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(lic) {
  let licPick= userLic(lic);
  if(licPick.name==="None"){
    return '';
  }
  else{

  return `Licensed by ${licPick.name}`;

    
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown=(response) => {
  const licbadge=renderLicenseBadge(response.lic);
  const licLink= renderLicenseLink(response.lic);
  const licSection= renderLicenseSection(response.lic);
  return `# ${response.title}
  ---
  ${licbadge}

  ##Table of Contents
  -[Overview](#summary)
  -[What's The Problem](#problem)
  -[ My Solution](#solution)
  -[Tools & Resources](#tools)
  -[License Info](#lic)

  
  ## Overview
  ${response.summary}
  ${response.link}

  ---
  ## The Problem
  ${response.problem}

  ---

  ## My Solution
  ${response.solution}

  ---

  ## Tools & Resources
  ${response.tools}

  ---

  ## License Info
  ${licSection}
  ${licLink}

`;
}

module.exports = generateMarkdown();
