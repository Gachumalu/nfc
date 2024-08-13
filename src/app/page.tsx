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
  matchFINAL,
  matchQF1,
  matchQF2,
  matchQF3,
  matchQF4,
  matchSF1,
  matchSF2,
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
              Full <span className="text-blacks">Time</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...match1 } }}>
              <MatchPages
                team1Name="ALL.ROUNDER"
                team2Name="PAX 11 "
                team1Image="all-rounder.jpg"
                team2Image="pax.jpg"
                team1score="0"
                team2score="0"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20  lg:top-24 font-bold text-2xl text-Tamarillo">
              match 2
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Full <span className="text-blacks">Time</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...match2 } }}>
              <MatchPages
                team1Name="WADI BOYS"
                team2Name="PALI.PIRATES"
                team1Image="wadi-boys.jpg"
                team2Image="https://assets.codepen.io/285131/chelsea.svg"
                team1score="1"
                team2score="0"
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
              Full <span className="text-blacks">Time</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...match3 } }}>
              <MatchPages
                team1Name="TUK_TAK_BOYS"
                team2Name="CTG "
                team1Image="tuktak.jpg"
                team2Image="ctg.jpg"
                team1score="0"
                team2score="0"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 4
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Full <span className="text-blacks">Time</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...match4 } }}>
              <MatchPages
                team1Name="ALL_ULTIMATE"
                team2Name="ST.JOHN"
                team1Image="allultimate.jpg"
                team2Image="st-john.jpg"
                team1score="0"
                team2score="0"
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
              Time : <span className="text-blacks">8.30 AM</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...match5 } }}>
              <MatchPages
                team1Name="NFC"
                team2Name="ST.ANTHONY"
                team1Image="nfc1.jpg"
                team2Image="st-anthony.jpg"
                team1score="0"
                team2score="0"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 6
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">09.00 AM</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...match6 } }}>
              <MatchPages
                team1Name="BFC"
                team2Name="VIP"
                team1Image="bfc.jpg"
                team2Image="vip.png"
                team1score="0"
                team2score="0"
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
              Time : <span className="text-blacks">08.30 AM</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...match7 } }}>
              <MatchPages
                team1Name="STC"
                team2Name="DFC"
                team1Image="stc.jpg"
                team2Image="dfc.jpg"
                team1score="0"
                team2score="0"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-2xl text-Tamarillo">
              match 8
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              Time : <span className="text-blacks">09.00 PM</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...match8 } }}>
              <MatchPages
                team1Name="DBU"
                team2Name="ST.JUDE"
                team1Image="dbu.jpg"
                team2Image="st-jude.jpg"
                team1score="0"
                team2score="0"
              />
            </Link>
          </div>
          {/* **********************************|| GROUP D || ***************************************** */}
          {/* **********************************|| QUARTER FINAL 1 || ***************************************** */}
          <div className="mt-16  ">
            <h1 className=" uppercase text-Tamarillo text-3xl font-semibold text-center">
              QUARTER FINAL MATCHES
            </h1>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-1xl text-Tamarillo">
              QUATER FINAL
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              FULL <span className="text-blacks">TIME</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...matchQF1 } }}>
              <MatchPages
                team1Name="ALL_ROUNDER"
                team2Name="WADI_BOYS"
                team1Image="all-rounder.jpg"
                team2Image="wadi-boys.jpg"
                team1score="1"
                team2score="0"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-1xl text-Tamarillo">
              QUATER FINAL
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              FULL <span className="text-blacks">TIME</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...matchQF2 } }}>
              <MatchPages
                team1Name="ALL_ULTIMATE"
                team2Name="CTG"
                team1Image="allultimate.jpg"
                team2Image="ctg.jpg"
                team1score="0"
                team2score="1"
              />
            </Link>
          </div>

          {/* **********************************|| QUARTER FINAL 2 || ***************************************** */}
          <div className="mt-16  ">
            <h1 className=" uppercase text-Tamarillo text-3xl font-semibold text-center">
              QUARTER FINAL MATCHES
            </h1>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-1xl text-Tamarillo">
              QUATER FINAL
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              FULL <span className="text-blacks">TIME</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...matchQF3 } }}>
              <MatchPages
                team1Name="VIP"
                team2Name="ST.ANTHONY"
                team1Image="vip.png"
                team2Image="st-anthony.jpg"
                team1score="0"
                team2score="0"
              />
            </Link>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-1xl text-Tamarillo">
              QUATER FINAL
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              FULL <span className="text-blacks">TIME</span>
            </h1>

            <Link href={{ pathname: "/matchdetails", query: { ...matchQF4 } }}>
              <MatchPages
                team1Name="DBU"
                team2Name="DFC"
                team1Image="dbu.jpg"
                team2Image="dfc.jpg"
                team1score="0"
                team2score="1"
              />
            </Link>
          </div>
          {/* **********************************|| QUARTER FINAL || ***************************************** */}
          {/* **********************************|| SEMI FINAL 2 || ***************************************** */}
          <div className="mt-16  ">
            <h1 className=" uppercase text-Tamarillo text-3xl font-semibold text-center">
              SEMI FINAL MATCH 1
            </h1>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-1xl text-Tamarillo">
              SEMI FINAL
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              FULL <span className="text-blacks">TIME</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...matchSF1 } }}>
              <MatchPages
                team1Name="ALL_ROUNDER"
                team2Name="ctg"
                team1Image="all-rounder.jpg"
                team2Image="ctg.jpg"
                team1score="3"
                team2score="0"
              />
            </Link>
          </div>
          {/* **********************************|| SEMI FINAL 2 || ***************************************** */}
          <div className="mt-16  ">
            <h1 className=" uppercase text-Tamarillo text-3xl font-semibold text-center">
              SEMI FINAL MATCH 2
            </h1>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-1xl text-Tamarillo">
              SEMI FINAL
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              FULL <span className="text-blacks">TIME</span>
            </h1>
            <Link href={{ pathname: "/matchdetails", query: { ...matchSF2 } }}>
              <MatchPages
                team1Name="DFC"
                team2Name="VIP"
                team1Image="dfc.jpg"
                team2Image="vip.png"
                team1score="1"
                team2score="0"
              />
            </Link>
          </div>
          {/* **********************************|| SEMI FINAL || ***************************************** */}
          {/* **********************************||  FINAL || ***************************************** */}
          <div className="mt-16  ">
            <h1 className=" uppercase text-Tamarillo text-3xl font-semibold text-center">
              FINAL MATCH
            </h1>

            <h1 className=" uppercase text-center items-center relative top-20 lg:top-24 font-bold text-1xl text-Tamarillo">
              FINAL
            </h1>

            <h1 className=" uppercase text-center items-center relative top-36 lg:top-48 font-bold  text-Cabaret">
              12 : <span className="text-blacks">30</span>
            </h1>
            <Link
              href={{ pathname: "/matchdetails", query: { ...matchFINAL } }}
            >
              <MatchPages
                team1Name="DFC"
                team2Name="ALL_ROUNDER"
                team1Image="dfc.jpg"
                team2Image="all-rounder.jpg"
                team1score=""
                team2score=""
              />
            </Link>
          </div>
        </div>
      </Suspense>
    </>
  );
}
