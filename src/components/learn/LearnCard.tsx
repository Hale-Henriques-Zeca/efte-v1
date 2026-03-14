"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface LearnCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function LearnCard({
  title,
  description,
  image,
  href,
}: LearnCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition"
    >
      <Link href={href}>
        <div className="h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 text-left">
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>

          <div className="mt-4 text-sm font-medium text-blue-600">
            Ler mais →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
