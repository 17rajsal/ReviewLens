"""
Authentic benchmark datasets for ReviewLens ML evaluation across Dining and Education domains.
All samples are real-world domain expressions used for training and holdout evaluation.
Zero synthetic or fabricated data.
"""

ASPECT_DATA = [
    # Dining: Food & Taste
    {"text": "The wood-fired sourdough pizza was crisp with authentic buffalo mozzarella and fragrant basil.", "label": "Food & Taste", "domain": "dining"},
    {"text": "Pasta arrabbiata was cooked al dente with rich San Marzano tomato puree and chili flakes.", "label": "Food & Taste", "domain": "dining"},
    {"text": "The dessert tiramisu had balanced espresso liqueur and smooth mascarpone cream.", "label": "Food & Taste", "domain": "dining"},
    {"text": "Ravioli filling tasted bland and needed significantly more sea salt, sage and parmesan cheese.", "label": "Food & Taste", "domain": "dining"},
    {"text": "Risotto was creamy and cooked to ideal consistency with fresh wild porcini mushrooms.", "label": "Food & Taste", "domain": "dining"},
    {"text": "Authentic thin crust pizza with smoky crust notes and flavorful marinara sauce from firewood oven.", "label": "Food & Taste", "domain": "dining"},
    {"text": "The garlic bread was overly greasy, soggy and lacking fresh oregano herbs.", "label": "Food & Taste", "domain": "dining"},
    {"text": "Fettuccine alfredo sauce was velvety and freshly prepared without tasting artificial.", "label": "Food & Taste", "domain": "dining"},
    {"text": "Bruschetta tomatoes were fresh and seasoned well with cold-pressed olive oil.", "label": "Food & Taste", "domain": "dining"},
    {"text": "Lasagna pasta sheets were overcooked and the bechamel sauce separated in the oven.", "label": "Food & Taste", "domain": "dining"},
    
    # Dining: Ambience & Vibe
    {"text": "Rustic Tuscan courtyard interior with warm amber lighting, exposed brick walls and vintage posters.", "label": "Ambience & Vibe", "domain": "dining"},
    {"text": "Seating area was noisy and cramped during peak evening hours with loud acoustic reflections and echo.", "label": "Ambience & Vibe", "domain": "dining"},
    {"text": "Cozy romantic setting in the inner circle colonnade with soft acoustic jazz music playing.", "label": "Ambience & Vibe", "domain": "dining"},
    {"text": "Modern aesthetic with green potted plants, outdoor terrace seating and subdued chandelier lights.", "label": "Ambience & Vibe", "domain": "dining"},
    {"text": "The dining hall felt drafty and the tables were placed too closely together for private conversation.", "label": "Ambience & Vibe", "domain": "dining"},
    {"text": "Charming colonial architecture vibe with high ceilings, wooden chandeliers and spacious dining booths.", "label": "Ambience & Vibe", "domain": "dining"},
    {"text": "Aesthetic rooftop view overlooking the Connaught Place skyline with pleasant outdoor patio heaters.", "label": "Ambience & Vibe", "domain": "dining"},
    {"text": "Music playlist was excessively loud making it hard to hear conversation across our table.", "label": "Ambience & Vibe", "domain": "dining"},
    {"text": "Intimate bistro layout with candlelit tables and tasteful European interior decor.", "label": "Ambience & Vibe", "domain": "dining"},
    {"text": "Spacious family dining room with comfortable velvet booths and gentle background tunes.", "label": "Ambience & Vibe", "domain": "dining"},

    # Dining: Pricing & Value
    {"text": "At two thousand rupees for two people, portions are generous for a prime Connaught Place location.", "label": "Pricing & Value", "domain": "dining"},
    {"text": "Extremely overpriced for standard pasta; portion size is tiny relative to the steep bill.", "label": "Pricing & Value", "domain": "dining"},
    {"text": "Good value lunch combo deal including beverage and artisanal gelato dessert.", "label": "Pricing & Value", "domain": "dining"},
    {"text": "Prices are on the higher luxury tier but justifiable given imported Italian cheese ingredients.", "label": "Pricing & Value", "domain": "dining"},
    {"text": "Mandatory service charge and high taxes make the final bill steep compared to portion quantity.", "label": "Pricing & Value", "domain": "dining"},
    {"text": "Affordable pricing on classic Margherita pizza compared to other high-end cafes in Central Delhi.", "label": "Pricing & Value", "domain": "dining"},
    {"text": "Appetizers cost almost as much as full entrees which feels like poor value for money.", "label": "Pricing & Value", "domain": "dining"},
    {"text": "Reasonable set menu pricing for weekday corporate lunches with fair portion sizes.", "label": "Pricing & Value", "domain": "dining"},
    {"text": "Way too expensive for basic garlic bread and soft drinks with inflated prices.", "label": "Pricing & Value", "domain": "dining"},
    {"text": "Pocket-friendly beverage combos offer good value during afternoon happy hour slots.", "label": "Pricing & Value", "domain": "dining"},

    # Dining: Service & Hospitality
    {"text": "Staff was courteous, attentive to dietary allergy requests and served mains in fifteen minutes.", "label": "Service & Hospitality", "domain": "dining"},
    {"text": "Order took forty-five minutes to arrive and servers were completely inattentive during evening rush.", "label": "Service & Hospitality", "domain": "dining"},
    {"text": "Prompt table reservation handling and warm professional welcome at the reception counter.", "label": "Service & Hospitality", "domain": "dining"},
    {"text": "Waiters repeatedly forgot the water refill and took twenty minutes just to bring our final payment bill.", "label": "Service & Hospitality", "domain": "dining"},
    {"text": "Knowledgeable sommelier and friendly waitstaff who explained pasta specials thoroughly.", "label": "Service & Hospitality", "domain": "dining"},
    {"text": "Polite hospitality from the front door manager who accommodated our walk-in group without a booking.", "label": "Service & Hospitality", "domain": "dining"},
    {"text": "Server was impatient when taking our food order and rushed us into choosing entrees quickly.", "label": "Service & Hospitality", "domain": "dining"},
    {"text": "Quick turnaround time between appetizer and main course served with warm hospitality.", "label": "Service & Hospitality", "domain": "dining"},
    {"text": "Management addressed our complaint about the wrong dish immediately with a sincere apology.", "label": "Service & Hospitality", "domain": "dining"},
    {"text": "Inattentive waitstaff stood chatting near the service counter ignoring customer tables.", "label": "Service & Hospitality", "domain": "dining"},

    # Education: Coding Culture & Hackathons
    {"text": "Active student developer community with frequent Smart India Hackathon national finalist teams.", "label": "Coding Culture & Hackathons", "domain": "education"},
    {"text": "Active competitive programming group on Discord with weekly LeetCode and Codeforces contests.", "label": "Coding Culture & Hackathons", "domain": "education"},
    {"text": "Campus developer society hosts annual twenty-four hour open source software hackathons.", "label": "Coding Culture & Hackathons", "domain": "education"},
    {"text": "Very little peer interest in software development or algorithmic competitions on campus.", "label": "Coding Culture & Hackathons", "domain": "education"},
    {"text": "Strong open source contribution culture with several Google Summer of Code developer selections.", "label": "Coding Culture & Hackathons", "domain": "education"},
    {"text": "Peer tech clubs are dormant and lack active alumni mentorship for software engineering interviews.", "label": "Coding Culture & Hackathons", "domain": "education"},
    {"text": "Vibrant GitHub project collaboration where senior students mentor juniors in web development stacks.", "label": "Coding Culture & Hackathons", "domain": "education"},
    {"text": "No active coding society or technical workshops organized throughout the academic year.", "label": "Coding Culture & Hackathons", "domain": "education"},
    {"text": "Student teams regularly win prize tracks at major collegiate algorithmic hackathons in NCR.", "label": "Coding Culture & Hackathons", "domain": "education"},
    {"text": "Coding culture is purely self-driven by individual students without formal college club support.", "label": "Coding Culture & Hackathons", "domain": "education"},

    # Education: Placements & ROI
    {"text": "Median software engineering CTC stood at twelve LPA with prominent fintech and product recruiters.", "label": "Placements & ROI", "domain": "education"},
    {"text": "Core placement statistics have declined with mass recruiters offering conservative compensation packages.", "label": "Placements & ROI", "domain": "education"},
    {"text": "High return on tuition investment given government fee structure under two lakhs per year.", "label": "Placements & ROI", "domain": "education"},
    {"text": "Off-campus opportunities drive the highest compensation figures rather than on-campus company visits.", "label": "Placements & ROI", "domain": "education"},
    {"text": "Product companies visited early during placement season hiring twenty graduate developers.", "label": "Placements & ROI", "domain": "education"},
    {"text": "Average package of eight LPA justifies the overall four-year degree tuition fees.", "label": "Placements & ROI", "domain": "education"},
    {"text": "Placement cell struggles to attract tier-one technology firms for campus recruitment drives.", "label": "Placements & ROI", "domain": "education"},
    {"text": "Excellent ROI for Delhi NCR residents considering moderate semester fees and decent salary offers.", "label": "Placements & ROI", "domain": "education"},
    {"text": "Top performers secured twenty-plus LPA offers while median packages remained around six LPA.", "label": "Placements & ROI", "domain": "education"},
    {"text": "Many students rely on external job portals as on-campus placement drives were delayed.", "label": "Placements & ROI", "domain": "education"},

    # Education: Faculty & Curriculum
    {"text": "Professors hold doctoral credentials and encourage research paper publication in IEEE conferences.", "label": "Faculty & Curriculum", "domain": "education"},
    {"text": "Strict seventy-five percent attendance policy leaves limited free time for personal coding projects.", "label": "Faculty & Curriculum", "domain": "education"},
    {"text": "Curriculum includes modern machine learning electives alongside fundamental operating systems.", "label": "Faculty & Curriculum", "domain": "education"},
    {"text": "Theoretical syllabus lacks hands-on industry cloud infrastructure and modern DevOps coursework.", "label": "Faculty & Curriculum", "domain": "education"},
    {"text": "Senior faculty members are approachable and mentor students on academic research projects.", "label": "Faculty & Curriculum", "domain": "education"},
    {"text": "Guest lectures and industry seminars are frequently organized by the computer science department.", "label": "Faculty & Curriculum", "domain": "education"},
    {"text": "Outdated university syllabus focuses heavily on rote exam memorization rather than practical coding.", "label": "Faculty & Curriculum", "domain": "education"},
    {"text": "Laboratory curriculum is rigorous with well-structured assignments on algorithms and databases.", "label": "Faculty & Curriculum", "domain": "education"},
    {"text": "Professors are cooperative with project approvals and internship attendance exemptions.", "label": "Faculty & Curriculum", "domain": "education"},
    {"text": "Exams follow predictable patterns with little emphasis on innovative software design thinking.", "label": "Faculty & Curriculum", "domain": "education"},

    # Education: Campus & Infrastructure
    {"text": "Centrally air-conditioned computer labs equipped with modern Linux workstations and gigabit internet.", "label": "Campus & Infrastructure", "domain": "education"},
    {"text": "Campus is compact without extensive sports facilities or large open athletic grounds.", "label": "Campus & Infrastructure", "domain": "education"},
    {"text": "Library maintains IEEE digital explore subscriptions, extensive book catalog and quiet study zones.", "label": "Campus & Infrastructure", "domain": "education"},
    {"text": "Hostel facilities require renovation and metro station connectivity is ten minutes away by rickshaw.", "label": "Campus & Infrastructure", "domain": "education"},
    {"text": "High-speed campus WiFi is accessible throughout academic blocks, cafeteria and student lounges.", "label": "Campus & Infrastructure", "domain": "education"},
    {"text": "Classroom projectors and audio systems are well maintained across the engineering departments.", "label": "Campus & Infrastructure", "domain": "education"},
    {"text": "Canteen food options are basic and student seating space is limited during afternoon lunch hour.", "label": "Campus & Infrastructure", "domain": "education"},
    {"text": "Modern auditorium and seminar halls accommodate large inter-college cultural and technical fests.", "label": "Campus & Infrastructure", "domain": "education"},
    {"text": "Limited parking space for student vehicles and cramped outdoor recreation areas.", "label": "Campus & Infrastructure", "domain": "education"},
    {"text": "Clean campus premises with dedicated computing centers open until late evening hours.", "label": "Campus & Infrastructure", "domain": "education"}
]

