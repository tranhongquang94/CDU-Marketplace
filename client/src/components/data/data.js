import { GrFacebook, GrTwitter, GrInstagram, GrYoutube } from "react-icons/gr";

export const data = {
  navbar: {
    mainMenu: ["Cars", "Jobs", "Accomodation"],
    dropdown: ["Electronics", "Books", "Events"],
  },
  hero: {
    image: {
      homepage: {
        max_width_500:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_face,h_200,w_500/v1618818256/CDU%20Markeyplace-%20EMG609/hero_sjaepe.webp",
        max_width_768:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_face,h_300,w_768/v1618818256/CDU%20Markeyplace-%20EMG609/hero_sjaepe.webp",
        max_width_1050:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_face,h_300,w_1050/v1618818256/CDU%20Markeyplace-%20EMG609/hero_sjaepe.webp",
        max_width_1450:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_faces,w_1500/v1618818256/CDU%20Markeyplace-%20EMG609/hero_sjaepe.webp",
        fallback:
          "https://res.cloudinary.com/dixd5lojp/image/upload/v1618818256/CDU%20Markeyplace-%20EMG609/hero_sjaepe.webp",
      },
      cars: {
        max_width_500:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_face,h_200,w_500/v1623326739/CDU%20Markeyplace-%20EMG609/pexels-quintin-gellar-612888_fci6tz.webp",
        max_width_768:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_face,h_300,w_768/v1623326739/CDU%20Markeyplace-%20EMG609/pexels-quintin-gellar-612888_fci6tz.webp",
        max_width_1050:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_face,h_300,w_1050/v1623326739/CDU%20Markeyplace-%20EMG609/pexels-quintin-gellar-612888_fci6tz.webp",
        max_width_1450:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_faces,w_1500/v1623326739/CDU%20Markeyplace-%20EMG609/pexels-quintin-gellar-612888_fci6tz.webp",
        fallback:
          "https://res.cloudinary.com/dixd5lojp/image/upload/v1623326739/CDU%20Markeyplace-%20EMG609/pexels-quintin-gellar-612888_fci6tz.webp",
      },
      jobs: {
        max_width_500:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_face,h_200,w_500/v1624244663/CDU%20Markeyplace-%20EMG609/pexels-karolina-grabowska-5882683_ta7v73.webp",
        max_width_768:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_face,h_300,w_768/v1624244663/CDU%20Markeyplace-%20EMG609/pexels-karolina-grabowska-5882683_ta7v73.webp",
        max_width_1050:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_face,h_300,w_1050/v1624244663/CDU%20Markeyplace-%20EMG609/pexels-karolina-grabowska-5882683_ta7v73.webp",
        max_width_1450:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_faces,w_1500/v1624244663/CDU%20Markeyplace-%20EMG609/pexels-karolina-grabowska-5882683_ta7v73.webp",
        fallback:
          "https://res.cloudinary.com/dixd5lojp/image/upload/v1624244663/CDU%20Markeyplace-%20EMG609/pexels-karolina-grabowska-5882683_ta7v73.webp",
      },
      accomodation: {
        max_width_500: "",
        max_width_768: "",
        max_width_1050: "",
        max_width_1450: "",
        fallback:
          "https://res.cloudinary.com/dixd5lojp/image/upload/c_crop,g_center,h_300,w_1920/v1633575454/CDU%20Markeyplace-%20EMG609/accomodation_living_room_xyfy19.webp",
      },
    },
  },
  footer: {
    sitemap: ["Cars", "Jobs", "Accomodation"],
    otherStores: [
      {
        link: "ebay.com.au",
        name: "eBay",
      },
      {
        link: "amazon.com.au",
        name: "Amazon",
      },
      {
        link: "gumtree.com.au",
        name: "Gumtree",
      },
    ],
    socials: [
      {
        link: "facebook.com",
        icon: <GrFacebook />,
        name: "Facebook",
      },
      {
        link: "twitter.com",
        icon: <GrTwitter />,
        name: "Twitter",
      },
      {
        link: "instagram.com",
        icon: <GrInstagram />,
        name: "Instagram",
      },
      {
        link: "youtube.com",
        icon: <GrYoutube />,
        name: "Youtube",
      },
    ],
  },
  featureCategories: [
    {
      name: "cars",
    },
    {
      name: "jobs"
    }
  ],
  brand: [
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_limit,h_150,w_150/v1623559414/CDU%20Markeyplace-%20EMG609/brand/500px-Mitsubishi_logo.svg_shczfs.webp",
      name: "Mitsubishi",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623558766/CDU%20Markeyplace-%20EMG609/brand/6617eeff776ece3c61310df57685fb4a_amdm2z.webp",
      name: "Toyota",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623559716/CDU%20Markeyplace-%20EMG609/brand/Honda-Emblem_xx4kix.webp",
      name: "Honda",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623559794/CDU%20Markeyplace-%20EMG609/brand/2378px-Nissan-logo.svg_asaqax.webp",
      name: "Nissan",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623559852/CDU%20Markeyplace-%20EMG609/brand/Mazda-logo_nexaiq.webp",
      name: "Mazda",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623559914/CDU%20Markeyplace-%20EMG609/brand/2016-new-Holden-badge-logo-design_xyt15v.webp",
      name: "Holden",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,w_150/v1623559985/CDU%20Markeyplace-%20EMG609/brand/c4caa7f7e9222a0ae745117f3be017c3_vhqrgq.webp",
      name: "Volkswagen",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623560038/CDU%20Markeyplace-%20EMG609/brand/Audi-logo_obhu3q.webp",
      name: "Audi",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623560103/CDU%20Markeyplace-%20EMG609/brand/1200px-BMW.svg_qx9kxy.webp",
      name: "BMW",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623560155/CDU%20Markeyplace-%20EMG609/brand/Mercedes-Benz-Logo_magngq.webp",
      name: "Mercedes",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623560214/CDU%20Markeyplace-%20EMG609/brand/ford-logo-2003_gshqhk.webp",
      name: "Ford",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/c_fit,h_150,w_150/v1623560359/CDU%20Markeyplace-%20EMG609/brand/Hyundai-logo_qseijy.webp",
      name: "Huyndai",
    },
  ],
  vehicleTypes: [
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/v1623563023/CDU%20Markeyplace-%20EMG609/vehicletypes/sedan_hcwrdf.webp",
      name: "Sedan",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/v1623563007/CDU%20Markeyplace-%20EMG609/vehicletypes/hatchback_ieu2xv.webp",
      name: "Hatchback",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/v1623563039/CDU%20Markeyplace-%20EMG609/vehicletypes/suv_omazdo.webp",
      name: "SUV",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/v1623562990/CDU%20Markeyplace-%20EMG609/vehicletypes/coupe_zlkt5y.webp",
      name: "Coupe",
    },
    {
      logo: "https://res.cloudinary.com/dixd5lojp/image/upload/v1623562975/CDU%20Markeyplace-%20EMG609/vehicletypes/convertible_vhdkvm.webp",
      name: "Convertible",
    },
  ],
  jobsCategories: [
    "Administration",
    "Finance",
    "Information Technology",
    "Engineering",
    "Hospitality",
    "Education & Training",
    "Construction",
  ],
  featuredJobsCategories: [
    "Administration",
    "Information Technology",
    "Hospitality",
    "Engineering",
  ],
  accomodationCategories: [
    "All property types",
    "House",
    "Apartment & Unit",
    "Studio",
  ],
  carMakeAndModel: {
    Honda: ["Civic", "Accord", "CR-V"],
    Toyota: ["Corolla", "Camry", "Yaris", "Prius"],
    Holden: ["Astra", "Barina", "Cruze", "Commodores"],
    Nissan: ["GT-R", "Leaf", "Micra", "Patrol"],
    Huyndai: ["Elantra", "Sonata", "Tucson"],
    Mitsubishi: ["Lancer", "Mirage", "Outlander", "Pajero"],
    Mazda: ["CX-5", "Mazda 2", "Mazda 3", "Mazda 6", "MX-5"],
    Volkswagen: ["Golf", "Polo"],
    Audi: ["A4", "S4", "A6", "S6", "A8", "S8"],
    BMW: ["3 Series", "X5", "5 Series"],
    "Mercedes-Benz": ["C-Class", "A-Class", "G-Class", "S-Class"],
    Ford: ["Focus", "Fiesta", "Mustang", "Everest"],
  },
};
