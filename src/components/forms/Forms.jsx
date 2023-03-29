import "./forms.css";

const Forms = () => {
  return (
    <div className="container">
      <h3> Add your expenses here</h3>
      <div className="forms">
        <form action="">
          <input type="text" placeholder="item for which expenced" />
          <input type="number" name="" id="" placeholder="amount" />
          <input type="date" name="" id="" defaultValue={new Date()} />
          <button>Add expenses</button>
        </form>
      </div>
    </div>
  );
};
export default Forms;