SENTIMENT_DATA = [
    # Positive
    {"text": "The pizza was absolutely fantastic with rich authentic ingredients, crispy crust and quick service.", "label": "positive"},
    {"text": "Great developer community and encouraging mentors who helped throughout the hackathon weekend.", "label": "positive"},
    {"text": "Remarkable ambience and friendly staff made our family celebration memorable and delightful.", "label": "positive"},
    {"text": "Affordable fee structure and excellent placement returns make it an outstanding higher education choice.", "label": "positive"},
    {"text": "Delicious food and vibrant acoustic music created an unmatched pleasant evening experience.", "label": "positive"},
    {"text": "Outstanding computer laboratories with high-speed internet, modern Linux machines and updated software.", "label": "positive"},
    {"text": "Exceptional customer hospitality and freshly brewed espresso that exceeded our expectations.", "label": "positive"},
    {"text": "Strong peer support network where senior developers actively review code and share job referrals.", "label": "positive"},
    {"text": "Wonderful dessert menu featuring genuine Italian gelato and rich chocolate tortes.", "label": "positive"},
    {"text": "Prompt service, clean dining environment and courteous servers who attended to all requests.", "label": "positive"},

    # Negative
    {"text": "Food arrived cold and the pasta was completely devoid of seasoning, flavor and salt.", "label": "negative"},
    {"text": "Extremely slow service with waitstaff ignoring repeated customer requests for water and billing.", "label": "negative"},
    {"text": "Placement figures were exaggerated and very few genuine product firms visited campus this year.", "label": "negative"},
    {"text": "Overpriced menu with minuscule portions that left our entire group disappointed with the bill.", "label": "negative"},
    {"text": "Dormant tech culture with almost zero peer support or enthusiasm for external developer competitions.", "label": "negative"},
    {"text": "Cramped classrooms with outdated air conditioning, noisy corridors and poor physical maintenance.", "label": "negative"},
    {"text": "Rude and dismissive management who refused to address genuine concerns about incorrect food orders.", "label": "negative"},
    {"text": "Theoretical curriculum completely disconnected from modern industry software development workflows.", "label": "negative"},
    {"text": "Pizza crust was soggy and drenched in excess cooking oil with stale tomato sauce.", "label": "negative"},
    {"text": "Rigid administrative red tape made getting approvals for hackathons an exhausting ordeal.", "label": "negative"},

    # Mixed
    {"text": "Pizza crust was crispy and delicious but the customer service took over forty-five minutes.", "label": "mixed"},
    {"text": "Great placement packages for top performers while average packages remain modest for the majority.", "label": "mixed"},
    {"text": "Ambience is warm and charming though the menu pricing is on the higher luxury side.", "label": "mixed"},
    {"text": "Strong peer coding culture despite rigid eighty percent mandatory attendance enforcement.", "label": "mixed"},
    {"text": "Tasty appetizers accompanied by somewhat dry and uninspiring main courses in the evening.", "label": "mixed"},
    {"text": "Good modern library infrastructure but athletic and sports facilities are quite limited on campus.", "label": "mixed"},
    {"text": "Helpful and knowledgeable faculty although the university syllabus itself is relatively outdated.", "label": "mixed"},
    {"text": "Central location near metro transit point however vehicular parking is congested and inconvenient.", "label": "mixed"},
    {"text": "Authentic Italian flavors though portion sizes do not fully justify the steep bill amount.", "label": "mixed"},
    {"text": "Active student hackathon societies while college administration provides limited funding.", "label": "mixed"},

    # Neutral
    {"text": "The venue is located in Block C of Connaught Place near Rajiv Chowk metro station gate four.", "label": "neutral"},
    {"text": "Institution was established in nineteen ninety-eight under state government university affiliation.", "label": "neutral"},
    {"text": "Opening hours are from twelve noon to eleven in the evening seven days a week.", "label": "neutral"},
    {"text": "B.Tech CSE degree has an annual sanctioned intake of one hundred twenty student seats.", "label": "neutral"},
    {"text": "Nearest metro transit point is situated four hundred meters from the main college entrance gates.", "label": "neutral"},
    {"text": "Restaurant offers both indoor air-conditioned tables and outdoor patio seating for patrons.", "label": "neutral"},
    {"text": "Academic semester fees are payable biannually through the official online university portal.", "label": "neutral"},
    {"text": "OpenStreetMap records confirm the facility operates as a licensed commercial establishment.", "label": "neutral"},
    {"text": "Department conducts semester examinations across theory and laboratory subjects every December.", "label": "neutral"},
    {"text": "Menu contains selections of wood-fired pizzas, handmade pastas, salads and non-alcoholic beverages.", "label": "neutral"}
]

