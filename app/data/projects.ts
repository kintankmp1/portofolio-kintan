export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  featured: boolean;
}

export const projects = [
  {
    title: "Inventory Management System",
    description:
      "A web-based inventory management system for managing products, suppliers, stock, and transactions efficiently.",
    image: "/projects/sharp.png",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    featured: true,
  },

  {
    title: " Web Diagnosa Penyakit ISPA",
    description:
      "A web-based expert system that helps users identify respiratory diseases (ISPA) through symptom analysis using a rule-based diagnostic approach.",
    image: "/projects/ispa1.png",
    tech: ["PHP","MySQL","Bootstrap"],
    featured: true,
  },

  {
    title: "Sales Administration App (UI/UX Design)",
    description:
      "Designed a responsive sales administration interface to simplify order management, inventory tracking, and reporting while improving user experience.",
    image: "/projects/uiboga.png",
    tech: ["Figma","UI/UX","Wireframe","Prototype"],
    featured: true,
  },
  {
    title: "Art Exhibition Website",
    description:
      "A responsive portfolio website built using Next.js, TypeScript, and Tailwind CSS.",
    image: "/projects/art.png",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true,
  },
  {
    title: "Jual Tanah App (UI/UX Design)",
    description:
      "Designed a mobile application that helps users search, compare, and purchase land properties through an intuitive and user-friendly interface.",
    image: "/projects/tanah.png",
    tech: ["Figma", "UI/UX", "Prototype"],
    featured: true,
  },
  {
    title: "Spotify User Behavior Analysis",
    description:
      "Analyzed Spotify user listening behavior using exploratory data analysis and data visualization to identify listening patterns and user preferences.",
    image: "/projects/spotifyy.png",
    tech: ["Python", "Google Colab", "Pandas", "Matplotlib"],
    featured: true,
  },
];
