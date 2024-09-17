import { useState } from 'react';

const MedicalHistory = () => {
  const [drinksAlcohol, setDrinksAlcohol] = useState(null);
  const [smokes, setSmokes] = useState(null);
  const [bloodType, setBloodType] = useState('');

  {
    /* Conditional of alcohol choice */
  }
  let alcoholContent;
  if (drinksAlcohol === 'yes') {
    alcoholContent = (
      <div className='text-center'>
        <p>How often?</p>
        <div className='flex gap-4 justify-center mb-4'>
          <div>
            <input type='radio' id='sometimes' name='frequency' />
            <label htmlFor='sometimes'>Sometimes</label>
          </div>
          <div>
            <input type='radio' id='often' name='frequency' />
            <label htmlFor='often'>Often</label>
          </div>
        </div>
      </div>
    );
  }
  {
    /* Conditional of smoking choice */
  }
  let smokeContent;
  if (smokes === 'yes') {
    smokeContent = (
      <div className='text-center'>
        <p>How often?</p>
        <div className='flex gap-4 justify-center mb-4'>
          <div>
            <input type='radio' id='sometimes' name='frequency' />
            <label htmlFor='sometimes'>Sometimes</label>
          </div>
          <div>
            <input type='radio' id='often' name='frequency' />
            <label htmlFor='often'>Often</label>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <h1 className='text-2xl mb-4 text-center'>Medical History</h1>
      <form>
        {/* Alcohol */}
        <p>Do you drink alcohol?</p>
        <div className='flex gap-4 justify-center mb-1'>
          <div>
            <input
              type='radio'
              id='alcoholYes'
              name='alcohol'
              value='yes'
              onChange={() => setDrinksAlcohol('yes')}
            />
            <label htmlFor='alcoholYes'>Yes</label>
          </div>

          <div>
            <input
              type='radio'
              id='alcoholNo'
              name='alcohol'
              value='no'
              onChange={() => setDrinksAlcohol('no')}
            />
            <label htmlFor='alcoholNo'>No</label>
          </div>
        </div>

        {/* Conditional of alocohol choice */}
        {alcoholContent}

        {/* Smoking */}
        <p>Do you smoke?</p>
        <div className='flex gap-4 justify-center mb-1'>
          <div>
            <input
              type='radio'
              id='smokeYes'
              name='smoke'
              value='yes'
              onChange={() => setSmokes('yes')}
            />
            <label htmlFor='smokeYes'>Yes</label>
          </div>
          <div>
            <input
              type='radio'
              id='smokeNo'
              name='smoke'
              value='no'
              onChange={() => setSmokes('no')}
            />
            <label htmlFor='smokeNo'>No</label>
          </div>
        </div>

        {/* Conditional of smoking choice */}
        {smokeContent}

        {/* Blood type */}
        <p>What is your blood type?</p>
        <div className='flex gap-4 flex-wrap mb-2'>
          {['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'].map((type) => (
            <div key={type}>
              <input
                type='radio'
                id={type}
                name='bloodType'
                value={type}
                onChange={(e) => setBloodType(e.target.value)}
              />
              <label htmlFor={type}>{type}</label>
            </div>
          ))}
        </div>

        {/* Other conditions */}
        <div>
          <p>What are your other conditions?</p>
          <textarea name='' id='' placeholder='Other conditions'></textarea>
        </div>
      </form>
    </>
  );
};

export default MedicalHistory;
