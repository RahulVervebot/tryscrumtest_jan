import React, { useState } from 'react';
import Quizmultistep from './Quizmultistep';
import Layout from "./Layout"
import QuizHeader from "./QuizHeader";
function QuizForm() {
 

  return (
    <Layout>
    {/* <QuizHeader/> */}
    <div className='quiz_course' style={{ fontFamily:"verdana", fontSize:"18px", background:'#fff', color:"#000"}}>
    <Quizmultistep/>
    </div>
    </Layout>

  );
}

export default QuizForm;
