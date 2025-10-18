import React, { useEffect, useState } from "react";

function Installation() {
  const [installApp, setInstallApp] = useState([]);
  const [order, setOrder] = useState("none");

  useEffect(() => {
    const SaveeList = JSON.parse(localStorage.getItem("install") || "[]");
    if (SaveeList) setInstallApp(SaveeList);
  }, []);
  const sortedApps = () => {
    if (order === "price-asc") {
      return [...installApp].sort((a, b) => a.size - b.size);
    } else if (order === "price-dsc") {
      return [...installApp].sort((a, b) => b.size - a.size);
    } else {
      return installApp;
    }
  };

  const handelUnstallButton = (id) => {
    const existingList = JSON.parse(localStorage.getItem("install") || "[]");
    let upDateInstallApp = existingList.filter(p => p.id !== id);
     setInstallApp(upDateInstallApp)

    localStorage.setItem("install", JSON.stringify(upDateInstallApp));
  };
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="text-center mt-">
          <h1 className="text-3xl  md:text-4xl font-bold">
            Your Installed Apps
          </h1>
          <p className="mt-2 text-gray-500">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-2xl font-bold">{installApp.length} Apps Found</h1>
          <label className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="none">Sort by Size</option>
              <option value="price-asc">Low -&gt; Hight</option>
              <option value="Price-dsc">High -&gt;Low</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col space-y-3 mt-5">
          {sortedApps().map((installProducts) => (
            <div className="bg-white shadow rounded p-3 flex justify-between items-center">
              <div className="flex space-x-2 items-center">
                <div>
                  <img
                    src={installProducts.image}
                    alt=""
                    className="w-[50px] h-[50px]  object-cover rounded"
                  />
                </div>
                <div>
                  <h1 className="text-lg font-medium">
                    {installProducts.title}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-green-400">
                      <img
                        src="/public/icon-downloads.png"
                        alt=""
                        className="w-[20px] h-[20px]"
                      />
                      <span>{installProducts.downloads}</span>
                    </div>
                    <div className="flex items-center gap-2 text-orange-400">
                      <img
                        src="/public/icon-ratings.png"
                        alt=""
                        className="w-[20px] h-[20px]"
                      />
                      <span>{installProducts.ratingAvg}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <img
                        src="/public/icon-review.png"
                        alt=""
                        className="w-[20px] h-[20px]"
                      />
                      <span>{installProducts.reviews}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button onClick={ () => handelUnstallButton(installProducts.id)} className="btn btn-success text-white">
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Installation;
