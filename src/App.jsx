import "./App.css";
import { Dogs } from "./components/Dogs";
import { Viewed } from "./components/Viewed";
import { BanList } from "./components/BanList";
import { useState } from "react";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [dogs, setDogs] = useState([]);
  const [viewed, setViewed] = useState([]);
  const [banList, setBanList] = useState([]);

  // const checkInfo = (info) => {
  //   let breed_info = info.breeds[0]
  //   breed_info.weight = info.breeds[0].weight.imperial
  //   breed_info.life_span = info.breeds[0].life_span
  //   breed_info.breed_group = info.breeds[0].breed_group

  //   for(const [key,value] of Object.entries(breed_info)){
  //     if (key in info && banList.includes(value)){
  //       getDog()
  //     }
  // }
  // }

  const apiCall = async () => {
    const response = await fetch(
      `https://api.thedogapi.com/v1/images/search?api_key=${ACCESS_KEY}&has_breeds=true`
    );
    const data = await response.json();
    return data;
  };

  const checkInfo = (data) => {
    return data.filter((dog) => {
      return !banList.includes(
        banList.find((ban) => {
          return (
            dog.breeds[0].name === ban ||
            dog.breeds[0].weight.imperial === ban ||
            dog.breeds[0].breed_group === ban ||
            dog.breeds[0].life_span === ban
          );
        })
      );
    });
  };
  const getDog = async () => {
    let dogsCheck;
  
    try {
      const data = await apiCall();
  
      dogsCheck = checkInfo(data); 
  
      if (dogsCheck.length > 0) {
        setViewed([...viewed, dogsCheck[0]]);
        return dogsCheck;
      }
  
    } catch (error) {
      console.log(error);
    }
  
    if (!dogsCheck || dogsCheck.length === 0) {
      return getDog(); 
    }
  
    return dogsCheck;
  };
  return (
    <>
      <div className="App">
        <Viewed viewed={viewed} />
        <Dogs
          dogs={dogs}
          banList={banList}
          setBanList={setBanList}
          setViewed={setViewed}
          getDog={getDog}
          setDogs={setDogs}
        />
        <BanList ban={banList} setBanList={setBanList} />
      </div>
    </>
  );
}

export default App;
