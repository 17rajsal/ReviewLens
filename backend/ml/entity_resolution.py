import re
import math
from typing import List, Dict, Any, Optional, Tuple
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from backend.ml.preprocessing import clean_text

# Pre-populated dictionary of recognized acronyms, abbreviations, and informal names
KNOWN_ALIASES_MAP: Dict[str, str] = {   'acharya narendra dev': 'Acharya Narendra Dev College (ANDC)',
    'acharya narendra dev college': 'Acharya Narendra Dev College (ANDC)',
    'agrasen college du': 'Maharaja Agrasen College',
    'aiims': 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    'aiims delhi': 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    'aiims new delhi': 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    'airplane restaurant rohini': 'Runway 1',
    'al jawahar': 'Al Jawahar Restaurant',
    'al jawahar delhi': 'Al Jawahar Restaurant',
    'al jawahar jama masjid': 'Al Jawahar Restaurant',
    'al jawahar restaurant': 'Al Jawahar Restaurant',
    'all india institute of medical sciences': 'All India Institute of Medical Sciences (AIIMS New Delhi)',
    'andc': 'Acharya Narendra Dev College (ANDC)',
    'andc du': 'Acharya Narendra Dev College (ANDC)',
    'andc kalkaji': 'Acharya Narendra Dev College (ANDC)',
    'andhra bhavan': 'Andhra Bhavan Canteen',
    'andhra bhavan canteen': 'Andhra Bhavan Canteen',
    'andhra bhawan': 'Andhra Bhavan Canteen',
    'andhra canteen delhi': 'Andhra Bhavan Canteen',
    'arsd': 'Atma Ram Sanatan Dharma College (ARSD)',
    'arsd college': 'Atma Ram Sanatan Dharma College (ARSD)',
    'arsd du': 'Atma Ram Sanatan Dharma College (ARSD)',
    'arsd south campus': 'Atma Ram Sanatan Dharma College (ARSD)',
    'artusi': 'Artusi Ristorante e Bar',
    'artusi gk2': 'Artusi Ristorante e Bar',
    'artusi greater kailash': 'Artusi Ristorante e Bar',
    'artusi ristorante': 'Artusi Ristorante e Bar',
    'aslam butter chicken': 'Aslam Chicken (Jama Masjid)',
    'aslam chicken': 'Aslam Chicken (Jama Masjid)',
    'aslam chicken jama masjid': 'Aslam Chicken (Jama Masjid)',
    'aslam old delhi': 'Aslam Chicken (Jama Masjid)',
    'atma ram sanatan dharma college': 'Atma Ram Sanatan Dharma College (ARSD)',
    'bhagat singh college': 'Shaheed Bhagat Singh College (SBSC)',
    'bhagini nivedita college': 'Bhagini Nivedita College (BNC)',
    'bhagini nivedita najafgarh': 'Bhagini Nivedita College (BNC)',
    'bharati college': 'Bharati College',
    'bharati college delhi': 'Bharati College',
    'bharati college janakpuri': 'Bharati College',
    'bharati du': 'Bharati College',
    'big chill': 'The Big Chill Café (Khan Market)',
    'big chill delhi': 'The Big Chill Café (Khan Market)',
    'big chill khan market': 'The Big Chill Café (Khan Market)',
    'billu hut': "Billu's Hut",
    'billu hut nsp': "Billu's Hut",
    'billu hut pitampura': "Billu's Hut",
    "billu's hut": "Billu's Hut",
    'billus hut': "Billu's Hut",
    'bnc': 'Bhagini Nivedita College (BNC)',
    'bnc du': 'Bhagini Nivedita College (BNC)',
    'bukhara': 'Bukhara',
    'bukhara chanakyapuri': 'Bukhara',
    'bukhara delhi': 'Bukhara',
    'bukhara itc maurya': 'Bukhara',
    'burma burma': 'Burma Burma Restaurant & Tea Room',
    'burma burma delhi': 'Burma Burma Restaurant & Tea Room',
    'burma burma saket': 'Burma Burma Restaurant & Tea Room',
    'burma burma select citywalk': 'Burma Burma Restaurant & Tea Room',
    'cafe a': 'Restaurant A (Traditional Kitchen)',
    'caffe tonino': 'Caffè Tonino',
    'caffe tonino connaught place': 'Caffè Tonino',
    'caffè tonino': 'Caffè Tonino',
    'campus a': 'Institution A (Technical Campus)',
    'campus b': 'Institution B (Engineering Institute)',
    'campus c': 'Institution C (State University Campus)',
    'campus d': 'Institution D (Institute of Technology)',
    'carnatic cafe': 'Carnatic Cafe (Lodhi Colony)',
    'carnatic cafe delhi': 'Carnatic Cafe (Lodhi Colony)',
    'carnatic cafe lodhi': 'Carnatic Cafe (Lodhi Colony)',
    'carnatic dosa': 'Carnatic Cafe (Lodhi Colony)',
    'cbs': 'Shaheed Sukhdev College of Business Studies (SSCBS)',
    'cbs du': 'Shaheed Sukhdev College of Business Studies (SSCBS)',
    'chandni chowk paranthe': 'Pt. Gaya Prasad Shiv Charan (Paranthe Wali Gali)',
    'coast cafe': 'Coast Café (Hauz Khas Village)',
    'coast cafe delhi': 'Coast Café (Hauz Khas Village)',
    'coast cafe hauz khas': 'Coast Café (Hauz Khas Village)',
    'coast cafe hkv': 'Coast Café (Hauz Khas Village)',
    'college a': 'Institution A (Technical Campus)',
    'college b': 'Institution B (Engineering Institute)',
    'college d': 'Institution D (Institute of Technology)',
    'college of vocational studies': 'College of Vocational Studies (CVS)',
    'colonel kababz': "Colonel's Kababz",
    "colonel's kababz": "Colonel's Kababz",
    'colonels kababs defence colony': "Colonel's Kababz",
    'crowne plaza spice art': 'Spice Art',
    'cvs': 'College of Vocational Studies (CVS)',
    'cvs du': 'College of Vocational Studies (CVS)',
    'cvs south delhi': 'College of Vocational Studies (CVS)',
    'dakshin': 'Dakshin',
    'dakshin delhi': 'Dakshin',
    'dakshin itc': 'Dakshin',
    'dakshin sheraton': 'Dakshin',
    'dal bukhara': 'Bukhara',
    'daryaganj': 'Daryaganj Restaurant',
    'daryaganj connaught place': 'Daryaganj Restaurant',
    'daryaganj cp': 'Daryaganj Restaurant',
    'daryaganj restaurant': 'Daryaganj Restaurant',
    'daulat ram': 'Daulat Ram College (DRC)',
    'daulat ram college': 'Daulat Ram College (DRC)',
    'dcac': 'Delhi College of Arts and Commerce (DCAC)',
    'dcac du': 'Delhi College of Arts and Commerce (DCAC)',
    'dcac netaji nagar': 'Delhi College of Arts and Commerce (DCAC)',
    'dcac south campus': 'Delhi College of Arts and Commerce (DCAC)',
    'dce': 'Delhi Technological University (DTU, formerly DCE)',
    'ddu college': 'Deen Dayal Upadhyaya College (DDUC)',
    'dduc': 'Deen Dayal Upadhyaya College (DDUC)',
    'dduc dwarka': 'Deen Dayal Upadhyaya College (DDUC)',
    'deen dayal upadhyay': 'Deen Dayal Upadhyaya College (DDUC)',
    'deen dayal upadhyaya college': 'Deen Dayal Upadhyaya College (DDUC)',
    'defence bakery': 'Defence Bakery',
    'defence bakery delhi': 'Defence Bakery',
    'defence colony bakery': 'Defence Bakery',
    "delhi 'o' delhi": "Delhi 'O' Delhi",
    'delhi college of arts and commerce': 'Delhi College of Arts and Commerce (DCAC)',
    'delhi college of engineering': 'Delhi Technological University (DTU, formerly DCE)',
    'delhi o delhi': "Delhi 'O' Delhi",
    'delhi o delhi ihc': "Delhi 'O' Delhi",
    'delhi technological university': 'Delhi Technological University (DTU, formerly DCE)',
    'diggin': 'Diggin (Anand Lok)',
    'diggin anand lok': 'Diggin (Anand Lok)',
    'diggin cafe': 'Diggin (Anand Lok)',
    'diggin opposite gargi': 'Diggin (Anand Lok)',
    'dolma aunty': 'Dolma Aunty Momos',
    'dolma aunty momos': 'Dolma Aunty Momos',
    'dolma momos delhi': 'Dolma Aunty Momos',
    'dolma momos lajpat nagar': 'Dolma Aunty Momos',
    'drc': 'Daulat Ram College (DRC)',
    'drc du': 'Daulat Ram College (DRC)',
    'drc north campus': 'Daulat Ram College (DRC)',
    'drool dwarka': 'Drool Kitchen',
    'drool kitchen': 'Drool Kitchen',
    'drool kitchen dwarka': 'Drool Kitchen',
    'drool kitchen sector 10': 'Drool Kitchen',
    'dtu': 'Delhi Technological University (DTU, formerly DCE)',
    'dtu bawana': 'Delhi Technological University (DTU, formerly DCE)',
    'dtu delhi': 'Delhi Technological University (DTU, formerly DCE)',
    'dtu rohini': 'Delhi Technological University (DTU, formerly DCE)',
    'eng institute b': 'Institution B (Engineering Institute)',
    'farzi cafe': 'Farzi Café',
    'farzi cafe connaught place': 'Farzi Café',
    'farzi cafe cp': 'Farzi Café',
    'farzi cafe delhi': 'Farzi Café',
    'gargi': 'Gargi College',
    'gargi college': 'Gargi College',
    'gargi college delhi': 'Gargi College',
    'gargi du': 'Gargi College',
    'gargi south campus': 'Gargi College',
    'gaya prasad paranthe': 'Pt. Gaya Prasad Shiv Charan (Paranthe Wali Gali)',
    'ggs': 'Sri Guru Gobind Singh College of Commerce (SGGSCC)',
    'ggsipu': 'Guru Gobind Singh Indraprastha University (GGSIPU Main Campus)',
    'ggsipu dwarka': 'Guru Gobind Singh Indraprastha University (GGSIPU Main Campus)',
    'guru gobind singh college of commerce': 'Sri Guru Gobind Singh College of Commerce (SGGSCC)',
    'guru gobind singh indraprastha university': 'Guru Gobind Singh Indraprastha University (GGSIPU Main Campus)',
    'hans raj': 'Hansraj College',
    'hansraj': 'Hansraj College',
    'hansraj college': 'Hansraj College',
    'hansraj du': 'Hansraj College',
    'hansraj north campus': 'Hansraj College',
    'hauz khas social': 'Hauz Khas Social',
    'hillside cafe gk1': 'Music & Mountains - Hillside Cafe',
    'hindu': 'Hindu College',
    'hindu college': 'Hindu College',
    'hindu college delhi': 'Hindu College',
    'hindu du': 'Hindu College',
    'hindu north campus': 'Hindu College',
    'hotel saravana bhavan': 'Saravana Bhavan',
    'hsb delhi': 'Saravana Bhavan',
    'igdtu': 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
    'igdtuw': 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
    'igdtuw kashmere gate': 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
    'ihc dining': "Delhi 'O' Delhi",
    'ihe': 'Institute of Home Economics (IHE)',
    'ihe du': 'Institute of Home Economics (IHE)',
    'ihe hauz khas': 'Institute of Home Economics (IHE)',
    'iiit delhi': 'Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)',
    'iiit okhla': 'Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)',
    'iiit-d': 'Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)',
    'iiitd': 'Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)',
    'india habitat centre dining': "Delhi 'O' Delhi",
    'indian accent': 'Indian Accent',
    'indian accent delhi': 'Indian Accent',
    'indian accent lodhi': 'Indian Accent',
    'indira gandhi delhi technical university for women': 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
    'indraprastha college for women': 'Indraprastha College for Women (IP College)',
    'indraprastha institute of information technology': 'Indraprastha Institute of Information Technology Delhi '
                                                        '(IIIT-Delhi)',
    'institute of home economics': 'Institute of Home Economics (IHE)',
    'institution a': 'Institution A (Technical Campus)',
    'institution b': 'Institution B (Engineering Institute)',
    'institution c': 'Institution C (State University Campus)',
    'institution d': 'Institution D (Institute of Technology)',
    'ip college': 'Indraprastha College for Women (IP College)',
    'ip college civil lines': 'Indraprastha College for Women (IP College)',
    'ip college du': 'Indraprastha College for Women (IP College)',
    'ip university': 'Guru Gobind Singh Indraprastha University (GGSIPU Main Campus)',
    'ipcw': 'Indraprastha College for Women (IP College)',
    'ipu': 'Guru Gobind Singh Indraprastha University (GGSIPU Main Campus)',
    'ipu dwarka': 'Guru Gobind Singh Indraprastha University (GGSIPU Main Campus)',
    'itc welcomhotel dwarka': 'Pavilion 75 (Welcomhotel Dwarka)',
    'jamia': 'Jamia Millia Islamia (JMI)',
    'jamia engineering': 'Jamia Millia Islamia (JMI)',
    'jamia millia islamia': 'Jamia Millia Islamia (JMI)',
    'jamia university': 'Jamia Millia Islamia (JMI)',
    'jesus and mary college': 'Jesus and Mary College (JMC)',
    'jmc': 'Jesus and Mary College (JMC)',
    'jmc chanakyapuri': 'Jesus and Mary College (JMC)',
    'jmc delhi': 'Jesus and Mary College (JMC)',
    'jmc du': 'Jesus and Mary College (JMC)',
    'jmi': 'Jamia Millia Islamia (JMI)',
    'kake da hotel': 'Kake Da Hotel',
    'kake da hotel connaught place': 'Kake Da Hotel',
    'kake da hotel cp': 'Kake Da Hotel',
    'kake da hotel delhi': 'Kake Da Hotel',
    'karim hotel old delhi': "Karim's (Jama Masjid)",
    'karim old delhi': "Karim's (Jama Masjid)",
    "karim's": "Karim's (Jama Masjid)",
    "karim's jama masjid": "Karim's (Jama Masjid)",
    'karims': "Karim's (Jama Masjid)",
    'karims delhi': "Karim's (Jama Masjid)",
    'keshav': 'Keshav Mahavidyalaya',
    'keshav college': 'Keshav Mahavidyalaya',
    'keshav mahavidyalaya': 'Keshav Mahavidyalaya',
    'keshav mahavidyalaya pitampura': 'Keshav Mahavidyalaya',
    'keventers': 'Keventers (Original Milkshake Stand)',
    'keventers connaught place': 'Keventers (Original Milkshake Stand)',
    'keventers cp': 'Keventers (Original Milkshake Stand)',
    'khalsa college du': 'Sri Guru Tegh Bahadur Khalsa College (SGTB Khalsa)',
    'khalsa north campus': 'Sri Guru Tegh Bahadur Khalsa College (SGTB Khalsa)',
    'khan chacha': 'Khan Chacha',
    'khan chacha delhi': 'Khan Chacha',
    'khan chacha khan market': 'Khan Chacha',
    'khan chacha rolls': 'Khan Chacha',
    'kitchen a': 'Restaurant A (Traditional Kitchen)',
    'kmv du': 'Keshav Mahavidyalaya',
    'kuremal kulfi': 'Kuremal Mohan Lal Kulfi Wale',
    'kuremal kulfi chawri bazar': 'Kuremal Mohan Lal Kulfi Wale',
    'kuremal mohan lal': 'Kuremal Mohan Lal Kulfi Wale',
    'lady hardinge': 'Lady Hardinge Medical College (LHMC)',
    'lady hardinge medical college': 'Lady Hardinge Medical College (LHMC)',
    "leo's pizzeria": "Leo's Pizzeria",
    'leos pizza delhi': "Leo's Pizzeria",
    'leos pizza vasant vihar': "Leo's Pizzeria",
    'leos pizzeria': "Leo's Pizzeria",
    'lhmc': 'Lady Hardinge Medical College (LHMC)',
    'lhmc delhi': 'Lady Hardinge Medical College (LHMC)',
    'mac delhi': 'Maharaja Agrasen College',
    'mac du': 'Maharaja Agrasen College',
    'maharaja agrasen college': 'Maharaja Agrasen College',
    'maharaja agrasen institute of technology': 'Maharaja Agrasen Institute of Technology (MAIT)',
    'maharaja agrasen vasundhara': 'Maharaja Agrasen College',
    'maharaja surajmal institute': 'Maharaja Surajmal Institute (MSI)',
    'maharaja surajmal institute of technology': 'Maharaja Surajmal Institute of Technology (MSIT)',
    'mait': 'Maharaja Agrasen Institute of Technology (MAIT)',
    'mait btech': 'Maharaja Agrasen Institute of Technology (MAIT)',
    'mait ipu': 'Maharaja Agrasen Institute of Technology (MAIT)',
    'mait rohini': 'Maharaja Agrasen Institute of Technology (MAIT)',
    'manish mehrotra restaurant': 'Indian Accent',
    'mh': 'Miranda House',
    'mh du': 'Miranda House',
    'miranda': 'Miranda House',
    'miranda college': 'Miranda House',
    'miranda house': 'Miranda House',
    'miranda house delhi': 'Miranda House',
    'mlnc': 'Motilal Nehru College (MLNC)',
    'moti mahal': 'Moti Mahal Delux (South Extension II)',
    'moti mahal butter chicken': 'Moti Mahal Delux (South Extension II)',
    'moti mahal delux': 'Moti Mahal Delux (South Extension II)',
    'moti mahal south ex': 'Moti Mahal Delux (South Extension II)',
    'motilal nehru college': 'Motilal Nehru College (MLNC)',
    'motilal nehru du': 'Motilal Nehru College (MLNC)',
    'motilal nehru south campus': 'Motilal Nehru College (MLNC)',
    'msi': 'Maharaja Surajmal Institute (MSI)',
    'msi ipu': 'Maharaja Surajmal Institute (MSI)',
    'msi janakpuri': 'Maharaja Surajmal Institute (MSI)',
    'msit': 'Maharaja Surajmal Institute of Technology (MSIT)',
    'msit btech': 'Maharaja Surajmal Institute of Technology (MSIT)',
    'msit janakpuri': 'Maharaja Surajmal Institute of Technology (MSIT)',
    'music & mountains': 'Music & Mountains - Hillside Cafe',
    'music and mountains': 'Music & Mountains - Hillside Cafe',
    'music and mountains delhi': 'Music & Mountains - Hillside Cafe',
    'naga food delhi': 'Nagaland Kitchen',
    'nagaland kitchen': 'Nagaland Kitchen',
    'nagaland kitchen green park': 'Nagaland Kitchen',
    'nagaland restaurant': 'Nagaland Kitchen',
    'nagpal amar colony': 'Nagpal Chole Bhature',
    'nagpal chhole': 'Nagpal Chole Bhature',
    'nagpal chole bhature': 'Nagpal Chole Bhature',
    'nagpal lajpat nagar': 'Nagpal Chole Bhature',
    'natraj aloo tikki': 'Natraj Dahi Bhalla Corner',
    'natraj chandni chowk': 'Natraj Dahi Bhalla Corner',
    'natraj dahi bhalla': 'Natraj Dahi Bhalla Corner',
    'natraj dahi bhalla corner': 'Natraj Dahi Bhalla Corner',
    'netaji subhas university of technology': 'Netaji Subhas University of Technology (NSUT, formerly NSIT)',
    'netaji subhash': 'Netaji Subhas University of Technology (NSUT, formerly NSIT)',
    'nsit': 'Netaji Subhas University of Technology (NSUT, formerly NSIT)',
    'nsit dwarka': 'Netaji Subhas University of Technology (NSUT, formerly NSIT)',
    'nsut': 'Netaji Subhas University of Technology (NSUT, formerly NSIT)',
    'nsut dwarka': 'Netaji Subhas University of Technology (NSUT, formerly NSIT)',
    'olive bar & kitchen': 'Olive Bar & Kitchen',
    'olive bar and kitchen': 'Olive Bar & Kitchen',
    'olive mehrauli': 'Olive Bar & Kitchen',
    'olive qutub': 'Olive Bar & Kitchen',
    'olive qutub mehrauli': 'Olive Bar & Kitchen',
    'original keventers': 'Keventers (Original Milkshake Stand)',
    'pandit gaya prasad': 'Pt. Gaya Prasad Shiv Charan (Paranthe Wali Gali)',
    'paranthe wali gali': 'Pt. Gaya Prasad Shiv Charan (Paranthe Wali Gali)',
    'parsi cafe delhi': 'SodaBottleOpenerWala (Khan Market)',
    'pavilion 75': 'Pavilion 75 (Welcomhotel Dwarka)',
    'pavilion 75 buffet': 'Pavilion 75 (Welcomhotel Dwarka)',
    'pirates of grill': 'Pirates of Grill (Rajouri Garden)',
    'pirates of grill delhi': 'Pirates of Grill (Rajouri Garden)',
    'pirates of grill rajouri': 'Pirates of Grill (Rajouri Garden)',
    "qd's": "QD's Restaurant (Hudson Lane)",
    'qds': "QD's Restaurant (Hudson Lane)",
    'qds hudson lane': "QD's Restaurant (Hudson Lane)",
    'qds restaurant': "QD's Restaurant (Hudson Lane)",
    'qds tandoori momos': "QD's Restaurant (Hudson Lane)",
    'rajdhani college': 'Rajdhani College',
    'rajdhani college delhi': 'Rajdhani College',
    'rajdhani du': 'Rajdhani College',
    'rajdhani raja garden': 'Rajdhani College',
    'rajguru college': 'Shaheed Rajguru College of Applied Sciences for Women (SRCASW)',
    'rajguru du': 'Shaheed Rajguru College of Applied Sciences for Women (SRCASW)',
    'rajinder da dhaba': 'Rajinder Da Dhaba',
    'rajinder da dhaba safdarjung': 'Rajinder Da Dhaba',
    'rajinder dhaba': 'Rajinder Da Dhaba',
    'rajouri buffet': 'Pirates of Grill (Rajouri Garden)',
    'ram lal anand': 'Ram Lal Anand College (RLA)',
    'ram lal anand college': 'Ram Lal Anand College (RLA)',
    'ramjas': 'Ramjas College',
    'ramjas college': 'Ramjas College',
    'ramjas college delhi': 'Ramjas College',
    'ramjas du': 'Ramjas College',
    'ramjas north campus': 'Ramjas College',
    'rdd delhi': 'Rajinder Da Dhaba',
    'restaurant a': 'Restaurant A (Traditional Kitchen)',
    'rla': 'Ram Lal Anand College (RLA)',
    'rla du': 'Ram Lal Anand College (RLA)',
    'rla south campus': 'Ram Lal Anand College (RLA)',
    'roshan di kulfi': 'Roshan Di Kulfi',
    'roshan di kulfi delhi': 'Roshan Di Kulfi',
    'roshan kulfi karol bagh': 'Roshan Di Kulfi',
    'runway 1': 'Runway 1',
    'runway 1 rohini': 'Runway 1',
    'runway1 metro walk': 'Runway 1',
    'safdarjung medical college': 'Vardhman Mahavir Medical College & Safdarjung Hospital (VMMC)',
    'sagar ratna': 'Sagar Ratna (Defence Colony)',
    'sagar ratna defence colony': 'Sagar Ratna (Defence Colony)',
    'sagar ratna delhi': 'Sagar Ratna (Defence Colony)',
    'sagar ratna south indian': 'Sagar Ratna (Defence Colony)',
    'saravana bhavan': 'Saravana Bhavan',
    'saravana bhavan connaught place': 'Saravana Bhavan',
    'saravana bhavan cp': 'Saravana Bhavan',
    'sbsc': 'Shaheed Bhagat Singh College (SBSC)',
    'sbsc du': 'Shaheed Bhagat Singh College (SBSC)',
    'sbsc sheikh sarai': 'Shaheed Bhagat Singh College (SBSC)',
    'sbsc south campus': 'Shaheed Bhagat Singh College (SBSC)',
    'sed nsp': 'Shake Eat Dance',
    'sggs': 'Sri Guru Gobind Singh College of Commerce (SGGSCC)',
    'sggscc': 'Sri Guru Gobind Singh College of Commerce (SGGSCC)',
    'sggscc pitampura': 'Sri Guru Gobind Singh College of Commerce (SGGSCC)',
    'sgtb khalsa': 'Sri Guru Tegh Bahadur Khalsa College (SGTB Khalsa)',
    'sgtb khalsa college': 'Sri Guru Tegh Bahadur Khalsa College (SGTB Khalsa)',
    'shaheed bhagat singh college': 'Shaheed Bhagat Singh College (SBSC)',
    'shaheed rajguru': 'Shaheed Rajguru College of Applied Sciences for Women (SRCASW)',
    'shaheed sukhdev': 'Shaheed Sukhdev College of Business Studies (SSCBS)',
    'shaheed sukhdev college of business studies': 'Shaheed Sukhdev College of Business Studies (SSCBS)',
    'shake eat dance': 'Shake Eat Dance',
    'shake eat dance nsp': 'Shake Eat Dance',
    'shake eat dance pitampura': 'Shake Eat Dance',
    'shangri la tamra': 'Tamra',
    'sheraton saket dakshin': 'Dakshin',
    'shivaji college': 'Shivaji College',
    'shivaji college delhi': 'Shivaji College',
    'shivaji du': 'Shivaji College',
    'shivaji raja garden': 'Shivaji College',
    'shri ram college': 'Shri Ram College of Commerce (SRCC)',
    'shri ram college of commerce': 'Shri Ram College of Commerce (SRCC)',
    'shriram college of commerce': 'Shri Ram College of Commerce (SRCC)',
    'shyam lal college': 'Shyam Lal College (SLC)',
    'shyam lal shahdara': 'Shyam Lal College (SLC)',
    'slc': 'Shyam Lal College (SLC)',
    'slc du': 'Shyam Lal College (SLC)',
    'social cafe delhi': 'Hauz Khas Social',
    'social hauz khas': 'Hauz Khas Social',
    'social hkv': 'Hauz Khas Social',
    'soda bottle opener wala': 'SodaBottleOpenerWala (Khan Market)',
    'sodabottleopenerwala': 'SodaBottleOpenerWala (Khan Market)',
    'sodabottleopenerwala khan market': 'SodaBottleOpenerWala (Khan Market)',
    'spice art': 'Spice Art',
    'spice art crowne plaza': 'Spice Art',
    'spice art rohini': 'Spice Art',
    'srcasw': 'Shaheed Rajguru College of Applied Sciences for Women (SRCASW)',
    'srcasw vasundhara': 'Shaheed Rajguru College of Applied Sciences for Women (SRCASW)',
    'srcc': 'Shri Ram College of Commerce (SRCC)',
    'srcc delhi': 'Shri Ram College of Commerce (SRCC)',
    'srcc north campus': 'Shri Ram College of Commerce (SRCC)',
    'sri guru gobind singh college of commerce': 'Sri Guru Gobind Singh College of Commerce (SGGSCC)',
    'sri venkateswara college': 'Sri Venkateswara College (Venky)',
    'sscbs': 'Shaheed Sukhdev College of Business Studies (SSCBS)',
    "st stephen's": "St. Stephen's College",
    "st stephen's college": "St. Stephen's College",
    'st stephens': "St. Stephen's College",
    'state university c': 'Institution C (State University Campus)',
    'stephens': "St. Stephen's College",
    'stephens college delhi': "St. Stephen's College",
    'stephens du': "St. Stephen's College",
    'stuffed kulfi delhi': 'Kuremal Mohan Lal Kulfi Wale',
    'sukhdev': 'Shaheed Sukhdev College of Business Studies (SSCBS)',
    'suruchi': 'Suruchi Restaurant',
    'suruchi karol bagh': 'Suruchi Restaurant',
    'suruchi restaurant': 'Suruchi Restaurant',
    'suruchi veg thali': 'Suruchi Restaurant',
    'svc du': 'Sri Venkateswara College (Venky)',
    'take off scarlet': 'Take Off Scarlet (TOS)',
    'take off scarlet club road': 'Take Off Scarlet (TOS)',
    'tamra': 'Tamra',
    'tamra connaught place': 'Tamra',
    'tamra delhi': 'Tamra',
    'tamra shangri la': 'Tamra',
    'tech campus a': 'Institution A (Technical Campus)',
    'tech institute d': 'Institution D (Institute of Technology)',
    'the big chill cafe': 'The Big Chill Café (Khan Market)',
    'the lodhi restaurant': 'Indian Accent',
    'the original 1947 butter chicken': 'Daryaganj Restaurant',
    'the wood box cafe': 'The Wood Box Cafe',
    'tonino cp': 'Caffè Tonino',
    'tonino plaza cinema': 'Caffè Tonino',
    'tos delhi': 'Take Off Scarlet (TOS)',
    'tos punjabi bagh': 'Take Off Scarlet (TOS)',
    'university campus c': 'Institution C (State University Campus)',
    'vardhman mahavir medical college': 'Vardhman Mahavir Medical College & Safdarjung Hospital (VMMC)',
    'venkateswara college': 'Sri Venkateswara College (Venky)',
    'venky': 'Sri Venkateswara College (Venky)',
    'venky south campus': 'Sri Venkateswara College (Venky)',
    'vivekananda college': 'Vivekananda College',
    'vivekananda college vivek vihar': 'Vivekananda College',
    'vivekananda du': 'Vivekananda College',
    'vivekananda east delhi': 'Vivekananda College',
    'vmmc': 'Vardhman Mahavir Medical College & Safdarjung Hospital (VMMC)',
    'vmmc safdarjung': 'Vardhman Mahavir Medical College & Safdarjung Hospital (VMMC)',
    'welcomhotel dwarka dining': 'Pavilion 75 (Welcomhotel Dwarka)',
    "wenger's": "Wenger's",
    "wenger's deli": "Wenger's Deli",
    'wengers': "Wenger's",
    'wengers bakery': "Wenger's",
    'wengers cafe': "Wenger's Deli",
    'wengers connaught place': "Wenger's",
    'wengers cp': "Wenger's",
    'wengers deli': "Wenger's Deli",
    'wengers deli cp': "Wenger's Deli",
    'wood box cafe': 'The Wood Box Cafe',
    'wood box cafe delhi': 'The Wood Box Cafe',
    'wood box hudson lane': 'The Wood Box Cafe',
    'yum yum cha': 'Yum Yum Cha (Saket)',
    'yum yum cha delhi': 'Yum Yum Cha (Saket)',
    'yum yum cha saket': 'Yum Yum Cha (Saket)',
    'yum yum cha select citywalk': 'Yum Yum Cha (Saket)',
    'zakir husain college': 'Zakir Husain Delhi College (ZHDC)',
    'zakir husain delhi college': 'Zakir Husain Delhi College (ZHDC)',
    'zakir husain du': 'Zakir Husain Delhi College (ZHDC)',
    'zakir hussain': 'Zakir Husain Delhi College (ZHDC)',
    'zhdc': 'Zakir Husain Delhi College (ZHDC)'}

