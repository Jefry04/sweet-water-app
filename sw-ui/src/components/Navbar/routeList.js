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
    href: "/admin/signup",
    label: "Crear Usuario",
    icon: AvatarIcon,
  },
  {
    href: "/admin/employees/create",
    label: "Crear Empleado",
    icon: PersonIcon,
  },
  {
    href: "/datasheet",
    label: "Fichas Técnicas",
    icon: FileTextIcon,
  },
];
