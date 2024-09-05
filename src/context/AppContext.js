import { createContext, useState } from "react";

export const AppContext = createContext(null)

function AppContextWrapper({ children }) {
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState(null);
    const [height ,setHeight] = useState(150);
    const [weight ,setWeight] = useState(80);

    return (
        <AppContext.Provider value={{weight,height,setWeight,setHeight, age, setAge, setGender, gender }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextWrapper;