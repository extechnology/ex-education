import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the API response type
interface ImageData {
  id: number;
  section: string;
  image: string;
}

// Create a context type
interface ImageContextType {
  images: ImageData[];
}

// Create a context with a default empty value
const ImageContext = createContext<ImageContextType | undefined>(undefined);

// Provider Component
export const ImageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/section-images/"
        ); // Replace with your actual API endpoint
        const data: ImageData[] = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <ImageContext.Provider value={{ images }}>{children}</ImageContext.Provider>
  );
};

// Custom hook to use the context
export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImageContext must be used within an ImageProvider");
  }
  return context;
};
