
const attractions = [
  {
    "id": 1,
    "name": "Faisal Mosque",
    "region": "Islamabad",
    "type": "Landmark",
    "latitude": 33.7295,
    "longitude": 73.0376,
    "description": "One of the most famous landmarks and mosques in Pakistan, known for its contemporary eight-sided shell design.",
    "featured": true,
    "image":'faisal-mosque.jpg'
    

  },
  {
    "id": 2,
    "name": "Pakistan Monument",
    "region": "Islamabad",
    "type": "Monument",
    "latitude": 33.6933,
    "longitude": 73.0683,
    "description": "A national monument and heritage museum shaped like a blooming flower, representing the four provinces and three territories.",
    "featured": true,
    "image":'pak-monument.jpg'
  },
  {
    "id": 3,
    "name": "Daman-e-Koh",
    "region": "Islamabad",
    "type": "Viewpoint",
    "latitude": 33.7377,
    "longitude": 73.0560,
    "description": "A popular viewing point and hilltop garden in the middle of the Margalla Hills, offering panoramic views of Islamabad.",
    "featured": false,
    "image":'daman-e-koh.webp'
   
  },
  {
    "id": 4,
    "name": "Shah Allah Ditta Caves",
    "region": "Islamabad",
    "type": "Historical/Natural",
    "latitude": 33.7145,
    "longitude": 72.9192,
    "description": "Ancient caves situated at the foothills of the Margalla Hills, believed to be over 2,400 years old with Buddhist origins.",
    "featured": false,
    "image":'caves.jpg'
  },
  {
    "id": 5,
    "name": "Lahore Fort",
    "region": "Punjab",
    "type": "Heritage",
    "latitude": 31.5879,
    "longitude": 74.3150,
    "description": "A stunning masterpiece of Mughal architecture and a UNESCO World Heritage site located in the heart of Lahore.",
    "featured": true,
    "image":'lahore-fort.jpg'
  },
  {
    "id": 6,
    "name": "Badshahi Mosque",
    "region": "Punjab",
    "type": "Heritage",
    "latitude": 31.5880,
    "longitude": 74.3111,
    "description": "A magnificent Mughal-era mosque known for its vast courtyard, carved red sandstone, and marble domes.",
    "featured": true,
    "image":'badshahi-mosque.webp'
  },
  {
    "id": 7,
    "name": "Minar-e-Pakistan",
    "region": "Punjab",
    "type": "Monument",
    "latitude": 31.5925,
    "longitude": 74.3095,
    "description": "A towering monument built on the site where the Lahore Resolution was passed in 1940.",
    "featured": false,
    "image":'minar-e-pakistan.webp'
  },
  {
    "id": 8,
    "name": "Rohtas Fort",
    "region": "Punjab",
    "type": "Heritage",
    "latitude": 32.9733,
    "longitude": 73.5828,
    "description": "An exceptional 16th-century fortress built by Sher Shah Suri, known for its large defensive walls and monumental gates.",
    "featured": false,
    "image":'rohtas.jpg'
    
  },
  {
    "id": 9,
    "name": "Noor Mahal",
    "region": "Punjab",
    "type": "Heritage",
    "latitude": 29.3882,
    "longitude": 71.6914,
    "description": "A 19th-century palace in Bahawalpur known for its stunning neoclassical architecture and historical artifacts.",
    "featured": false,
    "image":'noor-mahal.jpg'
  },
  {
    "id": 10,
    "name": "Hiran Minar",
    "region": "Punjab",
    "type": "Historical",
    "latitude": 31.7454,
    "longitude": 73.9554,
    "description": "An early 17th-century Mughal monument complex built by Emperor Jahangir to honor his beloved pet antelope.",
    "featured": false,
    "image":'hiran-minar.jpg'
  },
  {
    "id": 11,
    "name": "Mohenjo-daro",
    "region": "Sindh",
    "type": "Archaeological",
    "latitude": 27.3292,
    "longitude": 68.1389,
    "description": "A fascinating archaeological site representing one of the largest settlements of the ancient Indus Valley Civilization.",
    "featured": true,
    "image":'mohenjo-daro.jpg'
  },
  {
    "id": 12,
    "name": "Makli Necropolis",
    "region": "Sindh",
    "type": "Heritage",
    "latitude": 24.7471,
    "longitude": 67.9009,
    "description": "One of the largest funerary sites in the world, featuring stunningly carved tombs and monuments of royals and Sufi saints.",
    "featured": false,
    "image":'makri-necropolis.webp'
  },
  {
    "id": 13,
    "name": "Ranikot Fort",
    "region": "Sindh",
    "type": "Historical",
    "latitude": 25.8897,
    "longitude": 67.9016,
    "description": "Often referred to as the 'Great Wall of Sindh', it is widely believed to be one of the world's largest forts.",
    "featured": true,
    "image":'ranikot-fort.jpg'
  },
  {
    "id": 14,
    "name": "Hingol National Park",
    "region": "Balochistan",
    "type": "Nature",
    "latitude": 25.5000,
    "longitude": 65.5000,
    "description": "Pakistan's largest national park, featuring diverse wildlife, mud volcanoes, and the famous 'Princess of Hope' rock formation.",
    "featured": true,
    "image":'hingol-national-park.jpg'
  },
  {
    "id": 15,
    "name": "Ziarat",
    "region": "Balochistan",
    "type": "Nature/Heritage",
    "latitude": 30.3800,
    "longitude": 67.7289,
    "description": "A beautiful hill station surrounded by one of the oldest and largest juniper forests in the world.",
    "featured": false,
    "image":'ziarat.jpg'
  },
  {
    "id": 16,
    "name": "Quaid-e-Azam Residency",
    "region": "Balochistan",
    "type": "Historical",
    "latitude": 30.3813,
    "longitude": 67.7262,
    "description": "A historic wooden structure in Ziarat where the founder of Pakistan, Muhammad Ali Jinnah, spent his final days.",
    "featured": true,
    "image":'quaid-e-azam-residency.jpg'
  },
  {
    "id": 17,
    "name": "Swat Valley",
    "region": "Khyber Pakhtunkhwa",
    "type": "Nature",
    "latitude": 35.2227,
    "longitude": 72.4258,
    "description": "Often called the 'Switzerland of the East', this valley is famous for its lush green landscapes and snow-capped peaks.",
    "featured": true,
    "image":'swat-valley.jpg'
  },
  {
    "id": 18,
    "name": "Kalam",
    "region": "Khyber Pakhtunkhwa",
    "type": "Nature",
    "latitude": 35.4862,
    "longitude": 72.5833,
    "description": "A serene and cool valley surrounded by majestic mountains, deep forests, and the meandering Swat River.",
    "featured": false,
    "image":'kalam.jpg'
  },
  {
    "id": 19,
    "name": "Takht-i-Bahi",
    "region": "Khyber Pakhtunkhwa",
    "type": "Archaeological",
    "latitude": 34.2750,
    "longitude": 71.9360,
    "description": "An incredibly well-preserved Indo-Parthian archaeological site of an ancient Buddhist monastery.",
    "featured": false,
    "image":'takht-i-bahi.webp'
  },
  {
    "id": 20,
    "name": "Hunza Valley",
    "region": "Gilgit-Baltistan",
    "type": "Nature",
    "latitude": 36.3167,
    "longitude": 74.6500,
    "description": "A breathtaking mountainous valley offering stunning views of towering peaks, vibrant autumn colors, and ancient forts.",
    "featured": true,
    "image":'hunza-valley.jpg'
  },
  {
    "id": 21,
    "name": "Attabad Lake",
    "region": "Gilgit-Baltistan",
    "type": "Lake",
    "latitude": 36.3314,
    "longitude": 74.8219,
    "description": "A stunning, vibrant turquoise lake formed naturally after a massive landslide in the Hunza Valley in 2010.",
    "featured": true,
    "image":'attabad-lake.jpg'
  },
  {
    "id": 22,
    "name": "Skardu",
    "region": "Gilgit-Baltistan",
    "type": "Nature",
    "latitude": 35.3013,
    "longitude": 75.6429,
    "description": "The gateway to the high peaks of the Karakoram range, known for its rugged beauty, lakes, and high-altitude cold deserts.",
    "featured": true,
    "image":'skardu.jpg'
  },
  {
    "id": 23,
    "name": "Deosai National Park",
    "region": "Gilgit-Baltistan",
    "type": "National Park",
    "latitude": 35.0347,
    "longitude": 75.4678,
    "description": "An expansive high-altitude alpine plateau famous for its rich flora, fauna, and the Himalayan brown bear.",
    "featured": true,
    "image":'deosai-national-park.jpg'
  },
  {
    "id": 24,
    "name": "Shigar Fort",
    "region": "Gilgit-Baltistan",
    "type": "Heritage",
    "latitude": 35.4242,
    "longitude": 75.7335,
    "description": "A 17th-century fort made of stone and wood that has been beautifully restored into a heritage museum and hotel.",
    "featured": false,
    "image":'shigar-fort.webp'
  },
  {
    "id": 25,
    "name": "Fairy Meadows",
    "region": "Gilgit-Baltistan",
    "type": "Nature",
    "latitude": 35.3853,
    "longitude": 74.5772,
    "description": "A breathtakingly lush green alpine pasture offering incredible, up-close views of Nanga Parbat, the 'Killer Mountain'.",
    "featured": true,
    "image":'fairy-meadows.jpg'
  },
  {
    "id": 26,
    "name": "Neelum Valley",
    "region": "Azad Kashmir",
    "type": "Nature",
    "latitude": 34.5828,
    "longitude": 73.9048,
    "description": "A spectacular bow-shaped valley with thick forests, crystal clear streams, and scenic mountainous beauty.",
    "featured": true,
    "image":'neelum-valley.jpg'
  },
  {
    "id": 27,
    "name": "Muzaffarabad",
    "region": "Azad Kashmir",
    "type": "Nature/Heritage",
    "latitude": 34.3644,
    "longitude": 73.4735,
    "description": "The picturesque capital of Azad Kashmir, nestled at the confluence of the Neelum and Jhelum rivers.",
    "featured": false,
    "image":'muzaffarabad.jpg'
   
  },
  {
    "id": 28,
    "name": "Pir Chinasi",
    "region": "Azad Kashmir",
    "type": "Mountain/Viewpoint",
    "latitude": 34.3917,
    "longitude": 73.5414,
    "description": "A scenic hill station and shrine located high above Muzaffarabad, offering breathtaking views of the surrounding valleys.",
    "featured": false,
    "image":'pir-chinasi.jpg'
    
  },
  {
    "id": 29,
    "name": "Khewra Salt Mine",
    "region": "Punjab",
    "type": "Historical/Natural",
    "latitude": 32.6483,
    "longitude": 73.0114,
    "description": "The second largest salt mine in the world, famous for its pink Himalayan salt and underground glowing salt structures.",
    "featured": true,
    "image":'khewra-salt-mine.jpg'
  },
  {
    "id": 30,
    "name": "Shalimar Gardens",
    "region": "Punjab",
    "type": "Heritage",
    "latitude": 31.5861,
    "longitude": 74.3820,
    "description": "A brilliant Persian paradise garden laid out by Mughal Emperor Shah Jahan, recognized as a UNESCO World Heritage site.",
    "featured": false,
    "image":'shalimar-gardens.jpg'
  },
  {
    "id": 31,
    "name": "Derawar Fort",
    "region": "Punjab",
    "type": "Heritage",
    "latitude": 28.7677,
    "longitude": 71.3323,
    "description": "A massive, striking square fortress in the Cholistan Desert with towering bastions visible for miles.",
    "featured": true,
    "image":'derawar-fort.jpg'
  },
  {
    "id": 32,
    "name": "Wagah Border",
    "region": "Punjab",
    "type": "Landmark",
    "latitude": 31.6045,
    "longitude": 74.5739,
    "description": "The border crossing between Pakistan and India, famous for its daily, highly energetic military lowering-of-the-flags ceremony.",
    "featured": true,
    "image":'wagah-border.jpg'
  },
  {
    "id": 33,
    "name": "Harappa",
    "region": "Punjab",
    "type": "Archaeological",
    "latitude": 30.6277,
    "longitude": 72.8638,
    "description": "An ancient city that contains the ruins of a Bronze Age fortified city part of the Indus Valley Civilization.",
    "featured": false,
    "image":'harappa.jpg'
  },
  {
    "id": 34,
    "name": "Mazar-e-Quaid",
    "region": "Sindh",
    "type": "Monument",
    "latitude": 24.8746,
    "longitude": 67.0405,
    "description": "The magnificent white marble mausoleum of the founder of Pakistan, Muhammad Ali Jinnah, located in Karachi.",
    "featured": true,
    "image":'mazar-e-quaid.jpg'
  },
  {
    "id": 35,
    "name": "Gorakh Hill Station",
    "region": "Sindh",
    "type": "Mountain/Viewpoint",
    "latitude": 26.8622,
    "longitude": 67.1517,
    "description": "Often called the 'Murree of Sindh', it is a high-altitude plateau offering chilly weather and stunning sunset views.",
    "featured": false,
    "image":'gorakh-hill-station.jpg'
  },
  {
    "id": 36,
    "name": "Shah Jahan Mosque",
    "region": "Sindh",
    "type": "Heritage",
    "latitude": 24.7470,
    "longitude": 67.9255,
    "description": "A stunning 17th-century mosque in Thatta featuring the most elaborate display of tile work in South Asia and 93 domes.",
    "featured": true,
    "image":'shah-jahan-mosque.jpg'
  },
  {
    "id": 37,
    "name": "Kund Malir Beach",
    "region": "Balochistan",
    "type": "Beach/Nature",
    "latitude": 25.3976,
    "longitude": 65.4542,
    "description": "A beautiful desert beach located along the Makran Coastal Highway, where the desert seamlessly meets the Arabian Sea.",
    "featured": true,
    "image":'kund-malir-beach.jpg'
  },
  {
    "id": 38,
    "name": "Astola Island",
    "region": "Balochistan",
    "type": "Nature",
    "latitude": 25.1206,
    "longitude": 63.8475,
    "description": "Also known as 'Jezira Haft Talar', this uninhabited island is known for its pristine waters, rich marine life, and coral reefs.",
    "featured": true,
    "image":'astola-island.jpg'
  },
  {
    "id": 39,
    "name": "Moola Chotok",
    "region": "Balochistan",
    "type": "Nature",
    "latitude": 27.9708,
    "longitude": 67.1472,
    "description": "A hidden oasis in the Khuzdar district featuring breathtaking waterfalls, natural pools, and towering cliffs.",
    "featured": false,
    "image":'moola-chotok.jpg'
  },
  {
    "id": 40,
    "name": "Lake Saif-ul-Malook",
    "region": "Khyber Pakhtunkhwa",
    "type": "Lake",
    "latitude": 34.8748,
    "longitude": 73.6934,
    "description": "A famous alpine lake surrounded by snow-clad mountains in the Kaghan Valley, rich with local fairy tale legends.",
    "featured": true,
    "image":'lake-saif-ul-malook.jpg'
  },
  {
    "id": 41,
    "name": "Kumrat Valley",
    "region": "Khyber Pakhtunkhwa",
    "type": "Nature",
    "latitude": 35.5398,
    "longitude": 72.2132,
    "description": "A stunning, heavily forested valley known for its towering Deodar trees, waterfalls, and the Panjkora River.",
    "featured": true,
    "image":'kumrat-valley.jpg'
  },
  {
    "id": 42,
    "name": "Kalash Valley",
    "region": "Khyber Pakhtunkhwa",
    "type": "Heritage/Nature",
    "latitude": 35.6749,
    "longitude": 71.7483,
    "description": "Home to the unique indigenous Kalash people, this valley is famous for its vibrant culture, festivals, and distinct wooden architecture.",
    "featured": true,
    "image":'kalash-valley.jpg'
  },
  {
    "id": 43,
    "name": "Mahodand Lake",
    "region": "Khyber Pakhtunkhwa",
    "type": "Lake",
    "latitude": 35.7143,
    "longitude": 72.6436,
    "description": "A majestic glacial lake in the upper Usho Valley, ideal for boating, trout fishing, and camping.",
    "featured": false,
    "image":'mahodand-lake.jpg'
  },
  {
    "id": 44,
    "name": "Khunjerab Pass",
    "region": "Gilgit-Baltistan",
    "type": "Landmark/Nature",
    "latitude": 36.8500,
    "longitude": 75.4333,
    "description": "The highest paved international border crossing in the world, connecting Pakistan to China via the Karakoram Highway.",
    "featured": true,
    "image":'khunjerab-pass.jpg'
  },
  {
    "id": 45,
    "name": "Baltit Fort",
    "region": "Gilgit-Baltistan",
    "type": "Heritage",
    "latitude": 36.3262,
    "longitude": 74.6710,
    "description": "An 800-year-old fort dramatically perched on a cliff in the Hunza Valley, reflecting Tibetan architectural influences.",
    "featured": false,
    "image":'baltit-fort.jpg'
  },
  {
    "id": 46,
    "name": "Passu Cones",
    "region": "Gilgit-Baltistan",
    "type": "Mountain/Nature",
    "latitude": 36.4678,
    "longitude": 74.8876,
    "description": "A set of striking, jagged mountain peaks in the Karakoram range that stand tall over the Hunza River.",
    "featured": true,
    "image":'passu-cones.jpg'
  },
  {
    "id": 47,
    "name": "Naltar Valley",
    "region": "Gilgit-Baltistan",
    "type": "Nature",
    "latitude": 36.1367,
    "longitude": 74.1953,
    "description": "Famous for its colorful lakes, dense pine forests, and a ski resort, making it a year-round tourist attraction.",
    "featured": false,
    "image":'naltar-valley.jpg'
  },
  {
    "id": 48,
    "name": "Ratti Gali Lake",
    "region": "Azad Kashmir",
    "type": "Lake",
    "latitude": 34.8217,
    "longitude": 74.0628,
    "description": "A breathtaking high-altitude alpine glacial lake nestled in the Neelum Valley, surrounded by vibrant wildflowers in summer.",
    "featured": true,
    "image":'ratti-gali-lake.jpg'
  },
  {
    "id": 49,
    "name": "Arang Kel",
    "region": "Azad Kashmir",
    "type": "Nature",
    "latitude": 34.8249,
    "longitude": 74.3644,
    "description": "Known as the 'Pearl of Neelum Valley', a lush green village situated on an enchanting hilltop accessible via a cable car.",
    "featured": true,
    "image":'arang-kel.jpg'
  },
  {
    "id": 50,
    "name": "Banjosa Lake",
    "region": "Azad Kashmir",
    "type": "Lake",
    "latitude": 33.8055,
    "longitude": 73.8182,
    "description": "An artificial lake and popular tourist resort near Rawalakot, surrounded by dense pine forests and rolling hills.",
    "featured": false,
    "image":'banjosa-lake.webp'
    
  },
  {
    "id": 51,
    "name": "Lok Virsa Museum",
    "region": "Islamabad",
    "type": "Heritage",
    "latitude": 33.6874,
    "longitude": 73.0673,
    "description": "The premier heritage museum of Pakistan, showcasing the living cultural traditions and handicrafts of the country.",
    "featured": false,
    "image":'lok-virsa.jpg'  
  },
  {
    "id": 52,
    "name": "Saidpur Village",
    "region": "Islamabad",
    "type": "Heritage/Viewpoint",
    "latitude": 33.7431,
    "longitude": 73.0664,
    "description": "A remodeled Mughal-era village tucked into the Margalla Hills, featuring traditional architecture, art galleries, and restaurants.",
    "featured": false,
    "image":'saidpur.jpg'
  },
  {
    "id": 53,
    "name": "Rawal Lake",
    "region": "Islamabad",
    "type": "Lake",
    "latitude": 33.7088,
    "longitude": 73.1251,
    "description": "An artificial reservoir providing water to the twin cities, surrounded by parks and offering boating and picnic spots.",
    "featured": false,
    "image":'rawal-lake.webp'
  }
];

module.exports = attractions;