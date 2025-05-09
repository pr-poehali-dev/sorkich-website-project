
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Устанавливаем анимацию появления с небольшой задержкой
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#9b87f5] to-[#0EA5E9]">
      <div 
        className={`text-center transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-7xl md:text-9xl font-bold mb-8 text-white tracking-wider">
          соркич
        </h1>
        
        <div className="mt-10 opacity-80">
          <Button 
            size="lg"
            variant="outline" 
            className="bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20"
          >
            Нажми меня
          </Button>
        </div>
      </div>
      
      {/* Декоративный элемент */}
      <div className="absolute bottom-8 text-white/60 text-sm">
        ∞ вечный соркич ∞
      </div>
    </div>
  );
};

export default Index;
