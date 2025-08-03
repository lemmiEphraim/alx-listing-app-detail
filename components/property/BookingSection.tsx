import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
      return Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    return 0;
  };

  const nights = calculateNights();
  const total = nights * price;

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">${price}</h3>
        <span className="text-gray-600">per night</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-in</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Check-out</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between">
          <span>${price} × {nights} nights</span>
          <span>${price * nights}</span>
        </div>
        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <button className="mt-6 w-full bg-rose-500 hover:bg-rose-600 text-white py-3 px-4 rounded-lg font-medium transition duration-200">
        Reserve
      </button>
    </div>
  );
};

export default BookingSection;
