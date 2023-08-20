import React, {useState} from "react";
//import "../src/main.scss";

// const restaurantInfo = [
//   {
//     title: "Bill or Beak",
//     alcohol: false,
//     fullHalal: true,
//     prayer_area: false,
//     disableFriendly: true,
//     cuisine: "American",
//   },
//   {
//     title: "Chicken Shop",
//     alcohol: true,
//     fullHalal: true,
//     prayer_area: false,
//     disableFriendly: true,
//     cuisine: "Fast Food",
//   },
//   {
//     title: "ShakeShuka",
//     alcohol: false,
//     fullHalal: true,
//     prayer_area: true,
//     disableFriendly: false,
//     cuisine: "Middle Eastern",
//   },

// ];

export default function Filter() {
    const [checked, setChecked] = useState(true);
    function isChecked() {
        setChecked(!checked)
        console.log(checked)
    }
    
    return(
        <div className="filter">
            <ul>Filter
                <ul>Cuisine
                    <li>
                        <label className="container">Chinese
                            <input type="checkbox" onClick={isChecked} />
                            <span className="checkmark"></span>
                        </label>
                     </li>
                    <li>
                        <label className="container">Fast Food
                            <input type="checkbox" onClick={isChecked} />
                            <span className="checkmark"></span>
                        </label>
                    </li>

                    <li>
                        <label className="container">Middle Eastern
                            <input type="checkbox" onClick={isChecked} />
                            <span className="checkmark"></span>
                        </label>
                    </li>

                    <li>
                        <label className="container">American
                            <input type="checkbox" onClick={isChecked} />
                            <span className="checkmark"></span>
                        </label>
                    </li>
                </ul>
                <ul>Services
                    <li>
                        <label className="container">Alcohol Free
                            <input type="checkbox" onClick={isChecked} />
                            <span className="checkmark"></span>
                        </label>
                     </li>
                    <li>
                        <label className="container">Disable Access
                            <input type="checkbox" onClick={isChecked} />
                            <span className="checkmark"></span>
                        </label>
                    </li>

                    <li>
                        <label className="container">Prayer Area
                            <input type="checkbox" onClick={isChecked} />
                            <span className="checkmark"></span>
                        </label>
                    </li>

                    <li>
                        <label className="container">Full Halal
                            <input type="checkbox" onClick={isChecked} />
                            <span className="checkmark"></span>
                        </label>
                    </li>
                </ul>
            </ul>
        </div>
    )
};