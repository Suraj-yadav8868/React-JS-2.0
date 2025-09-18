const products = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    price: 999,
    category: "Electronics",
    description:
      "Latest Apple iPhone with A16 Bionic chip and ProMotion display.",
    image:
      "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Nike Air Max",
    price: 120,
    category: "Footwear",
    description: "Comfortable running shoes with air cushioning.",
    image:
      "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Dell XPS 13 Laptop",
    price: 1350,
    category: "Computers",
    description: "Ultrabook with Intel i7 processor and 16GB RAM.",
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Sony WH-1000XM5",
    price: 350,
    category: "Headphones",
    description:
      "Noise cancelling wireless headphones with great sound quality.",
    image:
      "https://images.unsplash.com/photo-1726828537956-61ae115d7d7a?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Casio G-Shock Watch",
    price: 90,
    category: "Accessories",
    description: "Durable and water-resistant digital watch.",
    image:
      "https://images.unsplash.com/photo-1726828557466-c25e3c4ce0c0?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Casio Phone Watch",
    price: 50,
    category: "Accessories",
    description: "Durable smartwatch with retro design.",
    image:
      "https://images.unsplash.com/photo-1727079513748-d03e7b8c8947?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    title: "Adidas Ultraboost",
    price: 140,
    category: "Footwear",
    description: "High-performance running shoes with responsive cushioning.",
    image:
      "https://images.unsplash.com/photo-1727079525588-4638ea8301e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  },
  {
    id: 8,
    title: "MacBook Pro 16”",
    price: 2499,
    category: "Computers",
    description: "Powerful laptop with M2 Pro chip and stunning Retina display.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    title: "Samsung Galaxy S23 Ultra",
    price: 1150,
    category: "Electronics",
    description:
      "Flagship Android phone with 200MP camera and fast performance.",
    image:
      "https://images.unsplash.com/photo-1727079525588-4638ea8301e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  },
  {
    id: 10,
    title: "Bose QC45",
    price: 329,
    category: "Headphones",
    description: "Premium wireless headphones with adaptive noise cancelling.",
    image:
      "https://images.unsplash.com/photo-1726900303530-8b74f627aa4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  },
  {
    id: 11,
    title: "Canon EOS R5",
    price: 3800,
    category: "Cameras",
    description: "Professional mirrorless camera with 45MP sensor and 8K video.",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 12,
    title: "Ray-Ban Sunglasses",
    price: 150,
    category: "Accessories",
    description: "Classic aviator sunglasses with UV protection.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 13,
    title: "Sony PlayStation 5",
    price: 499,
    category: "Gaming",
    description: "Next-gen gaming console with ray tracing and 4K gaming.",
    image:
      "https://images.unsplash.com/photo-1727079516633-04d51a733033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  },
  {
    id: 14,
    title: "Apple AirPods Pro",
    price: 249,
    category: "Headphones",
    description: "Wireless earbuds with ANC and spatial audio support.",
    image:
      "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 15,
    title: "GoPro Hero 11",
    price: 399,
    category: "Cameras",
    description: "Action camera with 5.3K video and waterproof design.",
    image:
      "https://images.unsplash.com/photo-1727079516633-04d51a733033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  }
];

export default products;
