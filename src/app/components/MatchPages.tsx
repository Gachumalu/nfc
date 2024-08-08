import React from "react";

interface MatchPagesProps {
  team1Name: string;
  team2Name: string;
  team1Image: string;
  team2Image: string;
  team1score: string;
  team2score: string;
}

const MatchPages: React.FC<MatchPagesProps> = ({
  team1Name,
  team2Name,
  team1Image,
  team2Image,
  team1score,
  team2score,
}) => {
  return (
    <div>
      <div
        className={`matches flex flex-col justify-center items-center gap-4 p-4 sm:p-6 md:p-8`}
      >
        <div className="w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3 h-48  ">
          {/* <h1 className=" uppercase font-bold text-2xl text-blacks">match1</h1> */}
          <div className="grid grid-cols-3 gap-4 p-4 sm:p-6 md:p-8 rounded-md bg-Perano ">
            <div className=" flex justify-center items-center p-4 h-24">
              <img src={team1Image} alt={team1Name} className="logo-radiuss" />
            </div>

            <div className=" flex justify-center items-center p-1 h-24 font-bold text-2xl">
              {team1score} vs {team2score}
            </div>
            <div className=" flex justify-center items-center p-4 h-24">
              <img src={team2Image} alt={team2Name} className="logo-radiuss" />
            </div>

            <div className="flex justify-center items-center">
              <h1 className="font-bold">{team1Name}</h1>
            </div>
            <div className="flex justify-center items-center text-2xl"></div>
            <div className="flex justify-center items-center">
              <h1 className="font-bold">{team2Name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchPages;
