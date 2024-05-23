import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordLevel, setPasswordLevel] = useState(0);

  const generatePassword = () => {
    let level = 0;
    let characters = '';
    if (includeLowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
      level++
    }
    if (includeUppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      level++
    }
    if (includeNumbers) {
      characters += '0123456789';
      level++
    }
    if (includeSymbols) {
      characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
      level++
    }

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      if (characters.length > 0) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }
    }
    setGeneratedPassword(password);
    setPasswordLevel(level)
    setIsCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
    setIsCopied(true);
    toast.success('Password copied to clipboard!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <h2 className='title '> Password Generator</h2>
      <div>
        <p className='show-password'> {generatedPassword}
          <img onClick={copyToClipboard} src="./public/Shape.svg" alt="" />
        </p>
        <div className="form">
          <label className='length' htmlFor="passwordLength">
            Character Length
            <span className="characters-num">{passwordLength}</span>
          </label>
          <input
            className='range'
            type="range"
            id="passwordLength"
            min="8"
            max="20"
            value={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
          />
          <div>
            <label>
              <input
                type="checkbox"
                className='checkbox'
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
              />
              Include Symbols
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                className='checkbox'
                checked={includeLowercase}
                onChange={(e) => setIncludeLowercase(e.target.checked)}
              />
              Include Lowercase
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                className='checkbox'
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
              />
              Include Uppercase
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                className='checkbox'
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              Include Numbers
            </label>
          </div>
          <div className="lvl">
            <span className='lvl-text'>STRENGTH</span>
            <div className="right-side">
              {` ${passwordLevel === 1
                ? 'TOO WEAK!'
                : passwordLevel === 2
                  ? 'WEAK'
                  : passwordLevel === 3
                    ? 'MEDIUM'
                    : 'STRONG'
                }`}
              <div className={`image-lvl ${passwordLevel === 1
                ? 'red'
                : passwordLevel === 2
                  ? 'orange'
                  : passwordLevel === 3
                    ? 'yellow'
                    : 'green'
                }`}>              </div>
              <div className={`image-lvl ${passwordLevel === 1
                ? ''
                : passwordLevel === 2
                  ? 'orange'
                  : passwordLevel === 3
                    ? 'yellow'
                    : 'green'
                }`}></div>
              <div className={`image-lvl ${passwordLevel === 1
                ? ''
                : passwordLevel === 2
                  ? ''
                  : passwordLevel === 3
                    ? 'yellow'
                    : 'green'
                }`}></div>
              <div className={`image-lvl ${passwordLevel === 1
                ? ''
                : passwordLevel === 2
                  ? ''
                  : passwordLevel === 3
                    ? ''
                    : 'green'
                }`}></div>
            </div>
          </div>
          <button className='btn' onClick={generatePassword}>GENERATE <img src="./public/Shape.png" alt="" /></button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PasswordGenerator;