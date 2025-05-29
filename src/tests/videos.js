export const mockVideo = {
  id: "12345",
  snippet: {
    title: "Test Video",
    channelTitle: "Test Channel",
    publishedAt: "2023-10-01T00:00:00Z",
    thumbnails: {
      medium: {
        url: "https://example.com/thumbnail.jpg",
      },
    },
  },
  statistics: {
    likeCount: "1000",
    viewCount: "5000",
    commentCount: "200",
  },
};

export const mockVideos = [
  {
    id: "12345",
    snippet: {
      title: "Test Video",
      channelTitle: "Test Channel",
      publishedAt: "2023-10-01T00:00:00Z",
      thumbnails: {
        medium: {
          url: "https://example.com/thumbnail1.jpg",
        },
      },
    },
    statistics: {
      likeCount: "1000",
      viewCount: "5000",
      commentCount: "200",
    },
  },
  {
    id: "123456",
    snippet: {
      title: "Test Video",
      channelTitle: "Test Channel",
      publishedAt: "2023-10-01T00:00:00Z",
      thumbnails: {
        medium: {
          url: "https://example.com/thumbnail2.jpg",
        },
      },
    },
    statistics: {
      likeCount: "1000",
      viewCount: "5000",
      commentCount: "200",
    },
  },
];

export const mockChannel = {
  id: "UC1234567890",
  snippet: {
    title: "Test Channel",
    description: "This is a test channel description.",
    publishedAt: "2023-10-01T00:00:00Z",
    thumbnails: {
      default: {
        url: "https://example.com/channel_thumbnail_default.jpg",
      },
      medium: {
        url: "https://example.com/channel_thumbnail.jpg",
      },
    },
  },
  statistics: {
    subscriberCount: "10000",
    videoCount: "150",
    viewCount: "500000",
  },
};

export const mockDetail = {
  id: "12345",
  snippet: {
    title: "Test Video Detail",
    description: "This is a detailed description of the test video.",
    channelId: "UC1234567890",
    channelTitle: "Test Channel",
    publishedAt: "2023-10-01T00:00:00Z",
    thumbnails: {
      medium: {
        url: "https://example.com/detail_thumbnail.jpg",
      },
    },
  },
  statistics: {
    likeCount: "1500",
    viewCount: "10000",
    commentCount: "300",
  },
};
