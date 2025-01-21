// "use client";

// import { useEffect, useRef } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Download, FileText, Image, FileCode } from "lucide-react";
// import Link from "next/link";

// export default function PaperFormat() {
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [controls, isInView]);

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" },
//     },
//   };

//   const formatSections = [
//     {
//       title: "Abstract Format",
//       icon: <FileText className="w-8 h-8" />,
//       content:
//         "The abstract should be a concise summary of your research, not exceeding 300 words. It should include the research objectives, methodology, results, and conclusions. Use clear, concise language and avoid jargon or acronyms.",
//       downloadLink: "/paperformat/Abstract_Template.docx",
//     },
//     {
//       title: "Full Paper Format",
//       icon: <FileCode className="w-8 h-8" />,
//       content:
//         "Full papers should be between 3000-5000 words, excluding references and appendices. Use Times New Roman, 12-point font, double-spaced. Include an abstract, keywords, introduction, methodology, results, discussion, conclusion, and references. Follow APA 7th edition for citations and references.",
//       downloadLink: "/paperformat/Fullpaper_Template.doc",
//     },
//     {
//       title: "Poster Format",
//       icon: <Image className="w-8 h-8" />,
//       content:
//         "Posters should be designed in A0 size (841 x 1189 mm) in portrait orientation. Use a clear, readable font (at least 24-point for body text, larger for headings). Include a title, authors, affiliation, introduction, methods, results, conclusions, and key references. Use graphics, charts, and images to convey your research visually.",
//       downloadLink: "",
//     },
//   ];

//   return (
//     <motion.section
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={containerVariants}
//       className="py-16 px-4 "
//     >
//       <div className="max-w-4xl mx-auto">
//         <motion.div variants={itemVariants} className="text-center mb-12">
//           <Badge variant="outline" className="mb-4 text-lg px-4 py-1">
//             Submission Guidelines
//           </Badge>
//           <h2 className="text-4xl font-bold text-primary mb-4">
//             Paper Format Guidelines
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Follow these guidelines to ensure your submission meets our
//             conference standards.
//           </p>
//         </motion.div>

//         <motion.div
//           className="space-y-8"
//           variants={{
//             visible: { transition: { staggerChildren: 0.1 } },
//           }}
//         >
//           {formatSections.map((section, index) => (
//             <motion.div key={index} variants={itemVariants}>
//               <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/50 backdrop-blur-sm border-2 border-primary/20">
//                 <CardHeader className="bg-primary text-primary-foreground p-6">
//                   <CardTitle className="text-2xl flex items-center gap-2">
//                     {section.icon}
//                     {section.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-6">
//                   <p className="text-lg mb-6 text-muted-foreground">
//                     {section.content}
//                   </p>
//                   <Link href={section.downloadLink}>
//                   <Button
//                     className="w-full sm:w-auto border-2 border-primary py-5 font-bold"
//                     variant="secondary"
//                     >
//                     <Download className="mr-2 h-4 w-4 text-primary" />
//                     Download {section.title} Template
//                   </Button>
//                     </Link>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }
