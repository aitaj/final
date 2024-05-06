import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar-custom">
      <div className="sidebar">
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <Link to="/admin" className="link">
                <li className="sidebarListItem">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
              </Link>
              <Link to="/admin/categories">
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  Categories
                </li>
              </Link>
              <Link to="/admin/sizes">
                {" "}
                <li className="sidebarListItem">
                  <TrendingUp className="sidebarIcon" />
                  Sizes
                </li>
              </Link>
              <Link to="/admin/locations" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Locations
                </li>
              </Link>
              <Link to="/admin/subcategories" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Subcategories
                </li>
              </Link>
              <Link to="/admin/brends" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Brends
                </li>
              </Link>
              <Link to="/admin/colours" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Colours
                </li>
              </Link>
              <Link to="/admin/materials" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Materials
                </li>
              </Link>
              <Link to="/admin/products" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Products
                </li>
              </Link>
              <Link to="/admin/productimages" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Product İmages
                </li>
              </Link>
              <Link to="/admin/companies" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Companies
                </li>
              </Link>
              <Link to="/admin/secondhandproducts" className="link">
                <li className="sidebarListItem">
                  <Storefront className="sidebarIcon" />
                  Secondhand Products
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
