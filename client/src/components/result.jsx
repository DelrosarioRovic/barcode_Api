

const Result = (props) => {
    console.log(props.product)
    
    return (
        <ul>
            <li>{props.product.id}</li>
            <li>{props.product.body_html}</li>
            <li>{props.product.created_at}</li>
            <li>{props.product.status}</li>
            <li>{props.product.tags}</li>
            <li>{props.product.title}</li>
        </ul>
    )
}

export default Result;