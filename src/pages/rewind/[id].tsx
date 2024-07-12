import { useAutoAnimate } from '@formkit/auto-animate/react';
import { confetti } from '@tsparticles/confetti';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const config = {
  '0x6E2F1d7eE2Aa23007448810bd21BbCccE07fF21c': {
    name: 'Denys',
    reward: '1000-1500',
    achievements: [{ text: 'Me', value: 1500 }],
    text: 'Thank you for victory and for no sleeping nights!',
    text2: '',
  },
  '0x976777C903B3548a29BA7dc4C4BA1144701C2CAD': {
    name: 'Mark',
    reward: '13000',
    achievements: [
      { text: 'CEO', value: 1000 },
      { text: '4+ Years in Redduck', value: 2000 },
      { text: 'DJ & Singer on Meets', value: 3000 },
      { text: 'Kormilets`', value: 7000 },
    ],
    text: 'Thank you for victory, support and motivation!',
    text2: 'Claim or Double and give to team!',
  },
  '0xaF647951A3B9a2533b6571DE6fB81559a91747a2': {
    name: 'Mark',
    reward: '13000',
    achievements: [
      { text: 'CEO', value: 1000 },
      { text: '4+ Years in Redduck', value: 2000 },
      { text: 'DJ & Singer on Meets', value: 3000 },
      { text: 'Kormilets`', value: 7000 },
    ],
    text: 'Thank you for victory, support and motivation!',
    text2: '',
  },
  '0x504A8330156987cBa026bFEBfBF4F30A4aA85422': {
    name: 'Ilya',
    reward: '1000-1500',
    achievements: [
      { text: 'ABOBA', value: 500 },
      { text: 'Best hookah smoker', value: 500 },
      { text: 'Big tasty', value: 500 },
    ],
    text: 'Thank you for victory, and for work with 40-degree temperature!',
    text2: 'Claim or Double and give to team!',
  },
  '0x5234a5af5329721b6732dbd28204616f71e570c0': {
    name: 'Maks',
    reward: '1000-1500',
    achievements: [
      { text: '69th sniffing brigade', value: 500 },
      { text: 'Communicator', value: 500 },
      { text: 'JUST BEST!', value: 500 },
    ],
    text: 'Thank you for victory, and networking!',
    text2: '',
  },
  '0x2433f267b01b2E566233AfBc3E8d40Aea92C4B75': {
    name: 'Oleksii',
    reward: '1000-1500',
    achievements: [
      { text: 'Husband.', value: 500 },
      { text: 'No sleep till done!', value: 500 },
      { text: 'Blya davai!!!', value: 500 },
    ],
    text: 'Thank you for victory, and no sleeping nights!',
    text2: '',
  },
  '0xec227cfe7485b9423b7e2eb30b813c7b5413a0f2': {
    name: 'Kostya',
    reward: '1000-1500',
    achievements: [
      { text: 'No taksa(', value: 500 },
      { text: 'Solana contracts enjoyer!)', value: 500 },
      { text: 'Yhilyant', value: 500 },
    ],
    text: 'Thank you for victory, and no sleeping nights!',
    text2: '',
  },
  '0xd18AD383A0D87477B25F21FDd07196Fe2EE36631': {
    name: 'Dima',
    reward: '1000-1500',
    achievements: [
      { text: 'Frontend bro!', value: 500 },
      { text: 'No brocard(', value: 500 },
      { text: 'JPG ENJOYER!!!', value: 500 },
    ],
    text: 'Thank you for victory, and no sleeping nights!',
    text2: '',
  },
} as unknown as Record<
  string,
  {
    name: string;
    reward: string;
    achievements: { text: string; value: number }[];
    text: string;
    text2: string;
  }
>;

