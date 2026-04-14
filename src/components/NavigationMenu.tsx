import React from 'react';

const NavigationMenu: React.FC = () => {
  const menuItems = ['Menu 0', 'Menu 1', 'Menu 2', 'Menu 3'];

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-8">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="group relative"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                <span className="text-white font-semibold text-sm">{item}</span>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NavigationMenu;
