import { useState } from "react";
import { YearlyData } from "../../types/YearlyData";
import { calculateHandler } from "../../utils/CalculateYearlyProfitHendler";
import Styles from './InvestmentFormComponent.module.css'

interface Props {
  setUserInvestment: React.Dispatch<React.SetStateAction<YearlyData[]>>,
}

export const InvestmentFormComponent: React.FC<Props> = ({ setUserInvestment }) => {
  const [currentSavings, setCurrentSavings] = useState('0');
  const [yearlyContribution, setYearlyContribution] = useState('0');
  const [interest, setInterest] = useState('0');
  const [duration, setDuration] = useState('0');
  
  const onCurrSavingsChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSavings(ev.target.value);
  };

  const onContributionChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setYearlyContribution(ev.target.value);
  };

  const onInterestChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInterest(ev.target.value);
  };

  const onDurationChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(ev.target.value);
  };

  const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    calculateHandler({
      currentSavings,
      yearlyContribution,
      expectedReturn: interest,
      duration,
    }, setUserInvestment);
  };

  const onClear = () => {
    setCurrentSavings('0');
    setYearlyContribution('0');
    setInterest('0');
    setDuration('0')
  };

  return (
    <form className={Styles.form} onSubmit={onSubmit} onReset={onClear}>
      <div className={Styles.inputGroup}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={onCurrSavingsChange} min={1} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={onContributionChange} min={0} />
        </p>
      </div>
      <div className={Styles.inputGroup}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" onChange={onInterestChange} min={1} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={onDurationChange} min={1} />
        </p>
      </div>
      <p className={Styles.actions}>
        <button type="reset" className={Styles.buttonAlt}>
          Reset
        </button>
        <button type="submit" className={Styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};
