import "./resultData.css";
import resultInvestment from "../../investInfo";
import { formatter } from "../../investInfo";
export default function Resultdata({ values }) {
  console.log("hi", values);
  const [startAmount, annualContribution, rateOfReturn, duration] = values;
  console.log("hi", startAmount, annualContribution, rateOfReturn, duration);
  const resultArray = resultInvestment(
    startAmount,
    annualContribution,
    rateOfReturn,
    duration
  );

  return (
    <>
      {console.log(resultArray)}
      <table>
        <thead>
            <tr>
            <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
            </tr>
        
        </thead>
        {resultArray.map((result) => {
          return (
            <>
              <tbody>
                <tr>
                <td>{result.year}</td>
                <td>{formatter.format(result.endBalance)}</td>
                <td>{formatter.format(result.yearlyInterest)}</td>
                <td>{formatter.format(result.totalInterest)}</td>
                <td>{formatter.format(result.endBalance - result.totalInterest)}</td>

                </tr>

              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}
