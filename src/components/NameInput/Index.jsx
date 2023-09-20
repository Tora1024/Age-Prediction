import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { NameContext } from '../../context/NameContext';

function NameInput() {
  const { setName } = useContext(NameContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={handleNameChange} />
    </div>
  );
}

export default NameInput;
