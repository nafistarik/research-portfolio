import type {
  PersonalInfo,
  Education,
  WorkExperience,
  ResearchExperience,
  ResearchArticle,
  FeaturedWork,
  ProfessionalAffiliation,
  ProfessionalProject,
  AcademicProject,
  Award,
  Skill,
  Activity,
  Training,
  StandardizedTestScores,
} from "@/lib/types"

// Hero Content
export const heroContent = {
  name: "Prosenjit Das",
  title: "GIS Researcher | Urban Planner",
  aboutPoints: [
    "Information Management Associate at UNDP Bangladesh with expertise in data management and GIS",
    "Specialized in urban planning, remote sensing, and geospatial analysis",
    "Experienced in humanitarian crisis management and Rohingya refugee context",
    "Published researcher in climate change, urban development, and transportation planning",
    "Proficient in Python, ArcGIS, Power BI, and advanced data visualization tools",
  ],
  image: "/professional-headshot-of-academic-researcher.jpg",
}

// Featured Works
export const featuredWorks: FeaturedWork[] = [
  {
    name: "LULC Mapping Using Satellite Images and Remote Sensing Technology",
    image: [
      "/satellite-imagery-land-use-mapping.jpg",
      "/remote-sensing-data-visualization.jpg",
      "/gis-analysis-results.jpg",
    ],
  },
  {
    name: "The Condition of Non-Motorized Transport Modes in Puran Dhaka: A Multinomial Logit Model-Based Mode Choice Behavior Analysis.",
    image: "/transportation-planning-dhaka-rickshaw-analysis.jpg",
  },
  {
    name: "Integrated City Master Plan (2020-2050) of Dhaka South City Corporation",
    image: ["/urban-master-plan-dhaka.jpg", "/city-planning-maps.jpg", "/urban-development-strategy.jpg"],
  },
  {
    name: "Flood Vulnerability Assessment of Lama Municipality – A GIS, Remote Sensing and PRA Based Approach",
    image: "/flood-vulnerability-mapping-gis.jpg",
  },
  {
    name: "Fakirkhali Eco-smart City Master Plan",
    image: ["/eco-smart-city-planning.jpg", "/sustainable-urban-design.jpg", "/green-infrastructure-planning.jpg"],
  },
  {
    name: "Economic Evaluation of Traffic Delay at Railway Level Crossing: A Case Study of Overlooked High-Density Urban Area",
    image: "/traffic-analysis-railway-crossing.jpg",
  },
  {
    name: "Human Smuggling in Cox's Bazar and the Wider Sub-Region",
    image: "/humanitarian-crisis-analysis-coxs-bazar.jpg",
  },
  {
    name: "The Impact Of Climate Change On Agriculture And Food Security In Paba Upazila, Rajshahi",
    image: "/climate-change-agriculture-impact-study.jpg",
  },
  {
    name: "Estimation of Land Use Change to Identify Urban Heat Island Effect on Climate change: A Remote Sensing Based Approach",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Terrain Analysis for Cox's Bazar",
    image: [
      "/gis-analysis-results.jpg",
      "/remote-sensing-data-visualization.jpg",
      "/flood-vulnerability-mapping-gis.jpg",
    ],
  },
]

// Professional Affiliations
export const professionalAffiliations: ProfessionalAffiliation[] = [
  {
    title: "Associate Member",
    organization: "Bangladesh Institute of Planners (BIP), Dhaka",
    id: "BIP2074",
  },
]

// Personal Info
export const personalInfo: PersonalInfo = {
  name: "Prosenjit Das",
  email: ["prosenjit.planner@gmail.com", "prosenjit.das@undp.org"],
  linkedin: "linkedin.com/in/dasprosenjitruet",
  researchGate: "Prosenjit Das",
  phone: "+880 1621-678550",
}

