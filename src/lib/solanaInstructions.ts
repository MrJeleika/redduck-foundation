import { getAssociatedTokenAddressSync } from '@solana/spl-token';
import type { WalletAdapterProps } from '@solana/wallet-adapter-base';
import type { Transaction } from '@solana/web3.js';
import { PublicKey } from '@solana/web3.js';

import { program } from '@/config/anchor-setup';
import { SolanaGlobalStatePDA, SolanaMint } from '@/constants/addresses';
import { connection, SOLANA_NETWORK } from '@/providers/WalletProvider';

export const sendAndConfirmTransaction = async (
  payer: PublicKey,
  tx: Transaction,
  sendTransaction: WalletAdapterProps['sendTransaction'],
): Promise<string> => {
  const latestBlockHash = await connection.getLatestBlockhash({
    commitment: 'finalized',
  });

  tx.feePayer = payer;
  tx.recentBlockhash = latestBlockHash.blockhash;

  const txHash = await sendTransaction(tx, connection);

  const result = await connection.confirmTransaction(
    {
      ...latestBlockHash,
      signature: txHash,
    },
    'finalized',
  );

  if (result.value.err) throw result.value.err;

  return txHash;
};

export const findUserStakingStatePda = (user: PublicKey) => {
  const [stakingState] = PublicKey.findProgramAddressSync(
    [
      Buffer.from('staking_state'),
      SolanaGlobalStatePDA[SOLANA_NETWORK].toBuffer(),
      user.toBuffer(),
    ],
    program.programId,
  );

  return stakingState;
};

export const findATA = (address: PublicKey): PublicKey => {
  return getAssociatedTokenAddressSync(
    SolanaMint[SOLANA_NETWORK],
    address,
    true,
  );
};

export const returnInitializeStakingState = async (
  stakingGlobalState: PublicKey,
  stakingState: PublicKey,
  user: PublicKey,
  lockOption: number,
) => {
  return program.methods
    .initializeStakingState(lockOption)
    .accounts({
      globalState: stakingGlobalState,
      signer: user,
      stakingState,
    })
    .instruction();
};
