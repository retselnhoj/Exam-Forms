import { useState } from 'react';
import BasicInfo from './BasicInfo';
import FamilyRelations from './FamilyRelations';
import MedicalHistory from './MedicalHistory';
import Confirmation from './Confirmation';
import ProgressBar from './ProgressBar';

const StepForm = () => {
  // State to track the current step
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  // This is the fuunction to move to the next step
  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  // This is the function to move to the previous step
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // This is the function to handle final confirmation
  const handleConfirm = () => {
    alert('Form submitted successfully!');
  };

  return (
    <div className='container mx-auto mt-10'>
      <h1 className='text-2xl mb-4 text-center'>Forms</h1>
      <div className='border p-4 rounded-lg'>
        {step === 1 && <BasicInfo />}
        {step === 2 && <FamilyRelations />}
        {step === 3 && <MedicalHistory />}
        {step === 4 && <Confirmation />}

        <div className='flex justify-between mt-4'>
          {step > 1 && (
            <button
              type='button'
              className='bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg'
              onClick={prevStep}
            >
              Previous
            </button>
          )}
          {step < 4 && (
            <button
              type='button'
              className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-auto'
              onClick={nextStep}
            >
              Next
            </button>
          )}
          {step === 4 && (
            <button
              type='button'
              className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ml-auto'
              onClick={handleConfirm}
            >
              Confirm
            </button>
          )}
        </div>
      </div>
      {/* Progress Bar */}
      <ProgressBar step={step} totalSteps={totalSteps} />{' '}
      {/* Will get the steps and get by the component to compute*/}
    </div>
  );
};

export default StepForm;
