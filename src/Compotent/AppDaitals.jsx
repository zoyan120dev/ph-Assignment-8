import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

function AppDaitals() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [clikedButton, setCLikedButton] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("/AllProduct.json").then((res) => res.json()),
      fetch("/trendingData.json").then((res) => res.json()),
    ])
      .then(([all, trending]) => {
        const combined = [...all, ...trending];
        setProduct(combined.find((p) => p.id.toString() === id));
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) return <p className="text-center my-10">Loading...</p>;

  const handelInstallButtton = () => {
    const existingList = JSON.parse(localStorage.getItem("install") || "[]");
    let upDateInstallApp = [];
    if (existingList) {
      const someApp = existingList.some((p) => p.id === product.id);
      if (someApp) {
        return toast("This App All Ready installed");
      }

      upDateInstallApp = [...existingList, product];
    } else {
      upDateInstallApp.push(product);
    }
    localStorage.setItem("install", JSON.stringify(upDateInstallApp));
     setCLikedButton(true);
    toast(`Yehoo 🐣! ${product.title} installed successfully 🎉`);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-[400px] h-[400px] object-cover rounded"
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">{product.title}</h1>
          <p className="py-2 text-gray-700 text-lg">
            Developed by:{" "}
            <span className="text-[#9F62F2]">{product.companyName}</span>
          </p>

          <div className="flex space-x-15 items-center mt-10 ml-6">
            <div className="flex flex-col space-y-1">
              <img
                src="../icon-downloads.png"
                alt=""
                className="w-[30px] h-[30px] object-cover"
              />
              <p className="text-lg font-medium">Downloads</p>
              <span className="text-3xl md:text-5xl font-bold">
                {product.downloads}
              </span>
            </div>

            <div className="flex flex-col space-y-1">
              <img
                src="../icon-ratings.png"
                alt=""
                className="w-[30px] h-[30px] object-cover"
              />
              <p className="text-lg font-medium">Average Ratings</p>
              <span className="text-3xl md:text-5xl font-bold">
                {product.ratingAvg}
              </span>
            </div>

            <div className="flex flex-col space-y-1">
              <img
                src="../icon-review.png"
                alt=""
                className="w-[30px] h-[30px] object-cover"
              />
              <p className="text-lg font-medium">Total Reviews</p>
              <span className="text-3xl md:text-5xl font-bold">
                {product.reviews}
              </span>
            </div>
          </div>

          <button
            onClick={handelInstallButtton}
            disabled={clikedButton}
            className={`bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-xl text-white mt-6 text-lg transition ${
              clikedButton
                ? "opacity-60 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
          >
            {clikedButton ? "installed" : `Install Now (${product.size}) MB`}
          </button>
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-xl font-bold mb-4">Ratings</h2>
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <BarChart
              layout="vertical"
              data={product.ratings}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="name"
                width={80}
                tick={{ fontSize: 14 }}
              />
              <Tooltip
                formatter={(value) => [value, "Count"]}
                cursor={{ fill: "rgba(0,0,0,0.1)" }}
              />
              <Bar dataKey="count" fill="#f97316" radius={[5, 5, 5, 5]}>
                <LabelList
                  dataKey="count"
                  position="right"
                  style={{ fill: "#000", fontSize: 12 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold">Description</h1>
        <p className="text-gray-400 text-lg">{product.description}</p>
      </div>
    </div>
  );
}

export default AppDaitals;
