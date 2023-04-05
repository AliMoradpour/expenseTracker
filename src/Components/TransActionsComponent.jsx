import { useEffect } from "react";
import { useState } from "react";

const TransActionsComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(transactions);
      return;
    }
    const filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
  };
  useEffect(() => {
    filterTransactions(searchItem);
  }, [transactions]);

  if(!transactions.length) return <p style={{textAlign: 'center' , fontSize: '13px' , margin:"10px 0"}}>Add Transactions</p>
  return (
    <section className="TransActionsComponent">
      <input type="text" value={searchItem} onChange={changeHandler} placeholder="Search For Tnx" className="search"/>
      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              key={t.id}
              className="transactions"
              style={
                t.type === "expense" ? { color: "red" } : { color: "green" }
              }>
              <span>{t.desc}</span>
              <span>
                {t.type === "income" ? "+" : "-"} $ {t.amount}
              </span>
            </div>
          ))
        : <p style={{textAlign: 'center' , fontSize: '13px'}}>No Item Matchs !</p>}
    </section>
  );
};

export default TransActionsComponent;
