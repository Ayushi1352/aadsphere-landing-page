import type { IconType } from "react-icons";
import { FaRegCircle } from "react-icons/fa";
import { FiCheck, FiChevronDown, FiChevronLeft, FiChevronRight, FiClock, FiMenu, FiPhone, FiPlus, FiX } from "react-icons/fi";
import { LuChartNoAxesCombined, LuHandshake } from "react-icons/lu";
import { MdEmail, MdGroups, MdLocationOn, MdSettings, MdStar } from "react-icons/md";
import { RiDoubleQuotesL, RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { TbBulb, TbTargetArrow } from "react-icons/tb";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FiCheck,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiMenu,
  FiPhone,
  FiPlus,
  FiX,
  LuChartNoAxesCombined,
  LuHandshake,
  MdEmail,
  MdGroups,
  MdLocationOn,
  MdSettings,
  MdStar,
  RiDoubleQuotesL,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiYoutubeFill,
  TbBulb,
  TbTargetArrow,
};

type Props = {
  name: string;
  className?: string;
};

export const Icon = ({ name, className }: Props) => {
  const Glyph = icons[name];
  if (!Glyph) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <FaRegCircle aria-hidden="true" className={className} />;
  }
  return <Glyph aria-hidden="true" focusable="false" className={className} />;
};
