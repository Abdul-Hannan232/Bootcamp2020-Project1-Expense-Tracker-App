import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Transaction = ( {transaction} ) => {
    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? "+" : "-";
    const signType = transaction.transactionAmount > 0 ? "plus" : "minus";


    return (
        <li className= {signType} >
            {transaction.description}
            <span className="span">{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn" onClick={()=> delTransaction(transaction.id)}>X</button>
        </li>
    )
}
export default Transaction;