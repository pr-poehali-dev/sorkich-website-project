
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#2a3040] text-white flex flex-col items-center">
      {/* Заголовок */}
      <div className="w-full py-12 px-4 text-center bg-[#1A1F2C]/80">
        <h1 className="text-4xl md:text-6xl font-bold text-[#9b87f5] mb-2 animate-fade-in">
          Sorkich Mod
        </h1>
        <div className="inline-block bg-gradient-to-r from-[#7E69AB] to-[#D946EF] bg-clip-text text-transparent text-lg md:text-xl font-medium">
          Лучшие игровые преимущества
        </div>
      </div>

      {/* Карточки с тарифами */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10 max-w-6xl w-full">
        {/* 1-й тариф */}
        <Card className="bg-[#1A1F2C] border-[#6E59A5]/20 shadow-xl transform transition-all hover:scale-105 hover:shadow-[#6E59A5]/20 hover:shadow-lg">
          <CardContent className="p-6 flex flex-col items-center justify-between h-full">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-[#D6BCFA]">1 день</h2>
              <p className="text-3xl font-bold mt-2 text-white">80 ₽</p>
            </div>
            <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white border-none">
              Купить
            </Button>
          </CardContent>
        </Card>

        {/* 2-й тариф */}
        <Card className="bg-[#1A1F2C] border-[#6E59A5]/20 shadow-xl transform transition-all hover:scale-105 hover:shadow-[#6E59A5]/20 hover:shadow-lg">
          <CardContent className="p-6 flex flex-col items-center justify-between h-full">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-[#D6BCFA]">Неделя</h2>
              <p className="text-3xl font-bold mt-2 text-white">400 ₽</p>
            </div>
            <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white border-none">
              Купить
            </Button>
          </CardContent>
        </Card>

        {/* 3-й тариф */}
        <Card className="bg-[#1A1F2C] border-[#6E59A5]/20 shadow-xl transform transition-all hover:scale-105 hover:shadow-[#6E59A5]/20 hover:shadow-lg">
          <CardContent className="p-6 flex flex-col items-center justify-between h-full">
            <div className="text-center mb-4">
              <h2 className="text-xl font-semibold text-[#D6BCFA]">Месяц</h2>
              <p className="text-3xl font-bold mt-2 text-white">800 ₽</p>
            </div>
            <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white border-none">
              Купить
            </Button>
          </CardContent>
        </Card>

        {/* 4-й тариф */}
        <Card className="bg-[#1A1F2C] border-[#6E59A5]/20 shadow-xl transform transition-all hover:scale-105 hover:shadow-[#6E59A5]/20 hover:shadow-lg border-[#8B5CF6] border-2">
          <CardContent className="p-6 flex flex-col items-center justify-between h-full">
            <div className="absolute -top-3 right-0 left-0 flex justify-center">
              <span className="bg-[#8B5CF6] px-3 py-1 rounded-full text-sm font-semibold">
                Выгодно
              </span>
            </div>
            <div className="text-center mb-4 mt-3">
              <h2 className="text-xl font-semibold text-[#D6BCFA]">Навсегда</h2>
              <p className="text-3xl font-bold mt-2 text-white">1500 ₽</p>
            </div>
            <Button className="w-full bg-[#8B5CF6] hover:bg-[#7E69AB] text-white border-none">
              Купить
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Особенности */}
      <div className="w-full max-w-4xl px-4 py-12 mb-8">
        <div className="bg-[#1A1F2C]/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-[#6E59A5]/20">
          <h2 className="text-xl font-bold mb-4 text-center text-[#D6BCFA]">Функции мода</h2>
          
          <ul className="space-y-3 text-gray-100">
            <li className="flex items-center">
              <span className="mr-2 text-xl">😭😮</span>
              <span>New Menu</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl">😭😮</span>
              <span>Aimbot</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl">😭😮</span>
              <span>Memory function's</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl">😭😮</span>
              <span>Esp Menu (soon fully fix)</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl">🛡😮</span>
              <span>Best Anti-ban</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl">😭😮</span>
              <span>Online updates</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-xl">😭😮</span>
              <span>No need download obb</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Футер */}
      <footer className="w-full py-6 bg-[#1A1F2C] text-center text-sm text-gray-400">
        <p>© 2025 Sorkich Mod. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
