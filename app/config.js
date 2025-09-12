export const websiteName = "FILL THIS IN";
export const websiteDescription = "FILL THIS IN";
export const githubUsername = "FILL THIS IN";

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
