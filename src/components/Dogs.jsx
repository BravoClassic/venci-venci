import PropTypes from 'prop-types'
export const Dogs = (props) => {
    const handleClick = async () => {
        const dog = await props.getDog()
        
        props.setDogs(dog)
        
        // console.log(dog)
        console.log(props.dogs)
        // if(!dog){
        //   props.setViewed((viewed)=> [...viewed ,props.dogs])
        // }
    }

    const handleBan = (e) => {
      if (!props.banList.includes(e.target.value)){
        props.setBanList([...props.banList, e.target.value])
      }
        console.log(props.banList)
    }
  return (
    <div className="Dogs">
      <h1>Trippin&#39; on Dogs</h1>
      <p>Discover dogs beyond your wildest imagination</p>
      <p>🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶🐶</p>
      {props.dogs.map((dog,key) => {
        console.log(dog.breeds[0].name,key)
            return (
                <div key={key} className='data'>
                    <h3>{dog.breeds[0].name}</h3>
                    <div className='buttons_key'>
                       { dog.breeds[0].weight.imperial && <button onClick={handleBan} value={dog.breeds[0].weight.imperial }>{`${dog.breeds[0].weight.imperial } ${dog.breeds[0].weight.imperial ? "lbs" :""}`}</button>}
                       { dog.breeds[0].breed_group &&
                        <button onClick={handleBan} value={dog.breeds[0].breed_group}>{dog.breeds[0].breed_group}</button>}
                        {dog.breeds[0].life_span &&
                        <button onClick={handleBan} value={dog.breeds[0].life_span}>{dog.breeds[0].life_span}</button>}
                    </div>
                    <div className='img-container'>
                        <img src={dog.url} width={"100%"}  alt="dog" />
                    </div>
                </div>
            )
      } )}
      {/* <div>
        <h3>Dog Name</h3>
        <div>
          <button>Type of Dog</button>
          <button>Weight</button>
          <button>Origin</button>
          <button>Age</button>
        </div>
        <div>
          <img
            src="https://images.dog.ceo/breeds/terrier-norwich/n02094258_1003.jpg"
            alt="dog"
          />
        </div>
      </div> */}
      <button onClick={handleClick}>Discover🔄</button>
    </div>
  );
};

Dogs.propTypes = {
    dogs: PropTypes.array,
    getDog: PropTypes.func,
    setDogs: PropTypes.func,
    banList: PropTypes.array,
    setBanList: PropTypes.func,
    setViewed: PropTypes.func
    }
Dogs.defaultProps = {
    dogs: [],
    getDog: () => {},
    setDogs: () => {},
    banList: [],
    setBanList: () => {},
    setViewed: () => {}
    }