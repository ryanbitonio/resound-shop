import { Icons } from "../icons";

const Icon = () => {
  return (
    <div className="flex items-center gap-2 absolute left-8 top-6 text-lg font-semibold tracking-tight text-white">
      <Icons.logo />
      <p>Resound Shop</p>
    </div>
  );
};

export default Icon;
