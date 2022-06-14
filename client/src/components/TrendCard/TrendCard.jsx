import './TrendCard.scss';
import { TrendData } from 'Data/TrendData.js';
const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trends for you</h3>
      {TrendData.map((trend, idx) => {
        return (
          <div className="trend" key={idx}>
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
