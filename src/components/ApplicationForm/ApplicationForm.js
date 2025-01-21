import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ApplicationForm.css';
import Swal from "sweetalert2";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useIndividualUserData from '../../hooks/useIndividualUserData';

const ApplicationForm = () => {
    const [applicant, setApplicant] = useState({});
    let [id, setId] = useState('');
    const [districtObject, setDistrictObject] = useState({});
    const [dist, setDist] = useState([]);
    const [dist2, setDist2] = useState([]);
    const [upzilla, setUpzilla] = useState();
    const [exam1, setExam1] = useState([]);
    const [exam2, setExam2] = useState([]);
    const [exam3, setExam3] = useState([]);
    // const [fill, setFill] = useState([]);
    const [care, setCare] = useState([]);
    const [village, setVillage] = useState([]);
    const [mupzilla, setMupzilla] = useState([]);
    const [ssc_gpa, setSsc_gpa] = useState([]);
    const [hsc_gpa, setHsc_gpa] = useState([]);
    const [hnrs_gpa, setHnrs_gpa] = useState([]);
    const { registerUser, isLoading } = useAuth();
    const [canImg, setCanImg] = useState(null);
    const [canSign, setCanSign] = useState(null);


    // const [isDisable, setIsDisable] = ('');
    // const [isDisabled] = ([]);


    // this code write for repl present address to permanent address
    // let cupzilla = mupzilla;
    // let checkboxItem = document.getElementById('p_chk');
    // let permanent = document.getElementById('P_CareOf');
    // let permanentVillage = document.getElementById('P_Village');
    // let permanentDist = document.getElementById('P_District');
    // let permanentUpz = document.getElementById('P_Upz');


    let ssc4_display;
    let ssc5_display;
    let hsc4_display;
    let hsc5_display;
    let hnrs4_display;
    let hnrs5_display;
    ssc4_display = 'none';
    ssc5_display = 'none';
    hsc4_display = 'none';
    hsc5_display = 'none';
    hnrs4_display = 'none';
    hnrs5_display = 'none';


    if (ssc_gpa === '4') {
        ssc4_display = 'block';
    }
    if (ssc_gpa === '5') {
        ssc5_display = 'block';
    }

    if (hsc_gpa === '4') {
        hsc4_display = 'block';
    }
    if (hsc_gpa === '5') {
        hsc5_display = 'block';
    }

    if (hnrs_gpa === '4') {
        hnrs4_display = 'block';
    }
    if (hnrs_gpa === '5') {
        hnrs5_display = 'block';
    }


    // console.log(presentValue);

    let m_dist = [];
    let p_dist = [];
    let m_upzilla = [];
    let p_upzilla = [];
    let union;
    let union1 = [];




    let bday = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    let byear = ['1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004'];

    let ssc_board = ['Dhaka', 'Mymensingh', 'Cumilla', 'Rajshahi', 'Jashore', 'Chittagong', 'Barishal', 'Sylhet', 'Dinajpur', 'Madrasah', 'Open University', 'The State Medical Faculty of Bangladesh', 'Pharmacy Council of Bangladesh', 'Cambridge International - IGCE', 'Edexcel International', 'Bangladesh Technical Education Board (BTEB)', 'Others'];

    let ssc_sub = {
        SSC: ['Science', 'Humanities', 'Business Studies', 'Others'],

        SSC_Vocational: ['Agriculture Technology', 'Architecture and Interior Design Technology', 'Automobile Technology', 'Civil Technology', 'Computer Science & Technology',
            'Chemical Technology', 'Electrical Technology', 'Data Telecommunication and Network Technology', 'Electrical and Electronics Technology', 'Environmental Technology', 'Instrumentation & Process Control Technology', 'Mechanical Technology', 'Mechatronics Technology', 'Power Technology', 'Refregeration & Air Conditioning Technology', 'Telecommunication Technology', 'Electronics Technology', 'Library Science', 'Survey',
            'General Mechanics', 'Firm Machinery', 'Textile Technology', 'Agro-Based Food', 'General Electronics', 'Automotive', 'Building Maintenance', 'Wood Working', 'Ceramic', 'Civil Construction', 'Computer and Information Technology', 'Civil Drafting with CAD', 'Mechanical Drafting with CAD', 'Dress Making', 'Dyeing, Printing and Finishing', 'Electrical Maintenance Works', 'Farm Machinery', 'Fish Culture and Breeding', 'Food Processing and Preservation', ' Livestock Rearing and Farming', 'Machine Tools Operation', 'Poultry Rearing and Farming', 'Patient Care', 'General Electrical Works', 'Plumbing and Pipe Fittings', 'Refrigeration and Air Conditioning', 'Glass', 'Flower, Fruit and Vegetable Cultivation', 'Weaving', 'Welding and Fabrication', 'Architectural Drafting with CAD', 'Knitting', 'Shrimp Culture and Breeding', 'Others'],

        Diploma_in_Engineering: ['Agriculture', 'Architecture and Interior Design Technology', 'Automobile Technology', 'Civil Technology', 'Computer Science', 'Computer Technology', 'Computer Science & Technology', 'Computer Science & Engineering Technology', 'Chemical Technology', 'Electrical Technology', 'Data Telecommunication and Network Technology', 'Electrical and Electronics Technology', 'Environmental Technology', 'Instrumentation & Process Control Technology', 'Mechanical Technology', 'Mechatronics Technology', 'Power Technology', 'Printing Technology', 'Refrigeration & Air Conditioning Technology', 'Textile Technology', 'Telecommunication Technology', 'Electronics Technology', 'Library Science', 'Survey', 'General Mechanics', 'Farm Machinery', 'Shipbuilding Technology', 'Ceramic Technology', 'Graphic Design Technology', 'Glass Technology', 'Textile Engineering', 'Jute Technology', 'Garments Design and Pattern Making', 'Food Technology', 'Others'],
        Diploma_in_Medical_Technology: ['Radiography', 'Laboratory', 'Dental', 'Physiotherapy', 'Radiotherapy', 'Pharmacy', 'Others'],
        HSC_Vocational: ['Agro Machinery', 'Automobile', 'Building Maintenance and Construction', 'Clothing and Garments Finishing', 'Computer Operation and Maintenance', 'Drafting Civil', 'Electrical Works and Maintenance', 'Electronic Control and Communication', 'Fish Culture and Breeding', 'Machine Tools Operation and Maintenance', 'Poultry Rearing and Farming', 'Refrigeration and Air-conditioning', 'Welding and Fabrication', 'Industrial Wood Working', 'Food', 'Mechatronics', 'Others'],
        Diploma_in_Agriculture: ['Agriculture', 'Others']
    };
    let bachelor = {
        BSC_Engineering: [
            'Aeronautical Engineering',
            'Architecture',
            'Chemical Engineering',
            'Civil Engineering',
            'Computer Engineering',
            'Computer Science',
            'Computer Science & Engineering',
            'Computer Science & Information Technology',
            'Electrical & Electronics Engineering',
            'Electrical Engineering',
            'Electronic Engineering',
            'Electronics & Communication Engineering',
            'Electronics & Telecommunication Engineering',
            'Environmental Engineering',
            'Food and Process Engineering',
            'Genetic Engineering',
            'Industrial & Production Engineering',
            'Information and Communication Engineering',
            'Information and Communication Technology',
            'Leather Technology',
            'Marine Engineering',
            'Materials Science & Engineering',
            'Mechanical Engineering',
            'Metallurgical Engineering',
            'Microwave Engineering',
            'Mineral Engineering',
            'Mining Engineering',
            'Naval Architecture',
            'Physical Planning',
            'Regional Planning',
            'Software Engineering',
            'Structural Engineering',
            'Telecommunication Engineering',
            'Textile Technology',
            'Town Planning',
            'Urban & Regional Planning',
            'Water Resource Engineering',
            'Others'
        ],
        BSC_in_Agriculture: [
            'Agr.Co-operative & Marketing',
            'Agriculture Chemistry',
            'Agriculture Co-operatives',
            'Agriculture Economics',
            'Agriculture Engineering',
            'Agriculture Extension',
            'Agriculture Finance',
            'Agriculture Marketing',
            'Agriculture Science',
            'Agriculture Soil Science',
            'Agriculture Statistics',
            'Agriculture Water Management',
            'Agro Forestry',
            'Agronnomy',
            'Agronomy & Aquaculture',
            'Agronomy & Aquaculture Extension',
            'Anatomology',
            'Anatomy & Histology',
            'Animal Breeding & Genetic',
            'Animal Husbandry',
            'Animal Nutrition',
            'Animal Science',
            'Bio-Technology',
            'Breeding',
            'Business Studies',
            'Corp Botany',
            'Dairy Science',
            'Doc.of Veterinary Science',
            'Farm Power & Machinery',
            'Farm Structure',
            'Fisheries',
            'Fisheries & Aquaculture',
            'Fisheries Biology',
            'Fisheries Management',
            'Fisheries Technology',
            'Food Tech. & Rural Industry',
            'Forestry',
            'Horticulture',
            'Livestock',
            'Microbiology & Hygenic',
            'Paratrology',
            'Plant Pathology',
            'Poultry Science',
            'Production Economics',
            'Rural Sociology',
            'Surgery & Obstate',
            'Others'
        ],
        MBBS: [
            'Dental Surgery',
            'Medicine & Surgery',
            'Others'
        ],
        Honors: [
            'Accounting',
            'Agriculture',
            'Anthropology',
            'Applied Chemistry',
            'Applied Mathematics',
            'Applied Physics',
            'Archaeology',
            'Bangla',
            'Banking',
            'Biochemistry',
            'Botany',
            'Business Administration',
            'Chemistry',
            'Clinical Psychology',
            'Communication Disorders',
            'Computer Engineering',
            'Computer Science',
            'Computer Science & Engineering',
            'Computer Science & Information Technology',
            'Criminology',
            'Criminology & Police Science',
            'Development Studies',
            'Drama & Music',
            'Drawing and Printing',
            'Economics',
            'Education',
            'English',
            'Environmental science',
            'Ethics',
            'Finance',
            'Finance and Banking',
            'Fine Arts',
            'Folklore',
            'Forestry',
            'Genetic Engineering and Biotechnology',
            'Genetic and Breeding',
            'Geography',
            'Geography and Environment',
            'Geology/Geology and Mining',
            'Government and Politics',
            'Graphics',
            'Health Economics',
            'History',
            'History of Music',
            'Home Economics',
            'Industrial Arts',
            'Information Science and Library Management',
            'Information Technology',
            'Information and Communication Technology',
            'International Law',
            'International Relations',
            'Islamic History and Culture',
            'Islamic Studies',
            'Language/Linguistic',
            'Law/Jurisprudence',
            'Library Science',
            'Management',
            'Marine Science',
            'Marketing',
            'Mass Communication & Journalism',
            'Materials Science & Engineering',
            'Mathematics',
            'Medical Technology',
            'Microbiology',
            'Nutrition and Food Science',
            'Pali',
            'Peace and Conflict Studies',
            'Persian',
            'Pharmaceutical Chemistry',
            'Pharmacy',
            'Philosophy',
            'Physics',
            'Political Science',
            'Population Science',
            'Population Science and Human Resource Development',
            'Printing and Publication Studies',
            'Psychology',
            'Public Administration',
            'Public Finance',
            'Sanskrit',
            'Social Welfare/Social Work',
            'Social Works',
            'Sociology',
            'Soil Science',
            'Soil Water and Environment Science',
            'Statistics',
            'Television, Film and Photography',
            'Urban Development',
            'Urdu',
            'Women Studies',
            'Women and Gender Studies',
            'World Religion',
            'Zoology',
            'Others'
        ],
        Pass_Course: [
            'B.A',
            'B.S.S',
            'B.Sc',
            'B.com',
            'L.L.B',
            'Others'
        ],
        Fazil: [
            'Akaid',
            'Arabic',
            'Fikha',
            'Hadith',
            'Islamic Studies',
            'Modern Arabic',
            'Tafsir',
            'Others'
        ],
        BBA: [
            'Accounting',
            'Accounting and Information Systems',
            'Banking',
            'Banking and Insurance',
            'Business Administration',
            'Finance',
            'Finance and Banking',
            'Human Resource Management',
            'International Business',
            'Management',
            'Management Information Systems',
            'Marketing',
            'Organization Strategy and Leadership',
            'Tourism and Hospitality Management',
            'Others'
        ],
        Graduation_Equivalent: [
            'A & B Section of A.M.I.E',
            'Accounting',
            'Accounting and Information Systems',
            'Aeronautical Engineering',
            'Agr.Co-operative & Marketing',
            'Agriculture',
            'Agriculture Chemistry',
            'Agriculture Co-operatives',
            'Agriculture Economics',
            'Agriculture Engineering',
            'Agriculture Extension',
            'Agriculture Finance',
            'Agriculture Marketing',
            'Agriculture Science',
            'Agriculture Soil Science',
            'Agriculture Statistics',
            'Agriculture Water Management',
            'Agro Forestry',
            'Agronnomy',
            'Agronomy & Aquaculture',
            'Agronomy & Aquaculture Extension',
            'Akaid',
            'Anatomology',
            'Anatomy & Histology',
            'Animal Breeding & Genetic',
            'Animal Husbandry',
            'Animal Nutrition',
            'Animal Science',
            'Anthropology',
            'Applied Chemistry',
            'Applied Mathematics',
            'Applied Physics',
            'Arabic',
            'Archaeology',
            'Architecture',
            'B.A',
            'B.S.S',
            'B.Sc',
            'B.com',
            'Bangla',
            'Banking',
            'Banking and Insurance',
            'Bio-Technology',
            'Biochemistry',
            'Botany',
            'Breeding',
            'Business Administration',
            'Business Studies',
            'Chemical Engineering',
            'Chemistry',
            'Civil Engineering',
            'Clinical Psychology',
            'Communication Disorders',
            'Computer Engineering',
            'Computer Science',
            'Computer Science & Engineering',
            'Computer Science & Information Technology',
            'Corp Botany',
            'Criminology',
            'Criminology & Police Science',
            'Dairy Science',
            'Dental Surgery',
            'Development Studies',
            'Doc.of Veterinary Science',
            'Drama & Music',
            'Drawing and Printing',
            'Economics',
            'Education',
            'Electrical & Electronics Engineering',
            'Electrical Engineering',
            'Electronic Engineering',
            'Electronics & Communication Engineering',
            'Electronics & Telecommunication Engineering',
            'English',
            'Environmental Engineering',
            'Environmental science',
            'Ethics',
            'Farm Power & Machinery',
            'Farm Structure',
            'Fikha',
            'Finance',
            'Finance and Banking',
            'Fine Arts',
            'Fisheries',
            'Fisheries & Aquaculture',
            'Fisheries Biology',
            'Fisheries Management',
            'Fisheries Technology',
            'Folklore',
            'Food Tech. & Rural Industry',
            'Food and Process Engineering',
            'Forestry',
            'Genetic Engineering',
            'Genetic Engineering and Biotechnology',
            'Genetic and Breeding',
            'Geography',
            'Geography and Environment',
            'Geology/Geology and Mining',
            'Government and Politics',
            'Graphics',
            'Hadith',
            'Health Economics',
            'History',
            'History of Music',
            'Home Economics',
            'Horticulture',
            'Human Resource Management',
            'Industrial & Production Engineering',
            'Industrial Arts',
            'Information Science and Library Management',
            'Information Technology',
            'Information and Communication Engineering',
            'International Business',
            'International Law',
            'International Relations',
            'Islamic History and Culture',
            'Islamic Studies',
            'L.L.B',
            'Language/Linguistic',
            'Law/Jurisprudence',
            'Leather Technology',
            'Library Science',
            'Livestock',
            'Management',
            'Management Information Systems',
            'Marine Engineering',
            'Marine Science',
            'Marketing',
            'Mass Communication & Journalism',
            'Materials Science & Engineering',
            'Mathematics',
            'Mechanical Engineering',
            'Medical Technology',
            'Medicine & Surgery',
            'Metallurgical Engineering',
            'Microbiology',
            'Microbiology & Hygenic',
            'Microwave Engineering',
            'Mineral Engineering',
            'Mining Engineering',
            'Modern Arabic',
            'Naval Architecture',
            'Nutrition and Food Science',
            'Organization Strategy and Leadership',
            'Pali',
            'Paratrology',
            'Peace and Conflict Studies',
            'Persian',
            'Pharmaceutical Chemistry',
            'Pharmacy',
            'Philosophy',
            'Physical Planning',
            'Physics',
            'Plant Pathology',
            'Political Science',
            'Population Science',
            'Population Science and Human Resource Development',
            'Poultry Science',
            'Printing and Publication Studies',
            'Production Economics',
            'Psychology',
            'Public Administration',
            'Public Finance',
            'Regional Planning',
            'Rural Sociology',
            'Sanskrit',
            'Social Welfare/Social Work',
            'Social Works',
            'Sociology',
            'Software Engineering',
            'Soil Science',
            'Soil Water and Environment Science',
            'Statistics',
            'Structural Engineering',
            'Surgery & Obstate',
            'Tafsir',
            'Telecommunication Engineering',
            'Television, Film and Photography',
            'Textile Technology',
            'Tourism and Hospitality Management',
            'Town Planning',
            'Urban & Regional Planning',
            'Urban Development',
            'Urdu',
            'Water & Environment Science',
            'Water Resource Engineering',
            'Women Studies',
            'Women and Gender Studies',
            'World Religion',
            'Zoology',
            'Others'
        ]
    };
    let university = [
        'Ad-din Womens Medical College, Dhaka',
        'Ahsania Mission University of Science and Technology',
        'Ahsanullah University of Science and Technology',
        'America Bangladesh University',
        'American International University Bangladesh',
        'Anwer Khan Modern Medical College, Dhaka',
        'Anwer Khan Modern University',
        'ASA University Bangladesh',
        'Asian University for Women',
        'Asian University of Bangladesh',
        'Atish Dipankar University of Science & Technology',
        'Bandarban University',
        'Bangabandhu Sheikh Mujib Medical University',
        'Bangabandhu Sheikh Mujibur Rahman Agricultural University',
        'Bangabandhu Sheikh Mujibur Rahman Aviation And Aerospace University',
        'Bangabandhu Sheikh Mujibur Rahman Digital University',
        'Bangabandhu Sheikh Mujibur Rahman Maritime University',
        'Bangabandhu Sheikh Mujibur Rahman Science and Technology University',
        'Bangabandhu Sheikh Mujibur Rahman Univerisity, Kishoreganj',
        'Bangamata Sheikh Fojilatunnesa Mujib Science and Technology University',
        'Bangladesh Agricultural University,Mymensingh',
        'Bangladesh Airlines Training Centre (BATC)',
        'Bangladesh Army International University of Science & Technology(BAIUST) ,Comilla',
        'Bangladesh Army University of Engineering and Technology (BAUET), Qadirabad',
        'Bangladesh Army University of Science and Technology(BAUST), Saidpur',
        'Bangladesh Islami University',
        'Bangladesh Medical College',
        'Bangladesh Open University',
        'Bangladesh University',
        'Bangladesh University of Business & Technology (BUBT)',
        'Bangladesh University of Engineering & Technology',
        'Bangladesh University of Health Sciences',
        'Bangladesh University of Professionals',
        'Bangladesh University of Textiles',
        'Barisal University',
        'Barishal Engineering College',
        'Begum Rokeya University, Rangpur',
        'BGC Trust Medical College, Chittagong',
        'BGC Trust University Bangladesh, Chittagong',
        'BGMEA University of Fashion & Technology(BUFT)',
        '>BRAC University',
        'Britannia University',
        'Canadian University of Bangladesh',
        'CCN University of Science & Technology',
        'Central Medical College, Comilla',
        'Central University of Science and Technology',
        'Central Womens University',
        'Chandpur Science and Technology University',
        'Chittagong Independent University',
        'Chittagong Medical College',
        'Chittagong Medical University',
        'Chittagong University of Engineering & Technology',
        'Chittagong Veterinary and Animal Sciences University',
        'Chottagram Ma-O-Shishu Hospital Medical College',
        'City University',
        'Comilla Medical College',
        'Comilla University',
        'Community Based Medical College (cbmc), Mymensingh',
        'Community Medical College, Dhaka',
        'Coxs Bazar International University',
        'Coxs Bazar Medical College',
        'Daffodil International University',
        'Darul Ihsan University',
        'Delta Medical College, Dhaka',
        'Dhaka International University',
        'Dhaka Medical College',
        'Dhaka National Medical College',
        'Dhaka University',
        'Dhaka University of Engineering & Technology',
        'Dinajpur Medical College',
        'Durra Samad Rahman Red Crescent Womens Medical College, Sylhet',
        'East Delta University , Chittagong',
        'East West University',
        'Eastern Medical College, Comilla',
        'Eastern University',
        'Enam Medical College, Savar, Dhaka',
        'European University of Bangladesh',
        'Exim Bank Agricultural University, Bangladesh',
        'Fareast International University',
        'Faridpur Engineering College',
        'Faridpur Medical College',
        'Feni Medical College,Feni',
        'Feni University',
        'First Capital University of Bangladesh',
        'German University Bangladesh',
        'Global University Bangladesh',
        'Gono Bishwabidyalay, Savar, Dhaka',
        'Green Life Medical College, Dhaka',
        'Green University of Bangladesh',
        'Hajee Mohammad Danesh Science & Technology University',
        'Hamdard University Bangladesh',
        'Hobiganj Agricultural University',
        'Holy Family Red Crescent Medical College, Dhaka',
        'IBAIS University',
        'Ibn Sina Medical College, Dhaka',
        'Ibrahim Medical College, Dhaka',
        'Independent University, Bangladesh',
        'International Islamic University, Chittagong',
        'International Medical College, Gazipur',
        'International Standard University',
        'International University of Business Agriculture & Technology',
        'Ishakha International University, Bangladesh',
        'Islami Bank Medical College, Rajshahi',
        'Islamic Arabic University',
        'Islamic University',
        'Islamic University of Technology',
        'Islamic University of Technology, Gazipur',
        'Islamic University, Bangladesh',
        'Islamic University, Kushtia',
        'Jagannath University',
        'Jahangirnagar University',
        'Jahurul Islam Medical College, Kishoregonj',
        'Jalalabad Ragib-Rabeya Medical College, Sylhet',
        'Jatiya Kabi Kazi Nazrul Islam University',
        'Jessore Medical College',
        'Jessore Science & Technology University',
        'Jessore University of Science & Technology',
        'Khawja Yunus Ali Medical College, Sirajganj',
        'Khulna Agricultural University',
        'Khulna Khan Bahadur Ahsanullah University',
        'Khulna Medical College',
        'Khulna University',
        'Khulna University of Engineering and Technology',
        'Khwaja Yunus Ali University',
        'Kumudini Medical College, Tangail',
        'Kushtia Medical College',
        'Labaid Medical College, Dhanmondi, Dhaka',
        'Leading University, Sylhet',
        'MAG Osmani Medical College',
        'Manarat International University',
        'Maulana Bhasani Medical College',
        'Mawlana Bhashani Science & Technology University',
        'Medical College for Women and Hospital, Dhaka',
        'Metropolitan University, Sylhet',
        'Microland University of Science and Technology',
        'Military Institute of Science and Technology (MIST)',
        'Mymensingh Engineering College',
        'Mymensingh Medical College',
        'N.P.I University of Bangladesh',
        'National University',
        'Nightingale Medical College, Dhaka',
        'Noakhali Medical College',
        'Noakhali Science & Technology University',
        'North Bengal International University',
        'North Bengal Medical College, Sirajganj',
        'North East Medical College, Sylhet',
        'North East University Bangladesh',
        'North South University',
        'North Western University',
        'Northern International Medical College, Dhaka',
        'Northern Private Medical College, Rangpur',
        'Northern University Bangladesh',
        'Northern University of Business & Technology, Khulna',
        'Notre Dame University Bangladesh',
        'Pabna Medical College',
        'Pabna University of Science and Technology',
        'Patuakhali Science And Technology University',
        'Popular Medical College & Hospital, Dhaka',
        'Port City International University',
        'Premier University, Chittagong',
        'Presidency University',
        'Prime Medical College, Rangpur',
        'Prime University',
        'Primeasia University',
        'Pundra University of Science & Technology',
        'Queens University',
        'R.T.M Al-Kabir Technical University',
        'Rabindra Maitree University, Kushtia',
        'Rabindra University, Bangladesh',
        'Rajshahi Medical College',
        'Rajshahi Medical University',
        'Rajshahi Science & Technology University (RSTU), Natore',
        'Rajshahi University',
        'Rajshahi University of Engineering & Technology',
        'Ranada Prasad Shaha University',
        'Rangamati Science and Technology University',
        'Rangpur Community Hospital Medical College',
        'Rangpur Medical College',
        'Rangpur University',
        'Royal University of Dhaka',
        'Rupayan A.K.M Shamsuzzoha University',
        'Sahabuddin Medical College and Hospital',
        'Samaj Vittik Medical College, Mirzanagar, Savar',
        'Satkhira Medical College',
        'Shah Makhdum Management University, Rajshahi',
        'Shahabuddin Medical College, Dhaka',
        'Shaheed Nazrul Islam Medical College',
        'Shaheed Suhrawardy Medical College',
        'Shaheed Ziaur Rahman Medical College',
        'Shahjalal University of Science & Technology',
        'Shanto Mariam University of Creative Technology',
        'Sheikh Fazilatunnesa Mujib University',
        'Sheikh Hasina University',
        'Sheikh Sayera Khatun Medical College, Gopalganj',
        'Sher-e-Bangla Agricultural University',
        'Sher-E-Bangla Medical College',
        'Sir Salimullah Medical College',
        'Sonargaon University',
        'South Asian University',
        'Southeast University',
        'Southern Medical College, Chittagong',
        'Southern University Bangladesh',
        'Southern University of Bangladesh, Chittagong',
        'Stamford University, Bangladesh',
        'State University Of Bangladesh',
        'Sylhet Agricultural University',
        'Sylhet Engineering College',
        'Sylhet International University, Sylhet',
        'Sylhet Medical University',
        'Sylhet Women`s Medical College, Sylhet',
        'Tagore University of Creative Arts, Uttara, Dhaka, Bangladesh',
        'Tairunnessa Memorial Medical College, Gazipur',
        'The International University of Scholars',
        'The Millennium University',
        'The Peoples University of Bangladesh',
        'The University of Asia Pacific',
        'Times University, Bangladesh',
        'TMSS Medical College,Bogra',
        'Trust University, Barishal',
        'United International University',
        'University of Asia Pacific',
        'University of Barisal',
        'University of Brahmanbaria',
        'University of Chittagong',
        'University of Creative Technology, Chittagong',
        'University of Development Alternative',
        'University of Dhaka',
        'University of Global Village',
        'University of Information Technology & Sciences',
        'University of Liberal Arts Bangladesh',
        'University of Rajshahi',
        'University of Science & Technology, Chittagong',
        'University of Skill Enrichment and Technology',
        'University of South Asia',
        'Uttara Adhunik Medical College,Dhaka',
        'Uttara University',
        'Varendra University',
        'Victoria University of Bangladesh',
        'World University of Bangladesh',
        'Z. H. Sikder Women`s Medical College',
        'Z.H Sikder University of Science & Technology',
        'Z.N.R.F. University of Management Sciences',
        'Others'

    ];
    let pass_year = ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];


    if (exam1 === "Dakhil_Vocational") {
        setExam1("SSC_Vocational");
    }
    if (exam1 === "SSC_Equivalent") {
        setExam1("SSC");
    }
    if (exam1 === "O_Level") {
        setExam1("SSC");
    }
    if (exam1 === "Dakhil") {
        setExam1("SSC");
    }
    if (exam2 === "HSC") {
        setExam2("SSC")
    }
    if (exam2 === "Alim") {
        setExam2("SSC")
    }
    if (exam2 === "Business Management") {
        setExam2("SSC")
    }
    if (exam2 === "A Level") {
        setExam2("SSC")
    }
    if (exam2 === "HSC Equivalent") {
        setExam2("SSC")
    }

    let ssc = ssc_sub[exam1];
    let hsc = ssc_sub[exam2];
    let graduate = bachelor[exam3];
    let ssc1 = [];
    let hsc1 = [];
    let graduate1 = [];
    for (let n in ssc_sub[exam1]) {
        ssc1.push(ssc[n]);
    }
    for (let h in ssc_sub[exam2]) {
        hsc1.push(hsc[h]);
    }
    for (let g in bachelor[exam3]) {
        graduate1.push(graduate[g]);
    }



    useEffect(() => {
        fetch('./dist.json')
            .then(res => res.json())
            .then(data => setDistrictObject(data))
    }, []);

    for (let d in districtObject) {
        m_dist.push(d);
        p_dist.push(d);
    }
    for (let u in districtObject[dist]) {
        m_upzilla.push(u);
    }
    for (let up in districtObject[dist2]) {
        p_upzilla.push(up);
    }
    let upz = districtObject[dist];
    for (let y in upz) {
        union = upz[upzilla];
        for (let un in union) {
            union1.push(union[un]);
        }
    }
    /*   function showPreview(event) {
          if (event.target.files.length > 0) {
              var src = URL.createObjectURL(event.target.files[0]);
              var preview = document.getElementById("preview");
              preview.src = src;
              preview.style.display = "block";
              setCanImg(event.target.files[0]);
          }
  
      }
      function showPreview2(event) {
          if (event.target.files.length > 0) {
              var src = URL.createObjectURL(event.target.files[0]);
              var preview = document.getElementById("preview2");
              preview.src = src;
              preview.style.display = "block";
  
          }
      } */

    function sbBtn() {

        let sb = document.getElementById('submit_btn');
        let declare_chk = document.getElementById('declare');
        sb.disabled = true;
        if (declare_chk.checked === true) {
            sb.disabled = false;
        }

    }

    // Automatically filling same as current address
    // if (fill === 'cheked') {
    //     permanent.value = care;
    //     permanentVillage.value = village;
    //     permanentDist.value = dist;
    //     // p_upzilla.push(mupzilla);
    // }

    // const axiosPublic = useAxiosPublic();



    const axiosPublic = useAxiosPublic();
    const imgbbAPIKey = process.env.REACT_APP_IMAGE_HOSTING_API_KEY; // Replace with your ImageBB API key
    const imgbbURL = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    // console.log(imgbbAPIKey);
    // console.log(imgbbURL);


    const [images, setImages] = useState({ image1: null, image2: null });
    const [previews, setPreviews] = useState({ image1: null, image2: null });









    const [selectedColleges, setSelectedColleges] = useState([]);


    const collegeList = [
        "Dhaka College",
        "Notre Dame College, Dhaka",
        "Viqarunnisa Noon School and College, Dhaka",
        "Holy Cross College, Dhaka",
        "Government Science College, Dhaka",
        "Adamjee Cantonment College, Dhaka",
        "Rajshahi College",
        "Chittagong College",
        "Eden Mohila College, Dhaka",
        "Comilla Victoria Government College",
        "Government Brojomohun College, Barishal",
        "Carmichael College, Rangpur",
        "Mymensingh Ananda Mohan College",
        "Sylhet MC College",
        "Government Hazi Mohammad Mohsin College, Chattogram",
        "Jessore Government City College",
        "Dinajpur Government College",
        "Government Azizul Haque College, Bogura",
        "Shaheed Syed Nazrul Islam College, Mymensingh",
        "Pabna Edward College"
    ];





    const colors = [
        "bg-green-500",
        "bg-blue-500",
        "bg-yellow-500",
        "bg-red-500",
        "bg-purple-500",
        "bg-teal-500",
        "bg-pink-500",
        "bg-orange-500",
        "bg-indigo-500",
        "bg-gray-500",

    ];



    const handleCollegeSelect = (event) => {
        const selectedCollege = event.target.value;

        // Prevent duplicates and limit to 3 choices
        if (!selectedColleges.includes(selectedCollege) && selectedColleges.length < 10) {
            setSelectedColleges([...selectedColleges, selectedCollege]);
        }
    };

    const handleRemoveCollege = (college) => {
        setSelectedColleges(selectedColleges.filter(item => item !== college));
    };


    // Now you have the object with the 3 colleges
    console.log("Selected Colleges: ", selectedColleges);












    // Handle image change
    /* const handleImageChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        if (file) {
            // Update the images state
            setImages((prevImages) => ({
                ...prevImages,
                [name]: file,
            }));

            // Generate a preview URL
            const reader = new FileReader();
            reader.onload = () => {
                setPreviews((prevPreviews) => ({
                    ...prevPreviews,
                    [name]: reader.result, // Update the preview URL
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    console.log("get up images", images);
 */

    const handleImageChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
    
        if (!file) return;
    
        // Validate file type
        if (!file.type.includes("jpeg") && !file.type.includes("png")) {
            alert("Invalid file format. Please upload a JPG or PNG image.");
            return;
        }
    
        // Validate dimensions
        const img = new Image();
        img.onload = () => {
            if (
                (name === "image1" && (img.width !== 300 || img.height !== 300)) ||
                (name === "image2" && (img.width !== 120 || img.height !== 80))
            ) {
                alert(
                    `Invalid dimensions for ${
                        name === "image1" ? "Applicant Image" : "Signature"
                    }. Expected ${
                        name === "image1" ? "300x300" : "120x80"
                    } pixels.`
                );
                return;
            }
    
            // If validation passes, update state
            setImages((prevImages) => ({
                ...prevImages,
                [name]: file,
            }));
    
            // Generate a preview URL
            const reader = new FileReader();
            reader.onload = () => {
                setPreviews((prevPreviews) => ({
                    ...prevPreviews,
                    [name]: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        };
        img.onerror = () => {
            alert("Invalid image file.");
        };
        img.src = URL.createObjectURL(file);
    };
    







    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        /*     const file = e.target.files[0]; 
            console.log(file); */


        const newObj = { ...applicant }
        newObj[field] = value;
        setApplicant(newObj);
    }




    /*   const { userData } = useIndividualUserData();
      const { images:imagess } = userData || {};
      console.log("user images",imagess); */





    //    age validation
    const [errorMessage, setErrorMessage] = useState("");
    const [birthDate, setBirthDate] = useState({
        b_day: "0",       // Updated field name
        b_month: "select", // Updated field name
        b_year: "selected" // Updated field name
    });

    // Arrays for days, months, and years
    const dayOptions = Array.from({ length: 31 }, (_, i) => i + 1); // For days
    const monthOptions = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const yearOptions = Array.from({ length: 100 }, (_, i) => 2025 - i); // Years (1925 to 2025)


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setBirthDate(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const validateAge = () => {
        const { b_day, b_month, b_year } = birthDate; // Updated field names

        if (b_day === "0" || b_month === "select" || b_year === "selected") {
            setErrorMessage("Please select a valid date.");
            return false;
        }

        const monthIndex = monthOptions.indexOf(b_month); // Updated field name
        const birthDateObj = new Date(b_year, monthIndex, b_day); // Updated field names
        const currentDate = new Date();

        let ageYears = currentDate.getFullYear() - birthDateObj.getFullYear();
        let ageMonths = currentDate.getMonth() - birthDateObj.getMonth();
        let ageDays = currentDate.getDate() - birthDateObj.getDate();

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        if (ageDays < 0) {
            ageMonths--;
            const daysInPreviousMonth = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
            ).getDate();
            ageDays += daysInPreviousMonth;
        }

        console.log("Detailed Age Calculation:");
        console.log("Years:", ageYears);
        console.log("Months:", ageMonths);
        console.log("Days:", ageDays);

        if (ageYears > 25 || (ageYears === 25 && (ageMonths > 0 || ageDays > 0))) {
            setErrorMessage("Age must not be more than 25 years.");
            return false;
        } else {
            setErrorMessage("");
            return true;
        }
    };









    // same as mailing address fill up form
    const [mailingAddress, setMailingAddress] = useState({
        M_CareOf: '',
        M_Village: '',
        M_District: '',
        M_Upzilla: '',
        M_POffice: '',
        M_PCode: '',
    });

    const [permanentAddress, setPermanentAddress] = useState({
        P_CareOf: '',
        P_Village: '',
        P_District: '',
        P_Upzilla: '',
        P_POffice: '',
        P_PCode: '',
    });

    const [sameAsMailing, setSameAsMailing] = useState(false);

    const handleCheckboxChange = () => {
        console.log("Checkbox changed, sameAsMailing:", sameAsMailing); // Debugging the checkbox status
        setSameAsMailing(prev => {
            const newSameAsMailing = !prev;

            if (newSameAsMailing) {
                console.log("Copying values from mailingAddress:", mailingAddress); // Debugging the mailingAddress values
                setPermanentAddress({
                    P_CareOf: mailingAddress.M_CareOf,
                    P_Village: mailingAddress.M_Village,
                    P_District: mailingAddress.M_District,
                    P_Upzilla: mailingAddress.M_Upzilla,
                    P_POffice: mailingAddress.M_POffice,
                    P_PCode: mailingAddress.M_PCode,
                });
            } else {
                console.log("Resetting permanent address"); // Debugging reset
                setPermanentAddress({
                    P_CareOf: '',
                    P_Village: '',
                    P_District: '',
                    P_Upzilla: '',
                    P_POffice: '',
                    P_PCode: '',
                });
            }

            return newSameAsMailing;
        });
    };
    console.log("yes i got it", permanentAddress)


    const handleMailingChange = (field, value) => {
        setMailingAddress(prev => ({ ...prev, [field]: value }));
    };

    const handlePermanentChange = (field, value) => {
        setPermanentAddress(prev => ({ ...prev, [field]: value }));
    };















    // Submit Form
    const handleAddUser = async (e) => {
        e.preventDefault();
        // Check age validity
        if (!validateAge()) {
            console.log("Age validation failed. Form submission stopped.");
            Swal.fire({
                title: 'Warning!',
                text: 'age not more than 25',
                icon: 'warning',
                confirmButtonText: 'OK',
            });
            return; // Stop further execution if age is invalid
        }

        if (applicant.postName <= 0) {
            Swal.fire({
                title: 'Warning!',
                text: 'Please select a post.',
                icon: 'warning',
                confirmButtonText: 'OK',
            });
            return false;
        }

        if (applicant.applicantName.length < 1) {
            Swal.fire({
                title: 'Warning!',
                text: 'Please enter a valid name.',
                icon: 'warning',
                confirmButtonText: 'OK',
            });
            return false;
        }


        // Validation to check both images
        if (!images.image1 || !images.image2) {
            Swal.fire({
                title: 'Error!',
                text: 'Please upload both images.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        try {
            // Helper function to upload a single image
            const uploadImage = async (imageFile) => {
                const formData = new FormData();
                formData.append('image', imageFile);

                const res = await axiosPublic.post(imgbbURL, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                if (!res.data.success) {
                    throw new Error('Image upload failed');
                }

                return res.data.data.display_url;
            };

            // Upload both images
            const [image1Url, image2Url] = await Promise.all([
                uploadImage(images.image1),
                uploadImage(images.image2),
            ]);



            // Add current date
            const currentDate = new Date().toISOString();

            const status = "Unpaid"



            // If "Same as Mailing Address" is checked, copy mailing address to permanent address
            // const finalPermanentAddress = sameAsMailing ? permanentAddress : { ...mailingAddress };



            /*  const updateApplicant = {
                 ...applicant,
                 images: { image1: image1Url, image2: image2Url },
                 date: currentDate, // Include the current date
                 status,
                 selectedColleges
             } */




            const updateApplicant = {
                ...applicant,
                images: { image1: image1Url, image2: image2Url },
                date: currentDate, // Include the current date
                status,
                selectedColleges,
                P_CareOf: mailingAddress.M_CareOf,
                P_Village: mailingAddress.M_Village,
                P_District: mailingAddress.M_District,
                P_Upzilla: mailingAddress.M_Upzilla,
                P_POffice: mailingAddress.M_POffice,
                P_PCode: mailingAddress.M_PCode, // Add permanent address (either same as mailing or custom)
                // Add birthDate fields to match database field names
                b_day: birthDate.b_day,
                b_month: birthDate.b_month,
                b_year: birthDate.b_year,
            };





            fetch('http://localhost:5000/applicantCollection', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(updateApplicant),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Your application was successfully submitted.',
                            icon: 'success',
                            confirmButtonText: 'OK',
                        });
                        setId(data.insertedId);
                        // Reset the form and images state after submission
                        setImages({ image1: null, image2: null });
                        setPreviews({ image1: null, image2: null });
                        setSelectedColleges([]);
                        setMailingAddress({
                            M_CareOf: '',
                            M_Village: '',
                            M_District: '',
                            M_Upzilla: '',
                            M_POffice: '',
                            M_PCode: '',
                        }); // Reset mailing address
                        setPermanentAddress({
                            P_CareOf: '',
                            P_Village: '',
                            P_District: '',
                            P_Upzilla: '',
                            P_POffice: '',
                            P_PCode: '',
                        }); // Reset permanent address
                        setSameAsMailing(false); // Reset checkbox
                        e.target.reset(); // Reset form fields

                    } else if (data.message) {
                        Swal.fire({
                            title: 'Warning!',
                            text: data.message,
                            icon: 'warning',
                            confirmButtonText: 'OK',
                        });
                    }
                }).catch((error) => {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Something went wrong. Please try again.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                    console.error('Error:', error);
                });
        } catch (error) {
            // Catch errors during the image upload or `fetch` preparation
            Swal.fire({
                title: 'Error!',
                text: 'An unexpected error occurred. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            console.error('Error in try block:', error);
        }
    };


    return (
        <div className='formWrapper  w-[58%] mx-auto px-1'>
            <form onSubmit={handleAddUser}>

                <table cellSpacing="0" cellPadding="5" >
                    <tbody>
                        <tr>
                            <td>Name of the Post <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td>
                                <select className='inputField' style={{ backgroundColor: '#bdbaba', width: '100%', outline: 'none' }} name="postName" id="postName" onBlur={handleOnblur} required >
                                    <option value=''>Select a Post</option>
                                    <option value='Computer Operator'>Computer Operator</option>
                                    <option value='Steno Typist'>Steno Typist</option>
                                    <option value='LDA Computer Operator'>LDA Computer Operator</option>
                                    <option value='Driver'>Driver</option>
                                    <option value='Cleaner'>Cleaner</option>
                                    <option value='Data Analyst'>Data Analyst</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Applicant's Name <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " name="applicantName" id="applicantName" onBlur={handleOnblur} required /></td>
                        </tr>
                        <tr>
                            <td>Father's Name <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " name="fname" id="fname" onBlur={handleOnblur} required /></td>
                        </tr>
                        <tr>
                            <td>Mother's Name <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " name="mname" id="mname" onBlur={handleOnblur} required /></td>
                        </tr>
                        <tr>
                            <td>Gender <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px', width: '150px' }} name="gender" id="gender" onBlur={handleOnblur} required >
                                    <option value=''>Select Gender</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Others'>Others</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Date of Birth <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td>
                                <label htmlFor='b_day'> Day </label>
                                <select
                                    style={{ height: '25px', width: '120px', marginRight: '15px', textAlign: 'center' }}
                                    id='b_day'
                                    name="b_day" // Updated field name
                                    onChange={handleOnChange}
                                    onBlur={validateAge}
                                    value={birthDate.b_day} // Updated field name
                                >
                                    <option value="0" defaultValue="select">Select</option>
                                    {dayOptions.map(day => <option key={day} value={day}>{day}</option>)}
                                </select>

                                <label htmlFor='b_month'> Month </label>
                                <select
                                    style={{ height: '25px', width: '120px', marginRight: '15px' }}
                                    name="b_month" // Updated field name
                                    id="b_month"
                                    onChange={handleOnChange}
                                    onBlur={validateAge}
                                    value={birthDate.b_month} // Updated field name
                                >
                                    <option value="select">Select</option>
                                    {monthOptions.map((month, index) => (
                                        <option key={month} value={month}>{String(index + 1).padStart(2, '0')} - {month}</option>
                                    ))}
                                </select>

                                <label htmlFor="b_year"> Year </label>
                                <select
                                    name="b_year" // Updated field name
                                    id="b_year"
                                    style={{ height: '25px', width: '120px' }}
                                    onChange={handleOnChange}
                                    onBlur={validateAge}
                                    value={birthDate.b_year} // Updated field name
                                >
                                    <option value="selected">Select</option>
                                    {yearOptions.map(year => <option key={year} value={year}>{year}</option>)}
                                </select>
                            </td>
                        </tr>
                        <div>
                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Error message */}
                        </div>










                        <tr>
                            <td>National ID <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td><input className='inputField' type="number" placeholder=" " name="NID" id="NID" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Birth Registration No</td>
                            <td>:</td>
                            <td><input className='inputField' type="number" placeholder=" " name="b_reg" id="b_reg" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Merital Status</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px', width: '150px' }} name="m_status" id="m_status" onBlur={handleOnblur}>
                                    <option defaultValue='0'>Select Marital Status</option>
                                    <option value='Married'>Married</option>
                                    <option value='Single'>Single</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Quota</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px' }} name="quota" id="quota" onBlur={handleOnblur}>
                                    <option defaultValue='0'>Select One</option>
                                    <option value="Freedom Fighter">Freedom Fighter</option>
                                    <option value="Child of Freedom Fighter">Child of Freedom Fighter</option>
                                    <option value="Grand Child of Freedom Fighter">Grand Child of Freedom Fighter</option>
                                    <option value="Physically Handicapped">Physically Handicapped</option>
                                    <option value="Orphan">Orphan</option>
                                    <option value="Ethnic Minority">Ethnic Minority</option>
                                    <option value="Ansar-VDP">Ansar-VDP</option>
                                    <option value="Non Quota">Non Quota</option>

                                </select>
                            </td>
                        </tr>


                        <tr>
                            <td colSpan="3">
                                <table className='boxTable' style={{ width: '100%' }}>
                                    <tbody>
                                        <tr style={{ backgroundColor: '#dfdfdf' }}>
                                            {/* Mailing Address */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>
                                                        <tr>
                                                            <td colSpan="2">Mailing Address <small style={{ color: 'red' }}>*</small></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Care of</td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    name="M_CareOf"
                                                                    id="M_CareOf"
                                                                    onBlur={handleOnblur}
                                                                    onChange={e => {
                                                                        handleMailingChange('M_CareOf', e.target.value);
                                                                        setCare(e.target.value);
                                                                    }}
                                                                    value={mailingAddress.M_CareOf}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Village/Town/Road</td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    name="M_Village"
                                                                    id="M_Village"
                                                                    onBlur={handleOnblur}
                                                                    onChange={e => {
                                                                        handleMailingChange('M_Village', e.target.value);
                                                                        setVillage(e.target.value);
                                                                    }}
                                                                    value={mailingAddress.M_Village}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>
                                                                <select
                                                                    style={{ width: '100%' }}
                                                                    name="M_District"
                                                                    id="M_District"
                                                                    onBlur={handleOnblur}
                                                                    onChange={e => {
                                                                        handleMailingChange('M_District', e.target.value);
                                                                        setDist(e.target.value);
                                                                    }}
                                                                    value={mailingAddress.M_District}
                                                                >
                                                                    <option value="0">Select District</option>
                                                                    {m_dist.map(d => (
                                                                        <option key={d} value={d}>
                                                                            {d}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Upzilla</td>
                                                            <td>
                                                                <select
                                                                    style={{ width: '100%' }}
                                                                    name="M_Upzilla"
                                                                    id="M_Upzilla"
                                                                    onBlur={handleOnblur}
                                                                    onChange={e => {
                                                                        handleMailingChange('M_Upzilla', e.target.value);
                                                                        setMupzilla(e.target.value);
                                                                    }}
                                                                    value={mailingAddress.M_Upzilla}
                                                                >
                                                                    <option value="0">Select Upzilla</option>
                                                                    {m_upzilla.map(u => (
                                                                        <option key={u} value={u}>
                                                                            {u}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Office</td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    name="M_POffice"
                                                                    id="M_POffice"
                                                                    onBlur={handleOnblur}
                                                                    onChange={e => handleMailingChange('M_POffice', e.target.value)}
                                                                    value={mailingAddress.M_POffice}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Code</td>
                                                            <td>
                                                                <input
                                                                    type="number"
                                                                    name="M_PCode"
                                                                    id="M_PCode"
                                                                    onBlur={handleOnblur}
                                                                    onChange={e => handleMailingChange('M_PCode', e.target.value)}
                                                                    value={mailingAddress.M_PCode}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                            {/* Permanent Address */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>
                                                        <tr >
                                                            <td colSpan="2" >

                                                                <span className='flex items-center space-x-[2px]  '>
                                                                    Permanent Address <small style={{ color: 'red' }} className='pr-4'>*</small>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="p_chk"
                                                                        name="p_chk"
                                                                        checked={sameAsMailing}
                                                                        onChange={handleCheckboxChange}
                                                                    />
                                                                    <label htmlFor="p_chk"  >
                                                                        <small>Same as Mailing Address</small>
                                                                    </label>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Care of</td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    name="P_CareOf"
                                                                    id="P_CareOf"
                                                                    onBlur={handleOnblur}
                                                                    value={permanentAddress.P_CareOf}
                                                                    onChange={e => handlePermanentChange('P_CareOf', e.target.value)}
                                                                    disabled={sameAsMailing}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Village/Town/Road</td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    name="P_Village"
                                                                    id="P_Village"
                                                                    onBlur={handleOnblur}
                                                                    value={permanentAddress.P_Village}
                                                                    onChange={e => handlePermanentChange('P_Village', e.target.value)}
                                                                    disabled={sameAsMailing}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>
                                                                {sameAsMailing ? (
                                                                    <input
                                                                        type="text"
                                                                        value={mailingAddress.M_District} // Show the mailing address district value
                                                                        onChange={e => handlePermanentChange('P_District', e.target.value)} // Allow updating when unchecked
                                                                    />
                                                                ) : (
                                                                    <select
                                                                        style={{ width: '100%' }}
                                                                        name="P_District"
                                                                        id="P_District"
                                                                        onBlur={handleOnblur}
                                                                        value={permanentAddress.P_District}
                                                                        onChange={e => handlePermanentChange('P_District', e.target.value)} // Update when unchecked
                                                                    >
                                                                        <option value="0">Select District</option>
                                                                        {m_dist.map(d => (
                                                                            <option key={d} value={d}>
                                                                                {d}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                )}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Upzilla</td>
                                                            <td>
                                                                {sameAsMailing ? (
                                                                    <input
                                                                        type="text"
                                                                        value={mailingAddress.M_Upzilla} // Show the mailing address upzilla value
                                                                        onChange={e => handlePermanentChange('P_Upzilla', e.target.value)} // Allow updating when unchecked
                                                                    />
                                                                ) : (
                                                                    <select
                                                                        style={{ width: '100%' }}
                                                                        name="P_Upzilla"
                                                                        id="P_Upzilla"
                                                                        onBlur={handleOnblur}
                                                                        value={permanentAddress.P_Upzilla}
                                                                        onChange={e => handlePermanentChange('P_Upzilla', e.target.value)} // Update when unchecked
                                                                    >
                                                                        <option value="0">Select Upzilla</option>
                                                                        {m_upzilla.map(u => (
                                                                            <option key={u} value={u}>
                                                                                {u}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                )}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Office</td>
                                                            <td>
                                                                <input
                                                                    type="text"
                                                                    name="P_POffice"
                                                                    id="P_POffice"
                                                                    onBlur={handleOnblur}
                                                                    value={permanentAddress.P_POffice}
                                                                    onChange={e => handlePermanentChange('P_POffice', e.target.value)}
                                                                    disabled={sameAsMailing}
                                                                />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Code</td>
                                                            <td>
                                                                <input
                                                                    type="number"
                                                                    name="P_PCode"
                                                                    id="P_PCode"
                                                                    onBlur={handleOnblur}
                                                                    value={permanentAddress.P_PCode}
                                                                    onChange={e => handlePermanentChange('P_PCode', e.target.value)}
                                                                    disabled={sameAsMailing}
                                                                />
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>

                        </tr>
                        <tr>
                            <td>Mobile Number <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td><input type='number' name="p_number" id="p_number" onBlur={handleOnblur} /> <small style={{ color: 'red', lineHeight: '.5' }}> *plz mention a mobile number for getting info</small></td>
                        </tr>
                        <tr>
                            <td>Confirm Mobile <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td><input type='number' name="cp_number" id="cp_number" onBlur={handleOnblur} /> <small>plz retype mobile number</small></td>
                        </tr>
                        <tr>
                            <td>Email Address <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td><input type='email' className='inputField' name="email" id="email" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Password <small style={{ color: 'red' }}>*</small></td>
                            <td>:</td>
                            <td><input type='password' className='inputField' name="password" id="password" onBlur={handleOnblur} /></td>
                        </tr>
                        {/* academic qualification  */}
                        <tr>
                            <td colSpan="3">
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr style={{ backgroundColor: '#dfdfdf' }}>
                                            {/* SSC or Equivalent */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">SSC or Equivalent Level</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Examination</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="exam1" id="exam1" onBlur={handleOnblur} onChange={e => setExam1(e.target.value)}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="SSC">S.S.C</option>
                                                                    <option value="Dakhil">Dakhil</option>
                                                                    <option value="SSC_Vocational">S.S.C Vocational</option>
                                                                    <option value="O_Level">O Level/Cambridge</option>
                                                                    <option value="SSC_Equivalent">S.S.C Equivalent</option>
                                                                    <option value="Dakhil_Vocational">Dakhil Vocational</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Board</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="board1" id="board1" onBlur={handleOnblur}>
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        ssc_board.map(board => <option key={board} value={board}>{board}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Roll No</td>
                                                            <td><input type="text" name="roll1" id="roll1" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Result</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="result1" id="result1" onBlur={handleOnblur} onChange={e => setSsc_gpa(e.target.value)}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="1st Division">1st Division</option>
                                                                    <option value="2nd Division">2nd Division</option>
                                                                    <option value="3rd Division">3rd Division</option>
                                                                    <option value="4">GPA(out of 4)</option>
                                                                    <option value="5">GPA(out of 5)</option>
                                                                </select>
                                                                <input type="text" id="ssc_4" name="result1" placeholder='GPA (out of 4)' onBlur={handleOnblur} style={{ display: ssc4_display, marginTop: '5px' }} />
                                                                <input type="text" id="ssc_5" name="result1" onBlur={handleOnblur} style={{ display: ssc5_display, marginTop: '5px' }} placeholder='GPA (out of 5)' />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Group/Subject</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="subject1" id="subject1" onBlur={handleOnblur}>
                                                                    <option value="0">Select Subject</option>
                                                                    {
                                                                        ssc1.map(s => <option key={s} value={s}>{s}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Passing Year</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="year1" id="year1" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    {
                                                                        pass_year.map(y => <option key={y} value={y}>{y}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                            {/* HSC or Equivalent */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">HSC or Equivalent Level</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Examination</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="exam2" id="exam2" onBlur={handleOnblur} onChange={e => setExam2(e.target.value)}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="HSC">H.S.C</option>
                                                                    <option value="Alim">Alim</option>
                                                                    <option value="Business Management">Business Management</option>
                                                                    <option value="Diploma_in_Engineering">Diploma-in-Engineering</option>
                                                                    <option value="A Level">A Level/Sr. Cambridge</option>
                                                                    <option value="HSC Equivalent">H.S.C Equivalent</option>
                                                                    <option value="Diploma_in_Medical_Technology">Diploma in Medical Technology</option>
                                                                    <option value="Diploma_in_Agriculture">Diploma in Agriculture</option>
                                                                    <option value="HSC_Vocational">H.S.C Vocational</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Board</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} name="hsc_board" id="hsc_board">
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        ssc_board.map(board => <option key={board} value={board}>{board}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Roll No</td>
                                                            <td><input type="text" name="hsc_roll" id="hsc_roll" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Result</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="hsc_result" id="hsc_result" onBlur={handleOnblur} onChange={e => setHsc_gpa(e.target.value)}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="1st Division">1st Division</option>
                                                                    <option value="2nd Division">2nd Division</option>
                                                                    <option value="3rd Division">3rd Division</option>
                                                                    <option value="4">GPA(out of 4)</option>
                                                                    <option value="5">GPA(out of 5)</option>
                                                                </select>
                                                                <input type="text" id="hsc_4" name="hsc_result" placeholder='GPA (out of 4)' onBlur={handleOnblur} style={{ display: hsc4_display, marginTop: '5px' }} />
                                                                <input type="text" id="hsc_5" name="hsc_result" onBlur={handleOnblur} style={{ display: hsc5_display, marginTop: '5px' }} placeholder='GPA (out of 5)' />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Group/Subject</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="hsc_subject" id="hsc_subject" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    {
                                                                        hsc1.map(h => <option key={h} value={h}>{h}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Passing Year</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="hsc_pass" id="hsc_pass" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    {
                                                                        pass_year.map(p => <option key={p} value={p}>{p}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        {/* gratuation or Equivalent level  */}

                        <tr>
                            <td colSpan="3">
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        {/* graduation and Equivalent level  */}
                                        <tr style={{ backgroundColor: '#dfdfdf' }}>

                                            <td style={{ width: '100%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="5">Gratuation/Equivalent Level</td>
                                                        </tr>

                                                        <tr>
                                                            <td style={{ width: '23%' }}>Examination</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} name="exam3" id="exam3" onBlur={handleOnblur} onChange={e => setExam3(e.target.value)}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="BSC_Engineering">BSC Engineering</option>
                                                                    <option value="BSC_in_Agriculture">BSC In Agriculture</option>
                                                                    <option value="MBBS">MBBS</option>
                                                                    <option value="Honors">Honors</option>
                                                                    <option value="Pass_Course">Pass Course</option>
                                                                    <option value="Fazil">Fazil</option>
                                                                    <option value="BBA">BBA</option>
                                                                    <option value="Graduation_Equivalent">Graduation Equivalent</option>

                                                                </select>
                                                            </td>
                                                            <td></td>

                                                            <td style={{ width: '23%' }}>Result</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} id="exam3_result1" name="exam3_result" onChange={e => setHnrs_gpa(e.target.value)}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="1st Class">1st Class</option>
                                                                    <option value="2nd Class">2nd Class</option>
                                                                    <option value="3rd Class">3rd Class</option>
                                                                    <option value="4">CGPA (Out of 4)</option>
                                                                    <option value="5">CGPA (Out of 5)</option>
                                                                    <option value="Passed">Passed</option>
                                                                </select>
                                                                <input type="text" id="exam3_result2" name="exam3_result" placeholder='GPA (out of 4)' onBlur={handleOnblur} style={{ display: hnrs4_display, marginTop: '5px' }} />
                                                                <input type="text" id="exam3_result3" name="exam3_result" onBlur={handleOnblur} style={{ display: hnrs5_display, marginTop: '5px' }} placeholder='GPA (out of 5)' />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '23%' }}>Subject/Degree</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} id="exam3_sub" name="exam3_sub">
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        graduate1.map(g => <option key={g} value={g}>{g}</option>)
                                                                    }

                                                                </select>
                                                            </td>
                                                            <td></td>
                                                            <td style={{ width: '23%' }}>Passing Year</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} id="exam3_passyr" name="exam3_passyr">
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        pass_year.map(py => <option key={py} value={py}>{py}</option>)
                                                                    }

                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>University/Institution</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} name="university" id="university" onBlur={handleOnblur}>
                                                                    <option value="0">Select One</option>
                                                                    {
                                                                        university.map(u => <option key={u} value={u}>{u}</option>)
                                                                    }

                                                                </select>
                                                            </td>

                                                            <td style={{ width: '2%' }}></td>
                                                            <td>Course Duration</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }} onBlur={handleOnblur} id="exam3_duration" name="exam3_duration">
                                                                    <option value="0">Select One</option>
                                                                    <option value="02 Years">02 Years</option>
                                                                    <option value="03 Years">03 Years</option>
                                                                    <option value="04 Years">04 Years</option>
                                                                    <option value="05 Years">05 Years</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <table cellPadding="5">
                                                    <tbody>
                                                        <tr style={{ backgroundColor: '#bfdfbf' }}>
                                                            <td colSpan="5">Departmental Candidate Status
                                                                <select style={{ marginLeft: '80px', width: '200px' }} name="d_candidate" id="d_candidate" onBlur={handleOnblur} >
                                                                    <option value='0'>Select One</option>
                                                                    <option value='yes'>yes</option>
                                                                    <option value='no'>no</option>

                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>


                                        {/* photo and signature */}
                                        <tr>
                                            <td colSpan="3">
                                                <table style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr style={{ backgroundColor: '#dfdfdf' }}>
                                                            <td style={{ width: '48%' }}>
                                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan="2">Upload Photo <small style={{ color: 'red' }}>*(300 x 300 Pixel JPG/PNG)</small></td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td colSpan='2'>
                                                                                <input

                                                                                    type="file"
                                                                                    name="image1"
                                                                                    id="image1"
                                                                                    onChange={handleImageChange}
                                                                                    accept="image/*"
                                                                                    required
                                                                                />{' '}

                                                                                {previews.image1 && <div style={{ width: '300px', marginTop: '10px' }}>
                                                                                    <img id="preview1" src={previews.image1 || ''} alt="coming.."
                                                                                        width="120"
                                                                                        height="80" />
                                                                                </div>}
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                                            {/* HSC or Equivalent */}
                                                            <td style={{ width: '48%' }}>
                                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan="2">Upload Signature <small style={{ color: 'red' }}>*(120 x 80 Pixel JPG/PNG)</small></td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td colSpan='2'>
                                                                                <input
                                                                                    type="file"
                                                                                    name="image2"
                                                                                    id="image2"
                                                                                    onChange={handleImageChange}
                                                                                    accept="image/*"
                                                                                    required
                                                                                />{' '}

                                                                                {previews.image2 && <div style={{ width: '300px', marginTop: '10px' }}>
                                                                                    <img id="preview2" src={previews.image2 || ''} alt="coming.." width="120" height="80" />
                                                                                </div>
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>




                                        {/* select colleges container row */}
                                        <tr>

                                            {/* college choices */}

                                            <div className="bg-gray-100 p-4 rounded-lg w-full my-6">
                                                <h3 className="text-2xl font-semibold text-[#206b50] mb-4">Select Your Colleges (Up to 10)</h3>
                                                <ul className="space-y-4">
                                                    {selectedColleges.map((college, index) => (
                                                        <li key={index} className="flex items-center justify-between">
                                                            <div className="flex items-center space-x-2">
                                                                <span
                                                                    className={`w-6 h-6 text-white rounded-full flex items-center justify-center font-bold ${
                                                                        /* index === 0 ? "bg-blue-500" : index === 1 ? "bg-green-500" : "bg-yellow-500" */
                                                                        colors[index % colors.length]
                                                                        }`}
                                                                >
                                                                    {index + 1}
                                                                </span>
                                                                <span className="text-lg">{college}</span>
                                                            </div>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleRemoveCollege(college)}
                                                                className="text-red-500 hover:underline"
                                                            >
                                                                Remove
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="space-y-6  w-full">

                                                <div>
                                                    <label htmlFor="collegeDropdown" className="block text-lg font-medium">Select College:</label>
                                                    <select
                                                        id="collegeDropdown"
                                                        onChange={handleCollegeSelect}
                                                        value=""
                                                        className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                                                    >
                                                        <option value="" disabled>
                                                            Choose a college
                                                        </option>
                                                        {collegeList
                                                            .filter(college => !selectedColleges.includes(college))
                                                            .map((college, index) => (
                                                                <option key={index} value={college}>
                                                                    {college}
                                                                </option>
                                                            ))}
                                                    </select>
                                                </div>
                                            </div>

                                        </tr>








                                        <tr>
                                            <td style={{ textAlign: 'center', paddingTop: '20px' }}><input type="checkbox" id="declare" value="cheked" onClick={sbBtn} /> <small><i>I declare that the above information is correct and I would like to submit</i></small> </td>
                                        </tr>
                                    </tbody>
















                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>




















                <br /><br /><br />
                <input type="submit" value="Submit" id="submit_btn" disabled={selectedColleges.length < 1} style={{ padding: '10px 20px', marginBottom: '20px' }} /> <br />

                {id ? <Link to={`/admitCard/${id}`} style={{ textDecoration: 'none' }}>Print Application</Link> : <p></p>} <br />

            </form>
            {isLoading && <p>Loading . . .</p>}
        </div>
    );
};

export default ApplicationForm;