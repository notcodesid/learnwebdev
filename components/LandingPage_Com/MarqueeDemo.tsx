import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from 'next/image';

const reviews = [
  {
    name: "Rx",
    username: "@shashivadan99",
    body: "This is awesome. I just recommended to friends and juniors",
    img: "https://pbs.twimg.com/profile_images/1846218315615948802/SrU15SG5_400x400.jpg",
  },
  {
    name: "Bhavneet Singh",
    username: "@Bhavnee66254975",
    body: "Definitely will be following along !",
    img: "https://pbs.twimg.com/profile_images/1855691870430511104/UkHDwmx7_400x400.jpg",
  },
  {
    name: "Prafful Sharma",
    username: "@prafful_sharma_",
    body: "Great work! Great resources!",
    img: "https://pbs.twimg.com/profile_images/1695883249883451392/NaJbC9LX_400x400.jpg",
  },
  {
    name: "Abhay",
    username: "@Abhay_devv",
    body: "It's really helpful 😇",
    img: "https://pbs.twimg.com/profile_images/1848054581869096960/dhdItN5i_400x400.jpg",
  },
  {
    name: "nilaa laishram🎃",
    username: "@nilaacodes",
    body: "this is really a great work. keep it up man",
    img: "https://pbs.twimg.com/profile_images/1822673085717221377/4NVrn3ky_400x400.jpg",
  },
    {
    name: "Sagar Singh",
    username: "@_SagarSingh___",
    body: "Great initiative bro , keep rocking 🔥",
    img: "https://pbs.twimg.com/profile_images/1665305991272091650/tbYPwXwW_400x400.jpg",
  },
  // ... (other review objects remain the same)
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          alt={`Avatar of ${name}`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}