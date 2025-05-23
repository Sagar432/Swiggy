import Image from "next/image";
import card_img from "../../../public/assets/tomato-salad.jpg";

export default function RestaurantCard({res="Meghana Food", cuicines="Biryani, North Indian, Asian", rating="4.4", time="38"}) {
  return (
    <div className="border border-white w-fit h-64 py-2 px-3 bg-gray-300 hover:border-black cursor-pointer duration-300">
      <Image src={card_img} width={200} />
      <div className="space-y-2 pt-2">
        <h3 className="font-semibold">{res}</h3>
        <h5 className="font-semibold text-sm">{cuicines}</h5>
        <div>{rating} star</div>
        <p>{time} minutes</p>
      </div>
    </div>
  );
}
