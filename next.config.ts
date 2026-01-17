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
    ];
  },
};

export default nextConfig;
