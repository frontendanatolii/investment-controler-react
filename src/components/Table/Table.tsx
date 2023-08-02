import { YearlyData } from "../../types/YearlyData";
import Styles from './Table.module.css';

interface Props {
  userInvestment: YearlyData[]
};

export const Table: React.FC<Props> = ({ userInvestment }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={Styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {userInvestment.map((investment, index) => (
          <tr key={index}>
            <td>{investment.year}</td>
            <td>{formatter.format(investment.savingsEndOfYear)}</td>
            <td>{formatter.format(investment.yearlyInterest)}</td>
            <td>{formatter.format(investment.savingsEndOfYear - investment.initialInvestment - investment.yearlyContribution * investment.year)}</td>
            <td>{formatter.format(investment.initialInvestment + investment.yearlyContribution * investment.year)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}