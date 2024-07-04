export const NavBarLayout = [
  { caption: "Home", path: "/" },
  { caption: "Movies", path: "/movies" },
  { caption: "Actors", path: "/actors" },
];

export const navLinkStyling = ({ isActive, isPending }) =>
  isPending ? "pending" : isActive ? "active" : "";
