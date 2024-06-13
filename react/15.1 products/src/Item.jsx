import { useParams } from "react-router-dom";
import Button from "./Button";
import { data } from "./API";

const Item = () => {
  let { id } = useParams();
  const item = data.find((product) => product.id == id);

  return (
    <>
      {item ? (
        <div>
          <div>{item.title}</div>
          <img src={item.imageUrl} />
        </div>
      ) : (
        <div>No item</div>
      )}
      <Button to={"/product"}>Back</Button>
    </>
  );
};

export default Item;