// Education
export const education: Education[] = [
  {
    period: "2017-2022",
    institution: "Rajshahi University of Engineering and Technology (RUET)",
    degree: "Bachelor of Urban and Regional Planning",
    cgpa: "3.36 (Out of 4.00), Position Within Top 10",
  },
  {
    period: "2014-2016",
    institution: "Shahid Syed Nazrul Islam College, Mymensingh",
    degree: "Higher Secondary Certificate",
    cgpa: "5.00 (Out of 5.00)",
  },
]

// Work Experience
export const workExperience: WorkExperience[] = [
  {
    period: "November 2024 – Till Date",
    organization: "UNDP, Bangladesh",
    position: "Information Management Associate (Data Management & GIS Specialist)",
    responsibilities: [
      "Collecting data based on evidence of gray and white papers, and creating geo-databases using GIS.",
      "Producing reports analyzing security incidents regarding the effect of Rohingya refugees residing for a long time.",
      "Preparing maps (Density Map, Weekly Security Incident Map, Disaster Risk Zone Map, Landslide Zone Map) using GIS & RS.",
      "Ensuring data quality and integrity through regular checks and validation processes.",
      "Generating extensive research methodology, developing qualitative and quantitative tools.",
      "Developed an interactive Power BI dashboard using Python & MS Excel as an early warning system.",
      "Preparing and delivering presentation slides for donors and embassies.",
      "Visualizing data through charts, graphs, and GIS maps.",
      "Designing and publishing weekly reports for stakeholders, UNDP global platform, government agencies, and humanitarian organizations.",
      "Accountable for programme development and database management.",
      "Training team members and partners on advanced data management & analysis tools (Power BI, ArcGIS Products, Google Earth Pro, Advanced Excel, etc.).",
    ],
  },
  {
    period: "March 2024 – October 2024",
    organization: "ACTED, Bangladesh",
    position: "GIS Officer – Information Management",
    responsibilities: [
      "Conducted geo-spatial and information management analysis, research, report writing, and Shelter Addressing Project.",
      "Performed advisory and technical assignments in GIS. Organized and maintained GIS data of all WASH KAP facilities.",
      "Prepared monthly, quarterly, half-yearly, and annual reports and conducted trend analysis with UNHCR IM.",
      "Represented the organization in cluster and inter-cluster meetings, providing technical support and report presentation.",
      "Collected and disseminated IM-related products from clusters, UNHCR, and other agencies.",
      "Coordinated with stakeholders for data sharing and collaboration.",
      "Supported Rohingya refugees with SMS, EPR, CBP, data validation, analysis, and IM services alongside UNHCR IM.",
      "Developed data collection tools for geo-spatial data (Python, ArcGIS Field Map, Kobo Toolbox).",
      "Trained team members, field assistants, and volunteers on data collection procedures.",
    ],
  },
  {
    period: "July 2023 – February 2023",
    organization: "Center for Environmental and Geographic Information Services (CEGIS)",
    position: "Research Consultant",
    responsibilities: [
      "Analyzed satellite images of southern Bangladesh to assess land use change and cropping patterns using Sentinel-2 data.",
      "Developed customized tools in ArcMap & ArcGIS Pro; automated workflows using Python scripts.",
      "Produced land cover and capital maps to support integrated forest management planning.",
      "Conducted advanced time series GIS analysis on RS data (Multicriteria Transport Network).",
      "Prepared geospatial databases, spatial analyses, and historical timeline studies.",
      "Analyzed RS data (Density, Contour, AQI, Land Suitability, etc.).",
      "Coordinated with government stakeholders and partner agencies.",
      "Trained and supervised junior research consultants on GIS & RS.",
    ],
  },
  {
    period: "February 2023 – June 2023",
    organization: "Development Design Consultants Ltd. (DDCL)",
    position: "Junior Urban Planner",
    responsibilities: [
      "Prepared Integrated City Master Plan (2020–2050) for Dhaka South City Corporation.",
      "Designed Ward Action Plan & Traffic Management Plan.",
      "Analyzed transport and pedestrian linkage of Fakirkhali.",
      "Conducted data analysis, management, spatial database analysis, and mapping.",
      "Developed GIS-based integrated database and digital data compilation system.",
    ],
  },
  {
    period: "November 2022 – October 2023",
    organization: "Rajshahi University of Engineering and Technology (RUET), Bangladesh",
    position: "Research Assistant",
    responsibilities: [],
  },
]

