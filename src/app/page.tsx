import Link from "next/link";
import MatchPages from "./components/MatchPages";
import { match1, match2 } from "@/data/data";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <div className=" bg-yellows h-screen pt-36 ">
          <Link
            href={{
              pathname: "/matchdetails",
              query: { ...match1 },
            }}
          >
            <MatchPages
              team1Name="DFC"
              team2Name="STC"
              team1Image="godson.png"
              team2Image="godson.png"
            />
          </Link>

          <Link
            href={{
              pathname: "/matchdetails",
              query: { ...match2 },
            }}
          >
            <MatchPages
              team1Name="DBU"
              team2Name="ST.JUDE"
              team1Image="godson.png"
              team2Image="godson.png"
            />
          </Link>
        </div>
      </Suspense>
    </>
  );
}
