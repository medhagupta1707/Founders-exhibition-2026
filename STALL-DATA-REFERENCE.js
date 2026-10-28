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
    // STALL 1
    name: "stall-1",
    stallImage: "stall-1.jpg", // IMAGE: images/stalls/stall-1.jpg
    venue: "Venue for stall-1", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-1", // EDIT: enter the in-charge name
    desc: "Description for stall-1. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 1
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-1/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-1. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 1
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-1/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-1. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 1
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-1/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-1. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 1
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-1/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-1. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 1
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-1/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-1. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 1
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-1/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-1. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 1
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-1/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-1. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 1
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-1/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-1. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 1
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-1/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-1. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 1
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-1/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-1. Replace with item details or price."
      }
    ]
  },
  {
    // STALL 2
    name: "stall-2",
    stallImage: "stall-2.jpg", // IMAGE: images/stalls/stall-2.jpg
    venue: "Venue for stall-2", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-2", // EDIT: enter the in-charge name
    desc: "Description for stall-2. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 2
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-2/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-2. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 2
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-2/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-2. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 2
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-2/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-2. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 2
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-2/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-2. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 2
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-2/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-2. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 2
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-2/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-2. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 2
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-2/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-2. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 2
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-2/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-2. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 2
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-2/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-2. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 2
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-2/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-2. Replace with item details or price."
      }
    ]
  },
  {
    // STALL 3
    name: "stall-3",
    stallImage: "stall-3.jpg", // IMAGE: images/stalls/stall-3.jpg
    venue: "Venue for stall-3", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-3", // EDIT: enter the in-charge name
    desc: "Description for stall-3. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 3
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-3/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-3. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 3
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-3/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-3. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 3
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-3/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-3. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 3
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-3/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-3. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 3
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-3/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-3. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 3
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-3/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-3. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 3
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-3/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-3. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 3
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-3/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-3. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 3
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-3/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-3. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 3
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-3/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-3. Replace with item details or price."
      }
    ]
  },
  {
    // STALL 4
    name: "stall-4",
    stallImage: "stall-4.jpg", // IMAGE: images/stalls/stall-4.jpg
    venue: "Venue for stall-4", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-4", // EDIT: enter the in-charge name
    desc: "Description for stall-4. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 4
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-4/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-4. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 4
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-4/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-4. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 4
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-4/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-4. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 4
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-4/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-4. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 4
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-4/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-4. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 4
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-4/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-4. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 4
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-4/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-4. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 4
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-4/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-4. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 4
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-4/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-4. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 4
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-4/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-4. Replace with item details or price."
      }
    ]
  },
  {
    // STALL 5
    name: "stall-5",
    stallImage: "stall-5.jpg", // IMAGE: images/stalls/stall-5.jpg
    venue: "Venue for stall-5", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-5", // EDIT: enter the in-charge name
    desc: "Description for stall-5. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 5
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-5/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-5. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 5
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-5/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-5. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 5
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-5/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-5. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 5
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-5/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-5. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 5
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-5/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-5. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 5
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-5/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-5. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 5
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-5/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-5. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 5
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-5/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-5. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 5
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-5/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-5. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 5
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-5/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-5. Replace with item details or price."
      }
    ]
  },
  {
    // STALL 6
    name: "stall-6",
    stallImage: "stall-6.jpg", // IMAGE: images/stalls/stall-6.jpg
    venue: "Venue for stall-6", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-6", // EDIT: enter the in-charge name
    desc: "Description for stall-6. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 6
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-6/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-6. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 6
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-6/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-6. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 6
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-6/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-6. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 6
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-6/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-6. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 6
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-6/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-6. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 6
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-6/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-6. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 6
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-6/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-6. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 6
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-6/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-6. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 6
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-6/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-6. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 6
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-6/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-6. Replace with item details or price."
      }
    ]
  },
  {
    // STALL 7
    name: "stall-7",
    stallImage: "stall-7.jpg", // IMAGE: images/stalls/stall-7.jpg
    venue: "Venue for stall-7", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-7", // EDIT: enter the in-charge name
    desc: "Description for stall-7. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 7
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-7/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-7. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 7
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-7/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-7. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 7
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-7/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-7. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 7
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-7/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-7. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 7
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-7/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-7. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 7
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-7/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-7. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 7
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-7/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-7. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 7
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-7/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-7. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 7
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-7/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-7. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 7
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-7/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-7. Replace with item details or price."
      }
    ]
  },
  {
    // STALL 8
    name: "stall-8",
    stallImage: "stall-8.jpg", // IMAGE: images/stalls/stall-8.jpg
    venue: "Venue for stall-8", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-8", // EDIT: enter the in-charge name
    desc: "Description for stall-8. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 8
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-8/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-8. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 8
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-8/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-8. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 8
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-8/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-8. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 8
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-8/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-8. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 8
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-8/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-8. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 8
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-8/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-8. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 8
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-8/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-8. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 8
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-8/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-8. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 8
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-8/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-8. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 8
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-8/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-8. Replace with item details or price."
      }
    ]
  },
  {
    // STALL 9
    name: "stall-9",
    stallImage: "stall-9.jpg", // IMAGE: images/stalls/stall-9.jpg
    venue: "Venue for stall-9", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-9", // EDIT: enter the in-charge name
    desc: "Description for stall-9. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 9
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-9/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-9. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 9
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-9/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-9. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 9
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-9/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-9. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 9
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-9/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-9. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 9
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-9/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-9. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 9
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-9/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-9. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 9
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-9/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-9. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 9
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-9/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-9. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 9
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-9/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-9. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 9
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-9/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-9. Replace with item details or price."
      }
    ]
  },
  {
    // STALL 10
    name: "stall-10",
    stallImage: "stall-10.jpg", // IMAGE: images/stalls/stall-10.jpg
    venue: "Venue for stall-10", // EDIT: enter the actual venue
    category: "Exhibition Stalls",
    emoji: "🏷️",
    owner: "In-charge of stall-10", // EDIT: enter the in-charge name
    desc: "Description for stall-10. Replace this with the stall description.",
    subs: [
      {
        // SUBSTALL 1 OF STALL 10
        name: "substall-1",
        image: "substall-1.jpg", // IMAGE: images/subcategories/stall-10/substall-1.jpg
        emoji: "🖼️",
        desc: "Description for substall-1 of stall-10. Replace with item details or price."
      },
      {
        // SUBSTALL 2 OF STALL 10
        name: "substall-2",
        image: "substall-2.jpg", // IMAGE: images/subcategories/stall-10/substall-2.jpg
        emoji: "🖼️",
        desc: "Description for substall-2 of stall-10. Replace with item details or price."
      },
      {
        // SUBSTALL 3 OF STALL 10
        name: "substall-3",
        image: "substall-3.jpg", // IMAGE: images/subcategories/stall-10/substall-3.jpg
        emoji: "🖼️",
        desc: "Description for substall-3 of stall-10. Replace with item details or price."
      },
      {
        // SUBSTALL 4 OF STALL 10
        name: "substall-4",
        image: "substall-4.jpg", // IMAGE: images/subcategories/stall-10/substall-4.jpg
        emoji: "🖼️",
        desc: "Description for substall-4 of stall-10. Replace with item details or price."
      },
      {
        // SUBSTALL 5 OF STALL 10
        name: "substall-5",
        image: "substall-5.jpg", // IMAGE: images/subcategories/stall-10/substall-5.jpg
        emoji: "🖼️",
        desc: "Description for substall-5 of stall-10. Replace with item details or price."
      },
      {
        // SUBSTALL 6 OF STALL 10
        name: "substall-6",
        image: "substall-6.jpg", // IMAGE: images/subcategories/stall-10/substall-6.jpg
        emoji: "🖼️",
        desc: "Description for substall-6 of stall-10. Replace with item details or price."
      },
      {
        // SUBSTALL 7 OF STALL 10
        name: "substall-7",
        image: "substall-7.jpg", // IMAGE: images/subcategories/stall-10/substall-7.jpg
        emoji: "🖼️",
        desc: "Description for substall-7 of stall-10. Replace with item details or price."
      },
      {
        // SUBSTALL 8 OF STALL 10
        name: "substall-8",
        image: "substall-8.jpg", // IMAGE: images/subcategories/stall-10/substall-8.jpg
        emoji: "🖼️",
        desc: "Description for substall-8 of stall-10. Replace with item details or price."
      },
      {
        // SUBSTALL 9 OF STALL 10
        name: "substall-9",
        image: "substall-9.jpg", // IMAGE: images/subcategories/stall-10/substall-9.jpg
        emoji: "🖼️",
        desc: "Description for substall-9 of stall-10. Replace with item details or price."
      },
      {
        // SUBSTALL 10 OF STALL 10
        name: "substall-10",
        image: "substall-10.jpg", // IMAGE: images/subcategories/stall-10/substall-10.jpg
        emoji: "🖼️",
        desc: "Description for substall-10 of stall-10. Replace with item details or price."
      }
    ]
  }
];

