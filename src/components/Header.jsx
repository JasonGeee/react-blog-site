export const Header = () => {
  return (
    <div className="flex justify-between items-center absolute w-full px-20 py-10 bg-blue-300">
      <h1 className="text-6xl text-slate-700">Blog Site</h1>
      <div className="text-slate-700 pr-20">
        <ul>
          <li className="inline px-8">
            <a href="#">Home</a>
          </li>
          <li className="inline px-8">
            <a href="#">Contact</a>
          </li>
          <li className="inline px-8">
            <a href="#">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
