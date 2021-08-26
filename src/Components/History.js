import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

const History = () => {
    const { transaction } = useContext(GlobalContext);



    return (
        <>
            <h3>Transaction History</h3>
            <ul className="list">

                { transaction.map(transaction => {
                    return ( 
                        <Transaction 
                            key={transaction.id}
                            transaction={transaction}
                        /> 
                    )
                }) }

            </ul>
        </>
    )

}

export default History;