// @ts-check
import { defineConfig } from "astro/config";
import techradar from "@dirsigler/astro-techradar";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://demo.techradar.irsigler.dev",
  integrations: [
    techradar({
      // Brand name shown in the navbar
      name: "demo.techradar.irsigler.dev",

      // Main page heading (falls back to name if not set)
      title: "Tech Radar Demo",

      // Subtitle shown below the title on the main page
      subtitle:
        "An overview of the technologies, frameworks, processes, and languages we use and evaluate.",

      // Mount under a sub-path (e.g. "/techradar") — default: "" (root)
      // basePath: "/techradar",

      // Logo image — path in public/ or external HTTPS URL
      // logo: "/logo.svg",

      // Footer text (supports HTML)
      footer: "Built with Astro &middot",

      // Theme: 'default' | 'catppuccin-mocha' | path to custom CSS
      theme: "default",

      // Color mode configuration
      color: {
        toggle: true, // Show the light/dark mode toggle (default: true)
        mode: "system", // 'light' | 'dark' | 'system' (default: 'system')
      },

      // Search configuration
      search: {
        enabled: true, // Show the search input in the navbar (default: true)
        placeholder: "Search technologies...", // Placeholder text (default: 'Search technologies...')
      },

      // Enable RSS feed at {basePath}/feed.xml (default: true)
      feed: true,

      // Edit page configuration
      editing: {
        enabled: true, // Show "Edit this page" links on technology pages (default: true)
        baseUrl:
          "https://github.com/dirsigler/astro-techradar-demo/edit/main/segments",
      },

      // Social links shown in the footer
      socialLinks: [
        {
          label: "GitHub",
          href: "https://github.com/dirsigler/astro-techradar-demo",
          icon: "github", // Lucide icon name (requires @iconify-json/lucide)
        },
      ],
    }),
    sitemap(),
  ],
});
