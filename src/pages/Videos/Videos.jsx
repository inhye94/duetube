import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard/VideoCard";
import QaYoutube from "../../apis/QaYoutube";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: async () => {
      const youtube = new QaYoutube();
      return youtube.search(keyword);
    },
    refetchOnWindowFocus: false,
  });

  if (error) return <p>에러 났서요!</p>;

  if (isLoading) return <p className="loading">Loading!!!</p>;

  return (
    <>
      <section>
        <header>
          <h2>{keyword ? `${keyword} 검색결과` : "요즘 인기있는 비디오🔥"}</h2>
        </header>

        <ul>
          {videos.map((video, i) => (
            <li key={video.id}>
              <VideoCard video={video} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
