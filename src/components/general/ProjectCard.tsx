import WishWeaver from '@/assets/images/chibueze-wishweaver.png';

export default function ProjectCard() {
  return (
    <article className="h-[531px] w-full p-[5px] rounded-[32px] border border-[#ffffff9e] backdrop-blur-[26.32px] shadow-[2px_3px_40.3px_-10px_#FFFFFFBF]">
      <div className="relative w-full h-full">
        <img
          src={WishWeaver}
          alt="WishWeaver"
          className="w-full h-full object-cover rounded-[28px]"
        />
        <div className="absolute bottom-0 left-0 w-full bg-white rounded-t-[20px] rounded-b-[28px] p-6">
          <h3 className="text-[22px] font-semibold text-[#404040] mb-4">
            Redesigning WishWeaver’s website{' '}
          </h3>
          <p className="text-gray-400 mb-6">
            Worked with a senior designer and a team of engineers during my
            internship to create a landing page for Allawee.
          </p>
          <div className="flex justify-between items-center">
            <a href="#" className="text-gray-400 text-xs underline">
              See full case study
            </a>
            <a
              href="#"
              className="text-[#A4A4A4] text-xs font-normal bg-[#F6F5F6] rounded-[100px] px-2 py-[9px]"
            >
              View site
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
