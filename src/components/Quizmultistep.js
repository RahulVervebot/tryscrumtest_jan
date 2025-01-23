import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, TextField } from '@mui/material';
import Popup from 'reactjs-popup';
import { Link } from "gatsby";
import ProgressMobileStepper from './ProgressQuiz';
function MultiStepForm() {
  const [submittedValue, setSubmittedValue] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [formValid, setFormValid] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: ''
  });
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setFormValid(false);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setShowPopup(false);
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setAnswers({
      ...answers,
      [name]: value
      
    });
    setFormValid(true);

  };

  
  const handleRedirect = () => {
    // Logic to trigger redirect
    window.location.href = '/courses/';
  };

  const handleSubmit = (event) => {
   
    event.preventDefault();
    let selectedAnswers = {};

    // Count the occurrences of each answer
    for (let key in answers) {
      const selectedOption = answers[key];
      selectedAnswers[selectedOption] = (selectedAnswers[selectedOption] || 0) + 1;
    }

    // Find the most selected answer(s)
    let maxCount = 0;
    let mostSelectedAnswers = [];
    for (let option in selectedAnswers) {
      if (selectedAnswers[option] > maxCount) {
        maxCount = selectedAnswers[option];
        mostSelectedAnswers = [option];
      } else if (selectedAnswers[option] === maxCount) {
        mostSelectedAnswers.push(option);
      }
    }
    
    if (mostSelectedAnswers == 1) {
      setSubmittedValue('1');
        }
    else if (mostSelectedAnswers == 2) {
      setSubmittedValue('2');
        
      }
      else if (mostSelectedAnswers == 3) {
        setSubmittedValue('3');
      }
    else {
      setSubmittedValue('4');

    }
    setShowPopup(true);
  };

  return (
    <div> 
    <div className='quizheader' style={{padding:"5% 5% 5%", backgroundColor:"#CCDE7A"}}>
      <h2 className='multiformhead'>Which career path is right for you?</h2> 
      <p style={{textAlign:'center'}}>Kindly choose the options that most accurately reflect your abilities, values, and background as we aim to match you with the most suitable Scrum Team role.</p>   
      </div> 
      <div className='multiformmain' style={{padding:"0 5%"}}>
        {activeStep === 0 && (
          <div className='step1'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>When faced with a challenge, do you prefer to:</label>
        <div>
          <input type="checkbox" id="1a" name="question1" value="1" onChange={handleChange} />
          <label for="1a" style={{fontSize:'20px'}}>A: Facilitate and help teams to find their solutions</label>
        </div>
        <div>
          <input type="checkbox" id="1b" name="question1" value="2" onChange={handleChange} />
          <label for="1b" style={{fontSize:'20px'}}>B: Define product vision and strategy</label>
        </div>
        <div>
          <input type="checkbox" id="1c" name="question1" value="3" onChange={handleChange} />
          <label for="1c" style={{fontSize:'20px'}}>C: Lead and inspire teams to achieve strategic goals</label>
        </div>
      </div>
            <Button variant="contained" color="primary" className='next_button'  disabled={!formValid} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
        {activeStep === 1 && (
          <div className='step2'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>Which role appeals to you more?</label>
        <div>
          <input type="checkbox" id="2a" name="question2" value="1" onChange={handleChange} />
          <label for="2a" style={{fontSize:'20px'}}>A: Facilitating team collaboration and removing obstacles</label>
        </div>
        <div>
          <input type="checkbox" id="2b" name="question2" value="2" onChange={handleChange} />
          <label for="2b" style={{fontSize:'20px'}}>B: Making strategic decisions about product features and priorities</label>
        </div>
        <div>
          <input type="checkbox" id="2c" name="question2" value="3" onChange={handleChange} />
          <label for="2c" style={{fontSize:'20px'}}>C: Leading organizational change and driving Agile transformations</label>
        </div>
      </div>
            <Button onClick={handleBack} className='back_button' >Back</Button>
            <Button variant="contained" color="primary"   className='next_button' disabled={!formValid} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
        {activeStep === 2 && (
          <div className='step3'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>In team settings, do you excel at:</label>
        <div>
          <input id="3a" type="checkbox" name="question3" value="1" onChange={handleChange} />
          <label for="3a" style={{fontSize:'20px'}}>A: Facilitating meetings and fostering open communication</label>
        </div>
        <div>
          <input id="3b" type="checkbox" name="question3" value="2" onChange={handleChange} />
          <label for="3b" style={{fontSize:'20px'}}>B: Providing direction and making product-related decisions</label>
        </div>
        <div>
          <input id="3c" type="checkbox" name="question3" value="3" onChange={handleChange} />
          <label for="3c" style={{fontSize:'20px'}}>C: Inspiring teams and promoting a culture of innovation</label>
        </div>
      </div>
            <Button onClick={handleBack} className='back_button' >Back</Button>
            <Button variant="contained" color="primary"  className='next_button' disabled={!formValid} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
        {activeStep === 3 && (
          <div className='step4'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>Are you more interested in:</label>
        <div>
          <input id="4a" type="checkbox" name="question4" value="1" onChange={handleChange} />
          <label for="4a" style={{fontSize:'20px'}}>A: Ensuring the team follows Agile principles and scale well</label>
        </div>
        <div>
          <input id="4b" type="checkbox" name="question4" value="2" onChange={handleChange} />
          <label for="4b" style={{fontSize:'20px'}}>B: Defining the product roadmap and maximizing its value</label>
        </div>
        <div>
          <input id="4c" type="checkbox" name="question4" value="3" onChange={handleChange} />
          <label for="4c" style={{fontSize:'20px'}}>C: Shaping organizational strategy and fostering Agile adoption</label>
        </div>
      </div>
            <Button onClick={handleBack} className='back_button' >Back</Button>
            <Button variant="contained" color="primary"  className='next_button' disabled={!formValid} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
        {activeStep === 4 && (
          <div className='step5'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>When it comes to delivering value to customers, do you prefer to:</label>
        <div>
          <input type="checkbox" id="5a" name="question5" value="1" onChange={handleChange} />
          <label for="5a" style={{fontSize:'20px'}}>A: Focus on the team's and Organisational effectiveness</label>
        </div>
        <div>
          <input type="checkbox" id="5b" name="question5" value="2" onChange={handleChange} />
          <label for="5b" style={{fontSize:'20px'}}>B: Drive product innovation and customer satisfaction</label>
        </div>
        <div>
          <input type="checkbox" id="5c" name="question5" value="3" onChange={handleChange} />
          <label for="5c" style={{fontSize:'20px'}}>C: Align business goals with customer needs and market trends</label>
        </div>
      </div>
            <Button onClick={handleBack} className='back_button' >Back</Button>
            <Button variant="contained" color="primary"  className='next_button' disabled={!formValid} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
        {activeStep === 5 && (
          <div className='step6'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>Which aspect of the Agile approach resonates with you:</label>
        <div>
          <input id="6a" type="checkbox" name="question6" value="1" onChange={handleChange} />
          <label for="6a" style={{fontSize:'20px'}}>A: Servant leadership and team empowerment</label>
        </div>
        <div>
          <input  id="6b" type="checkbox" name="question6" value="2" onChange={handleChange} />
          <label for="6b" style={{fontSize:'20px'}}>B: Product vision and stakeholder management</label>
        </div>
        <div>
          <input id="6c" type="checkbox" name="question6" value="3" onChange={handleChange} />
          <label for="6c" style={{fontSize:'20px'}}>C: Strategic alignment and organizational agility</label>
        </div>
      </div>
            <Button onClick={handleBack} className='back_button' >Back</Button>
            <Button variant="contained" color="primary"  className='next_button' disabled={!formValid} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}

        {activeStep === 6 && (
          <div className='step7'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>How do you approach decision-making:</label>
        <div>
          <input id="7a" type="checkbox" name="question7" value="1" onChange={handleChange} />
          <label for="7a" style={{fontSize:'20px'}}>A: Collaboratively, seeking input from team members</label>
        </div>
        <div>
          <input id="7b" type="checkbox" name="question7" value="2" onChange={handleChange} />
          <label for="7b" style={{fontSize:'20px'}}>B: Strategically, considering market needs and business objectives</label>
        </div>
        <div>
          <input id="7c" type="checkbox" name="question7" value="3" onChange={handleChange} />
          <label for="7c" style={{fontSize:'20px'}}>C: Strategically aligning decisions with organizational goals and values</label>
        </div>
      </div>
            <Button onClick={handleBack} className='back_button' >Back</Button>
            <Button variant="contained" color="primary"  className='next_button'disabled={!formValid} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
        {activeStep === 7 && (
          <div className='step8'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>Which skill set do you feel more confident in:</label>
        <div>
          <input type="checkbox" id="8a" name="question8" value="1" onChange={handleChange} />
          <label for="8a" style={{fontSize:'20px'}}>A: Facilitation, coaching, and conflict resolution</label>
        </div>
        <div>
          <input type="checkbox" id="8b" name="question8" value="2" onChange={handleChange} />
          <label for="8b" style={{fontSize:'20px'}}>B: Product management, prioritization, and market analysis</label>
        </div>
        <div>
          <input type="checkbox"id="8c" name="question8" value="3" onChange={handleChange} />
          <label for="8c" style={{fontSize:'20px'}}>C: Leadership, change management, and strategic planning</label>
        </div>
      </div>
            <Button onClick={handleBack} className='back_button' >Back</Button>
            <Button variant="contained" color="primary"  className='next_button' disabled={!formValid} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
        {activeStep === 8 && (
          <div className='step9'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>In your ideal role, would you prefer to:</label>
        <div>
          <input type="checkbox" id="9a" name="question9" value="1" onChange={handleChange} />
          <label for="9a" style={{fontSize:'20px'}}>A: Support and enable the team's success</label>
        </div>
        <div>
          <input type="checkbox" id="9b" name="question9" value="2" onChange={handleChange} />
          <label for="9b" style={{fontSize:'20px'}}>B: Drive the product's success and market impact</label>
        </div>
        <div>
          <input type="checkbox" id="9c" name="question9" value="3" onChange={handleChange} />
          <label for="9c" style={{fontSize:'20px'}}>C: Shape the organizational culture and drive enterprise-wide agility</label>
        </div>
      </div>
            <Button onClick={handleBack} className='back_button' >Back</Button>
            <Button variant="contained" color="primary"  className='next_button' disabled={!formValid} onClick={handleNext}>
              Next
            </Button>
          </div>
        )}
        {activeStep === 9 && (
          <div className='step10'>
          <div>
        <label style={{fontSize:"20px", fontWeight:600}}>How do you envision your contribution to the Agile team:</label>
        <div>
          <input type="checkbox" id="10a" name="question10" value="1" onChange={handleChange} />
          <label for="10a" style={{fontSize:'20px'}}>A: Guiding the team towards continuous improvement and self-organization</label>
        </div>
        <div>
          <input type="checkbox" id="10b" name="question10" value="2" onChange={handleChange} />
          <label for="10b" style={{fontSize:'20px'}}>B: Steering the product towards market success and customer satisfaction</label>
        </div>
        <div>
          <input type="checkbox" id="10c" name="question10" value="3" onChange={handleChange} />
          <label for="10c" style={{fontSize:'20px'}}>C: Leading transformational change and fostering a culture of innovation</label>
        </div>

      </div>
            <Button onClick={handleBack} className='back_button' >Back</Button>
            <Button variant="contained" color="primary"  className='next_button' onClick={handleSubmit} disabled={!formValid}>  Submit
            </Button>
            <Popup
                   open={showPopup}
                  modal
                  nested closeOnDocumentClick={false}
                >
                  {close => (
                    <div className="modal-popup">
                      <button className="close" >
                        &times;
                      </button>
                      <div className="header" style={{border:"none"}}>

                      {
                        submittedValue == "1" ? 
                        <p style={{fontSize:"18px", padding:"8%"}}>Thank you for your time! Based on your quiz responses, you are firmly inclined to facilitate team collaboration, remove obstacles, and ensure the flow of value and execution. A career path as a Scrum Master may be the fit for you.</p> :  submittedValue == "2" ? 
                        <p style={{fontSize:"18px", padding:"8%"}}>Thank you for your time! Your quiz responses indicate a keen interest in defining product vision, making strategic decisions, and driving customer value. A career path as a Product Owner could be an ideal match for your skills and aspirations.</p> :  submittedValue == "3" ? 
                        <p style={{fontSize:"18px", padding:"8%"}}>Thank you for your time! Your quiz responses reveal strong leadership qualities, strategic thinking, and a passion for driving organizational change. A career path as an Agile Leader may be your next step.</p>: submittedValue == "4" ?<p style={{fontSize:"16px"}}>Thank you for your time! Our Team will get back to you</p> : <p></p>

                      }
                      <Link to="/courses">
                      <Button style={{background:"#D23F3F", color:"#fff", borderRadius:"25px"}}>Start Journey</Button></Link>
                      </div>

                      </div>

                  )}
                </Popup>
              
            {/* <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button> */}
          </div>
        )}
        <Stepper activeStep={activeStep} alternativeLabe style={{overflow:"scroll", padding:"2% 0"}}l>
        <Step key="Step 1">
          <StepLabel></StepLabel>
        </Step>
        <Step key="Step 2">
          <StepLabel></StepLabel>
        </Step>
        <Step key="Step 3">
          <StepLabel></StepLabel>
        </Step>
        
        <Step key="Step 4">
          <StepLabel></StepLabel>
        </Step>
        <Step key="Step 5">
          <StepLabel></StepLabel>
        </Step>
        <Step key="Step 6">
          <StepLabel></StepLabel>
        </Step>
        <Step key="Step 7">
          <StepLabel></StepLabel>
        </Step>
        <Step key="Step 8">
          <StepLabel></StepLabel>
        </Step>
        <Step key="Step 9">
          <StepLabel></StepLabel>
        </Step>
        <Step key="Step 10">
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
      </div>
 
    </div>
  );
}

export default MultiStepForm;