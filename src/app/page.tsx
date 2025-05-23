import RestaurantCard from "@/components/ui/restaurant-card";

export default function Home() {
  return (
    <div className="px-[2vw]">
      <input type="text" placeholder="search" className="border outline-none px-2 py-1" />
      <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
        <RestaurantCard res="KFC" cuicines="pizza" rating="4.7" time="23" />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}