// Standardized Test Scores
export const standardizedTestScores: StandardizedTestScores = {
  ielts: {
    overall: 7,
    listening: 7,
    reading: 7,
    writing: 6.5,
    speaking: 6.5,
  },
}

// Research Interests
export const researchInterests = [
  "Application of GIS and Remote Sensing, image analysis",
  "Urban and Regional Planning",
  "Land Use-Transport Interaction, Travel Behavior, and Mobility Pattern",
  "Climate Change Vulnerability Analysis, Mitigation and Adaptation Planning",
  "Integration of Public Transit and Active Transportation",
  "Application of GIS and Data Science in Sustainable Transportation Planning",
]

// Research Experience
export const researchExperience: ResearchExperience[] = [
  {
    period: "Jan 2024 – Apr 2024",
    position: "Research Assistant – RUET",
    organization: "RUET",
    project: "Assessing Bus Service Quality in Dhaka City from Passenger Perspective",
  },
  {
    period: "Nov 2022 – Oct 2023",
    position: "Research Assistant – RUET",
    organization: "RUET",
    project: "Social Capital & Community Resilience in Tourism Development",
  },
  {
    period: "2022",
    position: "Undergraduate Thesis Project – RUET",
    organization: "RUET",
    project: "Flood Vulnerability Assessment of Lama Municipality – A GIS, RS & PRA Based",
    description:
      "A comprehensive assessment of flood vulnerability is required in Lama Municipality in order to effectively manage hazards and plan land use due to the growing demand for land resources brought on by population and economic growth. This study builds a flood vulnerability map using Participatory Rural Appraisal (PRA), Remote Sensing (RS), and Geographic Information System (GIS) techniques. By integrating variables, community vulnerability can be measured across institutional, environmental, social, and economic dimensions, allowing for the precise identification of flood-prone areas. In order to improve the accuracy of vulnerability assessments and guide targeted mitigation strategies in flood-prone areas, the study emphasizes the significance of combining technological methodologies like GIS and RS with community engagement through PRA.",
  },
]

// Research Articles
export const researchArticles: ResearchArticle[] = [
  {
    title:
      "Estimation of Land Use Change to Identify Urban Heat Island Effect on Climate Change: A Remote Sensing-Based Approach",
    presentedAt: "International Conference on Climate Change (ICCC)",
    date: "1st–3rd March 2019",
    location: "Dhaka",
    href: "https://www.researchgate.net/publication/334596164_Estimation_of_Land_Use_Change_to_Identify_Urban_Heat_Island_Effect_on_Climate_change_A_Remote_Sensing_Based_Approach",
  },
  {
    title: "Formal Regional Delineation A case study on water availability scenario on overall Bangladesh",
    publishedAt: "Research Gate",
    date: "January 2023",
    DOI: "http://dx.doi.org/10.21203/rs.3.rs-2457603/v1",
    href: "https://www.researchgate.net/publication/367083120_Formal_Regional_Delineation_A_case_study_on_water_availability_scenario_on_overall_Bangladesh",
  },
  {
    title:
      "The Condition of Rural Growth Centers in Rajshahi: A Study to Analyze the Factors Resisting the Socio-Economic Growth of the Rural Areas",
    presentedAt:
      "International Seminar on Rural Development in Asia–Pacific Region, Special Reference to Northeast India and Its Bordering Countries, Ministry of Rural Development",
    date: "24–28 August 2020",
    location: "Guwahati, India",
  },
  {
    title:
      "Understanding the Requirements of Affordable Housing: A Study to Analyze the Condition of the Lower Income Settlements Beside the Bank of Padma River",
    presentedAt: "1st International Student Research Conference (ISRC), Dhaka University Research Society",
    date: "6 December 2020",
    location: "Dhaka",
  },
]

