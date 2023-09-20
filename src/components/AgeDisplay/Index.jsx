import { h } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { NameContext } from '../../context/NameContext';
import { calculateAge } from '../../utils/calculateAge';

function AgeDisplay() {
  const { name, age, setAge } = useContext(NameContext);

  useEffect(() => {
    if (name) {
      calculateAge(name)
        .then((resultAge) => {
          setAge(resultAge);
        })
        .catch((error) => {
          console.error(error);
          setAge(null);
        });
    }
  }, [name, setAge]);

  return (
    <div>
      {name ? (
        age !== null ? (
          <p>Your approximate age is {age} years.</p>
        ) : (
          <p>Failed to fetch age data for {name}.</p>
        )
      ) : (
        <p>Please enter your name to calculate your age.</p>
      )}
    </div>
  );
}

export default AgeDisplay;
