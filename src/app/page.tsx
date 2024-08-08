import Link from "next/link";
import MatchPages from "./components/MatchPages";
import {
  match1,
  match2,
  match3,
  match4,
  match5,
  match6,
  match7,
  match8,
} from "@/data/data";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <div className="bg-yellows  ">
          <h1 className="pt-48 font-bold text-2xl text-RoyalBlue text-center items-center justify-center">
            {" "}
            SATURDAY FIXTURES
          </h1>
          {/* **********************************|| GROUP A || ***************************************** */}
          <div className="pt-12 ">
            <h1 className=" uppercase text-Tamarillo text-3xl font-semibold text-center">
              group A
            </h1>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 1
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">10.00 AM</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...match1 } }}>
              <MatchPages
                team1Name="ALL.ROUNDER"
                team2Name="PAX 11 "
                team1Image="all-rounder.jpg"
                team2Image="pax.jpg"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20  lg:top-24 font-bold text-2xl text-Tamarillo">
              match 2
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">10.00 AM</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...match2 } }}>
              <MatchPages
                team1Name="WADI BOYS"
                team2Name="PALI.PIRATES"
                team1Image="wadi-boys.jpg"
                team2Image="godson.png"
              />
            </Link>
          </div>
          {/* **********************************|| GROUP A || ***************************************** */}

          {/* **********************************|| GROUP B || ***************************************** */}
          <div className="mt-16  ">
            <h1 className=" uppercase text-Tamarillo text-3xl font-semibold text-center">
              group B
            </h1>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 3
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">11.00 AM</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...match3 } }}>
              <MatchPages
                team1Name="TUK_TAK_BOYS"
                team2Name="CTG "
                team1Image="tuktak.jpg"
                team2Image="ctg.jpg"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 4
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">12.00 PM</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...match4 } }}>
              <MatchPages
                team1Name="ALL_ULTIMATE"
                team2Name="ST.JOHN"
                team1Image="allultimate.jpg"
                team2Image="godson.png"
              />
            </Link>
          </div>
          {/* **********************************|| GROUP B || ***************************************** */}
          <h1 className="pt-16 font-bold text-2xl text-RoyalBlue text-center items-center justify-center">
            {" "}
            SUNDAY FIXTURES
          </h1>
          {/* **********************************|| GROUP C || ***************************************** */}
          <div className="mt-16  ">
            <h1 className=" uppercase text-Tamarillo text-3xl font-semibold text-center">
              group C
            </h1>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 5
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">11.00 AM</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...match5 } }}>
              <MatchPages
                team1Name="NFC"
                team2Name="ST.ANTHONY"
                team1Image="nfc1.jpg"
                team2Image="st-anthony.jpg"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 6
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">12.00 PM</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...match6 } }}>
              <MatchPages
                team1Name="BFC"
                team2Name="VIP"
                team1Image="bfc.jpg"
                team2Image="vip.png"
              />
            </Link>
          </div>

          {/* **********************************|| GROUP C || ***************************************** */}

          {/* **********************************|| GROUP D || ***************************************** */}
          <div className="mt-16  ">
            <h1 className=" uppercase text-Tamarillo text-3xl font-semibold text-center">
              group D
            </h1>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 7
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">11.00 AM</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...match7 } }}>
              <MatchPages
                team1Name="STC"
                team2Name="DFC"
                team1Image="stc.jpg"
                team2Image="dfc.jpg"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 8
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">12.00 PM</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...match8 } }}>
              <MatchPages
                team1Name="DBU"
                team2Name="ST.JUDE"
                team1Image="dbu.jpg"
                team2Image="godson.png"
              />
            </Link>
          </div>
          {/* **********************************|| GROUP D || ***************************************** */}
        </div>
      </Suspense>
    </>
  );
}
