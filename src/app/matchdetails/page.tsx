"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const tournamentLogo = searchParams.get("tournamentLogo") || "";
  const tournamentName = searchParams.get("tournamentName") || "";
  const homeTeamName = searchParams.get("homeTeamName") || "";
  const homeTeamScore = parseInt(searchParams.get("homeTeamScore") || "0", 10);
  const awayTeamScore = parseInt(searchParams.get("awayTeamScore") || "0", 10);
  const matchTime = searchParams.get("matchTime") || "";
  const awayTeamLogo = searchParams.get("awayTeamLogo") || "";
  const awayTeamName = searchParams.get("awayTeamName") || "";
  const manOfTheMatch = searchParams.get("manOfTheMatch") || "";
  const matchStatus = searchParams.get("matchStatus") || "";
  const referee = searchParams.get("referee") || "";
  const homeTeamLogo = searchParams.get("homeTeamLogo") || "";
  return (
    <div className="">
      <div className="container bg-yellow-200 ">
        <div className="match mt-60">
          <div className="match-header">
            <div className="match-status">{matchStatus}</div>

            <div className="match-tournament">
              <img src={tournamentLogo} alt="Tournament Logo" />
              {tournamentName}
            </div>
            <div className="match-actions">
              <div className="match-referee">
                Referee: <strong>{referee}</strong>
              </div>
            </div>
          </div>
          <div className="match-content">
            <div className="column">
              <div className="team team--home">
                <div className="team-logo">
                  <img src={homeTeamLogo} alt={`${homeTeamName} Logo`} />
                </div>
                <h2 className="team-name">{homeTeamName}</h2>
              </div>
            </div>
            <div className="column">
              <div className="match-details">
                <div className="match-score">
                  <span className="match-score-number match-score-number--leading">
                    {homeTeamScore}
                  </span>
                  <span className="match-score-divider">:</span>
                  <span className="match-score-number">{awayTeamScore}</span>
                </div>
                <div className="match-time-lapsed">{matchTime}</div>
              </div>
            </div>
            <div className="column">
              <div className="team team--away">
                <div className="team-logo">
                  <img src={awayTeamLogo} alt={`${awayTeamName} Logo`} />
                </div>
                <h2 className="team-name">{awayTeamName}</h2>
              </div>
            </div>
          </div>
          <div className="match-bottom">
            <div className="match-bet-options">
              <p className="match-bet-option">Man Of The Match</p>
              <h1 className="mot-player">{manOfTheMatch}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
