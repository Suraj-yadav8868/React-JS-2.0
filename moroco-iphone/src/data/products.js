const products = [
  {
    id: 1,
    title: "iPhone 14 Pro",
    price: 1199,
    category: "Electronics",
    description: "Apple ka flagship iPhone with A16 Bionic chip, Dynamic Island aur ProMotion display.",
    image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Nike Air Max",
    price: 135,
    category: "Footwear",
    description: "Iconic running sneakers with Air cushioning aur stylish comfort.",
    image: "https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Dell XPS 13 Laptop",
    price: 1450,
    category: "Computers",
    description: "Premium ultrabook with Intel i7, 16GB RAM aur edge-to-edge display.",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    title: "Sony WH-1000XM5",
    price: 399,
    category: "Headphones",
    description: "Industry-leading noise cancelling headphones with 30-hour battery life.",
    image: "https://images.unsplash.com/photo-1726828537956-61ae115d7d7a?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    title: "Casio G-Shock Watch",
    price: 110,
    category: "Accessories",
    description: "Shock-resistant digital watch with water resistance up to 200m.",
    image: "https://images.unsplash.com/photo-1726828557466-c25e3c4ce0c0?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    title: "Casio Phone Watch",
    price: 75,
    category: "Accessories",
    description: "Retro-inspired Casio smartwatch with phone dial feature.",
    image: "https://images.unsplash.com/photo-1727079513748-d03e7b8c8947?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    title: "Adidas Ultraboost",
    price: 160,
    category: "Footwear",
    description: "High-performance running shoes with Boost cushioning aur knit upper.",
    image: "https://images.unsplash.com/photo-1727079525588-4638ea8301e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  },
  {
    id: 8,
    title: "MacBook Pro 16”",
    price: 2699,
    category: "Computers",
    description: "Apple MacBook Pro with M2 Pro chip aur Liquid Retina XDR display.",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    title: "Samsung Galaxy S23 Ultra",
    price: 1299,
    category: "Electronics",
    description: "Samsung ka flagship smartphone with 200MP camera aur Snapdragon 8 Gen 2.",
    image: "https://images.unsplash.com/photo-1727079525588-4638ea8301e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  },
  {
    id: 10,
    title: "Bose QC45",
    price: 349,
    category: "Headphones",
    description: "Premium wireless headphones with crystal-clear audio aur ANC.",
    image: "https://images.unsplash.com/photo-1726900303530-8b74f627aa4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  },
  {
    id: 11,
    title: "Canon EOS R5",
    price: 3899,
    category: "Cameras",
    description: "Professional mirrorless camera with 45MP sensor aur 8K video recording.",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 12,
    title: "Ray-Ban Sunglasses",
    price: 180,
    category: "Accessories",
    description: "Classic Ray-Ban aviators with UV400 protection aur durable frame.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 13,
    title: "Sony PlayStation 5",
    price: 549,
    category: "Gaming",
    description: "Next-gen console with 4K gaming aur DualSense controller.",
    image: "https://images.unsplash.com/photo-1727079516633-04d51a733033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  },
  {
    id: 14,
    title: "Apple AirPods Pro",
    price: 259,
    category: "Headphones",
    description: "Wireless earbuds with Active Noise Cancellation aur MagSafe case.",
    image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?w=600&auto=format&fit=crop&q=60"
  },
  {
    id: 15,
    title: "GoPro Hero 11",
    price: 499,
    category: "Cameras",
    description: "Latest GoPro action camera with 5.3K video aur waterproof design.",
    image: "https://images.unsplash.com/photo-1727079516633-04d51a733033?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE2JTIwcHJvJTIwbWF4fGVufDB8fDB8fHww"
  }
];

export default products;
