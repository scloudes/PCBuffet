import React, { useState } from "react";
import CategorySelector from "pages/Form/CategorySelector";
import Questions from "./Form/Questions";

function Form() {
  const [step, setStep] = useState(0);
  return (
    <>
      <div style={{ display: `${step ? "none" : "block"}` }}>
        <CategorySelector handler={setStep} />
      </div>
      {Boolean(step) && (
        <>
          <Questions handler={setStep} />
        </>
      )}
    </>
  );
}

export default Form;