// Professional Projects
export const professionalProjects: ProfessionalProject[] = [
  {
    title: "Human Smuggling in Cox's Bazar and the Wider Sub-Region",
    description:
      "This report offers a comprehensive political economy analysis (PEA) of human smuggling involving Rohingya refugees and vulnerable populations in Cox's Bazar, Bangladesh, and Rakhine State, Myanmar. Drawing upon 32,510 open-source materials and 16 in-depth Key Informant Interviews (KIIs) - including five with survivors of smuggling - the report uncovers the structural, political, and gendered dynamics driving one of the most dangerous forms of irregular migration in South and Southeast Asia.\n\nThe report reveals that human smuggling is not merely an act of criminal facilitation but is deeply embedded in the intersecting systems of displacement, militarization, impunity, and economic marginalization. It is an economy of desperation - fed by persecution, conflict, and social breakdown on both sides of the Bangladesh–Myanmar border.",
    images: [
      "/humanitarian-crisis-analysis-coxs-bazar.jpg",
      "/satellite-imagery-land-use-mapping.jpg",
      "/gis-analysis-results.jpg",
      "/remote-sensing-data-visualization.jpg",
    ],
  },
  {
    title: "Land Use Mapping Using Satellite Images and Remote Sensing Technology",
    description:
      "This comprehensive study analyzed satellite images of southern Bangladesh to determine land use change, including cropping patterns across different seasons, using Sentinel-2 data. The project involved advanced remote sensing techniques and GIS analysis to monitor agricultural patterns and land cover changes over time.\n\nThe research provided critical insights into seasonal variations in crop production and land use dynamics, supporting sustainable agricultural planning and environmental monitoring initiatives in the region.",
    images: [
      "/satellite-imagery-land-use-mapping.jpg",
      "/remote-sensing-data-visualization.jpg",
      "/gis-analysis-results.jpg",
      "/climate-change-agriculture-impact-study.jpg",
    ],
  },
  {
    title: "Integrated City Master Plan (2020-2050) of Dhaka South City Corporation",
    description:
      "Led the preparation of the Integrated City Master Plan (2020-2050) for Dhaka South City Corporation, a comprehensive urban planning initiative aimed at sustainable development and improved quality of life for residents. The project included detailed Ward Action Plans and Traffic Management Plans.\n\nThe master plan addressed critical urban challenges including traffic congestion, infrastructure development, environmental sustainability, and social equity. The planning process involved extensive stakeholder consultation and data-driven analysis to ensure practical and implementable solutions.",
    images: [
      "/urban-master-plan-dhaka.jpg",
      "/city-planning-maps.jpg",
      "/urban-development-strategy.jpg",
      "/transportation-planning-dhaka-rickshaw-analysis.jpg",
    ],
  },
  {
    title: "Fakirkhali Eco-smart City Master Plan",
    description:
      "Fakirkhali Eco-Smart City planning combines two separate concepts: (a) the eco-system, and (b) smart city. The first concept intends to conserve the eco-system through the preservation of blue and green network of the project area, while the second concept intends to use IT in the production of artifacts (Planning & Design) and its management.\n\nThe project presents the operational requirements of both types of cities, their characteristics, and finally builds a conceptual framework of integrated Eco-Smart City. This innovative approach balances environmental conservation with technological advancement for sustainable urban development.",
    images: [
      "/eco-smart-city-planning.jpg",
      "/sustainable-urban-design.jpg",
      "/green-infrastructure-planning.jpg",
      "/urban-development-strategy.jpg",
    ],
  },
]

