import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { SUSHI_SWAP_AVALANCHE_PROVIDER_CONFIGURATION } from '@features/swap/dexes/avalanche/sushi-swap-avalanche/constants';
import { UniswapV2AbstractProvider } from '@features/swap/dexes/common/uniswap-v2-abstract/uniswap-v2-abstract-provider';
import { SushiSwapAvalancheTrade } from '@features/swap/dexes/avalanche/sushi-swap-avalanche/sushi-swap-avalanche-trade';

export class SushiSwapAvalancheProvider extends UniswapV2AbstractProvider<SushiSwapAvalancheTrade> {
    public readonly blockchain = BLOCKCHAIN_NAME.AVALANCHE;

    public readonly InstantTradeClass = SushiSwapAvalancheTrade;

    public readonly providerSettings = SUSHI_SWAP_AVALANCHE_PROVIDER_CONFIGURATION;
}
