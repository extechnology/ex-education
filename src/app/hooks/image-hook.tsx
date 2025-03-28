import { useQuery } from "@tanstack/react-query";

const fetchImages = async () => {
  const response = await fetch("http://127.0.0.1:8000/api/images/");
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }
  return response.json();
};
export const useImages = () => {
  return useQuery({
    queryKey: ["images"],
    queryFn: fetchImages,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    retry: 2, // Retry twice if request fails
  });
};
