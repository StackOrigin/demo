type SchoolId = 'everest' | 'surachana' | 'laligurans';

type Profile = {
  school: {
    name: string;
    shortName: string;
    tagline: string;
    address: string;
    locationLine: string;
    phone: string;
    phoneAlt?: string;
    email: string;
    hours: string;
    mapUrl: string;
    social: { facebook: string; instagram: string; youtube: string; twitter: string };
    theme: { navy950: string; navy900: string; gold400: string; gold700: string; cream50: string; cream100: string };
    aboutTitle: string;
    aboutSubtitle: string;
    storyTitle: string;
    story: string[];
    leadershipName: string;
    leadershipTitle: string;
    leadershipMessage: string[];
    seoDescription: string;
    heroLines: [string, string, string];
  };
  files: string[];
  achievements: Array<{ number: string; label: string; icon: string }>;
};

const profile = (
  id: SchoolId,
  school: Profile['school'],
  files: string[],
  achievements: Profile['achievements'],
): Profile => ({ school, files: files.map((file) => `./schools/${id}/${file}`), achievements });

const profiles: Record<SchoolId, Profile> = {
  everest: profile('everest', {
    name: 'Everest Secondary Boarding School',
    shortName: 'Everest',
    tagline: 'Learning with purpose. Growing together.',
    address: 'Godawari–14, Thaiba, Lalitpur, Nepal',
    locationLine: 'Thaiba · Lalitpur',
    phone: '01-5560575',
    email: '',
    hours: 'Sunday – Friday · School hours',
    mapUrl: 'https://www.google.com/maps?q=Godawari-14%2C%20Thaiba%2C%20Lalitpur&output=embed',
    social: { facebook: 'https://www.facebook.com/everestschool38/', instagram: '', youtube: '', twitter: '' },
    theme: { navy950: '#071d17', navy900: '#103b2b', gold400: '#efc62e', gold700: '#96720a', cream50: '#faf8ed', cream100: '#f0ebd5' },
    aboutTitle: 'A school grounded in effort, care, and community',
    aboutSubtitle: 'Meet the learning community behind Everest Secondary Boarding School in Thaiba.',
    storyTitle: 'Growing capable learners in Thaiba',
    story: [
      'Everest Secondary Boarding School is a close-knit learning community in Godawari–14, Thaiba.',
      'The school day balances focused classroom learning with opportunities to participate, perform, explore, and build confidence alongside friends.',
      'Families are invited to speak directly with the school, visit the campus, and discover whether Everest feels right for their child.',
    ],
    leadershipName: 'School Leadership',
    leadershipTitle: 'Everest Secondary Boarding School',
    leadershipMessage: [
      'Welcome to Everest Secondary Boarding School.',
      'We believe children do their best learning when high expectations are paired with encouragement, belonging, and room to be curious.',
      'Our work is shared with families: helping every learner become more capable, responsible, and confident with each school year.',
    ],
    seoDescription: 'Everest Secondary Boarding School in Godawari–14, Thaiba, Lalitpur.',
    heroLines: ['Rise with', 'curious minds', '& grounded hearts.'],
  }, ['7312434b69c21245.jpg', '0dea54120e3d24f2.jpg', 'c6ad1d673bb112ad.jpg', '0d354e74f539d7cb.jpg', 'f2c5d57243399ed4.jpg', '23c556fae364c6ca.jpg', '6fa97d54fbb35a52.jpg', '5b07fcb541cc7dc4.jpg', 'da0818e69abba4d7.jpg', '10380d054e2d0e83.jpg'],
  [
    { number: 'SEE', label: 'Secondary Focus', icon: 'target' },
    { number: 'Pre–10', label: 'Learning Journey', icon: 'users' },
    { number: 'Thaiba', label: 'Local Community', icon: 'award' },
    { number: 'Whole child', label: 'Shared Purpose', icon: 'trophy' },
  ]),

  surachana: profile('surachana', {
    name: 'Surachana English School',
    shortName: 'Surachana',
    tagline: 'Education is the light of our life.',
    address: 'Thaiba, Lalitpur, Nepal',
    locationLine: 'Thaiba · Lalitpur',
    phone: '986-1132424',
    phoneAlt: '+977 980-3160280',
    email: 'surachana.eschool@gmail.com',
    hours: 'Sunday – Friday · School hours',
    mapUrl: 'https://www.google.com/maps?q=Thaiba%2C%20Lalitpur%2C%20Nepal&output=embed',
    social: { facebook: 'https://www.facebook.com/people/Surachana-English-School/61556496530762/', instagram: '', youtube: '', twitter: '' },
    theme: { navy950: '#081e2c', navy900: '#123e55', gold400: '#f0a14a', gold700: '#a65022', cream50: '#fbf7ef', cream100: '#f1e9db' },
    aboutTitle: 'A bright, welcoming place to begin',
    aboutSubtitle: 'Discover the people and everyday experiences that shape Surachana English School.',
    storyTitle: 'Learning that brings children into the light',
    story: [
      'Surachana English School serves families in Thaiba with a warm, community-minded approach to education.',
      'Its guiding thought—“Education is the light of our life”—is reflected in a school culture built around participation, encouragement, and steady progress.',
      'Learning extends beyond lessons into celebrations, shared activities, creativity, and the friendships that make school memorable.',
    ],
    leadershipName: 'School Leadership',
    leadershipTitle: 'Surachana English School',
    leadershipMessage: [
      'Welcome to Surachana English School.',
      'We see education as a light: something that helps children understand their world, recognise their strengths, and move forward with confidence.',
      'Together with families, we aim to make each school day purposeful, caring, and full of reasons to participate.',
    ],
    seoDescription: 'Surachana English School in Thaiba, Lalitpur — education is the light of our life.',
    heroLines: ['A brighter', 'way to learn', 'begins here.'],
  }, ['cover.jpg', 'c6c49ee544844205.jpg', '92329f7a780b20b1.jpg', '6cf565d788ed4cb8.jpg', 'b8975511abb8dfc6.jpg', 'dc492696f43d89d6.jpg', 'bf48f2abeed085be.jpg', '8133dbb07452109b.jpg', '0ea0c11eea99340e.jpg', '0a477c6cca0beb50.jpg'],
  [
    { number: 'Light', label: 'Guiding Belief', icon: 'trophy' },
    { number: 'English', label: 'Learning Environment', icon: 'target' },
    { number: 'Thaiba', label: 'Local Community', icon: 'users' },
    { number: 'Together', label: 'School Spirit', icon: 'award' },
  ]),

  laligurans: profile('laligurans', {
    name: 'Laligurans English Secondary School',
    shortName: 'Laligurans',
    tagline: 'The perfect place for your child to be!',
    address: 'Badegaun, Lalitpur, Nepal',
    locationLine: 'Badegaun · Lalitpur',
    phone: '01-5560361',
    email: 'slaligurans@gmail.com',
    hours: 'Sunday – Friday · School hours',
    mapUrl: 'https://www.google.com/maps?q=Badegaun%2C%20Lalitpur%2C%20Nepal&output=embed',
    social: { facebook: 'https://www.facebook.com/laligurans.school21/', instagram: '', youtube: '', twitter: '' },
    theme: { navy950: '#201016', navy900: '#4b1828', gold400: '#e98b9b', gold700: '#9e314c', cream50: '#fcf7f2', cream100: '#f2e7e1' },
    aboutTitle: 'Where school life feels full of possibility',
    aboutSubtitle: 'A closer look at Laligurans English Secondary School and its lively Badegaun community.',
    storyTitle: 'A place for learning, friendship, and confidence',
    story: [
      'Laligurans English Secondary School is part of the Badegaun community in Lalitpur.',
      'The school presents itself as “the perfect place for your child to be”—a promise expressed through active school life, shared experiences, and opportunities for children to grow together.',
      'From classroom focus to energetic activities, students are encouraged to learn with confidence and take an active place in their community.',
    ],
    leadershipName: 'School Leadership',
    leadershipTitle: 'Laligurans English Secondary School',
    leadershipMessage: [
      'Welcome to Laligurans English Secondary School.',
      'A meaningful education should give children knowledge, character, friendships, and the confidence to take part in the world around them.',
      'We invite families to visit, meet our community, and experience the everyday energy of school life in Badegaun.',
    ],
    seoDescription: 'Laligurans English Secondary School in Badegaun, Lalitpur.',
    heroLines: ['Room to', 'grow boldly', '& belong fully.'],
  }, ['652fad28e6ae5d28.jpg', '1e96b24398a1ddd9.jpg', '5071f836b8ff5981.jpg', 'aad2c90e4f936620.jpg', '50e512579b3f710c.jpg', '048969cca0f4e6cd.jpg', 'ac9c8015f08d6ce6.jpg', '0beac181e23526be.jpg', 'logo.jpg', '1e96b24398a1ddd9.jpg'],
  [
    { number: 'SEE', label: 'Secondary Focus', icon: 'target' },
    { number: 'English', label: 'Learning Environment', icon: 'award' },
    { number: 'Badegaun', label: 'Local Community', icon: 'users' },
    { number: 'Active', label: 'School Life', icon: 'trophy' },
  ]),
};

