const Shimmer = () => {
  console.log("Shimmer called here");

  const shimm = [];
  for (let i = 0; i < 20; i++) {
    shimm.push(
      <div className="w-56 h-80 p-4 m-2 rounded-xl bg-gray-100">
        <div className="w-full h-28 object-cover rounded-xl bg-white"></div>
        <div className="m-1">
          <div className="w-1/2 h-4 bg-gray-200 my-5"></div>
          <div className="w-full h-3 bg-gray-200 my-3"></div>
          <div className="w-full h-3 bg-gray-200 my-3"></div>
          <div className="w-full h-3 bg-gray-200 my-3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 mx-1 flex flex-wrap justify-evenly">{shimm}</div>
  );
};
export default Shimmer;
