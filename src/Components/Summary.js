import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Summary = () => {
    const { transaction } = useContext(GlobalContext);
    const income = transaction.filter((value) => {
        return value.transactionAmount > 0;
    })

    const expense = transaction.filter((value) => {
        return value.transactionAmount < 0;
    })

    const incomeAmount = income.reduce((total, value) => {
        return    total + value.transactionAmount;
    },0)

    const expenseAmount = expense.reduce((total, value) => {
        return    total + value.transactionAmount;
    },0)

    return (
        <>
            <div className="summary">
                <div className="income">
                    <h4> INCOME </h4>
                    <h4 className="gold">{incomeAmount}</h4> 
                </div>

                    <div className="pipe">  |  </div>

                <div className="expense"> 
                    <h4> EXPENSE </h4> 
                    <h4 className="blue">{expenseAmount}</h4> 
                </div>
            </div>
            <br />
        </>
    )

}

export default Summary;
