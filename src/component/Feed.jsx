import { cardsData } from "../../public/assets/constants";
import Item from "./Item";
import List from "./List";

function Feed() {
  return (
    <div className="w-full md:w-9/12 mx-auto">
      <List />
      {cardsData.map((data, index) => (
        <Item key={index} data={data} />
      ))}
    </div>
  );
}

export default Feed;
