import iconDollar from '../assets/images/icon-dollar.svg';

interface CardProps {
  tipAmount: number;
  totalPerPerson: number;
  handleReset: () => void;
}

const Card: React.FC<CardProps> = ({
  handleReset,
  tipAmount,
  totalPerPerson,
}) => {
  return (
    <div className="card__details-calculate-tip">
      <div className="card_details-calculate-tip-card">
        <div className="card__details-calculate-tip-content">
          <div className="card_details-calculate-tip-content-row-1">
            <div className="card__details-calculate-tip-content-title">
              <h4>Tip Amount</h4>
              <span>/ person</span>
            </div>
            <div className="card__details-calculate-tip-content-amount">
              <h1>
                <span>
                  <img alt="" src={iconDollar} />
                </span>
                {tipAmount.toFixed(2)}
              </h1>
            </div>
          </div>
          <div className="card_details-calculate-tip-content-row-2">
            <div className="card__details-calculate-tip-content-title">
              <h4>Total</h4>
              <span>/ person</span>
            </div>
            <div className="card__details-calculate-tip-content-amount">
              <h1>
                <span>
                  <img alt="" src={iconDollar} />
                </span>
                {totalPerPerson.toFixed(2)}
              </h1>
            </div>
          </div>
        </div>
        <div className="card__details-calculate-tip-button">
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
