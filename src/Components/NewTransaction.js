import { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";


const NewTransaction = () => {
    const [description, setDescription] = useState("");
    const [transactionAmount, setAmount] = useState("");

    const { addTransaction } = useContext(GlobalContext);

    const transactionSubmit = (e) => {
        e.preventDefault();

        const obj = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }    
        
        addTransaction(obj);
        setDescription("");
        setAmount("");
    }
    


    return (
        <form onSubmit={transactionSubmit}> 
            <h3> Add New Transaction </h3>

            <br />
            <hr />
            <br />

            <h4> Description</h4>
            <br />
            <input type="text" name="description" value={description} className="description" placeholder="Detail of Transaction" onChange={(e)=> setDescription(e.target.value)} required />
            
            <br />
            <br />

            <h4>Transaction Amount</h4>
            <p className="expense_Sign">(Negative - expense , Positive + income)</p>
            <br />
            <input type="text" name="amount" value={transactionAmount} className="amount" placeholder="Dollar Value of Transaction" onChange={(e) => setAmount(e.target.value)} required />

            <br />
            <br />

            <button className="btn" >Add Transaction</button>
        </form>
    )
}

export default NewTransaction;