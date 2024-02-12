import Image from "next/image";
import Link from "next/link";

import GithubIcon from "public/icons/GithubIcon.svg";
import FigmaIcon from "public/icons/FigmaIcon.svg";
import GatherIcon from "public/icons/GatherIcon.svg";

const HYPER_LINKS = [
  {name: "서비스 소개", link: "/"},
  {name: "개발자친구들", link: "/"},
  {name: "이용약관", link: "/"},
  {name: "개인정보처리방침", link: "/"},
  {name: "청소년보호정책", link: "/"},
];

const CONTACT_LINKS = [
  {name: "깃허브", src: GithubIcon, link: "/"},
  {name: "피그마", src: FigmaIcon, link: "/"},
  {name: "게더타운", src: GatherIcon, link: "/"},
]

function Footer() {

  return (
    <footer className="bg-gray-5 w-full h-302 p-60 flex-center flex-col gap-20">
      <h2 className="text-18 font-bold text-green">Read Me</h2>
      <article className="flex-center gap-7 mb-10">
        {CONTACT_LINKS.map((el) => {
          return <Link key={el.name} href={el.link}>
            <Image src={el.src} alt={el.name} width={28} height={28}/>
          </Link>
        })}
      </article>
      <article className="font-bold text-18 text-gray-6">고객센터 1588-1588</article>
      <div className="bg-gray-1 h-[1px] w-150"></div>
      <article className="flex-center gap-20">
        {HYPER_LINKS.map((el) => {
          return (<Link key={el.name} href={el.link} className="text-12 text-gray-3" >{el.name}</Link>)
        })}
      </article>
    </footer>
  )
}

export default Footer