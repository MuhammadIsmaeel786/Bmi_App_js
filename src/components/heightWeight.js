import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function WeightHeight() {
    let {height, setHeight} = useContext(AppContext);
    let {weight, setWeight} = useContext(AppContext);
    function incrementH() {
        setHeight(height++);
    }

    function decrementH() {
        setHeight(height--);
    }
    function incrementW() {
        setWeight(weight++);
    }

    function decrementW() {
        setWeight(weight--);
    }
    return (
        <div>
            <div className="weightHeight-div">
                <div className="weight-div">
                    <p className="subHeading">Weight</p>
                    <div className="inside-div">
                        <button onClick={incrementW} className="plus-minus">+</button>
                        <p className="weight-text">{weight}</p>
                        <button onClick={decrementW} className="plus-minus">-</button>
                    </div>
                </div>
                <div className="height-div">
                    <p className="subHeading">Height</p>
                    <div className="inside-div">
                        <button onClick={incrementH} className="plus-minus">+</button>
                        <p className="height-text">{height}</p>
                        <button onClick={decrementH} className="plus-minus"> -</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default WeightHeight;