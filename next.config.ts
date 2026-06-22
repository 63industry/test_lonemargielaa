import path from "path";
import type { NextConfig } from "next";

const config: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  allowedDevOrigins: ["172.17.9.98"],
};

export default config;
