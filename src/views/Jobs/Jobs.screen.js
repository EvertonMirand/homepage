import React from 'react';

import ReactHtmlParser from 'react-html-parser';
import { Container, Company, Job } from './styles';

const jobs = [
  {
    id: '25355932-bdc2-46ef-94fe-2611103a5472',
    type: 'Full Time',
    url:
      'https://jobs.github.com/positions/25355932-bdc2-46ef-94fe-2611103a5472',
    created_at: 'Mon Dec 02 21:58:27 UTC 2019',
    company: 'Authentic8',
    company_url: 'http://www.authentic8.com/careers',
    location: 'San Francisco / Redwood City',
    title: 'Web Client Engineer - JavaScript',
    description:
      '\u003cp\u003eWebGL Engineer_JavaScript\u003c/p\u003e\n\u003cp\u003eWe are a fast-growing SaaS company with multiple offices (San Francisco, Redwood City, Washington DC) with an amazing installed base.  We protect the most attacked surface areas and most at-risk users on the planet.  Our customer logos across the Federal Government and Enterprise accounts are household names. The demand for our product (Silo) is driving aggressive growth and hiring. Founded in 2010 by principals from Postini, Authentic8 is redefining how the browser is used to access sensitive web data. Silo, our flagship product, is a cloud-based secure browser. Silo helps manage login credentials, access controls and data use policies while ensuring that users remain secure, compliant and anonymous online.\u003c/p\u003e\n\u003cp\u003eWe have an immediate opening for a Web Client Engineer Engineer, ideally to be located in our Redwood City, CA or San Francisco, CA office, ideally a JavaScript expert to work on Authentic8’s Web Client.  The Authentic8 solution has a diverse technology architecture, so the right candidate should be skilled WebGL, streaming technologies and JavaScript. The successful candidate  will need to convert c/c++ code to JavaScript and rendering in WebGL. The Authentic8 solution is delivered to users of all major platforms, your experience with Windows, Mac OS X, and Linux will ensure a high quality experience by our users.\u003c/p\u003e\n\u003cp\u003eRequirements\u003c/p\u003e\n\u003cp\u003eKey areas of responsibility will include:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cpre\u003e\u003ccode\u003e  Contribute to building and maintaining Authentic8’s Web Client product and applicable modules\n\u003c/code\u003e\u003c/pre\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eDocument, test and internally support all the functionality of builds\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eSkills, Requirements and Responsibilities:\u003c/p\u003e\n\u003cpre\u003e\u003ccode\u003e    Experienced with and comfortable coding in JavaScript.\n    Experience working with one or more of the following languages and runtimes: WASM,\n    Node.js,  CSS, HTML, Python.\n    Experience building with WebAssembly and Emscripten tool-chains.\n    Proficiency with development tools such as jira, git, bash, etc.\n    Willingness to independently research and learn new technologies as needed.\n    Proficient knowledge of cross-browser and cross-platform web development \n    Experience with: nginx, pagespeed, WebSockets,RDP/freeRDP,codecs h265 or vp9\n    Experience with Mobile/Android web interactions.\n\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003eQualifications:\u003c/p\u003e\n\u003cpre\u003e\u003ccode\u003eBS in Software Engineering (or equivalent) \n4-5 years of related professional experience in software development\n\u003c/code\u003e\u003c/pre\u003e\n\u003cp\u003eAuthentic8 offers competitive benefits, including medical, dental and vision, flexible PTO, a 401k program and stock options.\u003c/p\u003e\n\u003cp\u003eIt  is the policy of Authentic8 to provide equal employment opportunity (EEO) to all persons regardless of age, color, national origin, citizenship status, physical or mental disability, race, religion, creed, gender, sex, sexual orientation, gender identity and/or expression, genetic information, marital status, status with regard to public assistance, veteran status, or any other characteristic protected by federal, state or local law.\u003c/p\u003e\n',
    how_to_apply:
      '\u003cp\u003ePlease apply at \u003ca href="https://jobs.lever.co/authentic8/da8788df-d39d-4c1c-abc7-f62e3e30d612"\u003ehttps://jobs.lever.co/authentic8/da8788df-d39d-4c1c-abc7-f62e3e30d612\u003c/a\u003e\u003c/p\u003e\n',
    company_logo:
      'https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbDk1IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8a1887e2ff4fd102be94c5dccd81fe99313ac773/Silo%20-%203500x2500.png',
  },
];

export default function Jobs({ forwardRef }) {
  const JobsCard = () =>
    jobs.map(job => (
      <Job key={job.id}>
        <Company>
          <span>{job.company}</span>
          <img src={job.company_logo} alt="Logo" />
        </Company>
        <div>{ReactHtmlParser(job.description)}</div>
        <div>{ReactHtmlParser(job.how_to_apply)}</div>
      </Job>
    ));
  return (
    <Container ref={forwardRef}>
      <JobsCard />
    </Container>
  );
}
