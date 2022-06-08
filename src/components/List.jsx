import Listitem from "./ListItem"
const List = (props) => {
    const { list } = props;
    // console.log(list)
    return <>
        {
            list.map((ListItem) => (
                <Listitem ListItem={ListItem} />
            ))
        }</>
}

export default List;