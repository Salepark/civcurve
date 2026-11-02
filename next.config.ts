import type { NextConfig } from "next";

// 종교 딥다이브 5개는 /religions 하위로 이동했다. 이미 색인·공유된 구 URL은 영구 리다이렉트로 보존한다.
const MOVED_UNDER_RELIGIONS = ["faith", "islam", "hinduism", "buddhism", "judaism"];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return MOVED_UNDER_RELIGIONS.map((name) => ({
      source: `/:locale(en|ko)/${name}`,
      destination: `/:locale/religions/${name}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
