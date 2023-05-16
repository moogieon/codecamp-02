import { useRouter } from "next/router";
import { Menu } from "./MenuItem.style";
const MenuItem = ({
  handleMenuClick,
  path,
  label,
}: {
  handleMenuClick: any;

  path: string;
  label: string;
}) => {
  const router = useRouter();
  const isActive = router.pathname === path;

  return (
    <Menu isActive={isActive} onClick={() => handleMenuClick(path)}>
      {label}
    </Menu>
  );
};

export default MenuItem;
