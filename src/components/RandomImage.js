function RandomImage(props) {
  console.log(props.data);
  let randomN = Math.floor(Math.random() * 930);

  let randomList = [];
  for (let i = 0; i < 10; i++) {
    randomList.push(Math.floor(Math.random() * 930));
  }
  console.log(randomList);

  return (
    <div className="below-slider">
      {randomList.map((key) => (
        <div>
          {" "}
          <img src="{props.random[key].image_link}" />
          <ul>
            <li>{props.data[key].brand}</li>
            <li>{props.data[key].name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RandomImage;

// let randomList =[]
// for(let i=0; i< 10; i++){
// randomList.push(Math.floor(Math.random() * 930))
// console.log(randomList)
// }
