
import StationaryCard from '../components/StationaryCard';
import StationaryCardData from '../configs/stationarydata';

function StationaryStore() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {StationaryCardData.map((item) => {
        const { id, image, name, description, price } = item;

        return (
          <StationaryCard
            key={id}
            image={image}
            name={name}
            description={description}
            price={price}
            onAddToCart={() => console.log(`Added ${name} to cart`)}
          />
        );
      })}
    </div>
  );
}

export default StationaryStore;
