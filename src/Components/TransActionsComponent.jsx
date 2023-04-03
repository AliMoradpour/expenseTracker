const TransActionsComponent = ({ transactions }) => {
  return (
    <section className="TransActionsComponent">
      {transactions.length &&
        transactions.map((t) => (
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
        ))}
    </section>
  );
};

export default TransActionsComponent;
