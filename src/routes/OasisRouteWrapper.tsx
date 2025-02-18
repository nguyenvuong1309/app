import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PATH from "../config/path";

export type Props = {
  children: React.ReactNode;
};

const OASIS_ROUTES = [
  PATH.LANDLORD + PATH.LIST_TYPE_OASIS,
  PATH.LANDLORD + PATH.LIST_INCLUDE_FEATURE,
  PATH.LANDLORD + PATH.VIEWING_AVAILABILITY,
  PATH.LANDLORD + PATH.WEEKLY_AVAILABILITY,
  PATH.LANDLORD + PATH.ADD_NEW_OASIS,
];

export const OasisRouteWrapper = (props: Props) => {
  const { children } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackButton = useCallback(() => {
    // Kiểm tra nếu đang ở một trong các routes của quy trình tạo Oasis
    if (OASIS_ROUTES.some((route) => location.pathname.includes(route))) {
      const oasisData = localStorage.getItem("oasisState");

      if (!oasisData) {
        // Nếu không có dữ liệu, redirect về trang đầu tiên
        navigate(PATH.LANDLORD + PATH.LIST_TYPE_OASIS);
        return;
      }

      // Nếu có dữ liệu, khôi phục trạng thái
      const data = JSON.parse(oasisData);
      const searchParams = new URLSearchParams();

      if (data.type) searchParams.set("type", data.type);
      if (data.features) searchParams.set("features", data.features.join(","));
      if (data.bedrooms) searchParams.set("bedrooms", data.bedrooms.toString());
      if (data.bathrooms)
        searchParams.set("bathrooms", data.bathrooms.toString());

      // Cập nhật URL với params đã lưu
      navigate(
        {
          pathname: location.pathname,
          search: searchParams.toString(),
        },
        { replace: true }
      );
    }
  }, [location.pathname, navigate]);

  // Custom hook để theo dõi sự kiện back button
  useEffect(() => {
    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [handleBackButton]);

  // Theo dõi thay đổi route để khôi phục dữ liệu
  useEffect(() => {
    const currentRoute = OASIS_ROUTES.find((route) =>
      location.pathname.includes(route)
    );

    if (currentRoute) {
      const oasisData = localStorage.getItem("oasisState");
      if (!oasisData) {
        navigate(PATH.LANDLORD + PATH.LIST_TYPE_OASIS);
      }
    }
  }, [location.pathname, navigate]);

  return <>{children}</>;
};
