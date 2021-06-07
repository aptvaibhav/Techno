import React, {useState} from "react";
import './disease-details.css';
import './popup.css';


export default function Diabetes() {
  

  const [enteredPregnanices,setEnteredPregnancies] = useState('');
  const [enteredGlucose,setEnteredGlucose] = useState('');
  const [enteredBloodPressure,setEnteredBloodPressure] = useState('');
  const [enteredSkinThickness,setEnteredSkinThickness] = useState('');
  const [enteredInsulin,setEnteredInsulin] = useState('');
  const [enteredBmi,setEnteredBmi] = useState('');
  const [enteredDiabetesPedigree,setEnteredDiabetesPedigree] = useState('');
  const [enteredAge,setEnteredAge] = useState('');
  const [output,setOutput] = useState('');


  const pregnanicesChangeHandler = (event) => {
      setEnteredPregnancies(event.target.value);
  }; 

  const glucoseChangeHandler = (event) => {
    setEnteredGlucose(event.target.value);
  }; 
  const bloodPressureChangeHandler = (event) => {
  setEnteredBloodPressure(event.target.value);
  }; 
  const skinThicknessChangeHandler = (event) => {
    setEnteredSkinThickness(event.target.value);
  }; 
  const insulinChangeHandler = (event) => {
    setEnteredInsulin(event.target.value);
  }; 
  const bmiChangeHandler = (event) => {
    setEnteredBmi(event.target.value);
  }; 
  const diabestesPedigreeChangeHandler = (event) => {
    setEnteredDiabetesPedigree(event.target.value);
  }; 
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; 
 

  function handleSubmit(e) {
    e.preventDefault();
    const submittingValue = {
     'Pregnancies' : enteredPregnanices,
     'Glucose' : enteredGlucose,
     'BloodPressure' : enteredBloodPressure,
     'SkinThickness' :enteredSkinThickness,
     'Insulin' : enteredInsulin,
     'BMI' : enteredBmi,
     'DiabetesPedigreeFunction' : enteredDiabetesPedigree,
     'Age' : enteredAge
    };
   
    setEnteredBloodPressure('');
    setEnteredGlucose('');
    setEnteredPregnancies('');
    setEnteredAge('');
    setEnteredBmi('');
    setEnteredDiabetesPedigree('');
    setEnteredInsulin('');
    setEnteredSkinThickness('');


<<<<<<< HEAD
// for result popup window
var popup = document.getElementById("mypopup");
var btn = document.getElementById("disease-submit");
var span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
  popup.style.display = "block";
}
span.onclick = function() {
  popup.style.display = "none";
}
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
}

=======
>>>>>>> 16c75a29882736c504c45108a7bd1ba4db9cb043

    
    fetch('http://localhost:5000/diabetes',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        //"Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(submittingValue),
    }).then(res => res.text())         
    .then(text => console.log(text)
    ).catch((err) => {
      console.log(err);
    });

    fetch('http://localhost:5000/diabetes',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      },
    }).then(res => res.text())         
    .then(text => setOutput(text)
    ).catch((err) => {
      console.log(err);
    });
  }
  

// for result popup window

function displayPopUp(e) {
  e.preventDefault();
  const popup = document.getElementById('mypopup');
  popup.style.display = "block";
}
function closePopUp(e) {
  e.preventDefault();
  const popup = document.getElementById('mypopup');
  popup.style.display = "none";
}
window.onclick = function(event) {
  const popup = document.getElementById('mypopup');
  if (event.target === popup) {
    popup.style.display = "none";
  }
}




    return (
        <>
        <br />
        <br />
        <br />
        <div class="form">
        <form onSubmit={handleSubmit}>
        
  <label>
  Pregnancies:
    <input type="number" name="Pregnancies" value={enteredPregnanices} onChange={pregnanicesChangeHandler} />
  </label>
  <br />
  <label>
  Glucose:
    <input type="number" name="Glucose" value={enteredGlucose} onChange={glucoseChangeHandler} />
  </label>
  <br />
  <label>
  BloodPressure:
    <input type="number" name="BloodPressure" value={enteredBloodPressure} onChange={bloodPressureChangeHandler}/>
  </label>
  <br />
  <label>
  SkinThickness:
    <input type="number" name="SkinThickness" value={enteredSkinThickness} onChange={skinThicknessChangeHandler}/>
  </label>
  <br />
  <label>
  Insulin:
    <input type="number" name="Insulin" value={enteredInsulin} onChange={insulinChangeHandler}/>
  </label>
  <br />
  <label>
  BMI:
    <input type="number" name="BMI" value={enteredBmi} onChange={bmiChangeHandler}/>
  </label>
  <br />
  <label>
  DiabetesPedigreeFunction:
    <input type="number" name="DiabetesPedigreeFunction" value={enteredDiabetesPedigree} onChange={diabestesPedigreeChangeHandler}/>
  </label>
  <br />
  <label>
  Age:
    <input type="number" name="Age" value={enteredAge} onChange={ageChangeHandler}/>
  </label>
  <br />
 
  <input id="disease-submit" onClick={displayPopUp} type="submit" value="Submit" />
      {/* <p>{output}</p> */}

      <div id="mypopup" class="popup-container">


        <div class="popup-content">
          <span onClick={closePopUp} class="close-btn">&times;</span>
          <p>There is <strong> {output} </strong> chance of you having this disease.</p>
        </div>

      </div>
  
</form>


</div>

 </>


);



}