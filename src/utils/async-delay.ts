import { logColor } from './log-color';

export async function asyncDelay(
  ms: number = 10000,
  verbose: boolean = false
): Promise<void> {
  if (ms <= 0) {
    return;
  }
  if (verbose) {
    logColor(`[Async Delay] Starting delay of ${ms / 1000}ms`, 'yellow');
  }

  await new Promise((resolve) => setTimeout(resolve, ms));
}
