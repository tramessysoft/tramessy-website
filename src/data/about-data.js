export const getAboutContent=(t) =>( {
  aboutTramessy: {
    title: t("about.title"),
    paragraphs: [
      t("about.description.text1"),
      t("about.description.text2"),
      t("about.description.text3"),
    ],
    
    image: "/about-collage.png", // Placeholder for the collage image
  },
  mission: {
    title: t("about.mission.title"),
    paragraph: t("about.mission.description"),
    image: "/mission-illustration.png", // Placeholder for illustration
  },
  vision: {
    title: t("about.vision.title"),
    paragraph: t("about.vision.description"),
    image: "/vision-illustration.png", // Placeholder for illustration
  },
  services: {
    title: t("services.title"),
    paragraph: t("services.paragraph"),
    list: [
      t("services.list.0"),
      t("services.list.1"),
      t("services.list.2"),
      t("services.list.3"),
      t("services.list.4"),
    ],
    image: "/services-illustration.png", // Placeholder for illustration
  },
  technology: {
    title: t("technology.title"),
    paragraph: t("technology.description"),
    list: [
      t("technology.languages"),
      t("technology.frontend"),
      t("technology.backend"),
      t("technology.database"),
      t("technology.hosting"),
      t("technology.testing"),
      t("technology.project_management"),
    ],
    image: "/technology-illustration.png", // Placeholder for illustration
  },
  commitment: {
    title: "আমাদের অঙ্গীকার",
    paragraph:
      "Tramessy শুধুই একটি সফটওয়্যার নয়—এটি একটি পরিবর্তনের যাত্রা। আমরা বিশ্বাস করি, সময় এসেছে দেশের পরিবহন খাতকে কাগজের বোঝা থেকে মুক্ত করে ডিজিটাল পথ দেখানোর। Tramessy – চালান ব্যবসা স্মার্টভাবে।",
  },
})
