import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
    const { transaction } = useContext(GlobalContext);

    const income = transaction.reduce((value, nextValue) => {
        return value + nextValue.transactionAmount;
    }, 0)

    return(
        <>
            <h4> Current Balance: </h4>
            <h3>${income}</h3>
        </>
    )
}
export default Balance;