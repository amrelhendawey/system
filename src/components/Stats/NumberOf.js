import React, { useEffect, useState } from "react";
import axios from "axios";

const NumberOf = () => {
  const [userCount, setUserCount] = useState(0);
  const [adminCount, setAdminCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch number of users
        const userResponse = await axios.get('http://localhost/MyPHPWebsite/api/countusers.php');
        setUserCount(userResponse.data.count); // Assume the response returns { count: number }

        // Fetch number of admins
        const adminResponse = await axios.get('http://localhost/MyPHPWebsite/api/countadmins.php');
        setAdminCount(adminResponse.data.count); // Assume the response returns { count: number }
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <section className="w-full h-28 grid grid-cols-2 grid-rows-1 gap-3">
      <div className="bg-slate-100 rounded-xl shadow-md flex flex-col justify-center items-start space-y-2 p-2">
        <p className="text-sm text-gray-500">Number Of Users</p>
        <p className="text-2xl font-semibold text-[#222B45]">{userCount}</p>
      </div>
      <div className="bg-slate-100 rounded-xl shadow-md flex flex-col justify-center items-start space-y-2 p-2">
        <p className="text-sm text-gray-500">Number Of Admin</p>
        <p className="text-2xl font-semibold text-[#222B45]">{adminCount}</p>
      </div>
    </section>
  );
};

export default NumberOf;
