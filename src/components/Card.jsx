import Heading from "./Heading"
import List from "./List"

const Card = (prop) => {
    const { heading, list } = prop;

    return (<>
        <Heading heading={heading} />
        <List list={list} />
    </>)
}

export default Card;