import { YearlyData } from "../types/YearlyData";
import { UserInput } from "../types/userInput";

export const calculateHandler = (userInput: UserInput, addDataFunction: React.Dispatch<React.SetStateAction<YearlyData[]>>) => {
  const yearlyData = [];

  let currentSavings = +userInput['currentSavings'];
  const yearlyContribution = +userInput['yearlyContribution'];
  const expectedReturn = +userInput['expectedReturn'] / 100;
  const duration = +userInput['duration'];
  const initialInvestment = +userInput['currentSavings'];

  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
      initialInvestment,
    });
  }

    addDataFunction(yearlyData);
};
