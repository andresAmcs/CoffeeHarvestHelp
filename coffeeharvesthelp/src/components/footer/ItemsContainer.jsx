import Item from "./Item";
import { PRODUCTS, RESOURCES } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-20 text-[#f46b45]">
      <Item Links={PRODUCTS} title="NOSOTRES" />
      <Item Links={RESOURCES} title="SERVICIOS" />
    </div>
  );
};

export default ItemsContainer;