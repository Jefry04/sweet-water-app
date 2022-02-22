import { ArchiveIcon, AvatarIcon, FileTextIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";

export const routeList = [
  {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "/forms",
    label: "Formularios",
    icon: ArchiveIcon,
  },
  {
    href: "/datasheet",
    label: "Fichas Técnicas",
    icon: FileTextIcon,
  },
];

export const adminList = [
  {
    href: "/admin/signup",
    label: "Crear Usuario",
    icon: AvatarIcon,
  },
  {
    href: "/admin/employees/create",
    label: "Crear Empleado",
    icon: PersonIcon,
  },
];
