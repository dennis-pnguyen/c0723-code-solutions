import { useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';

export default function ValidatedInput() {
  const [isValid, setIsValid] = useState('');
  const empty = 'A password is required';
  const minLength = 'Your password is too short';

  return (
    <>
      <label>
        Password
        <div>
          <input
            type="password"
            onChange={(e) => setIsValid(e.target.value)}
            value={isValid}
          />
          <span>
            {isValid === '' ? <FaTimes /> : null}
            {isValid.length >= 1 && isValid.length < 8 ? <FaTimes /> : null}
            {isValid.length >= 8 ? <FaCheck /> : null}
          </span>
        </div>
      </label>
      {isValid === '' ? empty : null}
      {isValid.length >= 1 && isValid.length < 8 ? minLength : null}
    </>
  );
}
