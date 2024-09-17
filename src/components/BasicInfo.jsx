import { useState } from 'react';
const BasicInfo = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Birthday:', bday);
    console.log('Address:', address);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Height:', height);
    console.log('Weight:', weight);
  };

  return (
    <>
      <h1 className='text-2xl mb-4 text-center'>Basic Information</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className='flex mb-4 gap-3'>
          {' '}
          {/*This is the first parent div*/}
          <div className='flex gap-2 flex-col'>
            {' '}
            {/*This is for the firstname*/}
            <label htmlFor='firstname'>First Name</label>
            <input
              type='text'
              id='firstname'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='flex gap-2 flex-col'>
            {' '}
            {/*This is for the lastname*/}
            <label htmlFor='lastname'>Last Name</label>
            <input
              type='text'
              id='lastname'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='flex gap-2 flex-col'>
            {' '}
            {/*This is for the birthday*/}
            <label htmlFor='birthday'>Birthday</label>
            <input
              type='date'
              id='birthday'
              value={bday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
        </div>{' '}
        {/*This is the end of first parent div*/}
        <div className='flex mb-4 gap-3'>
          {' '}
          {/*This is the second parent div*/}
          <div className='flex gap-2 flex-col'>
            {' '}
            {/*This is for the address*/}
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='flex gap-2 flex-col'>
            {' '}
            {/*This is for the email*/}
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex gap-2 flex-col'>
            {' '}
            {/*This is for the phone*/}
            <label htmlFor='phone'>Phone</label>
            <input
              type='number'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>{' '}
        {/*This is the end of second parent div*/}
        <div className='flex mb-4 gap-3'>
          {' '}
          {/*This is the third parent div*/}
          <div className='flex gap-2 flex-col'>
            {' '}
            {/*This is for the height*/}
            <label htmlFor='height'>Height(cm)</label>
            <input
              type='number'
              id='height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className='flex gap-2 flex-col'>
            {' '}
            {/*This is for the weight*/}
            <label htmlFor='weight'>Weight(kg)</label>
            <input
              type='number'
              id='weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>{' '}
        {/*This is the end of third parent div*/}
      </form>
    </>
  );
};

export default BasicInfo;
