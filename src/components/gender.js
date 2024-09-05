import { useContext } from "react";
import { AppContext } from "../context/AppContext"
function Gender() {
    const { setGender, gender } = useContext(AppContext)
    function handleClickM() {
        setGender("Male")
    }
    function handleClickF() {
        setGender("Female");
    }

    return (
        <div>
            <p className="subHeading">Gender</p>
            <div className="gender-div">
                <button id="btn1" onClick={handleClickM} style={{ backgroundColor: gender === 'Male' ? "#50206e" : "#974EC3" }} className="gender-Minput">
                    Male
                </button>
                <button id="btn2" onClick={handleClickF} style={{ backgroundColor: gender === 'Female' ? "#50206e" : "#974EC3" }} className="gender-Finput">
                    Female
                </button>

            </div>
        </div>
    );
}
export default Gender;