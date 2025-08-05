import React, { useEffect } from "react";
import { useState } from "react";
import { FaHouseUser } from "react-icons/fa6";
import { HiCalendarDateRange } from "react-icons/hi2";
import { SiReactivex } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";
import { IoMedal } from "react-icons/io5";
import { GiMedalSkull } from "react-icons/gi";
import axios from "axios";
function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/data");
        setData(res.data.data);
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  const rewards = [
    {
      image: "../../src/assets/Frame 1.svg",
      prize: " ₹5,000",
      content: " Certificate of Recognition",
      icon: (
        <PiCertificateFill className="p-2 size-9 bg-secondary-foreground/40  rounded-full" />
      ),
    },
    {
      image: "../../src/assets/Frame 2.svg",
      prize: " ₹10,000",
      content: " Special Gift Hamper",
      icon: (
        <IoMedal className="p-2 size-9 bg-secondary-foreground/40  rounded-full" />
      ),
    },
    {
      image: "../../src/assets/Rectangle 4.svg",
      prize: " ₹20,000",
      content: "Exclusive Campaign Bonus",
      icon: (
        <GiMedalSkull className="p-2 size-9 bg-secondary-foreground/40  rounded-full" />
      ),
    },
  ];
  return (
    <div className="p-4 w-full min-h-screen h-full">
      <div className="p-6 bg-secondary rounded-4xl flex flex-col justify-center items-start gap-3">
        <span className="flex gap-2 items-center font-semibold font-poppins text-xl text-secondary-foreground">
          <FaHouseUser className="size-8 p-2 bg-secondary-foreground rounded-2xl fill-secondary" />{" "}
          Personal & <span className="text-foreground">Account</span> Info
        </span>
        <div className="grid grid-cols-1 md:grid-cols-7 w-full gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 col-span-4">
            <img
              src="../../src/assets/dummy.jpg"
              alt=""
              className="rounded-full w-40 h-40 object-cover shadow-sm shadow-secondary-foreground/50 p-0.5 border-2 border-secondary-foreground/70"
            />

            <div className="flex flex-col justify-center items-start gap-2 w-full">
              <div className="flex flex-col gap-1 w-full">
                <div className=" font-medium font-poppins text-sm text-neutral">
                  Username
                </div>
                <span className="font-medium font-poppins p-2.5 rounded-full bg-muted w-full border border-secondary-foreground/30  text-sm px-4  shadow-md ">
                  {data[0]?.username}
                </span>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className=" font-medium font-poppins text-sm text-neutral">
                  Referral Code
                </div>
                <span className="font-medium font-poppins p-2.5 rounded-full bg-muted w-full border border-secondary-foreground/30 text-sm px-4  shadow-md ">
                  {data[0]?.refferalCode}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start  w-full gap-2 col-span-3">
            <div className="flex flex-col gap-1 w-full">
              <div className="flex  items-center gap-1 font-medium text-sm font-poppins text-neutral w-full">
                <HiCalendarDateRange /> Created At
              </div>
              <div className="font-medium font-inter p-2.5 rounded-full bg-muted w-full border border-secondary-foreground/30 text-sm px-4 shadow-md">
                {new Date(data[0]?.createdAt).toDateString()}
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex  items-center gap-1 font-medium text-sm font-poppins text-neutral w-full">
                <SiReactivex /> Status
              </div>
              <div className="font-medium font-inter p-2.5 rounded-full bg-muted w-full border border-secondary-foreground/30 text-sm px-4 shadow-md">
                Active
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-poppins font-bold">
          Rewards <span className="text-secondary-foreground">Overview</span>
        </h1>
        <p className="font-poppins text-sm ">
          Every contribution counts. Here’s what you’ve achieved.
        </p>
        <div className="mt-4 flex flex-wrap gap-4">
          {rewards.map((reward, index) => {
            return (
              <div
                className="relative flex justify-center items-center h-full"
                key={index}
              >
                <img src={reward.image} className="drop-shadow-md " />
                <div className="absolute top-0 flex flex-col justify-center items-center h-full p-5 gap-2">
                  <span className="flex flex-col justify-center items-center gap-2 text-xl font-bold font-poppins">
                    {reward.icon} <p>{reward.prize}</p>
                  </span>
                  <p className="text-center font-poppins text-sm font-semibold text-shadow-2xs">
                    {reward.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-2xl font-poppins font-bold">
          Dashboard <span className="text-secondary-foreground">Overview</span>
        </h1>
        <p className="font-poppins text-sm ">
          Browse the collection of funds raised and monitor their progress.
        </p>
        <div className="overflow-x-auto rounded-box border border-muted bg-secondary font-poppins mt-2">
          <table className="table">
            <thead className="text-neutral ">
              <tr className="border-b border-muted">
                <th></th>
                <th>Event</th>
                <th>Donator</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}.</th>
                    <td>{data.event}</td>
                    <td>{data.username}</td>
                    <td>Rs. {data.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
