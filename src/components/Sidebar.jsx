import { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const Sidebar = () => {
    const hotDeals = [
        { name: 'Nike', count: 2 },
        { name: 'Airmax', count: 48, link: true },
        { name: 'Nike', count: 14 },
        { name: 'Adidas', count: 15 },
        { name: 'Vans', count: 23 },
        { name: 'All Stars', count: 1 },
        { name: 'Adidas', count: 95 },
    ];


    const [values, setValues] = useState([13.99, 25.99]);

    const colors = [
        { name: "blue", class: "bg-blue-500" },
        { name: "red", class: "bg-red-500" },
        { name: "black", class: "bg-black" },
        { name: "yellow", class: "bg-yellow-400" },
        { name: "magenta", class: "bg-pink-500" },
        { name: "rose-200", class: "bg-rose-200" },
    ];
    const [selectedColor, setSelectedColor] = useState("blue");

    const brand = [
        { name: 'Nike', count: 99},
        { name: 'Nike', count: 99 , link: true },
        { name: 'Adidas', count: 99 },
        { name: 'Airmax', count: 99},
    ];

    return (
        <aside className="w-89 h-full  text-black m-7 space-y-8">
            <div className="flex flex-col bg-[#f6f7f8] p-4 pl-7 pr-8 rounded-lg">
                <h2 className="font-medium py-4 mb-7 text-xl">Hot deals</h2>
                <ul className="space-y-9">
                    {hotDeals.map((deal, index) => (
                        <li key={index} className="flex justify-between text-gray-700 hover:text-black">
                            <span className={`${deal.link ? "text-[#33A0FF] cursor-pointer hover:underline" : ""}`}>
                                {deal.name}
                            </span>
                            <span className={`${deal.link ? "text-[#33A0FF]" : "text-gray-400"} font-medium`}>
                                {deal.count}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-[#f6f7f8] p-4 pl-7 pr-8 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Prices</h2>

                <div className="flex justify-between mb-4 text-gray-700">
                    <span>Range:</span>
                    <span>
                        ${values[0].toFixed(2)} - ${values[1].toFixed(2)}
                    </span>
                </div>

                <div className="space-y-2">
                    <Range
                        values={values}
                        step={0.5}
                        min={11.99}
                        max={25.99}
                        onChange={(newValues) => setValues(newValues)}
                        renderTrack={({ props, children }) => (
                            <div {...props} className="h-1.5  bg-gray-300 rounded-md" style={{
                                background: getTrackBackground({
                                    values,
                                    colors: ["#d1d5db", "#33A0FF", "#d1d5db"], // gray - blue - gray
                                    min: 11.99,
                                    max: 25.99,
                                }),
                            }}>
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => {
                            const { key, ...rest } = props; //take key out
                            return (
                                <div
                                    key={key}
                                    {...rest}
                                    className="w-4 h-4 bg-[#33A0FF] rounded-full border-2 border-white shadow-md cursor-pointer"
                                />
                            );
                        }}
                    />
                </div>
            </div>
            <div className="bg-[#f6f7f8]  px-7 py-8 rounded-lg">
                <h2 className="text-lg font-bold mb-4">COLOR</h2>
                <div className="flex space-x-6 ml-2">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={`w-7 h-7 rounded-full border-2 flex items-center justify-center
                                ${selectedColor === color.name ? "border-blue-500" : "border-transparent"}`}
                        >
                            <span className={`w-5 h-5 rounded-full ${color.class}`} />
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex flex-col bg-[#f6f7f8] p-4 pl-7 pr-8 rounded-lg">
                <h2 className="font-medium py-4 mb-7 text-xl">Brand</h2>
                <ul className="space-y-9">
                    {brand.map((brand, index) => (
                        <li key={index} className="flex justify-between text-gray-700 hover:text-black">
                            <span className={`${brand.link ? "text-[#33A0FF] cursor-pointer hover:underline" : ""}`}>
                                {brand.name}
                            </span>
                            <span className={`${brand.link ? "text-[#33A0FF]" : "text-gray-400"} font-medium`}>
                                {brand.count}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center bg-[#f6f7f8] p-4 rounded-lg">
                <h2 className="text-2xl font-medium">More</h2>
            </div>

        </aside>
    );
};

export default Sidebar;



