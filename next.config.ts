import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: '/brand',
        destination:
          'https://drive.google.com/drive/folders/1pzq0V6EqIXLD8jS7HMGfFr7XLeJEGzkc',
        permanent: false,
      },
      {
        source: "/about",
        destination: "https://docs.fileverse.io/0xe59f51d0fd360e0dc5c73f17d2cfaf314244bbb8/0#key=e-MSDsPvPh4H92CVFBCrivuIo6kqqsDT31ZcdqwBEcW3baeCn_vL4-F55ca08Tkc",
        permanent: false
      }
    ];
  },
};

export default nextConfig;