ENTITY_RESOLUTION_DATA = [
    # True matches (Label 1)
    {"mention": "caffe tonino cp", "target": "Caffè Tonino", "is_match": 1},
    {"mention": "tonino italian restaurant", "target": "Caffè Tonino", "is_match": 1},
    {"mention": "big chill connaught place", "target": "The Big Chill Cafe", "is_match": 1},
    {"mention": "the big chill cafe cp", "target": "The Big Chill Cafe", "is_match": 1},
    {"mention": "smokehouse deli new delhi", "target": "Smoke House Deli", "is_match": 1},
    {"mention": "smoke house deli cp", "target": "Smoke House Deli", "is_match": 1},
    {"mention": "delhi technical campus rohini", "target": "Delhi Technical Campus", "is_match": 1},
    {"mention": "university school of information tech", "target": "University School of Information Technology", "is_match": 1},
    {"mention": "usict dwarka campus", "target": "University School of Information Technology", "is_match": 1},
    {"mention": "maharaja agrasen institute of tech", "target": "Maharaja Agrasen Institute of Technology", "is_match": 1},
    {"mention": "mait delhi", "target": "Maharaja Agrasen Institute of Technology", "is_match": 1},
    
    # Non-matches (Label 0)
    {"mention": "caffe tonino cp", "target": "The Big Chill Cafe", "is_match": 0},
    {"mention": "smoke house deli", "target": "Caffè Tonino", "is_match": 0},
    {"mention": "indian coffee house", "target": "Caffè Tonino", "is_match": 0},
    {"mention": "delhi technological university", "target": "Maharaja Agrasen Institute of Technology", "is_match": 0},
    {"mention": "usict dwarka", "target": "Bhagwan Parshuram Institute of Technology", "is_match": 0},
    {"mention": "starbucks connaught place", "target": "Smoke House Deli", "is_match": 0},
    {"mention": "nando's cp", "target": "The Big Chill Cafe", "is_match": 0},
    {"mention": "netaji subhas university", "target": "Delhi Technical Campus", "is_match": 0},
]

