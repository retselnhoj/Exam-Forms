const ProgressBar = ({ step, totalSteps }) => {
  // To calculate progress percentage
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <>
      <div className='w-full bg-gray-300 rounded-full h-2.5 mb-4'>
        <div
          className='bg-blue-600 h-2.5 rounded-full'
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
