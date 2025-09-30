const data = [
  {
    orderId: "ORD2001",
    customerName: "Rohan Malhotra",
    phoneNumber: "9876500011",
    product: "iPhone 15 Pro",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-10",
    price: 145000
  },
  {
    orderId: "ORD2002",
    customerName: "Simran Kaur",
    phoneNumber: "9123456600",
    product: "MacBook Air M2",
    payment: "Pending",
    status: "New",
    date: "2024-07-12",
    price: 98000
  },
  {
    orderId: "ORD2003",
    customerName: "Arjun Mehta",
    phoneNumber: "9988771122",
    product: "Sony WH-1000XM5",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-14",
    price: 32000
  },
  {
    orderId: "ORD2004",
    customerName: "Ishita Roy",
    phoneNumber: "9876511111",
    product: "Apple Watch Series 9",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-15",
    price: 52000
  },
  {
    orderId: "ORD2005",
    customerName: "Nikhil Sharma",
    phoneNumber: "9012341122",
    product: "Samsung Galaxy Tab S9",
    payment: "Pending",
    status: "New",
    date: "2024-07-16",
    price: 78000
  },
  {
    orderId: "ORD2006",
    customerName: "Meera Iyer",
    phoneNumber: "9823412345",
    product: "Canon EOS R10",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-18",
    price: 95000
  },
  {
    orderId: "ORD2007",
    customerName: "Siddharth Patel",
    phoneNumber: "9123400012",
    product: "HP Laser Printer",
    payment: "Pending",
    status: "Pending",
    date: "2024-07-20",
    price: 12000
  },
  {
    orderId: "ORD2008",
    customerName: "Ananya Gupta",
    phoneNumber: "9988009911",
    product: "TP-Link WiFi 6 Router",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-21",
    price: 7000
  },
  {
    orderId: "ORD2009",
    customerName: "Varun Singh",
    phoneNumber: "9001239911",
    product: "LG 27-inch 4K Monitor",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-22",
    price: 38000
  },
  {
    orderId: "ORD2010",
    customerName: "Kavya Sharma",
    phoneNumber: "9876542211",
    product: "Mechanical Keyboard",
    payment: "Pending",
    status: "Cancelled",
    date: "2024-07-23",
    price: 4500
  },
  {
    orderId: "ORD2011",
    customerName: "Rahul Khanna",
    phoneNumber: "9812300022",
    product: "Logitech MX Master 3S",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-24",
    price: 9000
  },
  {
    orderId: "ORD2012",
    customerName: "Neha Kapoor",
    phoneNumber: "9901202233",
    product: "Philips Smart Lamp",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-25",
    price: 3500
  },
  {
    orderId: "ORD2013",
    customerName: "Devansh Bansal",
    phoneNumber: "9876507788",
    product: "Fast Charger 65W",
    payment: "Pending",
    status: "New",
    date: "2024-07-26",
    price: 1800
  },
  {
    orderId: "ORD2014",
    customerName: "Shalini Agarwal",
    phoneNumber: "9123405544",
    product: "Anker Power Bank 20,000mAh",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-27",
    price: 4000
  },
  {
    orderId: "ORD2015",
    customerName: "Rohit Tiwari",
    phoneNumber: "9876500099",
    product: "JBL Party Speakers",
    payment: "Pending",
    status: "Pending",
    date: "2024-07-28",
    price: 25000
  },
  {
    orderId: "ORD2016",
    customerName: "Ayesha Desai",
    phoneNumber: "9901103344",
    product: "Blue Yeti Mic",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-29",
    price: 12000
  },
  {
    orderId: "ORD2017",
    customerName: "Karthik Verma",
    phoneNumber: "9123400001",
    product: "Seagate 2TB HDD",
    payment: "Paid",
    status: "Completed",
    date: "2024-07-30",
    price: 6000
  },
  {
    orderId: "ORD2018",
    customerName: "Ritika Singh",
    phoneNumber: "9876598765",
    product: "OnePlus USB-C Cable",
    payment: "Pending",
    status: "New",
    date: "2024-08-01",
    price: 1200
  },
  {
    orderId: "ORD2019",
    customerName: "Harsh Kumar",
    phoneNumber: "9801238822",
    product: "Samsung 1TB SSD",
    payment: "Paid",
    status: "Completed",
    date: "2024-08-02",
    price: 9500
  },
  {
    orderId: "ORD2020",
    customerName: "Pallavi Patel",
    phoneNumber: "9998886622",
    product: "NVIDIA RTX 4080",
    payment: "Pending",
    status: "New",
    date: "2024-08-03",
    price: 155000
  },
  {
    orderId: "ORD2021",
    customerName: "Vivek Rao",
    phoneNumber: "9871239900",
    product: "Ergonomic Laptop Stand",
    payment: "Paid",
    status: "Completed",
    date: "2024-08-04",
    price: 2500
  },
  {
    orderId: "ORD2022",
    customerName: "Priya Kapoor",
    phoneNumber: "9809871111",
    product: "Logitech 4K Webcam",
    payment: "Pending",
    status: "Pending",
    date: "2024-08-05",
    price: 12000
  },
  {
    orderId: "ORD2023",
    customerName: "Aman Bhat",
    phoneNumber: "9876008899",
    product: "Epson Projector",
    payment: "Paid",
    status: "Completed",
    date: "2024-08-06",
    price: 65000
  },
  {
    orderId: "ORD2024",
    customerName: "Ritika Jain",
    phoneNumber: "9123455544",
    product: "Samsung Tab Case",
    payment: "Paid",
    status: "Completed",
    date: "2024-08-07",
    price: 1500
  },
  {
    orderId: "ORD2025",
    customerName: "Sanjay Kumar",
    phoneNumber: "9876547788",
    product: "Boat Bluetooth Speaker",
    payment: "Pending",
    status: "Cancelled",
    date: "2024-08-08",
    price: 5000
  },
  {
    orderId: "ORD2026",
    customerName: "Meena Joshi",
    phoneNumber: "9123458899",
    product: "Noise Earbuds",
    payment: "Paid",
    status: "Completed",
    date: "2024-08-09",
    price: 3500
  },
  {
    orderId: "ORD2027",
    customerName: "Aditya Singh",
    phoneNumber: "9801232211",
    product: "Ray-Ban Smart Glasses",
    payment: "Paid",
    status: "Completed",
    date: "2024-08-10",
    price: 19000
  },
  {
    orderId: "ORD2028",
    customerName: "Shilpa Reddy",
    phoneNumber: "9876541199",
    product: "Fitbit Charge 6",
    payment: "Pending",
    status: "New",
    date: "2024-08-11",
    price: 12000
  },
  {
    orderId: "ORD2029",
    customerName: "Kunal Mehta",
    phoneNumber: "9123400099",
    product: "DJI Mini Drone",
    payment: "Paid",
    status: "Completed",
    date: "2024-08-12",
    price: 72000
  },
  {
    orderId: "ORD2030",
    customerName: "Neelam Joshi",
    phoneNumber: "9876543333",
    product: "Meta Quest 3 VR",
    payment: "Pending",
    status: "Pending",
    date: "2024-08-13",
    price: 45000
  }
];

export default data;
