import React from "react";
import { Metadata } from "next";

import ProfileFeature from "@/features/Base/Profile";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return <ProfileFeature />;
};

export default ProfilePage;
