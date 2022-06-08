const Listitem = (props) => {
    console.log(props)
    const { ListItem } = props;

    return <li>{ListItem.title}</li>
}

export default Listitem;