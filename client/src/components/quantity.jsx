import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const ProductQuantity = () => {
  return (
    <div className="flex">
      <Button variant="outline" size="icon" className="rounded-none">
        <Icons.minus />
      </Button>
      <Input
        type="number"
        placeholder="0"
        controls="none"
        className="w-12 text-center rounded-none"
      />
      <Button variant="outline" size="icon" className="rounded-none">
        <Icons.plus />
      </Button>
    </div>
  );
};
