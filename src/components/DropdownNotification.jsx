import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa'; // Import the bell icon from react-icons

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // Simulating API call
  useEffect(() => {
    const fetchNotifications = async () => {
      const fakeData = [
        {
          id: 1,
          title: 'Edit your information in a swipe',
          description:
            'Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
          date: '12 May, 2025',
        },
        {
          id: 2,
          title: 'It is a long established fact',
          description: 'That a reader will be distracted by the readable.',
          date: '24 Feb, 2025',
        },
        {
          id: 3,
          title: 'There are many variations',
          description:
            'Of passages of Lorem Ipsum available, but the majority have suffered.',
          date: '04 Jan, 2025',
        },
        {
          id: 4,
          title: 'Many variations',
          description:
            'Of passages of Lorem Ipsum available, but the majority have suffered.',
          date: '01 Dec, 2024',
        },
      ];
      setNotifications(fakeData);
    };

    fetchNotifications();
  }, []);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [dropdownOpen]);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [dropdownOpen]);

  return (
    <li className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        to="#"
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        <span className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1">
          <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>
        <FaBell className="text-xl" /> {/* Notification bell icon */}
      </Link>

      <div
        ref={dropdown}
        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          {notifications.map((notification) => (
            <li key={notification.id}>
              <Link
                className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                to="#"
              >
                <p className="text-sm">
                  <span className="text-black dark:text-white">
                    {notification.title}
                  </span>{' '}
                  {notification.description}
                </p>
                <p className="text-xs">{notification.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropdownNotification;
