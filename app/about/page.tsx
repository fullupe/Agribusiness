import {
  Target,
  Eye,
  Award,
  Shield,
  Sparkles,
  Users,
  Handshake,
} from 'lucide-react'
import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import ValueCard from '@/components/ValueCard'

const values = [
  {
    icon: Award,
    title: 'Professionalism',
    description:
      'We maintain the highest standards of professional conduct in all our engagements.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Honesty and transparency guide every decision and interaction with our stakeholders.',
  },
  {
    icon: Sparkles,
    title: 'Quality',
    description:
      'We deliver excellence in every project, ensuring outcomes that exceed expectations.',
  },
  {
    icon: Target,
    title: 'Accountability',
    description:
      'We take responsibility for our commitments and deliver on our promises.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description:
      'We embrace new technologies and approaches to solve complex agricultural challenges.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description:
      'We build lasting relationships based on mutual respect and shared success.',
  },
]

interface TeamMember {
  id: string
  name: string
  role: string
  experience: string
  description: string
  credentials: string
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'George Opare Asare',
    role: 'Chief Executive Officer (CEO)',
    experience: "15+ years' experience",
    description:
      'George is an Agricultural Economist and senior development research specialist with over 15 years of experience delivering high-impact advisory services across agribusiness, climate resilience, and market systems development. He has led complex, multi-country assignments covering baseline, midline, and endline evaluations, feasibility and due diligence studies, and programme performance assessments using globally recognized frameworks such as OECD-DAC.',
    credentials:
      'MPhil in Agricultural Economics, BSc in Agriculture Science (University of Ghana), Postgraduate Certificate in Agricultural Food Chains (University of Applied Sciences, Germany)',
  },
  {
    id: '2',
    name: 'Margaret Agyemfra Ansaa',
    role: 'Finance Director',
    experience: "10+ years' experience",
    description:
      'Margaret is a finance and administration professional with over 10 years of experience in accounting operations, financial management, and administrative systems. She leads financial planning, budgeting, and compliance, ensuring strong financial governance and accountability.',
    credentials:
      'BSc in Accounting (Wisconsin International University College), Diploma in Business Studies (Accounting Option)',
  },
  {
    id: '3',
    name: 'Comfort Ofeibea Asare',
    role: 'HR & Administration Manager',
    experience: "10+ years' experience",
    description:
      'Comfort is an experienced HR and administration professional responsible for talent management, organizational systems, and administrative operations. She ensures effective team performance and efficient internal processes.',
    credentials:
      'BSc in Business Administration (HR Option) from KNUST, Higher National Diploma in Bilingual Secretaryship',
  },
  {
    id: '4',
    name: 'Anani Ogou',
    role: 'Agronomist & Climate-Smart Agriculture Specialist',
    experience: "10+ years' experience",
    description:
      'Anani Ogou is an agronomist and climate-smart agriculture expert with international experience across West and Central Africa. His expertise includes soil science, crop modelling, climate information systems, and value chain development.',
    credentials:
      "Master's degrees in Agronomy & Environmental Engineering and Agricultural Value Chains, PhD candidate in Climate-Smart Agriculture",
  },
]

const About = () => {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Driving Agricultural Transformation in Ghana"
        description="Agribusiness and Research Consultancy Ltd is a leading Ghanaian firm dedicated to strengthening agricultural performance through innovative solutions and strategic partnerships."
      />

      {/* Company Description */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeader
                badge="Who We Are"
                title="A Trusted Partner in Agribusiness Excellence"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  {/* Agribusiness and Research Consultancy Ltd (ARC Ltd) is a Ghana-based firm 
                  that strengthens agricultural performance through commercial farming, 
                  agribusiness development consultancy, research, project management, and 
                  climate-smart digital systems. */}
                  GM Green Solutions is a research-driven agribusiness and
                  development advisory firm providing integrated services across
                  applied research, business intelligence, agribusiness
                  strategy, and technical advisory.
                </p>
                <p>
                  {/* With over 15 years of combined experience in the agricultural sector, 
                  our team brings deep expertise in value chain development, farmer 
                  engagement, and data-driven decision making to help our clients achieve 
                  measurable outcomes. */}
                  We work with governments, development partners, NGOs, and
                  private sector institutions to design, evaluate, and implement
                  programmes and investments that are data-driven, financially
                  viable, and impact-oriented
                </p>
                <p>
                  {/* We work with development partners, government agencies, private sector 
                  companies, and farmer organizations to design and implement programmes 
                  that drive sustainable agricultural growth across Ghana and West Africa. */}
                  Operating across Ghana and other African markets, we combine
                  local context expertise with global standards to deliver
                  solutions that are both practical and scalable.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <div className="space-y-8">
                {/* Vision */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    {/* To be the leading agribusiness solutions provider in West Africa, 
                    recognized for delivering transformative outcomes that enhance 
                    food security and agricultural prosperity. */}
                    To be a leading African research and advisory firm, shaping
                    investment, policy, and programme decisions through data,
                    innovation, and technical excellence.
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    {/* To deliver innovative, research-driven agribusiness solutions that 
                    empower farmers, strengthen value chains, and create sustainable 
                    impact for our clients and communities. */}
                    To provide evidence-based research and advisory services
                    that enable organizations to make informed decisions,
                    structure viable investments, and achieve sustainable impact
                    across agricultural and development systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Our Values"
            title="Principles That Guide Our Work"
            description="Our values reflect our commitment to excellence and our dedication to creating lasting positive impact in the agricultural sector."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="section-padding bg-background"
        aria-labelledby="team-section-title"
      >
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Users className="w-8 h-8 text-primary" aria-hidden="true" />
            </div>
            <h2
              id="team-section-title"
              className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4"
            >
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Led by experienced professionals with deep roots in Ghana's
              agricultural sector, our team combines technical expertise with
              practical field experience to deliver results-oriented solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-muted/50 rounded-xl p-6 hover:bg-muted transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {member.experience} |{' '}
                      {member.description.split(' ').slice(0, 15).join(' ')}...
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-3 pt-3 border-t border-muted-foreground/20">
                      <span className="font-medium">Education:</span>{' '}
                      {member.credentials}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
