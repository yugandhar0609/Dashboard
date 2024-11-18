import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoChatbubbleEllipses } from 'react-icons/io5'; // Importing the message icon from react-icons

import UserOne from '../images/user/user-01.png';
import UserTwo from '../images/user/user-02.png';
import UserThree from '../images/user/user-03.png';
import UserFour from '../images/user/user-04.png';

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  
  const trigger = useRef(null);
  const dropdown = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [dropdownOpen]);

  // Close dropdown on ESC key press
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [dropdownOpen]);

  // Fetch dynamic messages on component mount
  useEffect(() => {
    const fetchMessages = () => {
      const fetchedMessages = [
        { id: 1, name: 'Mariya Desoja', text: 'I like your confidence 💪', time: '2min ago', image: UserTwo },
        { id: 2, name: 'Robert Jhon', text: 'Can you share your offer?', time: '10min ago', image: UserOne },
        { id: 3, name: 'Henry Dholi', text: 'I came across your profile and...', time: '1 day ago', image: UserThree },
        { id: 4, name: 'Cody Fisher', text: 'I’m waiting for your response!', time: '5 days ago', image: UserFour },
        { id: 5, name: 'Mariya Desoja', text: 'I like your confidence 💪', time: '2min ago', image: UserTwo },
      ];

      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, []);

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        to="#"
      >
        <span className="absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1">
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>
        {/* Using the React Icon for the message */}
        <IoChatbubbleEllipses className="text-xl" />
      </Link>

      {/* Dropdown Start */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${dropdownOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Messages</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {messages.map((message) => (
            <li key={message.id}>
              <Link
                className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                to="/messages"
              >
                <div className="h-12.5 w-12.5 rounded-full">
                  <img src={message.image} alt="User" />
                </div>

                <div>
                  <h6 className="text-sm font-medium text-black dark:text-white">{message.name}</h6>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs">{message.time}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Dropdown End */}
    </li>
  );
};

export default DropdownMessage;
