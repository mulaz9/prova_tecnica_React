export default function Option(props) {
  return (
    <div className="option">
      <input
        type="radio"
        className="radio"
        name="job"
        id={props.id}
        value={props.value}
      />
      <label htmlFor="job" onClick={props.onChange}>
        {props.label}
      </label>
    </div>
  );
}
