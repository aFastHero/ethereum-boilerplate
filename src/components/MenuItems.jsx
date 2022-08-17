// import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = "nft"; // useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="nftMarket">
        <NavLink to="/nftMarket">🛒 Explore</NavLink>
      </Menu.Item>
      <Menu.Item key="nft">
        <NavLink to="/nftBalance">🖼️ Your Collection</NavLink>
      </Menu.Item>
      <Menu.Item key="transactions">
        <NavLink to="/transactions">🧾 Transactions</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
