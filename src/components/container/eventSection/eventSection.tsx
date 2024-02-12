import Image from "next/image";
import Link from "next/link";

interface EventSectionProps {
  adsLink?: string;
  adsImg?: string;
  adsSizeClassName: string;
  eventLink?: string;
  eventImg?: string;
  eventSizeClassName: string;
}

function EventSection({
  adsLink,
  adsImg,
  adsSizeClassName,
  eventLink,
  eventImg,
  eventSizeClassName,
}: EventSectionProps) {
  return (
    <section className="flex-center gap-30 tablet:gap-20 mobile:gap-10 mobile:flex-col w-fit h-fit">
      <Link href={adsLink || "/"} >
        <div className={`rounded-[10px] bg-gray-5 flex-center relative ${adsSizeClassName}`}>
          {adsImg ? <Image src={adsImg} alt="" fill /> : <span className="font-bold text-gray-2 text-[13px]">광고 준비 중입니다.</span>}
      </div>
      </Link>
      <Link href={eventLink || "/"} >
        <div className={`rounded-[10px] bg-gray-5 flex-center relative ${eventSizeClassName}`}>
          {eventImg ? <Image src={eventImg} alt="" fill /> : <span className="font-bold text-gray-2 text-[13px]">이벤트 준비 중입니다.</span>}
      </div>
      </Link>
    </section>
  )
}

export default EventSection