const requestedId = (import.meta.env.VITE_SCHOOL_ID || 'everest') as SchoolId;
const active = profiles[requestedId] || profiles.everest;
export const SCHOOL = active.school;

const f = active.files;
export const IMAGES = {
  hero1: f[0], hero2: f[1], hero3: f[2], students1: f[3], students2: f[4],
  students3: f[5], drawing: f[6], campus: f[7], building: f[8], building2: f[9],
  teacher1: f[1], teacher2: f[2], teacher3: f[3], teacher4: f[4], teacher5: f[5],
  teacher6: f[6], sports1: f[3], sports2: f[4], sports3: f[5], library: f[7],
  reading: f[8], principal: f[1], cultural1: f[6], cultural2: f[7], celebration: f[8],
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' }, { label: 'About', path: '/about' },
  { label: 'Academics', path: '/academics' }, { label: 'Admission', path: '/admission' },
  { label: 'Gallery', path: '/gallery' }, { label: 'Faculty', path: '/faculty' },
  { label: 'Contact', path: '/contact' },
];

export const ACHIEVEMENTS = active.achievements;
export const PROGRAMS = [
  { title: 'Early Years', ages: 'Young learners', description: 'A caring start built around language, play, routines, creativity, and the confidence to participate.', focus: ['Play', 'Language', 'Movement', 'Belonging'], icon: 'baby' },
  { title: 'Primary Level', ages: 'Foundation years', description: 'Strong foundations in core subjects, with space for questions, teamwork, expression, and practical learning.', focus: ['Core learning', 'Projects', 'Arts', 'Physical activity'], icon: 'bookOpen' },
  { title: 'Lower Secondary', ages: 'Growing independence', description: 'A broader curriculum that deepens understanding and helps learners become organised, curious, and self-aware.', focus: ['Mathematics', 'Science', 'Languages', 'Digital skills'], icon: 'microscope' },
  { title: 'Secondary Level', ages: 'SEE pathway', description: 'Focused academic preparation supported by guidance, responsibility, and learning beyond examinations.', focus: ['SEE preparation', 'Guidance', 'Leadership', 'Application'], icon: 'graduationCap' },
];