def haversine_distance(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """
    Computes the great-circle distance between two points on the Earth's surface (in meters).
    """
    R = 6371000.0  # Earth's radius in meters
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    delta_phi = math.radians(lat2 - lat1)
    delta_lambda = math.radians(lon2 - lon1)

    a = (math.sin(delta_phi / 2.0) ** 2 +
         math.cos(phi1) * math.cos(phi2) * math.sin(delta_lambda / 2.0) ** 2)
    c = 2.0 * math.atan2(math.sqrt(a), math.sqrt(1.0 - a))
    return R * c

def normalize_entity_name(name: str) -> str:
    """
    Strips noise words like 'the', 'restaurant', 'cafe', 'delhi', 'cp', 'college'
    for clean entity canonicalization.
    """
    cleaned = clean_text(name).lower()
    cleaned = re.sub(r"\b(the|restaurant|cafe|bar|bistro|pizzeria|hotel|institute|college|university|of|technology|delhi|cp|connaught place)\b", " ", cleaned)
    cleaned = re.sub(r"[^\w\s]", " ", cleaned)
    return re.sub(r"\s+", " ", cleaned).strip()

def jaro_winkler_similarity(s1: str, s2: str) -> float:
    """
    Lightweight pure-python Jaro string similarity calculation.
    """
    if s1 == s2:
        return 1.0
    len1, len2 = len(s1), len(s2)
    if len1 == 0 or len2 == 0:
        return 0.0

    match_distance = max(len1, len2) // 2 - 1
    s1_matches = [False] * len1
    s2_matches = [False] * len2
    matches = 0
    transpositions = 0

    for i in range(len1):
        start = max(0, i - match_distance)
        end = min(i + match_distance + 1, len2)
        for j in range(start, end):
            if s2_matches[j]:
                continue
            if s1[i] == s2[j]:
                s1_matches[i] = True
                s2_matches[j] = True
                matches += 1
                break

    if matches == 0:
        return 0.0

    k = 0
    for i in range(len1):
        if not s1_matches[i]:
            continue
        while not s2_matches[k]:
            k += 1
        if s1[i] != s2[k]:
            transpositions += 1
        k += 1

    transpositions //= 2
    jaro = (matches / len1 + matches / len2 + (matches - transpositions) / matches) / 3.0

    # Winkler prefix bonus
    prefix = 0
    for i in range(min(4, len1, len2)):
        if s1[i] == s2[i]:
            prefix += 1
        else:
            break

    return jaro + (prefix * 0.1 * (1.0 - jaro))

class EntityResolver:
    """
    Multi-strategy Entity Resolution engine.
    Combines:
    1. Direct Acronym & Alias Mapping
    2. Lexical canonicalization & token overlap
    3. Character n-gram TF-IDF cosine similarity
    4. Jaro-Winkler string distance
    5. Geographic proximity distance (when coordinates are available)
    6. Explicit UNRESOLVED_DISAMBIGUATION flagging for low-confidence pairs.
    """

    def __init__(self, match_threshold: float = 0.72):
        self.match_threshold = match_threshold

    def calculate_match_score(
        self,
        mention: str,
        target: str,
        mention_coords: Optional[Tuple[float, float]] = None,
        target_coords: Optional[Tuple[float, float]] = None
    ) -> float:
        clean_m = mention.lower().strip()
        clean_t = target.lower().strip()

        # 1. Alias / Acronym check
        if KNOWN_ALIASES_MAP.get(clean_m) and KNOWN_ALIASES_MAP.get(clean_m).lower() == clean_t:
            return 1.0
        if KNOWN_ALIASES_MAP.get(clean_t) and KNOWN_ALIASES_MAP.get(clean_t).lower() == clean_m:
            return 1.0

        norm_m = normalize_entity_name(mention)
        norm_t = normalize_entity_name(target)

        if not norm_m or not norm_t:
            return 0.0

        if norm_m == norm_t:
            return 1.0

        # Substring exact check
        if norm_m in norm_t or norm_t in norm_m:
            shorter, longer = (norm_m, norm_t) if len(norm_m) < len(norm_t) else (norm_t, norm_m)
            if len(shorter) >= 4:
                return 0.90 + 0.10 * (len(shorter) / len(longer))

        # Jaro-Winkler similarity
        jw = jaro_winkler_similarity(norm_m, norm_t)

        # Character 3-gram similarity
        vectorizer = TfidfVectorizer(analyzer="char_wb", ngram_range=(2, 3))
        try:
            tfidf = vectorizer.fit_transform([norm_m, norm_t])
            ngram_sim = float(cosine_similarity(tfidf[0:1], tfidf[1:2])[0][0])
        except ValueError:
            ngram_sim = 0.0

        score = 0.55 * jw + 0.45 * ngram_sim

        # Geographic proximity boost if both coordinates are present
        if mention_coords and target_coords:
            dist = haversine_distance(mention_coords[0], mention_coords[1], target_coords[0], target_coords[1])
            if dist < 200:  # Within 200 meters
                score = min(1.0, score + 0.20)
            elif dist > 15000:  # Over 15 km away, penalize heavily
                score = max(0.0, score - 0.35)

        return round(score, 3)

    def resolve(
        self,
        mention: str,
        candidates: List[str],
        mention_coords: Optional[Tuple[float, float]] = None,
        candidate_coords: Optional[Dict[str, Tuple[float, float]]] = None
    ) -> Tuple[Optional[str], float]:
        """
        Resolves mention to best matching candidate above match_threshold.
        Returns: (best_candidate, best_score)
        """
        cand, score, _ = self.resolve_with_details(mention, candidates, mention_coords, candidate_coords)
        return cand, score

    def resolve_with_details(
        self,
        mention: str,
        candidates: List[str],
        mention_coords: Optional[Tuple[float, float]] = None,
        candidate_coords: Optional[Dict[str, Tuple[float, float]]] = None
    ) -> Tuple[Optional[str], float, str]:
        """
        Resolves mention to best matching candidate above match_threshold with status label.
        Returns: (best_candidate, best_score, status_label)
        status_label: "RESOLVED_EXACT" | "RESOLVED_ALIAS" | "RESOLVED_SIMILARITY" | "UNRESOLVED_DISAMBIGUATION"
        """
        best_candidate = None
        best_score = 0.0

        clean_m = mention.lower().strip()
        if clean_m in KNOWN_ALIASES_MAP:
            mapped = KNOWN_ALIASES_MAP[clean_m]
            for cand in candidates:
                if cand.lower().strip() == mapped.lower().strip() or mapped.lower() in cand.lower():
                    return cand, 1.0, "RESOLVED_ALIAS"

        for cand in candidates:
            c_coords = candidate_coords.get(cand) if candidate_coords else None
            score = self.calculate_match_score(mention, cand, mention_coords, c_coords)
            if score > best_score:
                best_score = score
                best_candidate = cand

        if best_score >= 0.95:
            return best_candidate, best_score, "RESOLVED_EXACT"
        elif best_score >= self.match_threshold:
            return best_candidate, best_score, "RESOLVED_SIMILARITY"
        else:
            return None, best_score, "UNRESOLVED_DISAMBIGUATION"

