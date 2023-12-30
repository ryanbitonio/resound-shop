import model1 from "../assets/model-1.jpg";
import model2 from "../assets/model-2.jpg";
import model3 from "../assets/model-3.jpg";
import model4 from "../assets/model-4.jpg";
import model5 from "../assets/model-5.jpg";

import ticket from "../assets/featured-products/ticket.jpg";
import totebag from "../assets/featured-products/totebag.png";
import shirt from "../assets/featured-products/shirt.png";

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
    { src: ticket, title: "Sovereign Ticket", price: "500" },
    { src: totebag, title: "Sovereign Totebag", price: "500" },
    { src: shirt, title: "Sovereign Shirt", price: "500" },
    { src: ticket, title: "Sovereign Ticket", price: "500" },
    { src: ticket, title: "Sovereign Ticket", price: "500" },
    { src: totebag, title: "Sovereign Totebag", price: "500" },
    { src: shirt, title: "Sovereign Shirt", price: "500" },
    { src: ticket, title: "Sovereign Ticket", price: "500" },
  ],
  carousel: [
    { src: model1 },
    { src: model2 },
    { src: model3 },
    { src: model4 },
    { src: model5 },
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
