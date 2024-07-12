import { useNavigate } from 'react-router-dom';

import CupTea from '../../public/img/staking-options/cup-tea.png';

import { Button } from '@/components/ui/button.tsx';
import { STAKING_OPTIONS } from '@/config/options';
import { useUserStakingState } from '@/hooks/queries/use-user-staking-state.ts';

export default function StakingOptions() {
  const navigate = useNavigate();
  const { data: userStakingPda } = useUserStakingState();

  const stakingData = userStakingPda?.userDataByPda;

  if (userStakingPda && stakingData !== null) navigate('/dashboard');
  return (
    <div className="mx-auto my-[80px] max-w-[1092px]">
      <div className="flex flex-row items-center gap-4 md:gap-8">
        <div>
          <img
            src="img/staking-options/tea.png"
            alt="tea"
            className="h-[120px] w-[120px] min-w-[120px]"
          />
        </div>
        <div className="flex max-w-[540px] flex-col gap-4 md:gap-0">
          <div className="text-[24px] font-black uppercase leading-[28px] text-[#1D5939] md:text-[30px] md:leading-[44px] lg:text-[40px]">
            Choose Staking
            <br /> options
          </div>
          <div className="text-[20px] leading-[24px] text-[#173324]">
            Select the option that suits you best
          </div>
        </div>
      </div>
      <div className="mt-[40px] rounded-[4px] bg-[#F6FAFB] p-2 text-center text-[#173324]">
        You can only select one staking option
      </div>
      <div className="mt-[20px] grid grid-cols-1 gap-3 md:grid-cols-3">
        {Object.values(STAKING_OPTIONS).map(({ id, apy, period }) => {
          return (
            <div
              key={id}
              className="overflow-hidden rounded-[16px] border-[3px] border-b-[7px] border-black"
            >
              <div className="absolute rounded-br-[8px] rounded-tl-[13px] bg-[#4CAF50] px-2 py-[2px] text-[16px] font-semibold uppercase text-white">
                Unlock in {period}
              </div>
              <div className="flex max-h-[230px] flex-col items-center justify-center overflow-hidden lg:max-h-[280px]">
                <img src={CupTea} alt="tea" />
              </div>
              <div className="mx-[9px] my-[8px]">
                <div className="flex flex-row items-center gap-3">
                  <div>
                    <span className="rounded-[4px] bg-[#4CAF50] px-2 py-1 text-[16px] font-bold uppercase text-white">
                      Option #{id + 1}
                    </span>
                  </div>
                  <span className="text-[20px] font-semibold uppercase leading-6 text-[#1D5939]">
                    {period}
                  </span>
                </div>
                <div className="mt-[12px] text-[24px] font-medium leading-[34px] text-[#173324]">
                  {apy}% APY
                </div>
                <Button
                  className="mb-1 mt-[17px] h-[68px] w-full uppercase"
                  onClick={() => navigate('/confirm-staking/' + id)}
                >
                  Stake
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
