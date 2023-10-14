import PropTypes from "prop-types";
export const Viewed = (props) => {
  console.log(props.viewed);
  return (
    <div className="viewed">
      <h1>Viewed</h1>
      <div>
        {props.viewed && props.viewed.map((item, key) => {
          console.log(item);
          return (
            <div key={key}>
              <img src={true && item.url} width={"25%"} alt="dog" />
              <p>{`A ${item.breeds[0].breed_group} dog for ${
                item.breeds[0].bred_for && item.breeds[0].bred_for.toLowerCase()
              }`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Viewed.propTypes = {
  viewed: PropTypes.array,
};
Viewed.defaultProps = {
  viewed: [],
};
