import classes from "../../assets/styles/spinner.module.css";

export default function Spinner() {
  return (
    <div className={classes.spinner}>
      <div className={classes["lds-ring"]}>
        <div />
        <div />
        <div />
        <div />
      </div>
      <h2>Loading...</h2>
    </div>
  );
}
