import "../../styles/Input.scss";

export function Input(props) {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </>
  );
}
