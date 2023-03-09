import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
        <h1>PageNotFound !!!!!</h1>
        <div>
            <button><Link to= '/dashboard'>Go to home page</Link></button>
        </div>
        </>
    )
}

export default PageNotFound