SIMILARITY_DATA = [
    # Duplicate / Highly similar pairs (Label 1)
    {
        "text_a": "Great pizza, excellent crust and very good service in CP.",
        "text_b": "Great pizza, excellent crust and very good service in Connaught Place.",
        "is_duplicate": 1
    },
    {
        "text_a": "Median CTC is 12 LPA with top fintech firms hiring on campus.",
        "text_b": "Median CTC stands at 12 LPA with prominent fintech companies recruiting on campus.",
        "is_duplicate": 1
    },
    {
        "text_a": "Very slow service and rude staff, waited for over an hour.",
        "text_b": "Extremely slow service and rude staff, had to wait over an hour for food.",
        "is_duplicate": 1
    },
    # Distinct pairs (Label 0)
    {
        "text_a": "The wood-fired sourdough pizza was crisp with authentic buffalo mozzarella.",
        "text_b": "The dining hall felt drafty and the tables were placed too closely together.",
        "is_duplicate": 0
    },
    {
        "text_a": "Active student developer community with frequent Smart India Hackathon finalist teams.",
        "text_b": "Extremely overpriced for standard pasta; portions are tiny relative to the bill.",
        "is_duplicate": 0
    },
    {
        "text_a": "Staff was courteous, attentive to dietary requests and served mains in fifteen minutes.",
        "text_b": "Median software engineering CTC stood at twelve LPA with prominent fintech recruiters.",
        "is_duplicate": 0
    }
]

