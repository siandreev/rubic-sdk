import { BLOCKCHAIN_NAME } from '@core/blockchain/models/BLOCKCHAIN_NAME';
import { Token } from '@core/blockchain/tokens/token';
import { SwapManagerCalculationOptions } from '@features/swap/models/swap-manager-calculation-options';
import { TypedTrade } from '@features/swap/models/typed-trade';
import { TypedTradeProviders } from '@features/swap/models/typed-trade-provider';
export declare class InstantTradesManager {
    static readonly defaultCalculationTimeout = 3000;
    private readonly uniswapV2TradeProviders;
    private readonly uniswapV3TradeProviders;
    private oneInchTradeProviders;
    private zrxTradeProviders;
    private tradeProviders;
    readonly blockchainTradeProviders: Readonly<Record<BLOCKCHAIN_NAME, Partial<TypedTradeProviders>>>;
    calculateTrade(fromToken: Token | {
        address: string;
        blockchain: BLOCKCHAIN_NAME;
    }, fromAmount: string, toToken: Token | string, options?: SwapManagerCalculationOptions): Promise<TypedTrade[]>;
    private getFullOptions;
    private calculateTradeFromTokens;
}