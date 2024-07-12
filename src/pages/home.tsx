import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const wallets = [
  '0x6E2F1d7eE2Aa23007448810bd21BbCccE07fF21c',
  '0x976777C903B3548a29BA7dc4C4BA1144701C2CAD', // MARK
  '0xaF647951A3B9a2533b6571DE6fB81559a91747a2', // MARK
  '0xd18AD383A0D87477B25F21FDd07196Fe2EE36631', // DIMA
  '0x504A8330156987cBa026bFEBfBF4F30A4aA85422', // ILIA
  '0x5234a5af5329721b6732dbd28204616f71e570c0', // MAKS
  '0x2433f267b01b2E566233AfBc3E8d40Aea92C4B75', // LESHA
  '0xec227cfe7485b9423b7e2eb30b813c7b5413a0f2', // KOSTYA
];

export default function Home() {
  const [parent] = useAutoAnimate();
  const [wallet, setWallet] = useState('');
  const navigate = useNavigate();

  const eligibility = useMemo(() => {
    const a = wallets.find((e) => e.toLowerCase() === wallet.toLowerCase());
    if (a) return true;
    return false;
  }, [wallet]);

  return (
    <div className="mx-auto flex h-full max-w-[1200px] flex-col items-center justify-center px-3 pt-[200px] max-lg:w-full">
      <div className="flex flex-col gap-5">
        <p className="font-rubikOne text-white">
          Check your eligibility for ETH KYIV HACKATON REDDUCK FOUNDATION
          AIRDROP
        </p>
        <Input
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          className="h-10 rounded-[4px] p-10 text-[32px]"
          placeholder="Paste your wallet address"
        />
        <div ref={parent} className="flex flex-col gap-3">
          {wallet && (
            <>
              <p
                className={`font-rubikOne font-medium ${eligibility ? 'text-green-600' : 'text-red-600'}`}
              >
                {eligibility
                  ? 'You are eligible!'
                  : 'You are not eligible( Try other wallet'}
              </p>
              {eligibility && (
                <Button
                  onClick={() =>
                    navigate(
                      '/rewind/' +
                        wallets.find(
                          (d) => d.toUpperCase() === wallet.toUpperCase()!,
                        ),
                    )
                  }
                >
                  Proceed
                </Button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
