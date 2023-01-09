import { useParams } from "react-router-dom";

const ItemDetail = () => {
    const params = useParams(); 

    return (
        <>
        ItemDetail
        <br></br>
        {params.id}
        </>
    )
}

export default ItemDetail;