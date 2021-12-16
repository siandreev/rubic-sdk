import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { UniswapV2AbstractProvider } from '@features/swap/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapHarmonyTrade } from '@features/swap/dexes/harmony/sushi-swap-harmony/sushi-swap-harmony-trade';
export declare class SushiSwapHarmonyProvider extends UniswapV2AbstractProvider<SushiSwapHarmonyTrade> {
    readonly blockchain = BLOCKCHAIN_NAME.HARMONY;
    readonly InstantTradeClass: typeof SushiSwapHarmonyTrade;
    readonly providerSettings: import("../../common/uniswap-v2-abstract/models/uniswap-v2-provider-configuration").UniswapV2ProviderConfiguration;
}