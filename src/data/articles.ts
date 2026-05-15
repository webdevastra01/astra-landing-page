export interface FeatureItem {
  title: string;
  description: string;
}

export interface Section {
  title: string;
  type: "features" | "bullets" | "steps" | "content";
  content?: string;
  items?: FeatureItem[] | string[];
}

export interface Vertical {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  hero: {
    title: string;
    description: string;
  };
  intro: string;
  sections: Section[];
  cta: {
    text: string;
  };
}

export interface ArticleData {
  brand: string;
  verticals: Vertical[];
}

export const articleData: ArticleData = {
  brand: "Astra Group of Companies",
  verticals: [
    {
      id: "astra-advisory",
      name: "Astra Advisory",
      slug: "astra-advisory",
      tagline:
        "Strategy, systems, and organizational solutions designed for scalable business growth.",
      hero: {
        title: "Strategic Advisory Built for Scalable Business Growth",
        description:
          "Astra Advisory helps businesses improve structure, performance, and operational clarity through strategic consulting, process development, and organizational alignment.",
      },
      intro:
        "Built as Astra’s strategy and growth solutions arm, Astra Advisory supports startups, SMEs, and growing enterprises through structured consulting systems that strengthen operations, improve accountability, and create scalable foundations for long-term success.",
      sections: [
        {
          title: "What We Deliver",
          type: "features",
          items: [
            {
              title: "Business Audits",
              description:
                "Comprehensive operational assessments designed to identify inefficiencies, gaps, and opportunities for growth across key business functions.",
            },
            {
              title: "SOP Development",
              description:
                "Structured standard operating procedures that improve consistency, accountability, and operational efficiency across teams and departments.",
            },
            {
              title: "KPI Alignment & Organizational Structuring",
              description:
                "Clear performance metrics and organizational systems designed to align teams, leadership, and company objectives for scalable execution.",
            },
            {
              title: "Business Consulting",
              description:
                "Strategic guidance for operations, growth planning, execution systems, and business optimization tailored to evolving business needs.",
            },
          ],
        },
        {
          title: "The Astra Advisory Advantage",
          type: "bullets",
          items: [
            "Structured systems focused on long-term scalability",
            "Operational clarity across teams and departments",
            "Data-driven performance alignment",
            "Consulting designed for practical execution—not just theory",
          ],
        },
        {
          title: "Built for Sustainable Growth",
          type: "content",
          content:
            "Astra Advisory helps businesses move beyond reactive operations by implementing systems that improve structure, accountability, and long-term decision-making. The goal is not only growth—but scalable and sustainable growth built on clear operational foundations.",
        },
      ],
      cta: {
        text: "Structure your business for clarity, scalability, and long-term growth.",
      },
    },
    {
      id: "astra-shared-operations",
      name: "Astra Shared Operations",
      slug: "astra-shared-operations",
      tagline:
        "Centralized admin, finance, coordination, and multilingual operational support.",
      hero: {
        title: "The Operational Backbone Behind Scalable Businesses",
        description:
          "Astra Shared Operations centralizes administrative, financial, coordination, and multilingual support systems that keep businesses organized, efficient, and execution-ready.",
      },
      intro:
        "Designed as Astra’s operational backbone, Astra Shared Operations provides the day-to-day support systems businesses need to maintain structure, control, and consistency across operations.",
      sections: [
        {
          title: "What We Deliver",
          type: "features",
          items: [
            {
              title: "Finance & Administrative Support",
              description:
                "Bookkeeping, AP/AR, invoicing, payroll support, executive assistance, and documentation systems that improve operational visibility and control.",
            },
            {
              title: "Coordination & Scheduling",
              description:
                "Administrative coordination and scheduling support that streamline internal communication, workflow management, and execution efficiency.",
            },
            {
              title: "Translation & Localization",
              description:
                "Multilingual support, localization services, and communication assistance designed for businesses operating across diverse markets and audiences.",
            },
          ],
        },
        {
          title: "Why Businesses Rely on Shared Operations",
          type: "bullets",
          items: [
            "Centralized operational support systems",
            "Reduced administrative workload for core teams",
            "Improved accuracy and process consistency",
            "Scalable support for growing organizations",
            "Multilingual coordination and communication support",
          ],
        },
        {
          title: "Astra’s Operational Backbone",
          type: "content",
          content:
            "Astra Shared Operations exists to strengthen execution behind the scenes. By centralizing administrative and financial workflows, businesses gain the operational stability needed to scale efficiently while keeping leadership focused on growth and strategy.",
        },
      ],
      cta: {
        text: "Operational systems designed to keep businesses organized, efficient, and scalable.",
      },
    },
    {
      id: "astra-global-support",
      name: "Astra Global Support",
      slug: "astra-global-support",
      tagline:
        "Remote execution teams and offshore operational support built for scalability.",
      hero: {
        title: "Global Support Teams Built for Modern Business Operations",
        description:
          "Astra Global Support provides scalable offshore staffing and remote operational teams that help businesses expand capacity, reduce overhead, and maintain execution quality.",
      },
      intro:
        "Built to support modern distributed operations, Astra Global Support delivers remote execution teams across administrative, finance, customer support, and multilingual operational functions.",
      sections: [
        {
          title: "What We Deliver",
          type: "features",
          items: [
            {
              title: "Offshore Staffing",
              description:
                "Dedicated remote professionals integrated into business operations to provide scalable workforce support across multiple functions.",
            },
            {
              title: "Remote Operations Support",
              description:
                "Structured remote operational systems that help businesses maintain continuity, efficiency, and execution across distributed teams.",
            },
            {
              title: "Multilingual Customer & Admin Support",
              description:
                "Remote administrative, finance, and customer support services enhanced by multilingual communication capabilities for global operations.",
            },
          ],
        },
        {
          title: "The Global Support Advantage",
          type: "bullets",
          items: [
            "Scalable offshore workforce solutions",
            "Reduced operational overhead",
            "Flexible remote execution teams",
            "Multilingual support capabilities",
            "Reliable operational continuity",
          ],
        },
        {
          title: "Built for Distributed Growth",
          type: "content",
          content:
            "As businesses increasingly operate across borders and digital environments, Astra Global Support provides the remote infrastructure needed to maintain efficiency, communication, and operational scalability without compromising execution quality.",
        },
      ],
      cta: {
        text: "Remote operational support designed for modern, scalable business growth.",
      },
    },
    {
      id: "real-estate",
      name: "Real Estate",
      slug: "real-estate",
      tagline:
        "Residential and commercial developments, project marketing, and developer partnerships.",
      hero: {
        title: "Real Estate Solutions Built on Trust and Systems",
        description:
          "Axial Real Estate Services, the real estate arm of Astra Group of Companies, helps families, investors, and developers secure the right property—faster and with confidence through structured systems.",
      },
      intro:
        "Backed by Astra’s integrated ecosystem, Axial combines on-ground brokerage expertise with structured systems in sales, marketing, and operations. From ready-for-occupancy homes to high-potential land investments, Axial connects clients to opportunities that align with both immediate needs and long-term growth.",
      sections: [
        {
          title: "What Axial Delivers",
          type: "features",
          items: [
            {
              title: "Residential Solutions",
              description:
                "Move-in-ready condominiums and house-and-lot developments designed for practical ownership. With financing options through banks and Pag-IBIG, Axial makes home acquisition more accessible and efficient for growing families and first-time buyers.",
            },
            {
              title: "Strategic Land Investments",
              description:
                "Carefully vetted raw, agricultural, and commercial properties positioned for appreciation and development. Ideal for investors and partners seeking long-term value and scalable opportunities.",
            },
            {
              title: "Project Marketing & Developer Partnerships",
              description:
                "Axial works closely with developers to bring projects to market through structured sales systems, trained field teams, and data-driven marketing—powered by Astra’s AVARIS (Sales) and AXIS (Marketing) units.",
            },
          ],
        },
        {
          title: "The Axial Advantage",
          type: "content",
          content:
            "Axial is built on a compliance-first, end-to-end approach—ensuring that every transaction is not only fast, but also secure and fully documented. Every listing undergoes strict verification, including License to Sell (DHSUD), title checks, and documentation review—protecting clients from common real estate risks.",
          items: [
            "Faster Matching – Structured sales systems connect the right buyers to the right properties efficiently",
            "Easier Process – End-to-end handling from inquiry to closing, including documentation and coordination",
            "Transparent Transactions – Clear property details, costs, and timelines with no hidden steps",
          ],
        },
        {
          title: "Built on Trust and Execution",
          type: "content",
          content:
            "Led by Mares Mae Cayog Nuera, a licensed real estate broker with over a decade of experience, Axial was built to address a critical gap in the market: lack of education and compliance in property transactions. By combining brokerage, client education, and full-process support, Axial ensures that every peso invested leads to a property that is secure, compliant, and ready for ownership.",
        },
        {
          title: "Ecosystem Integration",
          type: "bullets",
          content:
            "As part of Astra Group of Companies, Axial is strengthened by an integrated ecosystem that enhances performance and results:",
          items: [
            "AVARIS – sales deployment and lead conversion",
            "AXIS – brand building and demand generation",
            "ASCEND – trained, scalable manpower",
            "ASTRIA – risk protection and insurance support",
          ],
        },
      ],
      cta: {
        text: "Building communities, creating opportunities—within a system designed for scale.",
      },
    },
    {
      id: "logistics-mobility",
      name: "Logistics & Mobility",
      slug: "logistics-mobility",
      tagline: "Fleet operations and transportation-linked revenue systems.",
      hero: {
        title: "Mobility Systems That Move People and Power Business",
        description:
          "Astra’s Logistics & Mobility vertical delivers reliable, scalable transportation solutions powered by structured fleet operations and service systems through its mobility arm, J-Mave Cars.",
      },
      intro:
        "From self-drive rentals to fully managed chauffeur services, Astra transforms transportation into a seamless, dependable, and income-generating component of its broader ecosystem, supporting both individuals and businesses.",
      sections: [
        {
          title: "What We Deliver",
          type: "features",
          items: [
            {
              title: "Fleet Operations",
              description:
                "Well-maintained vehicles optimized for performance, availability, and customer experience. From compact cars to SUVs, the fleet is designed for both personal and business mobility with consistency and reliability.",
            },
            {
              title: "Flexible Mobility Services",
              description:
                "Self-Drive Rentals, Chauffeur Services, and Long-Term Rentals designed for on-demand, corporate, and sustained transportation needs.",
            },
            {
              title: "Transportation-Linked Revenue Systems",
              description:
                "Beyond rentals, Astra structures mobility as a revenue stream through partnerships, fleet optimization, and scalable transport operations.",
            },
          ],
        },
        {
          title: "Astra Advantage in Mobility",
          type: "bullets",
          items: [
            "Right Vehicle Matching – Clients are paired with vehicles that fit their exact needs",
            "Operational Support – Dedicated coordination for bookings and scheduling",
            "Cost Efficiency – Competitive pricing with maintained service quality",
            "Service Reliability – Fast response times and consistent availability",
          ],
        },
        {
          title: "Built for Convenience and Scale",
          type: "content",
          content:
            "J-Mave Cars has built a strong reputation in Davao City for dependable service and customer satisfaction. Backed by Astra’s systems and operational discipline, the mobility unit scales from individual rentals to enterprise-level transport solutions with ease.",
        },
        {
          title: "Ecosystem Integration",
          type: "bullets",
          content:
            "Astra’s Logistics & Mobility vertical integrates with other business units to enhance efficiency and value delivery:",
          items: [
            "AVARIS – bookings and client acquisition",
            "AXIS – digital visibility and demand generation",
            "ASCEND – trained personnel and drivers",
            "ASTRIA – fleet protection and insurance support",
          ],
        },
      ],
      cta: {
        text: "Moving people, powering operations, and creating new pathways for growth.",
      },
    },
    {
      id: "hospitality-lifestyle",
      name: "Hospitality & Lifestyle",
      slug: "hospitality-lifestyle",
      tagline: "Coworking spaces, food & beverage, and lifestyle hubs.",
      hero: {
        title: "Where Productivity Meets Lifestyle and Community",
        description:
          "Astra’s Hospitality & Lifestyle vertical brings together work, leisure, and community through thoughtfully designed spaces powered by iHub Davao.",
      },
      intro:
        "This segment blends coworking, dining, and social experiences into one integrated lifestyle hub designed for freelancers, students, entrepreneurs, and modern communities.",
      sections: [
        {
          title: "What We Deliver",
          type: "features",
          items: [
            {
              title: "Coworking Spaces",
              description:
                "24/7 flexible work and study zones designed for focus, collaboration, and productivity with high-speed internet and comfortable environments.",
            },
            {
              title: "Food & Beverage Experience",
              description:
                "A full bistro offering meals, snacks, and artisan coffee designed to support productivity and casual social experiences.",
            },
            {
              title: "Lifestyle & Community Hubs",
              description:
                "Spaces where people can work, eat, drink, and play, featuring billiards, live music nights, and social events.",
            },
          ],
        },
        {
          title: "The iHub Experience",
          type: "bullets",
          items: [
            "24/7 Access – Work or unwind anytime without limitations",
            "All-in-One Environment – Study, work, dine, and relax in one space",
            "Community-Driven – Built for collaboration and shared experiences",
            "Membership (iAccess) – Rewards, perks, and access across all zones",
          ],
        },
        {
          title: "Designed for Modern Lifestyles",
          type: "content",
          content:
            "Whether it’s a freelancer needing uninterrupted focus, a student preparing for exams, or a group looking to unwind, Astra’s lifestyle hubs adapt to different needs. The combination of productivity and social experiences creates an environment that supports both personal and professional growth.",
        },
        {
          title: "Ecosystem Integration",
          type: "bullets",
          content:
            "Astra enhances its hospitality and lifestyle spaces through an integrated ecosystem:",
          items: [
            "AXIS – branding, campaigns, and community engagement",
            "AVARIS – memberships and customer acquisition",
            "ASCEND – trained staff and operations support",
            "AIVOX – digital systems and connectivity",
          ],
        },
      ],
      cta: {
        text: "Where productivity meets community—and every visit creates value.",
      },
    },
    {
      id: "business-solutions",
      name: "Business Solutions",
      slug: "business-solutions",
      tagline: "Sales, marketing, finance, technology, and insurance support.",
      hero: {
        title: "Integrated Business Systems That Drive Real Growth",
        description:
          "Astra’s Business Solutions vertical brings together sales, marketing, technology, and risk protection into one unified ecosystem designed for scalable business growth.",
      },
      intro:
        "Built for startups, SMEs, and scaling enterprises, Astra transforms fragmented business efforts into structured systems that generate revenue, strengthen operations, and support long-term growth.",
      sections: [
        {
          title: "What We Deliver",
          type: "features",
          items: [
            {
              title: "Sales Systems (AVARIS)",
              description:
                "24/7 sales support designed to capture every opportunity, manage pipelines, and convert leads into revenue through structured follow-ups and inquiry handling.",
            },
            {
              title: "Marketing Systems (AXIS)",
              description:
                "Strategic branding, content, and campaigns that combine creativity and data-driven strategy to increase visibility and convert engagement into sales.",
            },
            {
              title: "Technology Solutions (AIVOX)",
              description:
                "Custom digital systems including websites, CRM integrations, POS systems, mobile apps, and software solutions that improve efficiency and scalability.",
            },
            {
              title: "Risk & Protection (ASTRIA)",
              description:
                "Structured insurance and protection planning that safeguards income, assets, and operations through comprehensive coverage strategies.",
            },
          ],
        },
        {
          title: "The Astra Advantage",
          type: "bullets",
          items: [
            "Integrated Systems – Sales, marketing, tech, and protection working together",
            "End-to-End Execution – From lead generation to closing and operations",
            "Data-Driven Decisions – Insights across sales, marketing, and performance metrics",
            "Scalable Support – Systems designed to grow alongside your business",
          ],
        },
        {
          title: "From Attention to Revenue",
          type: "content",
          content:
            "Many businesses struggle not because of lack of effort, but because of disconnected systems. Marketing generates leads that sales cannot follow up on, and opportunities are lost. Astra solves this by integrating all business functions into one system where marketing attracts, sales converts, technology supports operations, and insurance protects growth.",
        },
        {
          title: "Built for Growth",
          type: "content",
          content:
            "Whether launching a startup, scaling operations, or optimizing an existing business, Astra’s Business Solutions vertical provides the structure and execution needed to move forward with clarity, consistency, and confidence.",
        },
      ],
      cta: {
        text: "Systems that don’t just support your business—they drive it forward.",
      },
    },
    {
      id: "ecosystem",
      name: "Astra Ecosystem",
      slug: "ecosystem",
      tagline: "An integrated system powering all Astra verticals.",
      hero: {
        title: "One Ecosystem. Multiple Growth Engines.",
        description:
          "Astra connects its business units into one system that multiplies efficiency, scalability, and results. Instead of isolated services, every unit works together as a unified growth engine for businesses and communities.",
      },
      intro:
        "Each Astra unit plays a role in a larger ecosystem—working together to create structured, scalable business solutions. This interconnected system removes fragmentation between sales, marketing, technology, manpower, and protection, allowing businesses to operate with clarity and momentum.",
      sections: [
        {
          title: "Core Units",
          type: "features",
          items: [
            {
              title: "AVARIS",
              description:
                "Sales systems and lead conversion infrastructure that ensures every inquiry is captured, followed up, and guided toward closing through structured communication and pipeline management.",
            },
            {
              title: "AXIS",
              description:
                "Marketing and brand growth systems that build visibility, attract qualified audiences, and convert attention into measurable business results through strategy and content execution.",
            },
            {
              title: "AIVOX",
              description:
                "Technology and software solutions that power digital transformation through websites, applications, automation systems, and custom business tools designed for scalability.",
            },
            {
              title: "ASTRIA",
              description:
                "Insurance and protection planning that safeguards individuals and businesses through structured risk management, financial security, and long-term coverage strategies.",
            },
            {
              title: "ASCEND",
              description:
                "Manpower and operational support providing trained personnel, execution teams, and scalable workforce solutions that ensure smooth and efficient business operations.",
            },
          ],
        },
        {
          title: "Why It Works",
          type: "bullets",
          items: [
            "All systems are connected and operate as one unified structure",
            "No gaps between marketing, sales, operations, and execution",
            "Technology enhances every layer of the business ecosystem",
            "Each unit strengthens the others through shared objectives",
            "Built to eliminate inefficiency and fragmented workflows",
            "Designed for long-term scalability and continuous growth",
            "Creates predictable, system-driven business performance",
          ],
        },
      ],
      cta: {
        text: "A complete system designed to help businesses grow faster, operate smarter, and scale without fragmentation or inefficiency.",
      },
    },
  ],
};

// Helper to get article by ID
export const getArticleById = (id: string): Vertical | undefined => {
  return articleData.verticals.find((v) => v.id === id || v.slug === id);
};

// Helper to get all articles except one
export const getRelatedArticles = (excludeId: string): Vertical[] => {
  return articleData.verticals.filter(
    (v) => v.id !== excludeId && v.slug !== excludeId,
  );
};
