import { Hero } from "./Hero";
export default function HeroDemo() {
  return (
    <Hero
      logo="PulseFit"
      navigation={[
        { label: "Features", onClick: () => console.log("Features") },
        { label: "Programs", hasDropdown: true, onClick: () => console.log("Programs") },
        { label: "Testimonials", onClick: () => console.log("Testimonials") },
        { label: "Pricing", onClick: () => console.log("Pricing") },
        { label: "Contact", onClick: () => console.log("Contact") },
      ]}
      ctaButton={{
        label: "Get Free Trial",
        onClick: () => console.log("Get Free Trial"),
      }}
      title="Train smarter. Anywhere. Anytime."
      subtitle="Guided fitness sessions tailored to your goals - whether it's strength, endurance, or flexibility. Streamlined, motivating, and accessible 24/7."
      primaryAction={{
        label: "Start training",
        onClick: () => console.log("Start training"),
      }}
      secondaryAction={{
        label: "Browse programs",
        onClick: () => console.log("Browse programs"),
      }}
      disclaimer="*No credit card required"
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