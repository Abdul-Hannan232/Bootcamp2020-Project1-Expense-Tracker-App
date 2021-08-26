// Importing Components
import Balance from './Components/Balance';
import Summary from './Components/Summary';
import History from './Components/History';
import NewTransaction from './Components/NewTransaction';

// Importing GlobalProvider
import GlobalProvider from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        
          <h3>Expense Tracker By Abdul Hannan</h3>
        
          <br />
          <Balance />
          <br />
          <Summary />
          <br />
          <History />
          <br />
          <NewTransaction />

      </div>
    </GlobalProvider>
  );
}

export default App;