// Academic Projects
export const academicProjects: AcademicProject[] = [
  {
    title: "Economic Evaluation of Traffic Delay at Railway Level Crossing – Mymensingh City Corporation",
    description:
      "In Mymensingh City Corporation, railway level crossing intersections are the main reason for traffic congestion, causing both drivers and passengers to lose time and money. This study aims to determine the monetary value of traffic delay cost and find possible solutions to reduce traffic congestion.\n\nDelay cost estimations were conducted considering factors including delay, traffic volume, passenger occupancy, and value of travel time of different vehicle types. Primary data was collected through speed and delay surveys, traffic volume surveys, and questionnaire surveys. The study found that out of six railway crossings in the city corporation area, Notun Bazar and Shankipara railway crossings were most affected, with 30.7% and 23.1% of autorickshaws facing losses respectively.",
    images: ["/traffic-analysis-railway-crossing.jpg", "/transportation-planning-dhaka-rickshaw-analysis.jpg"],
  },
  {
    title:
      "The Condition of Non-Motorized Transport Modes in Puran Dhaka: A Multinomial Logit Model-Based Mode Choice Behavior Analysis.",
    description:
      "The study investigated field data gathered from 97 Puran Dhaka inhabitants using a Multinomial Logit Model. According to the research, 71.4% of passengers preferred non-motorized transportation (NMT) modes, with rickshaws being the most popular choice (67.36%), followed by walking (24.31%) and bicycles (8.32%).\n\nThe survey observed that although people prefer to walk small distances, they often decide to walk even farther because of traffic congestion and rickshaw queues. The study brought to light several issues that the governing authorities can readily resolve, emphasizing the necessity of Puran Dhaka's efficient NMT mode utilization. According to the study's findings, the government ought to give NMT promotion top priority to guarantee reduced traffic and better transportation options for Puran Dhaka citizens.",
    images: ["/transportation-planning-dhaka-rickshaw-analysis.jpg", "/urban-master-plan-dhaka.jpg"],
  },
  {
    title: "Impact of Climate Change on Agriculture & Food Security – Case Study, Paba Upazila, Rajshahi",
    description:
      "This study focused on the present changing climatic conditions and their impacts on the agriculture and food security system. The research covered the impact of climate change on the agricultural system, causes of climate change, changes in crop production methods and their patterns, and changes in the food security system.\n\nThe comprehensive analysis provided insights into how climate variability affects agricultural productivity and food security in the Paba Upazila region of Rajshahi, offering recommendations for climate adaptation strategies in agricultural planning.",
    images: ["/climate-change-agriculture-impact-study.jpg", "/satellite-imagery-land-use-mapping.jpg"],
  },
  {
    title: "Landscape Design Framework for Civil Engineering Faculty, RUET",
    description:
      "This architectural and landscape design project focused on educational infrastructure development for the Civil Engineering Faculty at Rajshahi University of Engineering and Technology (RUET). The project involved comprehensive site analysis, design development, and implementation strategies for creating a functional and aesthetically pleasing academic environment.\n\nThe design framework considered sustainable practices, user needs, accessibility, and integration with existing campus infrastructure to create an optimal learning environment for students and faculty.",
    images: ["/sustainable-urban-design.jpg", "/green-infrastructure-planning.jpg", "/urban-development-strategy.jpg"],
  },
  {
    title: "Terrain Analysis for Cox's Bazar",
    description:
      "Advanced DEM analysis for environmental monitoring using remote sensing technology. The analysis includes slope analysis, aspect analysis, hillshade analysis, and contour mapping. A DEM (30m*30m) resolution was used for this comprehensive terrain analysis.\n\nThis project provided critical topographical information for environmental planning and disaster risk assessment in the Cox's Bazar region, supporting informed decision-making for sustainable development and hazard mitigation strategies.",
    images: [
      "/gis-analysis-results.jpg",
      "/remote-sensing-data-visualization.jpg",
      "/flood-vulnerability-mapping-gis.jpg",
    ],
  },
]

