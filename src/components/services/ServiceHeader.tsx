export function ServiceHeader() {
  return (
    <div className="pb-6 mb-8 border-b-[1px] border-black/30">
      <div className="flex mb-6">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.25 23.25H5.25M23.25 5.25V41.25M12.75 33.75L33.75 12.75M33.75 33.75L12.75 12.75"
            stroke="black"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>

      <h1 className="text-black text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-[400] leading-[1.2] mb-4">
        Xidmətlərimiz
      </h1>

      <p className="text-[rgba(0,0,0,.72)] text-base sm:text-lg md:text-[16px] lg:text-[18px] font-normal leading-[1.5] max-w-[780px]">
        Şirkət daxilindəki prosesləri və müştərilərlə əlaqəni avtomatlaşdırılmış
        şəkildə həyata keçirtmək və bazarda innovativ şəkildə inkişaf etmək üçün
        bizim xidmətlərdən yararlanın.
      </p>
    </div>
  );
}
