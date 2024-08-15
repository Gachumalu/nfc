import React from "react";

const Page = () => {
  return (
    <div className="bg-yellows  h-screen uppercase ">
      <div className=" pt-40 mx-auto p-4 text-blacks font-semibold overflow-x-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-2 uppercase text-blacks ">
            Top Goals
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                    Rank
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                    Player
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                    Team
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                    Goals
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b ">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">oliver</td>
                  <td className="px-4 py-2">ARC</td>
                  <td className="px-4 py-2">2</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">BRIJAL</td>
                  <td className="px-4 py-2">DFC</td>
                  <td className="px-4 py-2">2</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">SAMIR</td>
                  <td className="px-4 py-2">CTG</td>
                  <td className="px-4 py-2">1</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">SWAPNIL</td>
                  <td className="px-4 py-2">ARC</td>
                  <td className="px-4 py-2">1</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-4 py-2">5</td>
                  <td className="px-4 py-2">RAHUL</td>
                  <td className="px-4 py-2">DBU</td>
                  <td className="px-4 py-2">1</td>
                </tr>
                {/* <!-- Add more rows as needed --> */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-2  text-blacks uppercase">
            Top Assist
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                    Rank
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                    Player
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                    Team
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">
                    Assist
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b  ">
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">LINCON</td>
                  <td className="px-4 py-2">ARC</td>
                  <td className="px-4 py-2">1</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">OLIVER</td>
                  <td className="px-4 py-2">ARC</td>
                  <td className="px-4 py-2">1</td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">Brijal</td>
                  <td className="px-4 py-2">D.F.C</td>
                  <td className="px-4 py-2">1</td>
                </tr>

                {/* <!-- Add more rows as needed --> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
