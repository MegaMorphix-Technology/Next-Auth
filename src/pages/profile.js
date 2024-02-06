import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Head from "next/head";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const {data:session} = useSession();

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <Avatar size={64} icon={<UserOutlined />} />
      <div>
        <h1 style={{textAlign:"center",fontFamily:"sans-serif",marginTop:"10%"}}> User Name: {session?.user?.name} </h1>
        <p style={{textAlign:"center",fontFamily:"sans-serif"}}> User Email: {session?.user?.email} </p>
      </div>
    </div>
  );
};

export default ProfilePage;
