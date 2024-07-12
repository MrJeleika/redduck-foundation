import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_SOLANA_RPC_ENDPOINT: z.string().min(1).optional(),
    VITE_PUBLIC_NETWORKS_MODE: z.string().min(1).optional(),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
