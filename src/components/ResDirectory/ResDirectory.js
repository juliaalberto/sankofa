//import logo from './logo.svg';
//import dispHeader from './edu-rsc.js';

import './ResDirectory.css';

function ResDirectory() {
  return (
    <div className="ResDirect">
      <h1>Sankofa National Family Respource Directory</h1>
      <h2>The Sankofa Parent Support Group at UC Davis is a social network for parents and caregivers of Black children with disabilities. 
        Our goal is to empower parents to become strong advocates for the needs of their child. We are putting together a national Black provider directory for 
        families raising children with Developmental Disabilities.</h2>

      <h2>If you are a Black provider or a non-Black provider that has extensive training in supporting Black families of 
        children with disabilities we want your information. Please fill out the following form to enter your information into our directory. 
        For additional information and/or if you have any questions or concerns, please contact Dr. Jazmin Burns at jlsheppard@ucdavis.edu. 
        </h2>

      <div className="btnRow">
      <a href="https://forms.gle/qYXbL3BdFATwwG6y8">
        <button className="btnCol" >Join Us</button>
      </a> 
      </div>
    </div>
  );
}

export default ResDirectory;