export const VALUES = [
  { title: 'Purposeful Learning', description: 'Lessons help students understand, practise, question, and apply what they know.', icon: 'star' },
  { title: 'Character', description: 'Respect, responsibility, and kindness are learned through everyday choices.', icon: 'shield' },
  { title: 'Curiosity', description: 'Questions and original thinking are welcomed as part of real learning.', icon: 'lightbulb' },
  { title: 'Belonging', description: 'Every learner should feel known, included, and able to participate.', icon: 'heart' },
  { title: 'Whole-child Growth', description: 'Academic, social, creative, and physical development belong together.', icon: 'sprout' },
  { title: 'Family Partnership', description: 'Open conversation helps school and home support each child together.', icon: 'handshake' },
];

export const WHY_CHOOSE = [
  { title: 'Caring Educators', description: 'Teachers support both progress and confidence.', icon: 'users' },
  { title: 'Clear Foundations', description: 'A structured learning journey from early years to secondary level.', icon: 'building' },
  { title: 'Active School Life', description: 'Activities and shared experiences bring learning to life.', icon: 'layout' },
  { title: 'A Sense of Belonging', description: 'A community where children can be known and encouraged.', icon: 'shieldCheck' },
  { title: 'SEE Pathway', description: 'Steady preparation for the important secondary years.', icon: 'trendingUp' },
  { title: 'Family Connection', description: 'Direct communication between families and school.', icon: 'messageCircle' },
];

