import { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import cardsData from '../Data/cardsData'; 

const Card = () => {
  // State for the card data
  const [cards, setCards] = useState(cardsData.cards);

  const icons = [
    <AiOutlineEye size={22} />,
    <AiOutlineUser size={22} />,
    <AiOutlineShoppingCart size={22} />,
    <FaRegChartBar size={22} />,
  ];

  const trendIcon = <FaRegChartBar size={20} />;

  const updateCard = (id, newLabel, newValue) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, label: newLabel, value: newValue } : card
      )
    );
  };

  return (
    <div>
      {/* Cards Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark"
          >
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
              <div className="text-primary dark:text-white">{icons[index]}</div>
            </div>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-md font-bold text-black dark:text-white">
                  {card.value}
                </h4>
                <span className="text-sm font-medium">{card.label}</span>
              </div>

              <span className="flex items-center gap-1 text-sm font-semibold text-meta-3">
                {trendIcon}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Update Buttons */}

    </div>
  );
};

export default Card;
