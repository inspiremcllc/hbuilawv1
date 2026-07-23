import {
  Baby,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  CalendarCheck,
  FilePenLine,
  Handshake,
  HeartCrack,
  Landmark,
  Languages,
  MapPin,
  MessageCircle,
  Scale,
  Shield,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type PracticeArea = {
  slug: string
  path: string
  title: string
  shortTitle: string
  description: string
  painPoint: string
  icon: LucideIcon
  metadataTitle: string
  metadataDescription: string
  heroTitle: string
  intro: string
  howWeHelp: string[]
  issues: string[]
  process: string[]
  faqs: { question: string; answer: string }[]
  related: string[]
}

export type PracticeCard = Pick<
  PracticeArea,
  'slug' | 'path' | 'shortTitle' | 'description' | 'painPoint' | 'icon'
>

export const phoneDisplay = '(888) 939-8080'
export const phoneHref = 'tel:18889398080'

export const navLinks = [
  { label: 'Family Law', href: '/family-law' },
  { label: 'Divorce', href: '/divorce' },
  { label: 'Child Custody', href: '/child-custody' },
  { label: 'Support', href: '/support' },
  { label: 'Attorneys', href: '/attorneys' },
  { label: 'Locations', href: '/locations' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export const trustItems = [
  {
    image: '/recognition/california-board-legal-specialization.png',
    alt: 'State Bar of California Board of Legal Specialization',
    width: 402,
    height: 374,
  },
  {
    image: '/recognition/super-lawyers-2026.png',
    alt: 'Super Lawyers 2026',
    width: 794,
    height: 252,
  },
  {
    image: '/recognition/pasadena-top-attorneys-2025.png',
    alt: 'Pasadena Magazine Top Attorneys 2025',
    width: 366,
    height: 358,
  },
  {
    image: '/recognition/avvo-excellent-rating.png',
    alt: 'Avvo Excellent rating',
    width: 316,
    height: 306,
  },
]

export const differentiators = [
  {
    title: 'Led by Certified Family Law Specialist',
    body: 'Clients get experienced guidance for sensitive divorce, custody, and support decisions.',
    icon: BadgeCheck,
  },
  {
    title: 'Multilingual legal support',
    body: 'The team supports families in English, Chinese, Spanish, and Vietnamese.',
    icon: Languages,
  },
  {
    title: 'Offices in Arcadia, Pasadena, and Irvine',
    body: 'Consultations are available by appointment across key Southern California communities.',
    icon: MapPin,
  },
  {
    title: 'Settlement-minded, litigation-ready strategy',
    body: 'The firm prepares for efficient resolution while staying ready when court is necessary.',
    icon: BriefcaseBusiness,
  },
]

export const processSteps = [
  {
    title: 'Conflict Check & Intake',
    body: 'The team gathers key names, county details, and case basics before legal advice begins.',
    icon: FilePenLine,
  },
  {
    title: 'Private Consultation',
    body: 'You discuss goals, concerns, timeline, and immediate risks in a confidential setting.',
    icon: MessageCircle,
  },
  {
    title: 'Strategy & Next Steps',
    body: 'The attorney outlines options, likely next moves, and what to prepare.',
    icon: CalendarCheck,
  },
  {
    title: 'Negotiation, Filing, or Litigation Support',
    body: 'The firm moves forward through settlement, court filings, or litigation support as needed.',
    icon: Landmark,
  },
]

export const practiceAreas: PracticeArea[] = [
  {
    slug: 'family-law',
    path: '/family-law',
    title: 'Family Law',
    shortTitle: 'Family Law',
    description: 'Strategic guidance for family transitions across Southern California.',
    painPoint: 'When family decisions affect your home, finances, and future, clarity matters early.',
    icon: Users,
    metadataTitle: 'Family Law | H Bui Law',
    metadataDescription:
      'Southern California family law guidance for divorce, custody, support, restraining orders, mediation, and post-judgment issues.',
    heroTitle: 'Family Law Counsel for High-Stress Transitions',
    intro:
      'Family law matters can touch every part of daily life. H Bui Law helps clients understand the process, protect what matters, and move forward with a clear strategy.',
    howWeHelp: [
      'Assess immediate legal priorities and practical risks',
      'Prepare filings, responses, disclosures, and settlement materials',
      'Coordinate strategy across custody, support, property, and safety issues',
      'Represent clients in negotiation, mediation, and court when needed',
    ],
    issues: [
      'Divorce and legal separation',
      'Custody and parenting schedules',
      'Child and spousal support',
      'Restraining orders and safety planning',
      'Prenuptial and postnuptial agreements',
      'Post-judgment modifications',
    ],
    process: [
      'Start with an intake and conflict check.',
      'Meet privately to review facts, risks, and goals.',
      'Build a step-by-step strategy for settlement or litigation.',
      'Adjust the plan as new court dates, disclosures, or negotiations develop.',
    ],
    faqs: [
      {
        question: 'What types of family law matters does the firm handle?',
        answer:
          'The mockup positions the firm around divorce, custody, support, restraining orders, agreements, mediation, and modifications.',
      },
      {
        question: 'Do I need every document before contacting the firm?',
        answer:
          'No. Bring what you have. The intake can identify which records are helpful for the next step.',
      },
      {
        question: 'Can the firm help if my matter is urgent?',
        answer:
          'Urgent facts should be shared during intake so the team can discuss appropriate next steps and timing.',
      },
    ],
    related: ['divorce', 'child-custody', 'support', 'restraining-orders'],
  },
  {
    slug: 'divorce',
    path: '/divorce',
    title: 'Divorce',
    shortTitle: 'Divorce',
    description: 'Guidance through contested or amicable divorce with clarity and care.',
    painPoint: 'If divorce feels financially and emotionally overwhelming, a plan can reduce the unknowns.',
    icon: HeartCrack,
    metadataTitle: 'Divorce Attorneys | H Bui Law',
    metadataDescription:
      'Divorce guidance for California clients navigating property division, custody, support, and negotiation across Southern California.',
    heroTitle: 'Divorce Guidance Built Around Strategy and Stability',
    intro:
      'Divorce is a legal process and a major life transition. H Bui Law helps clients evaluate options, prepare for decisions, and move through each stage with discretion.',
    howWeHelp: [
      'Explain California divorce timelines and filing requirements',
      'Prepare petitions, responses, disclosures, and settlement proposals',
      'Address custody, support, property, and separate property concerns',
      'Support negotiation, mediation, or litigation depending on the facts',
    ],
    issues: [
      'Contested and uncontested divorce',
      'Legal separation',
      'Property characterization',
      'Business or professional practice concerns',
      'Temporary orders',
      'Settlement agreements',
    ],
    process: [
      'Clarify your immediate goals and case posture.',
      'Identify documents needed for disclosures and negotiations.',
      'Map the divorce issues that can settle and the issues that may need court attention.',
      'Move through filings, negotiation, mediation, or hearings with a clear record.',
    ],
    faqs: [
      {
        question: 'How long does a divorce take in California?',
        answer:
          'California has a minimum waiting period, but the full timeline depends on disputed issues, court availability, disclosures, and settlement progress.',
      },
      {
        question: 'Can divorce be resolved without trial?',
        answer:
          'Many cases resolve through negotiation or mediation, but trial may be needed when key issues remain disputed.',
      },
      {
        question: 'What should I gather before a divorce consultation?',
        answer:
          'Useful items may include income records, recent tax returns, account statements, court papers, and a short timeline of key facts.',
      },
    ],
    related: ['child-custody', 'support', 'mediation', 'prenups-postnups'],
  },
  {
    slug: 'child-custody',
    path: '/child-custody',
    title: 'Child Custody',
    shortTitle: 'Child Custody',
    description: 'Custody strategy focused on parenting plans and a child-centered record.',
    painPoint: 'When parenting time is uncertain, you need a path that protects your relationship with your child.',
    icon: Baby,
    metadataTitle: 'Child Custody Attorneys | H Bui Law',
    metadataDescription:
      'Child custody guidance for parenting plans, visitation, relocation concerns, and custody disputes in Southern California.',
    heroTitle: 'Child Custody Guidance for Meaningful Parenting Time',
    intro:
      'Custody disputes can feel deeply personal. H Bui Law helps parents build practical parenting plans and prepare for the legal standards California courts consider.',
    howWeHelp: [
      'Create, review, and update parenting plans',
      'Address legal and physical custody arrangements',
      'Prepare for mediation, hearings, or emergency requests',
      'Build organized records around schedules, communication, and child needs',
    ],
    issues: [
      'Legal and physical custody',
      'Parenting time schedules',
      'Move-away and relocation concerns',
      'School and medical decisions',
      'High-conflict co-parenting',
      'Modification of existing orders',
    ],
    process: [
      'Review existing orders or current parenting arrangements.',
      'Identify the child-focused facts and immediate scheduling needs.',
      'Prepare a proposal, mediation position, or court filing.',
      'Refine the plan as the case develops.',
    ],
    faqs: [
      {
        question: 'How does the court decide child custody?',
        answer:
          'California custody decisions focus on the child best interests, including safety, stability, parenting history, and other case-specific facts.',
      },
      {
        question: 'Can custody orders be changed?',
        answer:
          'Modification may be possible when the legal standard is met and the facts support a change.',
      },
      {
        question: 'Do I have to go to court for custody?',
        answer:
          'Some custody issues resolve by agreement or mediation. Others require court involvement when parents cannot agree or safety is at issue.',
      },
    ],
    related: ['divorce', 'support', 'restraining-orders', 'mediation'],
  },
  {
    slug: 'support',
    path: '/support',
    title: 'Child Support & Spousal Support',
    shortTitle: 'Support',
    description: 'Support guidance for financial stability during and after a family law case.',
    painPoint: 'Support issues can affect housing, cash flow, and negotiation leverage from the start.',
    icon: Banknote,
    metadataTitle: 'Child Support and Spousal Support | H Bui Law',
    metadataDescription:
      'Guidance for California child support, spousal support, income questions, modifications, and enforcement.',
    heroTitle: 'Support Orders That Reflect the Facts',
    intro:
      'Support can become one of the most urgent parts of a family law case. H Bui Law helps clients understand income, needs, guideline factors, and modification paths.',
    howWeHelp: [
      'Review income, expenses, parenting time, and guideline factors',
      'Prepare support requests, responses, and supporting declarations',
      'Address temporary and long-term support questions',
      'Evaluate modifications when income or parenting arrangements change',
    ],
    issues: [
      'Child support calculations',
      'Temporary spousal support',
      'Long-term spousal support',
      'Self-employment income',
      'Bonus and overtime income',
      'Support modifications and enforcement',
    ],
    process: [
      'Collect income, tax, expense, and parenting schedule information.',
      'Identify the support issue and whether temporary orders are needed.',
      'Prepare the support position and supporting records.',
      'Update strategy as income facts or custody arrangements change.',
    ],
    faqs: [
      {
        question: 'Can support orders be modified?',
        answer:
          'Support orders may be modified when there is a legally relevant change in circumstances and the facts support a new order.',
      },
      {
        question: 'What information affects child support?',
        answer:
          'Income, parenting time, certain expenses, tax factors, and other guideline inputs can affect support.',
      },
      {
        question: 'Is spousal support automatic?',
        answer:
          'No. Spousal support depends on the case stage, facts, legal standards, and court findings.',
      },
    ],
    related: ['divorce', 'child-custody', 'family-law', 'mediation'],
  },
  {
    slug: 'restraining-orders',
    path: '/restraining-orders',
    title: 'Domestic Violence & Restraining Orders',
    shortTitle: 'Restraining Orders',
    description: 'Confidential guidance for protection, response, and court preparation.',
    painPoint: 'When safety, contact, or housing is at risk, timing and documentation matter.',
    icon: Shield,
    metadataTitle: 'Domestic Violence and Restraining Orders | H Bui Law',
    metadataDescription:
      'Restraining order guidance for California domestic violence matters, responses, custody impacts, and court preparation.',
    heroTitle: 'Restraining Order Guidance With Care and Urgency',
    intro:
      'Domestic violence restraining order matters require focused attention. H Bui Law helps clients understand options, prepare evidence, and respond to court deadlines.',
    howWeHelp: [
      'Discuss immediate safety-related legal options',
      'Prepare or respond to restraining order filings',
      'Address custody, visitation, and support issues connected to the request',
      'Organize documentation for hearings and settlement discussions',
    ],
    issues: [
      'Temporary restraining orders',
      'Responses to restraining order requests',
      'Protected contact and stay-away terms',
      'Custody and visitation conditions',
      'Move-out and property access issues',
      'Hearing preparation',
    ],
    process: [
      'Review urgent facts, deadlines, and existing paperwork.',
      'Identify evidence, witnesses, and requested orders.',
      'Prepare filings or response materials.',
      'Plan for the hearing and related custody or support issues.',
    ],
    faqs: [
      {
        question: 'Should I include confidential details in the website form?',
        answer:
          'No. The mockup form warns users not to include confidential or time-sensitive information until a relationship is established.',
      },
      {
        question: 'Can restraining orders affect custody?',
        answer:
          'They can. Custody, visitation, contact, and exchange terms may be addressed depending on the facts.',
      },
      {
        question: 'What if I was served with papers?',
        answer:
          'Deadlines can be short. Gather the papers and request a consultation quickly so response options can be discussed.',
      },
    ],
    related: ['child-custody', 'family-law', 'support', 'divorce'],
  },
  {
    slug: 'prenups-postnups',
    path: '/prenups-postnups',
    title: 'Prenups & Postnups',
    shortTitle: 'Prenups & Postnups',
    description: 'Agreement planning for clarity before or during marriage.',
    painPoint: 'A clear agreement can help couples talk about finances before conflict begins.',
    icon: FilePenLine,
    metadataTitle: 'Prenuptial and Postnuptial Agreements | H Bui Law',
    metadataDescription:
      'Prenup and postnup planning for California couples seeking clarity around property, income, and future expectations.',
    heroTitle: 'Prenuptial and Postnuptial Agreement Planning',
    intro:
      'Well-drafted agreements can create financial clarity and reduce uncertainty. H Bui Law helps clients approach these conversations with care and precision.',
    howWeHelp: [
      'Discuss goals, assets, debts, and timing requirements',
      'Draft or review proposed agreement terms',
      'Coordinate financial disclosure needs',
      'Identify issues that may require negotiation before signing',
    ],
    issues: [
      'Separate property protection',
      'Community property expectations',
      'Debt allocation',
      'Business interests',
      'Disclosure questions',
      'Review of proposed agreements',
    ],
    process: [
      'Start early enough to avoid rushed decisions.',
      'Collect financial information and goals.',
      'Draft, review, and revise agreement terms.',
      'Finalize with attention to California requirements.',
    ],
    faqs: [
      {
        question: 'When should we start a prenup?',
        answer:
          'Early planning is best. Rushed agreements can create practical and legal problems.',
      },
      {
        question: 'Can a postnup be created after marriage?',
        answer:
          'Yes, but postnuptial agreements require careful drafting and review under California law.',
      },
      {
        question: 'Does each person need an attorney?',
        answer:
          'Independent legal review is commonly important for fairness, informed consent, and enforceability issues.',
      },
    ],
    related: ['divorce', 'family-law', 'mediation', 'support'],
  },
  {
    slug: 'mediation',
    path: '/mediation',
    title: 'Mediation',
    shortTitle: 'Mediation',
    description: 'Settlement-focused support for clients seeking a less adversarial path.',
    painPoint: 'Mediation can reduce conflict when both sides are ready to work through hard decisions.',
    icon: Handshake,
    metadataTitle: 'Family Law Mediation | H Bui Law',
    metadataDescription:
      'Family law mediation support for divorce, custody, support, and settlement planning across Southern California.',
    heroTitle: 'Mediation Support for Practical Family Law Resolution',
    intro:
      'Mediation can help families resolve disputes with more privacy and control. H Bui Law helps clients prepare, negotiate, and understand proposed terms.',
    howWeHelp: [
      'Prepare clients for mediation sessions and settlement discussions',
      'Identify priorities, fallback positions, and documentation needs',
      'Review proposed agreements before signing',
      'Help convert agreements into clear court-ready terms',
    ],
    issues: [
      'Divorce settlement terms',
      'Custody and parenting plans',
      'Support agreements',
      'Property division',
      'Post-judgment changes',
      'Review of mediated agreements',
    ],
    process: [
      'Clarify goals and non-negotiables before the session.',
      'Organize documents and possible settlement terms.',
      'Attend or prepare for mediation depending on the engagement.',
      'Review any agreement carefully before finalizing.',
    ],
    faqs: [
      {
        question: 'Is mediation right for every case?',
        answer:
          'No. Mediation depends on safety, disclosure, power balance, urgency, and each party willingness to negotiate.',
      },
      {
        question: 'Can an attorney help me prepare for mediation?',
        answer:
          'Yes. Preparation can help you understand rights, options, documents, and settlement language before decisions are made.',
      },
      {
        question: 'What happens if mediation does not resolve everything?',
        answer:
          'Unresolved issues may continue through negotiation, additional mediation, or court processes.',
      },
    ],
    related: ['divorce', 'child-custody', 'support', 'prenups-postnups'],
  },
]

export const practiceGridCards: PracticeCard[] = [
  practiceAreas.find((area) => area.slug === 'divorce')!,
  practiceAreas.find((area) => area.slug === 'child-custody')!,
  {
    slug: 'child-support',
    path: '/support',
    shortTitle: 'Child Support',
    description: 'Fair and appropriate support arrangements for children.',
    painPoint: 'Child support decisions can affect daily stability, budgeting, and parenting plans.',
    icon: Banknote,
  },
  {
    slug: 'spousal-support',
    path: '/support',
    shortTitle: 'Spousal Support',
    description: 'Guidance for temporary and long-term support questions.',
    painPoint: 'Spousal support questions deserve careful review of income, needs, and case facts.',
    icon: Scale,
  },
  practiceAreas.find((area) => area.slug === 'prenups-postnups')!,
  {
    slug: 'domestic-violence-restraining-orders',
    path: '/restraining-orders',
    shortTitle: 'Domestic Violence Restraining Orders',
    description: 'Confidential help for protection, response, and preparation.',
    painPoint: 'Safety-related court orders require fast, organized, and careful action.',
    icon: Shield,
  },
  practiceAreas.find((area) => area.slug === 'mediation')!,
  {
    slug: 'post-judgment-modifications',
    path: '/support',
    shortTitle: 'Post-Judgment Modifications',
    description: 'Help adapting orders when life changes after judgment.',
    painPoint: 'Existing orders may need updates when income, schedules, or family needs change.',
    icon: CalendarCheck,
  },
]

export const attorneys = [
  {
    name: 'Bichhanh (Hannah) Bui',
    initials: 'BB',
    role: 'Certified Family Law Specialist',
    image: '/team/bichhanh-hannah-bui.jpg',
    imageAlt: 'Bichhanh Hannah Bui',
    focus: ['Divorce', 'Child Custody', 'Support', 'Property Division'],
    languages: ['English', 'Vietnamese'],
    education: 'Whittier College School of Law; University of California, Riverside',
    admissions: 'State Bar of California',
    helps:
      'Hannah guides clients through divorce, custody, support, property division, and post-judgment matters with practical, case-specific strategy.',
  },
  {
    name: 'Wenyi Zhang',
    initials: 'WZ',
    role: 'Senior Associate Attorney',
    image: '/team/wenyi-zhang.jpg',
    imageAlt: 'Wenyi Zhang',
    focus: ['Family Law', 'Complex Financial Matters', 'Civil Litigation'],
    languages: ['English', 'Mandarin', 'Shanghainese'],
    education:
      'University of California, Berkeley, LL.M.; University of Southern California, M.P.A.',
    admissions: 'State Bar of California',
    helps:
      'Wenyi brings a broad legal and cross-cultural perspective to family law and civil matters, including document-heavy and financially complex cases.',
  },
  {
    name: 'Grace Jo',
    initials: 'GJ',
    role: 'Of Counsel',
    image: '/team/grace-jo.jpg',
    imageAlt: 'Grace Jo',
    focus: ['Criminal Law', 'Family Law', 'Domestic Violence Matters'],
    languages: ['English'],
    education:
      'Loyola Law School, J.D.; University of Southern California, B.A. and M.A. in Economics',
    admissions: 'State Bar of California; U.S. District Court, Central District of California',
    helps:
      'Grace advises clients where criminal and family law issues intersect, including matters involving domestic violence, custody, and adoption.',
  },
  {
    name: 'Sara Memari',
    initials: 'SM',
    role: 'Associate Attorney',
    image: '/team/sara-memari.jpg',
    imageAlt: 'Sara Memari',
    focus: ['Family Law', 'Divorce', 'Child Custody'],
    languages: ['English'],
    education:
      'Southwestern Law School, J.D.; California State University, Northridge, B.A.',
    admissions: 'State Bar of California',
    helps:
      'Sara supports clients in family law matters with careful preparation, practical counseling, and a client-centered approach.',
  },
  {
    name: 'Ilene Aguilar Ruiz',
    initials: 'IR',
    role: 'Of Counsel',
    image: '/team/ilene-aguilar-ruiz.jpg',
    imageAlt: 'Ilene Aguilar Ruiz',
    focus: ['Family Law', 'Adoption', 'Domestic Violence Matters'],
    languages: ['English'],
    education: 'Loyola Law School, J.D.; California State University, Los Angeles',
    admissions: 'State Bar of California',
    helps:
      'Ilene brings more than two decades of legal experience, thoughtful advocacy, and a strong commitment to client service.',
  },
  {
    name: 'Cheryl Cruz',
    initials: 'CC',
    role: 'Associate Attorney',
    image: '/team/cheryl-cruz.jpg',
    imageAlt: 'Cheryl Cruz',
    focus: ['Divorce', 'Custody and Visitation', 'Support', 'Restraining Orders'],
    languages: ['English', 'Spanish'],
    education:
      'Southwestern Law School, J.D.; University of California, Riverside, B.A.',
    admissions: 'State Bar of California',
    helps:
      'Cheryl focuses on family law and helps clients navigate dissolution, parentage, support, custody, and protective-order matters.',
  },
  {
    name: 'Hiep Bui',
    initials: 'HB',
    role: 'Associate Attorney',
    image: '/team/hiep-bui.jpg',
    imageAlt: 'Hiep Bui',
    focus: ['Family Law', 'Child Custody', 'Support', 'Personal Injury'],
    languages: ['English'],
    education:
      'Chapman University Fowler School of Law, J.D.; University of California, Santa Barbara, B.S.',
    admissions: 'State Bar of California',
    helps:
      'Hiep helps clients navigate divorce, custody, support, restraining-order, and plaintiff-side personal injury matters with a broad litigation perspective.',
  },
]

export const testimonials = [
  {
    quote:
      'The team helped me understand each step and kept the process from feeling impossible.',
    source: 'Client in Arcadia',
  },
  {
    quote:
      'I felt informed and respected during a very stressful custody matter.',
    source: 'Client in Pasadena',
  },
  {
    quote:
      'They were calm, organized, and clear about what we needed to prepare.',
    source: 'Client in Irvine',
  },
]

export const locations = [
  {
    city: 'Arcadia',
    address: '123 S. First Ave., Suite 300, Arcadia, CA 91006',
    phone: '(626) 888-6688',
    counties: ['Los Angeles County', 'San Bernardino County', 'Orange County'],
    courts: ['Family law courthouse placeholder', 'Regional court placeholder'],
  },
  {
    city: 'Pasadena',
    address: '455 E. Colorado Blvd., Suite 200, Pasadena, CA 91101',
    phone: '(626) 888-6688',
    counties: ['Los Angeles County', 'Ventura County', 'Riverside County'],
    courts: ['Pasadena court placeholder', 'Downtown Los Angeles court placeholder'],
  },
  {
    city: 'Irvine',
    address: '17875 Von Karman Ave., Suite 500, Irvine, CA 92614',
    phone: '(949) 774-8080',
    counties: ['Orange County', 'Riverside County', 'San Diego County'],
    courts: ['Orange County court placeholder', 'Coastal regional court placeholder'],
  },
]

export const faqCategories = [
  {
    category: 'Divorce',
    items: [
      {
        question: 'How long does a divorce take in California?',
        answer:
          'California has a minimum waiting period, but the full timeline depends on disputed issues, court calendars, disclosures, and settlement progress.',
      },
      {
        question: 'Can I start a divorce if we are still living together?',
        answer:
          'Living arrangements do not automatically prevent a divorce filing. The right next step depends on safety, finances, children, and case goals.',
      },
    ],
  },
  {
    category: 'Custody',
    items: [
      {
        question: 'How does the court decide child custody?',
        answer:
          'California courts evaluate the child best interests, including safety, stability, parenting history, and the facts presented in the case.',
      },
      {
        question: 'Can parenting schedules be changed?',
        answer:
          'Schedules may be changed by agreement or court order when the facts and legal standard support a modification.',
      },
    ],
  },
  {
    category: 'Support',
    items: [
      {
        question: 'Can support orders be modified?',
        answer:
          'Support orders may be modified when there is a legally relevant change in circumstances and the evidence supports a new order.',
      },
      {
        question: 'What affects child support?',
        answer:
          'Income, parenting time, certain expenses, tax factors, and other guideline inputs can affect support.',
      },
    ],
  },
  {
    category: 'Domestic Violence / Restraining Orders',
    items: [
      {
        question: 'What should I do if I was served with restraining order papers?',
        answer:
          'Review deadlines quickly, keep the papers together, and request legal guidance before responding or attending a hearing.',
      },
      {
        question: 'Can a restraining order affect custody?',
        answer:
          'It can. The court may address contact, exchanges, visitation conditions, and other child-related terms depending on the facts.',
      },
    ],
  },
  {
    category: 'Mediation',
    items: [
      {
        question: 'Do I still need legal advice if we are mediating?',
        answer:
          'Legal advice can help you understand rights, options, and proposed terms before any agreement becomes final.',
      },
      {
        question: 'What happens if mediation fails?',
        answer:
          'Unresolved issues may continue through negotiation, additional mediation, or the court process.',
      },
    ],
  },
  {
    category: 'Consultations',
    items: [
      {
        question: 'What should I bring to a consultation?',
        answer:
          'Bring court papers, income records, recent communications, key dates, and a short list of questions or goals.',
      },
      {
        question: 'Does contacting the firm create an attorney-client relationship?',
        answer:
          'No. Contacting the firm or submitting a mockup form does not create an attorney-client relationship.',
      },
    ],
  },
]

export function getPracticeArea(slug: string) {
  return practiceAreas.find((area) => area.slug === slug)
}

export function getRelatedPracticeAreas(area: PracticeArea) {
  return area.related
    .map((slug) => practiceAreas.find((practice) => practice.slug === slug))
    .filter((practice): practice is PracticeArea => Boolean(practice))
}
