import React, { useState } from "react";
import CategorySelector from "pages/Form/CategorySelector";
import Questions from "./Form/Questions";

function Form() {
  const [step, setStep] = useState(0);
  return !step ? <CategorySelector handler={setStep} /> : <Questions />;
}

export default Form;
