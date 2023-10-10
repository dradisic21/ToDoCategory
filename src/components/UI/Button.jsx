import '../../styles/Button.scss'

export function Button(props) {
    return (
        <div>
            <button className={props.className} type={props.type} onClick={props.onClick}>
                {props.name}
                {props.icon && <span className="icon">{props.icon}</span>}
            </button>
        </div>
    )
}
