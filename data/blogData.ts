export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: BlogCategory;
  publishedAt: string;
  author: {
    name: string;
    role: string;
  };
  readTime: number;
  featured?: boolean;
}

export type BlogCategory = 
  | "Agribusiness"
  | "Climate-smart Agriculture"
  | "Market Insights"
  | "Case Studies"
  | "Farmer Stories"
  | "Policy & Trends";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Agribusiness",
  "Climate-smart Agriculture",
  "Market Insights",
  "Case Studies",
  "Farmer Stories",
  "Policy & Trends",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Climate-Smart Agriculture in West Africa",
    slug: "future-climate-smart-agriculture-west-africa",
    summary: "Exploring how digital tools and data-driven approaches are transforming agricultural resilience across Ghana and the broader West African region.",
    content: `
## Introduction

Climate change poses significant challenges to agricultural systems across West Africa. Rising temperatures, unpredictable rainfall patterns, and increased frequency of extreme weather events threaten food security and farmer livelihoods.

However, innovative approaches combining traditional knowledge with modern technology are opening new pathways for resilience. Climate-smart agriculture (CSA) represents a comprehensive approach that addresses these challenges while maintaining productivity and reducing greenhouse gas emissions.

## The Role of Digital Technology

Digital agriculture platforms are revolutionizing how farmers access and apply climate information. Real-time weather alerts, seasonal forecasts, and agronomic advisories delivered via mobile devices enable farmers to make informed decisions about:

- **Planting timing**: Optimal windows for sowing based on rainfall predictions
- **Crop selection**: Varieties suited to changing conditions
- **Input management**: Efficient use of fertilizers and water resources
- **Harvest planning**: Minimizing post-harvest losses

## Case Study: Northern Ghana

In the Upper East Region, our digital agriculture tool has reached over 2,000 farmers with climate advisories. Results show:

- 23% increase in yields for participating farmers
- 35% reduction in crop losses due to weather events
- Improved adoption of drought-tolerant varieties

## Looking Ahead

The integration of artificial intelligence and machine learning with climate data promises even more precise and localized recommendations. As mobile penetration continues to grow across rural Ghana, the potential for scaling climate-smart solutions has never been greater.

## Conclusion

Climate-smart agriculture is not just about adapting to change—it's about building agricultural systems that can thrive in uncertain conditions while contributing to broader sustainability goals. The combination of digital innovation and farmer-centric approaches positions West Africa to lead in this transformation.
    `,
    category: "Climate-smart Agriculture",
    publishedAt: "2026-01-08",
    author: {
      name: "George Asare",
      role: "Managing Director",
    },
    readTime: 6,
    featured: true,
  },
  {
    id: "2",
    title: "Building Profitable Agribusiness Models for Smallholder Farmers",
    slug: "profitable-agribusiness-models-smallholders",
    summary: "A deep dive into cooperative structures and aggregation models that help smallholder farmers access better markets and improve their income.",
    content: `
## The Smallholder Challenge

Smallholder farmers in Ghana face numerous barriers to profitability: limited access to markets, lack of bargaining power, high transaction costs, and difficulty meeting buyer quality requirements. These challenges often trap farmers in a cycle of low productivity and poverty.

## Cooperative Models That Work

Farmer cooperatives and producer organizations offer a proven pathway to overcome these barriers. Effective cooperative structures provide:

### 1. Collective Bargaining Power
When farmers aggregate their produce, they can negotiate better prices with buyers. A cooperative selling 100 metric tons has more leverage than 100 individual farmers each selling 1 ton.

### 2. Access to Services
Cooperatives can provide members with:
- Input financing and bulk purchasing discounts
- Extension services and training
- Storage and processing facilities
- Transport logistics

### 3. Quality Assurance
Organized groups can implement quality control systems that meet buyer specifications, opening doors to premium markets.

## Implementation Approach

Building successful cooperatives requires:

1. **Strong governance**: Democratic structures with clear roles and accountability
2. **Financial transparency**: Proper record-keeping and member reporting
3. **Business orientation**: Focus on member economic benefits
4. **Capacity building**: Continuous training for leaders and members

## Real Results

Our work with cooperatives in the Ashanti and Brong Ahafo regions has demonstrated:

- Average income increases of 40% for participating farmers
- Improved market access for over 5,000 smallholders
- Sustainable business models generating returns for reinvestment

## Conclusion

With the right support and structures, smallholder farmers can build thriving agribusiness enterprises that provide sustainable livelihoods for their families and communities.
    `,
    category: "Agribusiness",
    publishedAt: "2026-01-05",
    author: {
      name: "Abena Mensah",
      role: "Senior Consultant",
    },
    readTime: 5,
  },
  {
    id: "3",
    title: "Ghana's Maize Value Chain: Opportunities and Challenges",
    slug: "ghana-maize-value-chain-opportunities",
    summary: "An analysis of the maize sector in Ghana, identifying key intervention points and investment opportunities across the value chain.",
    content: `
## Overview

Maize is Ghana's most important cereal crop, with annual production exceeding 3 million metric tons. The crop serves as a staple food, animal feed, and increasingly as an industrial input for food processing.

## Current State of the Value Chain

### Production
- Approximately 1 million farming households cultivate maize
- Average yields of 2.0 MT/ha, below the potential of 5+ MT/ha
- Rain-fed production concentrated in the transition and northern zones

### Post-Harvest
- Losses estimated at 20-30% due to poor handling and storage
- Limited access to drying and storage facilities
- Quality degradation affecting market prices

### Markets
- Fragmented trading networks with multiple intermediaries
- Price volatility between lean and harvest seasons
- Growing demand from poultry industry and processors

## Key Opportunities

1. **Input markets**: Improved seed and fertilizer distribution
2. **Mechanization**: Tractor services for land preparation and harvesting
3. **Storage**: Warehouse receipt systems and aggregation centers
4. **Processing**: Maize milling and feed manufacturing

## Investment Considerations

Investors and development partners should consider:

- Strategic locations along key trade corridors
- Partnerships with existing farmer organizations
- Technology adoption for quality and traceability
- Policy environment and government initiatives

## Conclusion

Ghana's maize value chain offers significant opportunities for impact and returns, particularly at the post-harvest and processing stages where efficiency gains can benefit both farmers and buyers.
    `,
    category: "Market Insights",
    publishedAt: "2026-01-02",
    author: {
      name: "Kwame Boateng",
      role: "Research Lead",
    },
    readTime: 4,
  },
  {
    id: "4",
    title: "Success Story: Transforming Rice Production in the Volta Region",
    slug: "success-story-rice-production-volta-region",
    summary: "How a comprehensive intervention combining training, inputs, and market linkages doubled rice yields for 500 farmers in the Volta Region.",
    content: `
## Background

The Volta Region has significant potential for rice production, with suitable lowland areas and water resources. However, farmers have historically achieved only 2-3 MT/ha compared to a potential of 6-8 MT/ha.

## The Intervention

Working with a development partner, ARC Ltd designed and implemented a comprehensive rice development programme targeting 500 farmers across three districts.

### Key Components

**1. Farmer Selection and Profiling**
- Baseline surveys to understand farmer practices
- Selection criteria based on commitment and land availability
- Digital registration for tracking

**2. Technical Training**
- Good agricultural practices for lowland rice
- Integrated pest management
- Water management techniques

**3. Input Support**
- Certified seeds of improved varieties
- Fertilizer recommendations based on soil tests
- Access to quality agrochemicals

**4. Market Linkages**
- Aggregation through farmer groups
- Forward contracts with processors
- Quality-based pricing incentives

## Results

After two production seasons:

- Average yields increased from 2.5 MT/ha to 5.2 MT/ha
- 92% of farmers adopted at least 4 recommended practices
- Total production increased from 1,250 MT to 2,600 MT
- Farmer incomes improved by an average of 65%

## Lessons Learned

1. Bundled interventions are more effective than single inputs
2. Farmer-to-farmer learning accelerates adoption
3. Market certainty motivates technology uptake
4. Digital tracking enables responsive programme management

## Sustainability

The programme has transitioned to a self-sustaining model with farmer groups now independently accessing inputs and markets.
    `,
    category: "Case Studies",
    publishedAt: "2025-12-28",
    author: {
      name: "George Asare",
      role: "Managing Director",
    },
    readTime: 5,
  },
  {
    id: "5",
    title: "From Subsistence to Surplus: Ama's Journey to Commercial Farming",
    slug: "ama-journey-commercial-farming",
    summary: "The inspiring story of Ama Darko, a smallholder farmer who transformed her 2-acre farm into a profitable enterprise through improved practices and market access.",
    content: `
## Meet Ama Darko

Ama Darko, 45, farms in the Ejura-Sekyedumase district of the Ashanti Region. For over 20 years, she cultivated maize and cowpea on her 2-acre plot, barely producing enough to feed her family of six.

"I knew the land could give more," Ama recalls. "But I didn't have the knowledge or resources to change."

## The Turning Point

In 2024, Ama joined a farmer field school organized by ARC Ltd as part of a productivity enhancement programme. Over the course of a growing season, she learned:

- Proper land preparation and planting techniques
- Row planting for optimal plant population
- Integrated soil fertility management
- Post-harvest handling to reduce losses

## Implementing Change

With a small input loan through her farmer group, Ama purchased certified hybrid maize seed and compound fertilizer for the first time. She followed the recommended practices closely.

"The other farmers watched me," she laughs. "They thought I was taking too much risk with the new methods."

## The Results

Ama's yield that season was 4.2 MT/ha—more than double her previous average. After repaying her input loan and keeping grain for household consumption, she had a surplus of 1.5 MT to sell.

## Looking Forward

Today, Ama has expanded to 5 acres and serves as a lead farmer, training other women in her community. She has diversified into vegetable production and recently purchased a motorized sprayer.

"Farming can be a business," she says confidently. "Now my children see a future in agriculture."

## Impact

Ama's story represents the potential that exists across rural Ghana. With the right support—knowledge, inputs, and market access—smallholder farmers can transform their livelihoods and contribute to national food security.
    `,
    category: "Farmer Stories",
    publishedAt: "2025-12-20",
    author: {
      name: "Abena Mensah",
      role: "Senior Consultant",
    },
    readTime: 4,
  },
  {
    id: "6",
    title: "Ghana's Planting for Food and Jobs: Policy Analysis and Outlook",
    slug: "ghana-planting-food-jobs-policy-analysis",
    summary: "Examining the government's flagship agricultural programme, its achievements, challenges, and implications for private sector engagement.",
    content: `
## Programme Overview

Launched in 2017, the Planting for Food and Jobs (PFJ) initiative represents Ghana's most ambitious agricultural development programme in decades. The policy aims to modernize agriculture, achieve food security, and create employment across the agricultural value chain.

## Key Components

### 1. Input Subsidy
- 50% subsidy on certified seeds
- 50% subsidy on fertilizers
- Distribution through accredited agro-dealers

### 2. Extension Services
- Improved farmer-to-extension agent ratios
- Use of e-extension platforms
- Farmer field schools and demonstrations

### 3. Marketing Support
- Buffer stock purchases
- One District, One Warehouse initiative
- Support for processing and value addition

## Achievements

Since inception, PFJ has:

- Reached over 1 million farmers with subsidized inputs
- Contributed to increased production of major crops
- Created employment in input distribution and extension
- Improved food availability and reduced import dependence

## Challenges and Criticisms

Despite successes, the programme faces:

- **Targeting**: Ensuring subsidies reach intended beneficiaries
- **Sustainability**: High fiscal costs and dependency concerns
- **Quality**: Variability in input quality and distribution efficiency
- **Markets**: Need for stronger linkages to absorb increased production

## Implications for Private Sector

The PFJ creates opportunities for private sector engagement:

1. Input manufacturing and distribution
2. Extension service delivery
3. Aggregation and market development
4. Digital platforms for farmer registration and tracking

## Looking Ahead

As the programme evolves, there is growing emphasis on:

- Climate-smart agriculture integration
- Digital transformation of service delivery
- Public-private partnerships for sustainability
- Value chain development beyond production

## Conclusion

Ghana's agricultural policy landscape offers both opportunities and challenges. Organizations that can align with government priorities while addressing implementation gaps will find fertile ground for impact.
    `,
    category: "Policy & Trends",
    publishedAt: "2025-12-15",
    author: {
      name: "Kwame Boateng",
      role: "Research Lead",
    },
    readTime: 6,
  },
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getLatestPosts = (count: number): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};

export const getRelatedPosts = (currentSlug: string, category: BlogCategory, count: number): BlogPost[] => {
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === category)
    .slice(0, count);
};

export const getPostsByCategory = (category: BlogCategory): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.summary.toLowerCase().includes(lowerQuery) ||
      post.category.toLowerCase().includes(lowerQuery)
  );
};
