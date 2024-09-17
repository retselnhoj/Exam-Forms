import { useState } from 'react';

const FamilyRelations = () => {
  // This is state to hold family members
  const [familyMembers, setFamilyMembers] = useState([{ id: 1 }]);

  // This is to add a new family member
  const addFamilyMember = () => {
    setFamilyMembers([...familyMembers, { id: familyMembers.length + 1 }]);
  };

  // This is to delete a specific family member by their ID
  const deleteFamilyMember = (id) => {
    setFamilyMembers(familyMembers.filter((member) => member.id !== id));
  };

  return (
    <>
      <form action=''>
        {familyMembers.map((member, index) => (
          <div key={member.id} className='family-member-form'>
            <h1 className='text-2xl mb-4 text-center'>
              Family Member {index + 1}
            </h1>
            <form action=''>
              {/* This is the first aprent div */}
              <div className='flex mb-4 gap-3'>
                <div className='flex gap-2 flex-col'>
                  <label htmlFor={`fullName-${member.id}`}>Full Name</label>
                  <input type='text' id={`fullName-${member.id}`} />
                </div>

                <div className='flex gap-2 flex-col'>
                  <label htmlFor={`relationship-${member.id}`}>
                    Relationship
                  </label>
                  <input type='text' id={`relationship-${member.id}`} />
                </div>

                <div className='flex gap-2 flex-col'>
                  <label htmlFor={`gender-${member.id}`}>Gender</label>
                  <input type='text' id={`gender-${member.id}`} />
                </div>

                <div className='flex gap-2 flex-col'>
                  <label htmlFor={`civilStatus-${member.id}`}>
                    Civil Status
                  </label>
                  <input type='text' id={`civilStatus-${member.id}`} />
                </div>
              </div>
              {/* This is the end first parent div */}

              {/* This is the second parent div */}
              <div className='flex mb-4 gap-3'>
                <div className='flex gap-2 flex-col'>
                  <label htmlFor={`dob-${member.id}`}>Date of Birth</label>
                  <input type='date' id={`dob-${member.id}`} />
                </div>

                <div className='flex gap-2 flex-col'>
                  <label htmlFor={`education-${member.id}`}>
                    Educational Attainment
                  </label>
                  <input type='text' id={`education-${member.id}`} />
                </div>

                <div className='flex gap-2 flex-col'>
                  <label htmlFor={`occupation-${member.id}`}>
                    Current Occupation
                  </label>
                  <input type='text' id={`occupation-${member.id}`} />
                </div>

                <div className='flex gap-2 flex-col'>
                  <label htmlFor={`income-${member.id}`}>Monthly Income</label>
                  <input type='number' id={`income-${member.id}`} />
                </div>
              </div>
              {/* This is the end second parent div */}
            </form>

            {/* Delete button to remove a family member */}
            <button
              type='button'
              onClick={() => deleteFamilyMember(member.id)}
              className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ml-auto'
            >
              Delete -
            </button>
          </div>
        ))}

        {/* Button to add a new family member */}
        <button
          type='button'
          onClick={addFamilyMember}
          className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg ml-auto'
        >
          Add +
        </button>
      </form>
    </>
  );
};

export default FamilyRelations;
