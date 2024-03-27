import Link from 'next/link';
import Image from 'next/image';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from 'react-icons/fa';

const FeaturedPropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="relative flex flex-col bg-white shadow-md rounded-xl md:flex-row">
      <Image
        src={property.images[0]}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover w-full rounded-t-xl md:rounded-tr-none md:rounded-l-xl md:w-2/5"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold">{property.name}</h3>
        <div className="mb-4 text-gray-600">{property.type}</div>
        <h3 className="absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          ${getRateDisplay()}
        </h3>
        <div className="flex justify-center gap-4 mb-4 text-gray-500">
          <p>
            <FaBed className="inline-block mr-2" /> {property.beds}{' '}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline-block mr-2" /> {property.baths}{' '}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline-block mr-2" />
            {property.square_feet}{' '}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-4 text-sm text-green-900">
          {property.rates.nightly && (
            <p>
              <FaMoneyBill className="inline mr-2" /> Nightly
            </p>
          )}

          {property.rates.weekly && (
            <p>
              <FaMoneyBill className="inline mr-2" /> Weekly
            </p>
          )}

          {property.rates.monthly && (
            <p>
              <FaMoneyBill className="inline mr-2" /> Monthly
            </p>
          )}
        </div>

        <div className="mb-5 border border-gray-200"></div>

        <div className="flex flex-col justify-between lg:flex-row">
          <div className="flex gap-2 mb-4 align-middle lg:mb-0">
            <FaMapMarker className="text-lg text-orange-700" />
            <span className="text-orange-700">
              {' '}
              {property.location.city} {property.location.state}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 transition-all text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FeaturedPropertyCard;