export default function Rewind() {
  const { id } = useParams() as { id: string | undefined };
  const [parent] = useAutoAnimate();
  confetti('tsparticles', {
    particleCount: 50,
    origin: {
      x: 0.5,
      y: 0.7,
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={parent}
      className="mx-auto flex h-full max-w-[1200px] flex-col items-center justify-center pt-[200px] max-lg:w-full"
    >
      <Carousel className="flex w-[90%] justify-center max-md:w-full">
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <div className="h-[400px] w-[400px] rounded-[10px] bg-white p-4 max-md:h-[400px] max-md:w-[300px]">
              <div className="flex items-center justify-between">
                <img src="/duck-face.svg" alt="" className="w-10" />
                <p>REDDUCK FOUNDATION</p>
              </div>
              <h1 className="flex h-full items-center justify-center text-center font-rubikOne text-[26px]">
                HELLO {config[`${id}`].name}!
              </h1>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="h-[400px] w-[400px] rounded-[10px] bg-white p-4 max-md:h-[300px] max-md:w-[300px]">
              <div className="flex items-center justify-between">
                <img src="/duck-face.svg" alt="" className="w-10" />
                <p>REDDUCK FOUNDATION</p>
              </div>
              <h1 className="flex h-full items-center justify-center text-center">
                <span className="font-rubikOne text-[16px]">
                  You are eligible to claim ETH KYIV REDDUCK FOUNDATION REDDUCK
                  COINS{' '}
                  <span className="font-rubikOne text-red-600">$RDDK</span>{' '}
                  AIRDROP
                </span>
              </h1>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="h-[400px] w-[400px] rounded-[10px] bg-white p-4 max-md:h-[300px] max-md:w-[300px]">
              <div className="flex items-center justify-between">
                <img src="/duck-face.svg" alt="" className="w-10" />
                <p>REDDUCK FOUNDATION</p>
              </div>
              <h1 className="flex h-full items-center justify-center text-center font-rubikOne text-[16px]">
                {config[`${id}`].text}
              </h1>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="h-[400px] w-[400px] rounded-[10px] bg-white p-4 max-md:h-[300px] max-md:w-[300px]">
              <div className="flex items-center justify-between">
                <img src="/duck-face.svg" alt="" className="w-10" />
                <p>REDDUCK FOUNDATION</p>
              </div>
              <div className="pt-10 font-rubikOne">Criteria:</div>
              {config[`${id}`].achievements.map((achievement) => (
                <div
                  className="flex items-center gap-3 font-bold text-base-greenLight"
                  key={achievement.text}
                >
                  - {achievement.text}{' '}
                  <Check className="text-base-greenLight" />
                  <div className="flex items-center gap-1 text-black">
                    {achievement.value}
                    <span className="text-red-600">$RDDK</span>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="h-[400px] w-[400px] rounded-[10px] bg-white p-4 max-md:h-[300px] max-md:w-[300px]">
              <div className="flex items-center justify-between">
                <img src="/duck-face.svg" alt="" className="w-10" />
                <p>REDDUCK FOUNDATION</p>
              </div>
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="font-rubikOne text-[16px]">
                  {config[`${id}`].reward}{' '}
                  <span className="font-rubikOne text-red-600">$RDDK</span>{' '}
                  TOTAL
                </p>
                <p className="font-bold">1 $RDDK = 1$ {'(PLEASE)'}</p>
                {config[`${id}`].text2}
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="h-[400px] w-[400px] rounded-[10px] bg-white p-4 max-md:h-[300px] max-md:w-[300px]">
              <div className="flex h-full flex-col items-center justify-center gap-2 pt-2">
                <h1 className="font-rubikOne">CLAIM SOON!</h1>
                <Button disabled={true} className="w-full">
                  Claim
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="h-[400px] w-[400px] rounded-[10px] bg-white p-4 max-md:h-[300px] max-md:w-[300px]">
              <div className="flex flex-col items-center gap-2 pt-2">
                <h1 className="font-rubikOne">CHECKER FOR</h1>

                <img
                  src="https://preview.redd.it/%D1%8F-%D0%B4%D1%83%D0%BC%D0%B0%D1%8E-%D0%B2%D1%81%D0%B5-%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D1%8F%D1%82%D1%81%D1%8F-v0-xav8wqckpueb1.jpg?width=640&crop=smart&auto=webp&s=c7f7083b1ca161a9e5ae932b8086d79abaf090f2"
                  alt=""
                  className="w-[90%]"
                />
                <h1 className="font-rubikOne">(KUMEKA AND HIS TEAM)</h1>
                <h1 className="font-rubikOne">SOON!</h1>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-0 top-[130%] h-14 w-14 text-[20px] text-white [&_svg]:h-14 [&_svg]:w-14" />
        <CarouselNext className="right-0 top-[130%] h-14 w-14 text-[20px] text-white [&_svg]:h-14 [&_svg]:w-14" />
      </Carousel>
    </motion.div>
  );
}
