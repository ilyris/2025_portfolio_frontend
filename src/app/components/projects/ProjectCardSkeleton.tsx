const ProjectCardSkeleton = () => {
  return (
    <div className="flex py-20 my-5 justify-between gap-8 max-h-3/4 animate-pulse ">
      <div className="w-1/4 flex flex-col gap-5">
        <div>
          <div
            data-aria-title="title"
            className="bg-gray-300  h-[150px] w-fill py-10"
          ></div>
          <div
            data-aria-websiteurl="website link"
            className="bg-gray-300  h-[35px] w-[250px] my-6"
          ></div>
          <div data-aria-description="project description">
            <div className="bg-gray-300  rounded-xl h-[10px] w-full my-3"></div>
            <div className="bg-gray-300  rounded-xl h-[10px] w-full my-3"></div>
            <div className="bg-gray-300  rounded-xl h-[10px] w-full my-3"></div>
            <div className="bg-gray-300  rounded-xl h-[10px] w-full my-3"></div>
            <div className="bg-gray-300  rounded-xl h-[10px] w-full my-3"></div>
            <div className="bg-gray-300  rounded-xl h-[10px] w-full my-3"></div>
            <div className="bg-gray-300  rounded-xl h-[10px] w-full my-3"></div>
          </div>
        </div>
        <ul
          className="flex gap-2 flex-wrap"
          data-aria-technologies="list of technologies"
        >
          <li className="bg-gray-300 rounded-xl h-[25px] w-[100px] py-1 px-3 "></li>
          <li className="bg-gray-300 rounded-xl h-[25px] w-[100px] py-1 px-3 "></li>
          <li className="bg-gray-300 rounded-xl h-[25px] w-[100px] py-1 px-3 "></li>
          <li className="bg-gray-300 rounded-xl h-[25px] w-[100px] py-1 px-3 "></li>
          <li className="bg-gray-300 rounded-xl h-[25px] w-[100px] py-1 px-3 "></li>
          <li className="bg-gray-300 rounded-xl h-[25px] w-[100px] py-1 px-3 "></li>
          <li className="bg-gray-300 rounded-xl h-[25px] w-[100px] py-1 px-3 "></li>
        </ul>
      </div>
      <div className=" bg-gray-300 w-3/4 h-auto"></div>
    </div>
  );
};
export default ProjectCardSkeleton;
