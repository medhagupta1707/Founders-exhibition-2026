// Reference copy only. The live site reads the data in index.html.

// ============================================================
// EDITABLE STALL DATA — EDIT THIS SECTION ONLY
// 10 stalls × 10 sub-stalls per stall
// Main photos: images/stalls/stall-1.jpg ... stall-10.jpg
// Sub-stall photos: images/subcategories/stall-1/substall-1.jpg etc.
// Keep the image filenames and folder names exactly as written.
// ============================================================
const stalls = [
  {
    imageFolder: "stall-1",
    name: "Home Science",
    stallImage: "stall-1.jpg",
    venue: "Near Home Science Lab",
    category: "Creative Expressions",
    owner: "Ms. Shweta Choudhary",
    desc: "Handcrafted home décor items and dupattas",
    subs: [
      {
        name: "Block-Printed Dupattas",
        image: "substall-1.jpg", 
        incharge: "",
        desc: " The following students’ artworks are on display: Rishika Jalan (XI B), Naisha Mittal (XI B), Pragya Rai (XI B), Tanisi Agrawal (XI C), Aashi Goenka (XI C), Raisha Jaiswal (XI B), Anwesha Gupta (XI B), Saakhi Grover (XII B), Saanvi Jaiswal (XI B), Shivi Singh (XI B)"
      },
      {
        name: "Cushion Covers and Centre Runners – Block and Screen Printing",
        image: "substall-2.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display:  Block Printed Centre Runners - Arushi Agrawal (XI B), Rishika Jalan (XI B), Satakashi Matanhelia (XII B) | Block Printed Cushion Covers - Rinisha Agrawal (XI B), Mishika Agrawal (XII B), Paridhi Agrawal (XI B) | Screen Printed T-shirts - Pragya Rai (XI B), Sirat Bajwa (XI B), Rishika Jalan (XI B) | Screen Printed Tote Bags - Naisha Mittal (XI B), Saanvi Jaiswal (XI B), Pragya Rai (XI B), Rishika Jalan (XI B), Sirat Bajwa (XI B)"
      },
      {
        name: "T-shirts and Tote Bags",
        image: "substall-3.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display:Tie-Dyed Cushion Covers - Samriddhi Agrawal (XII B), Aanya Pillai (XII B), Niharika Bose (XII B), Dewangi Nahata (XII B), Suhani Bansal (XII B), Anushka Thakur (XII B) | "
      },
      
      {
        name: "Crochet Flowers and Mats",
        image: "substall-5.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Roshni Tola (XI C), Nitya Singh (X), Paloma Aaysha Rai (VIII), Logima Limboo (VII), Nunam Limboo (VII), Himadari (VII), Christina Koiram (X)"
      },
     
      {
        name: "Table Mats – Kasuti and Architectural Embroidery",
        image: "substall-9.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Shyla Tulsyan (X), Tashi Patel (X), Saanvi Shaw (XI B), Kavya (VIII), Aradhaya Mittal (VIII)"
      }
    ]
  },
  {
    imageFolder: "stall-2",
    name: "Paintings and Artwork",
    stallImage: "stall-2.jpg",
    venue: "Inner Courtyard",
    category: "Creative Expressions",
    owner: "Ms. Kalpana Sharma",
    desc: "Painting themes: Unity in Diversity, Space Travel, and Peaceful Coexistence with Nature",
    subs: [
      {
        name: "Acrylic on Canvas",
        image: "substall-1.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Khushi Anand (X), Kashika Waikhom (IX), Yashi Mittal (X), Ananya Raj (VII), Ishani Agarwal (VIII), Aarna (VIII), Debarneeta Parida (VII), Shanaya Agrawal (VI), Aanya Sanjenbam (VII), Rishika Gupta (XI)"
      },
      {
        name: "Oil on Canvas",
        image: "substall-2.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Jia Rajkumari (XI)"
      },
      {
        name: "Charcoal Paintings",
        image: "substall-3.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Nayra Amin (XI), Akriti Khediya (IX), Riddhi Agrawal (XI)"
      },
      {
        name: "Mandala Art",
        image: "substall-4.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Aisha Agrawal (XI), Mishti Gupta (XI), Naysa Kukrega (X), Mehek Modi (XI), Ahana Agarwal (VII), Kavyanshi Gupta (XI)"
      },
      {
        name: "Portraits in charcoal and acrylic",
        image: "substall-5.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Maysha Khandelwal (IX) - Florence Nightingale, Kashvi Bhardwaj (X) - Dr. Mae Jemison, Shreeya Sadhani (X) - Rosalind Franklin"
      },
      {
        name: "Glass Painting",
        image: "substall-6.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Namya Deswal (XII), Niharika Bose (XII), Advika Patidar (VII), Aanya Agrawal (VII), Zeenia (IX), Shruti Singhal (XI), Riona (XII), Dinakshi Subedi, Winni Pasari (XI), Venya Khedia (VII)"
      },
      {
        name: "Texture Art",
        image: "substall-7.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Aahana Agarwal (IX), Aradhya Agrawal (IX)"
      },
      {
        name: "Pencil Shading",
        image: "substall-8.jpg",
        incharge: "",
        desc: " The following students’ artworks are on display: Pranya Tiwari (VII)"
      },
      {
        name: "Pen and Ink Artwork",
        image: "substall-9.jpg",
        incharge: "",
        desc: "The following students’ artworks are on display: Aryanshi Verma (VII), Navi Agrawal (X), Aradhya Mittal (VIII)"
      }
      
]
  },
  {
    imageFolder: "stall-3",
    name: "Organic Market",
    stallImage: "stall-3.jpg",
    venue: "Organic Farms",
    category: "Nature, Agriculture & Sustainability",
    owner: "Ms. Ancy Joseph, Ms. Meenakshi Dixit, and Ms. Ranjana Pathak",
    desc: "Go green with the SKV Organic Farm",
   subs: [
      {
        name: "Fresh Vegetables",
        image: "substall-1.jpg",
        incharge:  "Ms. Ancy Joseph ",
        desc: "Sarson ki saag: 20 bunches, ₹40/bunch | Mixed vegetables: 25 bunches, ₹40/bunch | Methi leaves: 25 bunches, ₹50/bunch | Lemon grass: 10 bunches, ₹50/bunch | Gooseberry: 5 kg, ₹60/kg | Arbi: 25 kg, ₹80/kg | Raw turmeric: 1 kg, ₹20/250 g | Purple yam: 1 kg, ₹50/kg | Spring onion: 5 bundles, ₹20/bundle | Raw tamarind: 6 packets, ₹20/packet | Betel leaves: 10 bunches, 4 leaves per bunch, ₹20/bunch"
      },
      {
        name: "Plant Saplings",
        image: "substall-2.jpg",
        incharge: "Ms. Ranjana Pathak and Ms. Pratibha Sobhani",
        desc: "Rose, betel, tulsi, and soybean saplings"
      },
      {
        name: "Pickles",
        image: "substall-3.jpg",
        incharge: "Ms. Snigdha Mendiratta",
        desc: "Amla pickle, papaya tutti frutti, and more."
      },
      {
        name: "Gulkand",
        image: "substall-4.jpg",
        incharge: "Ms. Snigdha Mendiratta",
        desc: "• Gulkand Mukhwas: A rich, fragrant mouth freshener blending fresh rose petals, digestive fennel seeds (saunf), pure honey, sugar, and natural organic essence for an enchanting flavour. Handcrafted with love by SKV students, every sun-cured spoonful transforms simple ingredients into a sweet masterpiece that refreshes after every meal.\n\n• Fresh and Punchy – Uppu Nellikai: Crunchy, tangy, and bursting with traditional flavour! This signature salted amla pickle, crafted by SKV students, combines fresh Indian gooseberries with a pinch of salt and light spices. A zesty, vitamin-C-rich delight, it adds an irresistible traditional punch to every meal."
      },
      {
        name: "Bio-Enzymes",
        image: "substall-5.jpg",
        incharge: "Ms. Vaishali Shrivastava",
        desc: "From Peel to Purpose: Turning Citrus Waste into Eco-Friendly Solutions"
      },

       {
    name: "Compost",
    image: "substall-6.jpg",
    incharge: "Ms. Meenakshi Dixit",
    desc: "From Kitchen to Garden: Creating Sustainable Solutions\n\nTransformed by SKV students, Scindia Kanya Vidyalaya’s kitchen waste and garden leaves blossom into nutrient-rich black gold! This 100% organic compost breathes vibrant life into the soil, embodying the magic of sustainability. Nourish your plants naturally with this eco-friendly masterpiece, born from dedication, campus greenery, and pure student ingenuity.\n\nStudent Participants:\nClass VIII – Divyanshi Agrrawal, Gyanvi Agrawal, Paridhi Kayal.\nClass IX – Debasneeta Parida, Sainika Agrawal, Nitya Agrawal, Shivangini Rajesh Singh, Aradhya Singh Sisodia.\nClass X – Lavanya, Vidhi Patidar, Shanaya Tikmani, Saanvi Garg."
}
      
    ]
  },
  {
    imageFolder: "stall-4",
    name: "Festive Vibes",
    stallImage: "stall-4.jpg",
    venue: "Inner Courtyard",
    category: "Creative Expressions",
    owner: "Ms. Vibha Paliwal",
    desc: "ETHEREAL GLOW — A little glow, a lot of magic",
    subs: [
      {
        name: "Ethereal Glow – Candles Crafted with Creativity",
        image: "substall-1.jpg",
        incharge: "Ms. Vibha Paliwal",
        desc: "Discover a beautiful collection of handcrafted candles, each designed to add warmth, elegance and charm to every space. The collection features playful Bubble Candles, graceful Lotus Candles, delightful Cake Candles, festive Modak Candles, artistic Gel Wax Glass Candles and elegant Glass Candles. Blending creativity with craftsmanship, these unique candles make wonderful decorative accents and thoughtful gifts for every occasion."
      },
            
      {
        name: "Decorated Diyas",
        image: "substall-2.jpg",   /* stall-7 -> substall-1  */
        incharge: "Ms. Pratibha Sobhani",
        desc: "Light Up Your Life with Handmade Love — The eighth-grade students have showcased their artistic talents by creating a vibrant collection of beautifully decorated diyas. This hands-on project allowed the students to blend traditional craftsmanship with modern creative flair.  Students Names : Divyanshi ,Gyanvi Hridaya,Paloma Shambavi,Rohini"
      },
      {
        name: "Crochet Items",
        image: "substall-3.jpg",
        incharge: "Ms. Pratibha Sobhani",
        desc: "Handmade with love, woven with creativity! - The talented students of Class VIII, Kreesha, Kavya, and Dia, present a beautiful collection of handmade crochet items, including scrunchies, keychains, bags, pouches, earrings, coasters, and trinket trays. Each creation reflects their creativity, patience, and artistic skills. Explore their unique treasures, lovingly crafted with imagination and care!"
      },
      {
        name: "Trinket Trays",
        image: "substall-4.jpg",
        incharge: "Ms. Pratibha Sobhani",
        desc: "Handcrafted trinket trays by our talented students, designed to hold little treasures like jewellery and keepsakes, adding charm and creativity to everyday spaces."
      }
    ]
  },
  {
    imageFolder: "stall-5",
    name: "Reuse, Recreate & Craft: House Creations",
    stallImage: "stall-5.jpg",
    venue: "Inner Courtyard",
    category: "Creative Expressions",
    owner: "Ms. Ancy Joseph and Ms. Anjali Sharma",
   
    subs: [
     {
        name: "Upcycled Treasures from Old Uniforms",
        incharge: "Ms. Ancy Joseph and Ms. Anjli Sharma",
        image: "substall-1.jpg",
        desc: "Emoji keychains, Heart keychains, Mini pouch keychains, Medium-size pouches, Mobile pouches, Rangoli (set), Book covers, Card mini pouches, Napkin pouch, Brush pen holders, Hand bags, Organiser box, Wall hanging (flower), Minion soft toy, Skirt, Tote bag"
      },
      {
        name: "Creative Arts from Usha House ",
        incharge: "Ms. K. Rajeshwari Pandi",
        image: "substall-2.jpg",
        desc: "Crafts"
      }
    ]
  },
  {
    imageFolder: "stall-6",
    name: "Chip 'n' Cheese SKV Culinary Club",
    stallImage: "stall-6.jpg",
    venue: "",
    category: "Food & Culinary Arts",
    owner: "Ms. Abha Virat",
    desc: "Whispers of Cocoa & Much More",
    subs: [
      {
        name: "Dry Fruit Chocolate Bites",
        image: "substall-1.jpg",
        incharge: "",
        desc: ""
      },
     
    ]
  },
  {
    imageFolder: "stall-10",
    name: "Bookmarks and Greeting Cards",
    stallImage: "stall-10.jpg",
    venue: "Madhav Bhavan Inner Courtyard",
    category: "Creative Expressions",
    owner: "Ms. Moumita Singharoy",
    desc: "Bookmarks and cards",
    subs: [
      {
        name: "Bookmarks and Greeting Cards",
        image: "substall-1.jpg",
        incharge: "Ms. Moumita Singharoy",
        desc: ""
      }
    ]
  },
  {
    imageFolder: "stall-11",
    name: "Sculptures",
    stallImage: "stall-11.jpg",
    venue: "Madhav Bhavan Inner Courtyard",
    category: "Creative Expressions",
    owner: "Mr. B. Rao",
    desc: "Sculptures",
    /*subs: [
      {
        name: "Sculptures",
        image: "substall-1.jpg",
        incharge: "",
        desc: ""
      } 
    ]*/
  },
  {
    imageFolder: "stall-12",
    name: "Photo Booth",
    stallImage: "stall-12.jpg",
    venue: "Madhav Bhavan Inner Courtyard",
    category: "Experiences & School Identity",
    owner: "Ms. Geeta Kohli",
    desc: "Photobooth",
    subs: [
      {
        name: "Photo Booth",
        image: "substall-1.jpg",
        incharge: "Ms. Geeta Kohli",
        desc: ""
      }
    ]
  },
  {
    imageFolder: "stall-13",
    name: "Sankalp",
    stallImage: "stall-13.jpg",
    venue: "Madhav Bhavan Inner Courtyard",
    category: "Nature, Agriculture & Sustainability",
    owner: "Ms. Caroline Shahji and Ms. Avani Singh",
    desc: "Sankalp",
    subs: [
      {
        name: "Sankalp",
        image: "substall-1.jpg",
        incharge: "",
        desc: ""
      }
    ]
  },
  {
    imageFolder: "stall-14",
    name: "SKV Merchandise",
    stallImage: "stall-14.jpg",
    venue: "Madhav Bhavan Inner Courtyard",
    category: "Experiences & School Identity",
    owner: "Ms. Santosh Kumar and Mr. Arun Dixit",
    desc: "SKV Merchandise",
    subs: [
      {
        name: "SKV Merchandise",
        image: "substall-1.jpg",
        incharge: "",
        desc: ""
      }
    ]
  },
 
  {
    imageFolder: "stall-16",
    name: "Robotics Exhibition",
    stallImage: "stall-16.jpg",
    venue: "Skating Ring",
    category: "Innovation, Robotics & Science",
    owner: "Ms. Medha & Ms. Nidhi Sharma",
    desc: "Innovative projects",
    subs: [
      {
        name: "Sanrakshak Agribot",
        image: "substall-1.jpg",
        incharge: "",
        desc: "An intelligent agricultural robot designed to monitor soil conditions and support efficient farming. It helps farmers improve crop health and optimise water usage."
      },
      {
        name: "Sanjeevani Battle Shield",
        image: "substall-2.jpg",
        incharge: "",
        desc: "An AI-based intelligent defence and emergency response system designed to assist soldiers in hazardous situations. It aims to improve battlefield safety and support timely emergency assistance."
      },
      {
        name: "FestiGuard",
        image: "substall-3.jpg",
        incharge: "",
        desc: "A smart safety and crowd-monitoring system designed to improve security during festivals and public gatherings. It helps identify potential risks and supports faster emergency response."
      },
      {
        name: "Forest Surveillance Using Drones",
        image: "substall-4.jpg",
        incharge: "",
        desc: "A drone-based surveillance system designed to monitor forests, detect potential fire risks, and identify suspicious activities. It helps capture aerial images and supports forest protection."
      },
      {
        name: "Digital Weight Monitoring System",
        image: "substall-5.jpg",
        incharge: "",
        desc: "A smart weighing system that measures and displays a person's weight digitally. It can record readings over time to help monitor weight changes."
      },
      {
        name: "Emergency Black Box",
        image: "substall-6.jpg",
        incharge: "",
        desc: "A safety device designed to record important information during emergencies or accidents. It can help preserve critical data for later investigation and analysis."
      },
      {
        name: "Smart Noise Monitoring System",
        image: "substall-7.jpg",
        incharge: "",
        desc: "A smart noise-monitoring system that measures surrounding sound levels and identifies excessive noise. It can provide alerts when noise exceeds a predefined limit."
      },
      {
        name: "Smart Screen Time Management App",
        image: "substall-8.jpg",
        incharge: "",
        desc: "An application designed to monitor device usage and screen time. It helps users track their digital habits and encourages healthier screen-time management."
      }
    ]
  },
  {
    imageFolder: "stall-17",
    name: "Science Exhibition",
    stallImage: "stall-17.jpg",
    venue: "Skating Ring",
    category: "Innovation, Robotics & Science",
    owner: "Science Department",
    desc: "Innovative projects",
    subs: [
      {
        name: "Physics",
        image: "substall-1.jpg",
        incharge: "",
        desc: ""
      },
      {
        name: "Chemistry",
        image: "substall-2.jpg",
        incharge: "",
        desc: ""
      },
      {
        name: "Biology",
        image: "substall-3.jpg",
        incharge: "",
        desc: ""
      }
    ]
  },
{
  imageFolder: "stall-18",
  name: "Aaranya",
  stallImage: "stall-18.jpg",
  venue: "Inner Courtyard",
  category: "Exhibition Stall",
  owner: ".",
  desc: "Aaranya is a celebration of Madhya Pradesh's rich craft and cultural heritage, where traditional artistry meets contemporary design. Every piece we offer is handmade, reflecting the skill and passion of artisans who have passed down their craft through generations. At Aaranya, we create bespoke luxury that honors Indian traditions while embracing modern aesthetics, bringing Madhya Pradesh’s timeless stories into your everyday life, and beginning your own journey of patronage…",

  subs: [
    {
      name: "Item-1",
      image: "substall-1.jpg",
      desc: ""
    },
    {
      name: "Item-2",
      image: "substall-2.jpg",
      incharge: "",
      desc: "Introducing Wild Cats — a contemporary loungewear collection featuring printed satin silk angarakha shirts and kaftans, elevated with delicate sequin embellishments.\n\nDesigned to move effortlessly between comfort and statement dressing, each silhouette captures the fluidity of silk and the untamed spirit of the wild.\n\nFeel the breeze. Embrace the wild. Let heritage speak in a new design language.\n\nWild Cats by Aaranya — where untamed nature meets contemporary luxury."
    },
    {
      name: "Item-3",
      image: "substall-3.jpg",
      incharge: "",
      desc: "A celebration of Maratha heritage and Indian craftsmanship, the MT-2 Tiger Angarakha is crafted from handwoven Chanderi silk tissue, enriched with intricate hand-embroidered zardozi and the signature Asharfi motifs woven directly into the fabric.\n\nHandcrafted at the Aaranya Atelier, this ceremonial masterpiece brings together the luminous elegance of Chanderi and the regal artistry of traditional embroidery, elevating the Maratha silhouette into a statement of timeless grandeur.\n\nA testament to exceptional craftsmanship, each piece represents 300 hours of dedicated artistry by eight master artisans.\n\nMore than ceremonial attire, it is a legacy of heritage, painstakingly brought to life, stitch by stitch.\n\nHandcrafted at Aaranya Atelier. Woven in heritage. Embroidered in gold. Made to be remembered."
    },
    {
      name: "Item-4",
      image: "substall-4.jpg",
      incharge: "",
      desc: "Introducing Wild Cats — a contemporary loungewear collection featuring printed satin silk angarakha shirts and kaftans, elevated with delicate sequin embellishments.\n\nDesigned to move effortlessly between comfort and statement dressing, each silhouette captures the fluidity of silk and the untamed spirit of the wild.\n\nFeel the breeze. Embrace the wild. Let heritage speak in a new design language.\n\nWild Cats by Aaranya — where untamed nature meets contemporary luxury."
    },
    {
      name: "Item-5",
      image: "substall-5.jpg",
      incharge: "",
      desc: "SHER BAGH | A REVERSIBLE HEIRLOOM\n\nTwo rare printing traditions. One statement of timeless luxury.\n\nHandcrafted at the Aaranya Atelier, the Sher Bagh Reversible Jacket is a celebration of India’s extraordinary textile heritage, reimagined for the discerning connoisseur.\n\nOne side showcases the intricate beauty of hand-printed Ujjain Batik on PadmaDoree fabric; turn it inside out to reveal the distinctive Bagh prints of Dhar. Each side tells a different story, bringing together two celebrated printing traditions in a single, thoughtfully crafted silhouette.\n\nMore than a jacket, Sher Bagh is a collector’s piece—a meeting of artisanal mastery, cultural legacy, and contemporary luxury, made to be worn two ways and treasured for years."
    }
  ]
}
       
 
    ]
  }
];

