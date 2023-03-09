import { useParams } from "react-router-dom"

const Amdin = () => {
    const { id, name } = useParams()
    return (
        <>
        <h1> Amdin page {`${id}`} {`${name}`}</h1>
        </>
    )
}

export default Amdin