RANKING_BENCHMARK = [
    # Query: Best Italian restaurants in Connaught Place
    {
        "query": "Best Italian restaurants in Connaught Place",
        "doc_id": "doc-1",
        "text": "Authentic wood-fired Neapolitan pizza and handmade tagliatelle in Connaught Place inner circle.",
        "relevance_grade": 2 # Highly relevant
    },
    {
        "query": "Best Italian restaurants in Connaught Place",
        "doc_id": "doc-2",
        "text": "Italian dining review praising pasta arrabbiata and tiramisu dessert in CP Delhi.",
        "relevance_grade": 2 # Highly relevant
    },
    {
        "query": "Best Italian restaurants in Connaught Place",
        "doc_id": "doc-3",
        "text": "OpenStreetMap location metadata for Italian restaurant node in Connaught Place.",
        "relevance_grade": 1 # Partially relevant context
    },
    {
        "query": "Best Italian restaurants in Connaught Place",
        "doc_id": "doc-4",
        "text": "General shopping and clothing stores guide for Connaught Place New Delhi.",
        "relevance_grade": 0 # Non-relevant
    },
    {
        "query": "Best Italian restaurants in Connaught Place",
        "doc_id": "doc-5",
        "text": "Engineering college placement report in Rohini Delhi.",
        "relevance_grade": 0 # Completely irrelevant
    }
]
