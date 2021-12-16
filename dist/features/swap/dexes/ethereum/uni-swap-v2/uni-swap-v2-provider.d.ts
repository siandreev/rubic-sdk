import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { UniswapV2AbstractProvider } from '@features/swap/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { UniSwapV2Trade } from '@features/swap/dexes/ethereum/uni-swap-v2/uni-swap-v2-trade';
export declare class UniSwapV2Provider extends UniswapV2AbstractProvider<UniSwapV2Trade> {
    readonly blockchain = BLOCKCHAIN_NAME.ETHEREUM;
    readonly InstantTradeClass: typeof UniSwapV2Trade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}