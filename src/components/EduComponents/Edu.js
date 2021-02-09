//import logo from './logo.svg';
//import dispHeader from './edu-rsc.js';
import './Edu.css';

function Edu() {
  return (
    <div className="Edu">
      <h1>Educational Resources</h1>
      <h2>General Resources</h2>

      <div className="btnRow">
      <a href="https://www.understood.org">
        <button className="btnCol" >Understood</button>
      </a> 
      <a href="https://sites.ed.gov/idea/">
        <button className="btnCol">Individuals with Disabilities Education Act</button>
      </a> 
      </div>

      <h2>Community Advisory Committees (CACs)</h2>
      <a href="https://www.scusd.edu/community-advisory-committee-cac">
        <button className="btnRow">Sacramento City Unified School District CAC</button>
      </a>
      <a href="https://www.sjcoe.org/selpa/CAC.aspx#:~:text=The%20purpose%20of%20the%20Community,of%20children%20with%20exceptional%20needs">
        <button className="btnRow">San Joaquin County Office of Education CAC</button>
      </a>
      <a href="https://natomasunified.org/departments/student-services-and-support/community-advisory-committee-cac/">
        <button className="btnRow">Natomas Unified School District CAC</button>
      </a>
      <a href="https://www.sonomaselpa.org/pub/selpa_docs/cac.html">
        <button className="btnRow">Sonoma County CAC</button>
      </a>
    </div>
  );
}

export default Edu;
 