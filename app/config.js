export const websiteName = "Juna Gregersen";
export const websiteDescription = "The personal website of Juna Gregersen.";
export const githubUsername = "junag1";

// computed values

export const metadata = {
  title: {
    default: `Home ⋅ ${websiteName}`,
    template: `%s ⋅ ${websiteName}`,
  },
  description: websiteDescription,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
