import { Hero } from "./Hero";
export default function HeroDemo() {
  return (
    <Hero
      logo="Travales "
      navigation={[
        { label: "Home", onClick: () => console.log("Home") },
        { label: "Browse", hasDropdown: true, onClick: () => console.log("Browse") },
        { label: "Map", onClick: () => console.log("Map") },
        { label: "Contact", onClick: () => console.log("Contact") },
        { label: "Trip Planner", onClick: () => console.log("Trip Planner") },
      ]}
      ctaButton={{
        label: "Get Free Trial",
        onClick: () => console.log("Get Free Trial"),
      }}
      title="Book A Place, Rent A Ride, And Explore Sri Lankan Gems."
      subtitle="Start your adventure with us and explore the best of Sri Lanka. Whether you're looking for a cozy hotel, a luxurious villa, or a unique rental, we've got you covered. Join our community of travelers and hosts today!."
      primaryAction={{
        label: "Start Searching",
        onClick: () => console.log("Start searching"),
      }}
      secondaryAction={{
        label: "List Your Property",
        onClick: () => console.log("List your property"),
      }}
      disclaimer="Sri Lanka's premier travel platform. Book your dream vacation today!"
      socialProof={{
        avatars: [
          "https://i.pravatar.cc/150?img=1",
          "https://i.pravatar.cc/150?img=2",
          "https://i.pravatar.cc/150?img=3",
          "https://i.pravatar.cc/150?img=4",
        ],
        text: "Join over 10,000+ people",
      }}
      programs={[
        {
          image: "https://plus.unsplash.com/premium_photo-1666254114402-cd16bc302aea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          category: "Sigriya",
          title: "Ancient Rock Fortress",
          onClick: () => console.log("Ancient Rock Fortress"),
        },
        {
          image: "https://images.unsplash.com/photo-1609681980718-340e7f4b11d7?q=80&w=840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          category: "Ella",
          title: "Waterfall & Tea Plantations",
          onClick: () => console.log("Waterfall & Tea Plantations"),
        },
        {
          image: "https://images.unsplash.com/photo-1579989197111-928f586796a3?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          category: "Galle",
          title: "7th Century Dutch Fort",
          onClick: () => console.log("7th century Dutch fort"),
        },
        {
          image: "https://images.unsplash.com/photo-1578517929167-db9ed31cd5c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bnV3YXJhJTIwZWxpeWElMjBzcmklMjBsYW5rYXxlbnwwfHwwfHx8MA%3D%3D",
          category: "Nuwara Eliya",
          title: "Hill Station & Tea Plantations",
          onClick: () => console.log("Hill Station & Tea Plantations"),
        },
        {
          image: "https://images.unsplash.com/photo-1621393614326-2f9ed389ce02?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          category: "Anuradhapura",
          title: "Ancient City & Sacred Sites",
          onClick: () => console.log("Ancient City & Sacred Sites"),
        },
      ]}
    />
  );
}