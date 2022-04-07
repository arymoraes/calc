import { useCallback } from 'react';

// outside of the component
// so it doesnt get re-declared every time the component re-renders
const tipArray = [5, 10, 15, 25, 50];

interface FormProps {
  bill: null | number;
  people: number;
  tip: number;
  setBill: (bill: number) => void;
  setPeople: (people: number) => void;
  setTip: (tip: number) => void;
}

const Form = ({ bill, people, setBill, setPeople, setTip, tip }: FormProps) => {
  // useCallback makes this function only gets declared when any of the items on the
  // dependencies array changes
  const handleTipChange = useCallback(
    (amount) => {
      setTip(amount);
    },
    [setTip],
  );

  const handleBillChange = useCallback(
    (event) => {
      setBill(+event.target.value);
    },
    [setBill],
  );

  const handlePersonChange = useCallback(
    (event) => {
      setPeople(+event.target.value);
    },
    [setPeople],
  );

  return (
    <div className="card__details-bill">
      <div className="card__details-amount">
        <span className="card__details-smalltext">Bill</span>
        <input
          className="card__details-input icon icon-1"
          id=""
          onChange={handleBillChange}
          type="number"
          value={bill || ''}
        />
      </div>
      <div className="card__details-select-tip">
        <span className="card__details-smalltext">Select Tip %</span>
        <div className="card__details-buttons">
          {tipArray.map((value) => (
            <button
              className={`${tip === value && 'active-tip'}`}
              key={value}
              onClick={() => handleTipChange(value)}
            >
              {value}%
            </button>
          ))}
          <input
            onChange={(event) => handleTipChange(+event?.target.value)}
            placeholder="0.00"
            type="number"
            value={tip}
          />
        </div>
      </div>
      <span className="card__details-smalltext">Number of people</span>
      <input
        className=" card__details-input icon icon-2"
        onChange={handlePersonChange}
        type="number"
        value={people}
      />
    </div>
  );
};

export default Form;
