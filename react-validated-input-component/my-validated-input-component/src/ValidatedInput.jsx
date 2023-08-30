import { useState } from 'react';
import { FaTimes, FaCheck } from 'react-icons/fa';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');
  const empty = 'A password is required';
  const minLength = 'Your password is too short';

  return (
    <>
      <label>
        Password
        <div>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span>
            {password.length >= 1 && password.length < 8 ? <FaTimes /> : null}
            {password.length >= 8 ? <FaCheck /> : null}
          </span>
        </div>
      </label>
      {password === '' ? empty : null}
      {password.length >= 1 && password.length < 8 ? minLength : null}
    </>
  );
}
