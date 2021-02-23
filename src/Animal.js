//functional component
function Human(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p> This is a {props.mammal} living at {props.location}</p>
        </div>
    )
}

export default Human;