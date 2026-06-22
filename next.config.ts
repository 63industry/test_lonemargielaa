import path from "path";
import type { NextConfig } from "next";

const config: NextConfig = {
  // Ensure Next.js traces files from this directory, not the parent
  outputFileTracingRoot: path.join(__dirname),
};

export default config;