export const GALLERY_CATEGORIES = ['All', 'School Life', 'Learning', 'Activities', 'Community'];
const categories = ['School Life', 'Learning', 'Activities', 'Community'];
export const GALLERY_ITEMS = [...f, ...f.slice(0, 6)].map((src, index) => ({
  src,
  alt: `${SCHOOL.shortName} school moment ${index + 1}`,
  category: categories[index % categories.length],
}));

export const FACULTY = [
  { name: 'School Leadership', position: 'Leadership Team', department: SCHOOL.shortName, image: f[1], bio: 'Guiding the school community with shared purpose and care.' },
  { name: 'Early Years Team', position: 'Foundation Educators', department: 'Early Years', image: f[2], bio: 'Helping young learners feel secure, curious, and ready to take part.' },
  { name: 'Primary Team', position: 'Class Teachers', department: 'Primary Level', image: f[3], bio: 'Building strong foundations through explanation, practice, and encouragement.' },
  { name: 'Secondary Team', position: 'Subject Educators', department: 'Secondary Level', image: f[4], bio: 'Supporting deeper subject learning and the journey toward SEE.' },
  { name: 'Activities Team', position: 'Co-curricular Mentors', department: 'Student Life', image: f[5], bio: 'Creating opportunities for expression, teamwork, movement, and confidence.' },
  { name: 'Student Support', position: 'School Community', department: 'Pastoral Care', image: f[6], bio: 'Helping students feel heard, connected, and ready to learn.' },
];

export const ADMISSION_STEPS = [
  { step: 1, title: 'Start a Conversation', description: 'Call, message the school, or visit in person to ask about current availability.' },
  { step: 2, title: 'Visit the School', description: 'See the learning environment and talk through what matters to your family.' },
  { step: 3, title: 'Student Interaction', description: 'An age-appropriate conversation or assessment helps identify the right placement.' },
  { step: 4, title: 'Share Documents', description: 'Provide previous school records and the documents requested by the admission team.' },
  { step: 5, title: 'Confirm Admission', description: `Complete the school’s confirmation process and prepare to join the ${SCHOOL.shortName} community.` },
];
export const REQUIRED_DOCUMENTS = ['Birth certificate', 'Previous school records or mark sheet', 'Transfer certificate, where applicable', 'Recent passport-size photographs', 'Parent or guardian identification', 'Any additional document requested by the school'];
export const TIMELINE = [
  { year: 'Foundation', title: 'A school takes root', description: `${SCHOOL.shortName} begins with a commitment to serve learners and families in its local community.` },
  { year: 'Growth', title: 'A community grows', description: 'New learners, educators, activities, and shared traditions shape the character of the school.' },
  { year: 'Today', title: 'Learning continues', description: `${SCHOOL.name} continues to help young people learn, participate, and move forward with confidence.` },
];
