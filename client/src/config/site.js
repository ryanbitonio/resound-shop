import model1 from "../assets/models/model-1.webp";
import model2 from "../assets/models/model-2.webp";
import model3 from "../assets/models/model-3.webp";
import model4 from "../assets/models/model-4.webp";
import model5 from "../assets/models/model-5.webp";

import ticket from "../assets/featured-products/ticket.jpg";
import totebag from "../assets/featured-products/totebag.webp";
import shirt from "../assets/featured-products/shirt.webp";

const links = {
  facebook: "https://www.facebook.com/MSJRESOUND",
  twitter: "https://www.facebook.com/MSJRESOUND",
  instagram: "https://www.facebook.com/MSJRESOUND",
};

export const siteConfig = {
  links,
  footerNav: [
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/",
          external: false,
        },
        {
          title: "Contact",
          href: "/",
          external: false,
        },
        {
          title: "FAQ",
          href: "/",
          external: false,
        },
        {
          title: "Terms",
          href: "/",
          external: false,
        },
        {
          title: "Privacy",
          href: "/",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Facebook",
          href: links.twitter,
          external: true,
        },
        {
          title: "Twitter",
          href: links.githubAccount,
          external: true,
        },
        {
          title: "Instagram",
          href: links.discord,
          external: true,
        },
      ],
    },
  ],

  gallery: [
    {
      src: ticket,
      title: "Sovereign Ticket",
      price: "500",
      alt: "Resound Sovereign ticket",
    },
    {
      src: totebag,
      title: "Sovereign Totebag",
      price: "500",
      alt: "Resound Sovereign totebag",
    },
    {
      src: shirt,
      title: "Sovereign Shirt",
      price: "500",
      alt: "Resound Sovereign shirt",
    },
    {
      src: ticket,
      title: "Sovereign Ticket",
      price: "500",
      alt: "Resound Sovereign ticket",
    },
    {
      src: ticket,
      title: "Sovereign Ticket",
      price: "500",
      alt: "Resound Sovereign ticket",
    },
    {
      src: totebag,
      title: "Sovereign Totebag",
      price: "500",
      alt: "Resound Sovereign totebag",
    },
    {
      src: shirt,
      title: "Sovereign Shirt",
      price: "500",
      alt: "Resound Sovereign shirt",
    },
    {
      src: ticket,
      title: "Sovereign Ticket",
      price: "500",
      alt: "Resound Sovereign ticket",
    },
  ],
  carousel: [
    { src: model1, alt: "A woman with curly hair sitting on a white surface" },
    {
      src: model2,
      alt: "A man in a white t-shirt posing against a plain white background",
    },
    { src: model3, alt: "A woman in a black turtleneck" },
    { src: model4, alt: "A woman posing for a picture" },
    { src: model5, alt: "A group of knit hats and a cactus" },
  ],

  clothing: [
    {
      title: "Shirt",
      href: "/",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      title: "Hoodie",
      href: "/",
      description: "How to install dependencies and structure your app.",
    },
    {
      title: "Beanie",
      href: "/",
      description: "Styles for headings, paragraphs, lists...etc",
    },
    {
      title: "Cap",
      href: "/",
      description: "Styles for headings, paragraphs, lists...etc",
    },
    {
      title: "Socks",
      href: "/",
      description: "Styles for headings, paragraphs, lists...etc",
    },
  ],

  accessories: [
    {
      title: "Bag",
      href: "/",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Bracelet",
      href: "/",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Wallet",
      href: "/",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Tumbler",
      href: "/",
      description: "Visually or semantically separates content.",
    },
  ],
};