// Awards & Scholarships
export const awards: Award[] = [
  {
    title: "University Technical Scholarship",
    year: "2017–2022",
    organization: "RUET",
  },
  {
    title: "2nd Place – World Town Planning Day Design Competition",
    year: "2018",
    organization: "BIP",
  },
  {
    title: "Merit Scholarship",
    year: "2016, 2014, 2009",
    organization: "Bangladesh Government",
  },
]

// Skills
export const skills: Skill[] = [
  {
    category: "MS Office Package",
    items: ["Word", "Excel", "PowerPoint", "Outlook"],
  },
  {
    category: "Data Analysis",
    items: ["MS Excel", "IBM SPSS", "KOBO Toolbox"],
  },
  {
    category: "Spatial Data Analysis",
    items: ["ArcGIS 10.X", "QGIS", "ArcGIS Pro", "Google Earth Engine", "ERDAS IMAGINE"],
  },
  {
    category: "Graphic Design",
    items: ["PowerPoint", "Power BI", "Illustrator", "AutoCAD", "SketchUp", "Lumion", "Miro"],
  },
  {
    category: "Programming",
    items: ["Python", "R-Studio", "MySQL"],
  },
]

// Extracurricular Activities
export const activities: Activity[] = [
  {
    title: "Former President",
    organization: "Greater Mymensingh Student Association, RUET",
    period: "2019–2022",
  },
  {
    title: "Associate Member (ID: BIP2074)",
    organization: "Bangladesh Institute of Planners (BIP), Dhaka",
  },
  {
    title: "Former Member",
    organization: "RUET Career Forum",
    period: "2017–2022",
  },
  {
    title: "Organizer",
    organization: "Onuronon-RUET Cultural Club",
  },
  {
    title: "Organizer",
    organization: "Planning Carnival, URP, RUET",
    period: "2017",
  },
  {
    title: "Organizer",
    organization: "World Habitat Day, URP, RUET",
    period: "2018",
  },
  {
    title: "Volunteer",
    organization: "Technocracy 2019 by RUET, IUPC",
  },
  {
    title: "Former Petro Leader",
    organization: "Thakurakona Rahim Uddin High School Scout Group",
  },
  {
    title: "Participant",
    organization: "International Seminar on Rural Development in Asia-Pacific Region, Guwahati, India",
  },
  {
    title: "Participant",
    organization: "1st International Student Research Conference (ISRC), Dhaka University",
    period: "2020",
  },
  {
    title: "Participant",
    organization: "International Conference on Climate Change (ICCC), Dhaka University",
    period: "2020",
  },
  {
    title: "Participant",
    organization: "3rd International Conference on Urban and Regional Planning (BIP)",
  },
]

// Training & Workshops
export const training: Training[] = [
  { title: "Geospatial Data Analytics Essential Training", provider: "LinkedIn Learning" },
  { title: "Hands-on training on Satellite Image Processing and Classification", provider: "CEGIS" },
  { title: "Programming for Everybody (Python)", provider: "University of Michigan (Coursera)" },
  { title: "Workshop on Design for All: Disability-Inclusive Urban Planning and Infrastructure Design" },
  { title: "Policy Evaluation Tool for Climate Action in Transportation Planning", provider: "BIP" },
  { title: "Training on Cyber Security", provider: "ACTED" },
  { title: "Conducted 8 trainings for IMOs on data collection & ArcGIS Field Map" },
  { title: "Conducted 14 training sessions for Enumerators & Volunteers on ArcGIS Field Map & KOBO Toolbox" },
  { title: "Getting started with Power BI", provider: "LinkedIn Learning" },
  { title: "Data Visualization for Data Analysts and Analytics", provider: "LinkedIn Learning" },
]
