import { useWallet } from '@solana/wallet-adapter-react';
import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ConfirmStakingImg from '../../public/confirm-staking.png';

import { WalletMultiButton } from '@/components/common/connect-wallet-button';
import { BuyMoreTea } from '@/components/modals/buy-more-tea';
import { Button } from '@/components/ui/button.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Label } from '@/components/ui/label';
import { STAKING_OPTIONS } from '@/config/options';
import { useStake } from '@/hooks/mutations/use-stake.ts';
import { useUserStakingState } from '@/hooks/queries/use-user-staking-state.ts';

const ConfirmStaking = () => {
  const { optionId } = useParams();
  const { publicKey } = useWallet();

  const [openedBuyMore, setOpenedBuyMore] = useState(false);
  const navigate = useNavigate();

  const optionData = useMemo(() => {
    if (!optionId) return STAKING_OPTIONS[0];
    if (Math.abs(+optionId) > 2) return STAKING_OPTIONS[0];
    return STAKING_OPTIONS[optionId];
  }, [optionId]);

  const [amount, setAmount] = useState('');

  const stake = useStake(Number(amount), Number(optionId) ?? 0);

  const { data: userStakingPda } = useUserStakingState();

  const stakingData = userStakingPda?.userDataByPda;

  if (
    stakingData &&
    optionId !== undefined &&
    Number(optionId) !== stakingData.lockPeriodId
  )
    navigate('/confirm-staking/' + stakingData.lockPeriodId);

  const confirmStaking = useCallback(async () => {
    if (Number(amount) <= 0) return;

    await stake.mutateAsync();
  }, [amount, stake]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value > 0 || e.target.value === '') setAmount(e.target.value);
  };

  return (
    <div className="mx-auto flex max-w-[1172px] flex-col justify-between gap-[60px] px-2.5 pt-[80px] md:flex-row md:gap-[35px] md:px-[36px]">
      <div className="mx-auto md:mx-0">
        <h3 className="line-[44px] mb-2 text-[40px] font-[700] text-base-green">
          Confirm staking
        </h3>
        <p className="text-greenDark mb-3 text-xl">
          Review and confirm your stacking choice
        </p>

        <div className="mb-10 flex items-center gap-2.5">
          <div className="rounded-[4px] bg-[#4CAF50] px-2.5 py-1 font-[600] uppercase text-white">
            Option #{optionData.id + 1}
          </div>
          <span className="text-[20px] font-[600] uppercase text-base-green lg:text-2xl">
            {optionData.period}
          </span>
        </div>

        <div className="mb-8 flex max-w-[340px] flex-col">
          <Label htmlFor="amount" className="mb-3 text-xl font-medium">
            Enter TEA Coin Amount
          </Label>
          <Input
            type="number"
            id="amount"
            className="mb-2 h-[48px] outline-0 focus:border-[#173324]"
            min={0}
            value={amount}
            onChange={handleAmountChange}
          />
          <p className="text-base text-black">Minimum 100 TEA Coin</p>
        </div>

        <p className="text-base text-base-greenDark">Claim fee - 0.5%</p>
        <p className="mb-8 text-base text-base-greenDark">
          Est. weekly rewards ≈{' '}
          <span className="font-semibold">
            {(
              (((Number(amount) ?? 0) / 100) * optionData.apy) /
              52
            ).toLocaleString('en-US')}
          </span>
        </p>

        <div className="flex max-w-[320px] flex-col items-center justify-center">
          {!publicKey ? (
            <WalletMultiButton />
          ) : (
            <Button
              disabled={!(Number(amount) >= 100)}
              className="h-[68px] w-full"
              onClick={confirmStaking}
            >
              CONFIRM STAKING
            </Button>
          )}
          <p
            className="mt-6 cursor-pointer text-xl font-medium text-base-green"
            onClick={() => setOpenedBuyMore(true)}
          >
            Buy more $TEA
          </p>
        </div>
      </div>

      <img
        src={ConfirmStakingImg}
        alt="tea"
        className="mx-auto hidden h-[346px] w-[370px] md:mx-0 md:h-[280px] md:w-[299px] lg:block xl:h-[433px] xl:w-[462px]"
      />
      <BuyMoreTea
        opened={openedBuyMore}
        setOpened={(val) => setOpenedBuyMore(val)}
      />
    </div>
  );
};
export default ConfirmStaking;
