import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BusinessCard from '../BusinessCard/BusinessCard'; // Ensure correct case sensitivity
import './MainPage.css';

const businesses = [
    {
      id: 1,
      name: "FreshSpin Laundry",
      location: "Kayunga, Mukono",
      contact: "0756432198",
      hours: "7:00 AM - 8:00 PM",
      image: require('../../assets/images/image_11.webp'),
      services: ["Dry Cleaning", "Ironing", "Express Laundry"],
    },
    {
      id: 2,
      name: "Bubble & Shine Laundromat",
      location: "Bugujju, Mukono",
      contact: "0758923047",
      hours: "8:00 AM - 9:00 PM",
      image: require('../../assets/images/image_10.webp'),
      services: ["Self-Service Wash", "Steam Press", "Pickup & Delivery"],
    },
    {
      id: 3,
      name: "SwiftWash Express",
      location: "Wandegeya, Mukono",
      contact: "0757654210",
      hours: "7:30 AM - 8:30 PM",
      image: require('../../assets/images/image_9.webp'),
      services: ["Eco-Friendly Wash", "Shoe Cleaning", "Carpet Cleaning"],
    },
    {
      id: 4,
      name: "NeatNest Laundry",
      location: "Kilowoza, Mukono",
      contact: "0753217896",
      hours: "8:00 AM - 10:00 PM",
      image: require('../../assets/images/image_8.webp'),
      services: ["Wash & Fold", "Curtain Cleaning", "Premium Laundry"],
    },
    {
      id: 5,
      name: "EverFresh Laundry Hub",
      location: "Kauga, Mukono",
      contact: "0754789231",
      hours: "7:00 AM - 9:00 PM",
      image: require('../../assets/images/image_2.webp'),
      services: ["Shirt Pressing", "Delicate Fabric Care", "Hand Wash Service"],
    },
    {
      id: 6,
      name: "SparkleWash Laundromat",
      location: "Kayunga, Mukono",
      contact: "0786543201",
      hours: "8:00 AM - 9:30 PM",
      image: require('../../assets/images/image_7.webp'),
      services: ["Laundry Subscription", "Hotel Linen Cleaning", "Industrial Wash"],
    },
    {
      id: 7,
      name: "CrystalClean Laundry",
      location: "Bugujju, Mukono",
      contact: "0789876453",
      hours: "7:00 AM - 10:00 PM",
      image: require('../../assets/images/image_6.webp'),
      services: ["Same-Day Service", "Pet Bedding Cleaning", "Rug Cleaning"],
    },
    {
      id: 8,
      name: "Pure Touch Laundry",
      location: "Wandegeya, Mukono",
      contact: "0782345679",
      hours: "7:30 AM - 8:30 PM",
      image: require('../../assets/images/image_5.webp'),
      services: ["Wedding Gown Cleaning", "Sportswear Wash", "Stain Removal"],
    },
    {
      id: 9,
      name: "Quick Fresh Laundry",
      location: "Kilowoza, Mukono",
      contact: "0787658923",
      hours: "8:00 AM - 9:00 PM",
      image: require('../../assets/images/image_4.webp'),
      services: ["Affordable Bulk Laundry", "Softener Treatment", "Wrinkle-Free Pressing"],
    },
    {
      id: 10,
      name: "EliteCare Laundry",
      location: "Kauga, Mukono",
      contact: "0785432107",
      hours: "7:00 AM - 8:30 PM",
      image: require('../../assets/images/image_3.webp'),
      services: ["Bed Linen Cleaning", "Designer Clothes Handling", "Express Overnight Wash"],
    },
];

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="main-content">
        {businesses.map(business => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
