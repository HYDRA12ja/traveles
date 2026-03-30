import { useMemo, useState } from "react";

type BookingType = "Villa" | "Hotel" | "Car";

interface BookingRecord {
  id: number;
  type: BookingType;
  item: string;
  date: string;
  location: string;
}

interface UserDashboardProps {
  userEmail?: string;
  onBackHome?: () => void;
  onLogout?: () => void;
  onOpenTripPlanner?: () => void;
}

const villaOptions = ["Ocean View Villa", "Hill Country Villa", "City Luxury Villa"];
const hotelOptions = ["Colombo City Hotel", "Kandy Lake Hotel", "Galle Fort Hotel"];
const carOptions = ["Toyota Prius", "Suzuki WagonR", "Nissan X-Trail"];

export default function UserDashboard({
  userEmail,
  onBackHome,
  onLogout,
  onOpenTripPlanner,
}: UserDashboardProps) {
  const [villaName, setVillaName] = useState(villaOptions[0]);
  const [hotelName, setHotelName] = useState(hotelOptions[0]);
  const [carName, setCarName] = useState(carOptions[0]);

  const [villaDate, setVillaDate] = useState("");
  const [hotelDate, setHotelDate] = useState("");
  const [carDate, setCarDate] = useState("");

  const [villaLocation, setVillaLocation] = useState("Colombo");
  const [hotelLocation, setHotelLocation] = useState("Kandy");
  const [carLocation, setCarLocation] = useState("Galle");

  const [bookings, setBookings] = useState<BookingRecord[]>([]);

  const bookingCount = useMemo(() => bookings.length, [bookings]);

  const addBooking = (type: BookingType, item: string, date: string, location: string) => {
    if (!date.trim()) {
      return;
    }

    setBookings((current) => [
      {
        id: Date.now(),
        type,
        item,
        date,
        location,
      },
      ...current,
    ]);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-2xl font-bold">Traveler Dashboard</h1>
            <p className="text-sm text-zinc-600">Logged in as {userEmail ?? "User"}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={onBackHome}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100"
            >
              Home
            </button>
            <button
              type="button"
              onClick={onLogout}
              className="rounded-md bg-zinc-900 px-3 py-2 text-sm text-white hover:bg-zinc-700"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-4 px-4 py-6 md:grid-cols-3">
        <section className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Book a Villa</h2>
          <p className="mb-3 text-sm text-zinc-600">Choose your villa and reserve now.</p>
          <select
            value={villaName}
            onChange={(event) => setVillaName(event.target.value)}
            className="mb-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            {villaOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={villaDate}
            onChange={(event) => setVillaDate(event.target.value)}
            className="mb-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            type="text"
            value={villaLocation}
            onChange={(event) => setVillaLocation(event.target.value)}
            placeholder="Location"
            className="mb-3 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={() => addBooking("Villa", villaName, villaDate, villaLocation)}
            className="w-full rounded-md bg-zinc-900 px-3 py-2 text-sm text-white hover:bg-zinc-700"
          >
            Confirm Villa Booking
          </button>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Book a Hotel</h2>
          <p className="mb-3 text-sm text-zinc-600">Pick your hotel room in seconds.</p>
          <select
            value={hotelName}
            onChange={(event) => setHotelName(event.target.value)}
            className="mb-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            {hotelOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={hotelDate}
            onChange={(event) => setHotelDate(event.target.value)}
            className="mb-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            type="text"
            value={hotelLocation}
            onChange={(event) => setHotelLocation(event.target.value)}
            placeholder="Location"
            className="mb-3 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={() => addBooking("Hotel", hotelName, hotelDate, hotelLocation)}
            className="w-full rounded-md bg-zinc-900 px-3 py-2 text-sm text-white hover:bg-zinc-700"
          >
            Confirm Hotel Booking
          </button>
        </section>

        <section className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
          <h2 className="text-lg font-semibold">Book a Car</h2>
          <p className="mb-3 text-sm text-zinc-600">Reserve a ride for your trip.</p>
          <select
            value={carName}
            onChange={(event) => setCarName(event.target.value)}
            className="mb-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            {carOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="date"
            value={carDate}
            onChange={(event) => setCarDate(event.target.value)}
            className="mb-2 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <input
            type="text"
            value={carLocation}
            onChange={(event) => setCarLocation(event.target.value)}
            placeholder="Location"
            className="mb-3 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={() => addBooking("Car", carName, carDate, carLocation)}
            className="w-full rounded-md bg-zinc-900 px-3 py-2 text-sm text-white hover:bg-zinc-700"
          >
            Confirm Car Booking
          </button>
        </section>
      </main>

      <section className="mx-auto mb-8 max-w-6xl px-4">
        <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Your Booking Activity ({bookingCount})</h3>
            <button
              type="button"
              onClick={onOpenTripPlanner}
              className="rounded-md border border-zinc-300 px-3 py-2 text-sm hover:bg-zinc-100"
            >
              Open Trip Planner
            </button>
          </div>

          {bookings.length === 0 ? (
            <p className="text-sm text-zinc-600">No bookings yet. Create your first booking above.</p>
          ) : (
            <ul className="space-y-2">
              {bookings.map((record) => (
                <li
                  key={record.id}
                  className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm"
                >
                  {record.type} booked: {record.item} on {record.date} at {record.location}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}