"use client";

// Description: About Me section for Karan Upadhyay, showcasing specialized technologies in AI, ML, and Full Stack Development.

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechBadge from "@/components/common/TechBadge";
import {
  frontendTech,
  backendTech,
  toolsAndDevops,
  programmingLanguages,
} from "@/lib/data";
import { motion } from "motion/react";

export default function AboutMe() {
  const techCategories = [
    { title: "Development", data: frontendTech || [] },
    { title: "Data & AI Engineering", data: backendTech || [] },
    { title: "Cloud & DevOps", data: toolsAndDevops || [] },
    { title: "Languages", data: programmingLanguages || [] },
  ];

  return (
    <section id="about" className="w-full py-27 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-serif tracking-tight leading-tight mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm Karan — a Full-Stack & Applied AI Engineer at Jain
            Irrigation Systems, where I shipped a React Native app to the App
            Store and Google Play as sole developer and build internal tools
            with multi-agent Claude Code workflows. I'm also pursuing an MCA in
            AI &amp; ML.
          </motion.p>
        </div>

        <div className="mx-auto mt-12 max-w-xs md:max-w-7xl px-4 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-3">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {category.data.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
