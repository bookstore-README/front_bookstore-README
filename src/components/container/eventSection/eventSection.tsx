import AdvertisementCard from '@/components/card/advertisementCard/advertisementCard';
import { EVENT_SECTION_SIZE } from '@/constants/style/eventSectionSize';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface EventSectionProps {
  adsLink?: string;
  adsImg?: string | StaticImageData;

  eventLink?: string;
  eventImg?: string | StaticImageData;

  eventSize: 'main' | 'category';
}

function EventSection({
  adsLink,
  adsImg,

  eventLink,
  eventImg,

  eventSize,
}: EventSectionProps) {
  const STYLE = {
    ad: `${EVENT_SECTION_SIZE[eventSize]?.ad}`,
    event: `${EVENT_SECTION_SIZE[eventSize]?.event}`,
  };
  return (
    <section className="flex-center h-fit w-fit gap-30 mobile:flex-col mobile:gap-10 tablet:gap-20">
      <AdvertisementCard
        adsImg={adsImg}
        adsLink={adsLink}
        classNames={STYLE.ad}
      />
      <Link href={eventLink || '/'}>
        <div
          className={`flex-center relative rounded-[10px] bg-gray-5 ${STYLE.event}`}>
          {eventImg ? (
            <Image src={eventImg} alt="" fill />
          ) : (
            <span className="text-[13px] font-bold text-gray-2">
              이벤트 준비 중입니다.
            </span>
          )}
        </div>
      </Link>
    </section>
  );
}

export default EventSection;
