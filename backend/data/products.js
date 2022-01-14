const products = [
  {
    name: "PlayStation 5",
    imageUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    description:
      "PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. ",
    price: 500,
    countInStock: 16,
  },
  {
    name: "Apple Iphone 12",
    imageUrl:
      "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/iphone12-gorseli-110625_large.jpg",
    description:
      "The iPhone 12 and iPhone 12 mini are part of Apple's 2020 generation of smartphones, offering OLED displays, 5G connectivity, an A14 chip, improved cameras, and MagSafe, all in a squared-off design.",
    price: 1100,
    countInStock: 15,
  },
  {
    name: "HyperX Cloud Flight Wireless",
    imageUrl:
      "https://www.soundguys.com/wp-content/uploads/2021/11/HyperX-Cloud-Flight-Wireless-stand-shot-1024x576.jpg",
    description:
      "There's not a lot to it, but the HyperX Cloud Flight Wireless hits a nice balance between well-executed fundamentals and price. If you want something simple that works in one way or another pretty much everywhere, this could be the one for you.",
    price: 120,
    countInStock: 8,
  },
  {
    name: "LG 27GN950-B",
    imageUrl: "https://mcdn01.gittigidiyor.net/63631/636312133_2.jpg",
    description:
      "The pinnacle of desktop PC monitor resolution is 4K (3840 x 2160 pixels), at least for now and the foreseeable future. Even at 32 inches diagonal, screen density is enough to hide any trace of the image’s pixel structure. A 27-inch 4K monitor sports a highly-packed 163 pixels per inch, and that means you can sit super close and never see the dots.",
    price: 800,
    countInStock: 30,
  },
  {
    name: "Asus ROG Strix GS-AX5400",
    imageUrl:
      "https://i.pcmag.com/imagery/reviews/06OgPGoOx7nvGVK6BGvRThv-5.fit_scale.size_1028x578.v1638993428.png",
    description:
      "The Asus ROG Strix GS-AX5400 is a well-equipped Wi-Fi 6 router that delivers speedy throughput and comes with lots of features designed to enhance your online gaming experience.",
    price: 260,
    countInStock: 13,
  },
  {
    name: "Logitech G903 LIGHTSPEED",
    imageUrl:
      "https://i.rtings.com/assets/products/k0yzRxSz/logitech-g903-lightspeed/design-medium.jpg",
    description:
      "The Logitech G903 LIGHTSPEED is a great gaming mouse. It has excellent build quality and great ergonomics. It's suitable for use with either hand and you can use any grip you prefer.",
    price: 80,
    countInStock: 25,
  },
  {
    name: "Apple Airpods 3rd Generation",
    imageUrl:
      "https://www.apple.com/v/airpods-3rd-generation/b/images/overview/value-props/battery_startframe__1ruivb5dm4ie_large.jpg",
    description:
      "AirPods deliver the wireless headphone experience, reimagined. Just pull them out of the charging case and they are ready to use with your iPhone, Apple Watch, iPad, or Mac.",
    price: 170,
    countInStock: 20,
  },

  {
    name: "Apple Watch Series 7",
    imageUrl: "https://m.media-amazon.com/images/I/71GIYSZpW+L._SL1500_.jpg",
    description:
      "The larger display enhances the entire experience, making Apple Watch easier to use and read. Series 7 represents our biggest and brightest thinking yet.",
    price: 500,
    countInStock: 30,
  },
  {
    name: "Xbox Series X",
    imageUrl:
      "https://compass-ssl.xbox.com/assets/89/98/89983f15-baaf-4561-b3f4-1e9a92280f0c.jpg?n=XBX_A-CompeleteControl_Background-D_02.jpg",
    description:
      "The Xbox Series X and the Xbox Series S (collectively, the Xbox Series X/S[b]) are home video game consoles developed by Microsoft. They were both released on November 10, 2020, as the fourth generation of the Xbox console family, succeeding the Xbox One family. Along with Sony's PlayStation 5, also released in November 2020, the Xbox Series X and Series S are part of the ninth generation of video game consoles.",
    price: 500,
    countInStock: 40,
  },
  {
    name: "Samsung Galaxy Z Fold3",
    imageUrl:
      "https://www.notebookcheck.com/typo3temp/_processed_/a/0/csm_4_to_3_Teaser_Samung_Galaxy_Z_Fold3_5G_e224841317.jpg",
    description:
      "This is everything you'd want in a premium, durable, 5G smartphone. Then we made it unfold — revealing a massive screen so you can watch, work and play like never before.",
    price: 500,
    countInStock: 70,
  },
  {
    name: "MacBook Pro",
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1632948875000",
    description:
      "The MacBook Pro is a line of Macintosh notebook computers introduced in January 2006 by Apple Inc. It is the higher-end model of the MacBook family, sitting above the consumer-focused MacBook Air, and is currently sold with 13-inch, 14-inch, and 16-inch screens. All current models of the MacBook Pro use variants of the Apple-designed M1 system on a chip.",
    price: 1000,
    countInStock: 25,
  },
  {
    name: "Apple 10.2 iPad 8th Generation ",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/IPad_10.2%E2%80%91inch.png/800px-IPad_10.2%E2%80%91inch.png",
    description:
      "The iPad 10.2-inch (officially iPad (8th generation)) is a tablet computer developed and marketed by Apple Inc. as the successor to the 7th-generation iPad. It was announced on September 15, 2020 and released on September 18, 2020.",
    price: 350,
    countInStock: 35,
  },
  {
    name: "JBL - XTREME3 Portable Bluetooth Speaker",
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6445/6445548_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      " Unleash powerful sound everywhere. Poolside. Picnics. Just hanging out. Music makes the party. The JBL Xtreme 3 portable Bluetooth speaker effortlessly delivers massive JBL Original Pro Sound. With four drivers and two pumping JBL Bass Radiators, the powerful sound draws everybody in, and with PartyBoost, you can connect multiple JBL PartyBoost-enabled speakers to take things to the next level. A little rain might spoil your fun, but the waterproof and dustproof Xtreme 3 won’t mind at all, and the convenient carrying strap with built-in bottle opener makes it a breeze to move the party indoors. The JBL Xtreme 3 makes a big splash wherever you go.",
    price: 380,
    countInStock: 45,
  },
  {
    name: "ASUS-S501MD",
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/ac709e89-8fca-4cf5-b63b-f0426714078b/",
    description:
      "ASUS S501MD makes light work of all your tasks, with a cutting-edge 12th Gen Intel® Core™ processor that delivers enough power for efficient work and optional professional-grade graphics cards to handle demanding intensive-graphic tasks. Up to three displays can be used simultaneously without adding an extra graphics card. Paired with up to 64 GB DDR4-3200 memory, you’ll enjoy lag-free multitasking when running all your applications and files.",
    price: 1500,
    countInStock: 4,
  },
  {
    name: "Seagate 1TB External Solid State Drive",
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6462/6462276_rd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Accelerate your performance and score some downtime with One Touch SSD. With speeds up to 1030MB/s to transfer large files without delay, an Android app to backup photos and videos—freeing up device space, plus up to 2TB capacity and simple plug-n-play USB-C Windows and Mac compatibility to keep files handy. Travel-sized and styled right, work seamlessly from the drive—wherever you are.",
    price: 1500,
    countInStock: 4,
  },
  {
    name: "ASUS H1 LED Projector",
    imageUrl:
      "https://dlcdnwebimgs.asus.com/gain/13305240-2623-463f-9f39-6a9b3bc18ef6/w692",
    description:
      "With 3000-lumen light output and 125% Rec. 709 and sRGB wide color gamut, ASUS H1 projects bright and crisp imagery at Full HD (1920 x 1080) resolution. A mercury-free RGB LED light source ensures gorgeous, fade-free projections for up to 30,000 hours – which amounts to around 20 years of real-world use, at an average of 4 hours per day. Just fire up H1 to be drawn into immersive adventures from the comfort of your home.",
    price: 1100,
    countInStock: 22,
  },
  {
    name: "Epson EcoTank Pro ET-5850",
    imageUrl:
      "https://i.pcmag.com/imagery/reviews/00cEBzEwT5mjSNs0KUZ1BBy-7.fit_scale.size_1028x578.v1587391657.jpg",
    description:
      "The Epson EcoTank Pro ET-5850 AIO prints well and inexpensively, and it offers generous input capacity, lofty volume ratings, and two years of unlimited free ink. It's an incomparable value for small businesses and workgroups.",
    price: 850,
    countInStock: 11,
  },
  {
    name: "Nikon Z6 II",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/sFv8zKYbB5Jou8T4XscpL6-1200-80.jpg.webp",
    description:
      "Nikon has taken one of our favorite mirrorless cameras and addressed its main weaknesses. While it might not be class-leading in key areas, it’s the Z6 II’s strong performance across the board that makes it such a compelling choice.",
    price: 2000,
    countInStock: 13,
  },
  {
    name: "LG LMV2031ST Microwave ",
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/3544/3544029_sd.jpg;maxHeight=640;maxWidth=550",
    description:
      "Prepare food quickly in this LG LMV2031ST 2.0 cu. ft. over-the-range microwave, which features 8 sensor-cook options that help ensure evenly heated results. The EasyClean interior resists stains and buildup and easily wipes clean.",
    price: 370,
    countInStock: 19,
  },
  {
    name: "Intel - Core i9-11900K 11th Generation ",
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6452/6452222cv11d.jpg;maxHeight=640;maxWidth=550",
    description:
      "11th Gen Intel® Core™ i9-11900K unlocked desktop processor. Featuring Intel® Turbo Boost Max Technology 3.0 and PCIe Gen 4.0 support, unlocked 11th Gen Intel® Core™ desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost. Thermal solution NOT included in the box. Compatible with 500 series & select 400 series chipset based motherboards. Refer to motherboard vendor for compatiblity details. 125W.",
    price: 550,
    countInStock: 6,
  },
];

module.exports = products;
