import { ProductQuantity } from "../quantity";
import { Button } from "../ui/button";

export const ProductItemForm = () => {
  return (
    <div className="flex flex-col gap-4">
      <ProductQuantity />
      <div className="flex gap-2 ">
        <Button>Buy now</Button>
        <Button variant="outline">Add to cart</Button>
      </div>
    </div>
  );
};
