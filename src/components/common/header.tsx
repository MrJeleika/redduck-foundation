export const Header = () => {
  return (
    <div className="relative flex items-center py-3">
      <img src={'/logo.svg'} />
      <h1 className="absolute -bottom-1 left-16 font-rubikOne text-[16px] text-white">
        foundation
      </h1>
    </div>
  );
};
