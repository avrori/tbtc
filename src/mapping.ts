import { BigInt } from "@graphprotocol/graph-ts"
import {
  TBTCSystemContract,
  AllowNewDepositsUpdated,
  CollateralizationThresholdsUpdateStarted,
  CollateralizationThresholdsUpdated,
  CourtesyCalled,
  Created,
  EthBtcPriceFeedAdded,
  EthBtcPriceFeedAdditionStarted,
  ExitedCourtesyCall,
  FraudDuringSetup,
  Funded,
  FunderAbortRequested,
  GotRedemptionSignature,
  KeepFactoriesUpdateStarted,
  KeepFactoriesUpdated,
  Liquidated,
  LotSizesUpdateStarted,
  LotSizesUpdated,
  OwnershipTransferred,
  Redeemed,
  RedemptionRequested,
  RegisteredPubkey,
  SetupFailed,
  SignerFeeDivisorUpdateStarted,
  SignerFeeDivisorUpdated,
  StartedLiquidation
} from "../generated/TBTCSystemContract/TBTCSystemContract"
import { ExampleEntity } from "../generated/schema"

export function handleAllowNewDepositsUpdated(
  event: AllowNewDepositsUpdated
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity._allowNewDeposits = event.params._allowNewDeposits

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.approvedToLog(...)
  // - contract.fetchBitcoinPrice(...)
  // - contract.fetchRelayCurrentDifficulty(...)
  // - contract.fetchRelayPreviousDifficulty(...)
  // - contract.getAllowNewDeposits(...)
  // - contract.getAllowedLotSizes(...)
  // - contract.getGovernanceTimeDelay(...)
  // - contract.getInitialCollateralizedPercent(...)
  // - contract.getKeepFactoriesUpgradeabilityPeriod(...)
  // - contract.getMaximumLotSize(...)
  // - contract.getMinimumLotSize(...)
  // - contract.getNewDepositFeeEstimate(...)
  // - contract.getPriceFeedGovernanceTimeDelay(...)
  // - contract.getRemainingCollateralizationThresholdsUpdateTime(...)
  // - contract.getRemainingEthBtcPriceFeedAdditionTime(...)
  // - contract.getRemainingKeepFactoriesUpdateTime(...)
  // - contract.getRemainingKeepFactoriesUpgradeabilityTime(...)
  // - contract.getRemainingLotSizesUpdateTime(...)
  // - contract.getRemainingPauseTerm(...)
  // - contract.getRemainingSignerFeeDivisorUpdateTime(...)
  // - contract.getSeverelyUndercollateralizedThresholdPercent(...)
  // - contract.getSignerFeeDivisor(...)
  // - contract.getUndercollateralizedThresholdPercent(...)
  // - contract.isAllowedLotSize(...)
  // - contract.isOwner(...)
  // - contract.keepSize(...)
  // - contract.keepThreshold(...)
  // - contract.owner(...)
  // - contract.priceFeed(...)
  // - contract.relay(...)
}

export function handleCollateralizationThresholdsUpdateStarted(
  event: CollateralizationThresholdsUpdateStarted
): void {}

export function handleCollateralizationThresholdsUpdated(
  event: CollateralizationThresholdsUpdated
): void {}

export function handleCourtesyCalled(event: CourtesyCalled): void {}

export function handleCreated(event: Created): void {}

export function handleEthBtcPriceFeedAdded(event: EthBtcPriceFeedAdded): void {}

export function handleEthBtcPriceFeedAdditionStarted(
  event: EthBtcPriceFeedAdditionStarted
): void {}

export function handleExitedCourtesyCall(event: ExitedCourtesyCall): void {}

export function handleFraudDuringSetup(event: FraudDuringSetup): void {}

export function handleFunded(event: Funded): void {}

export function handleFunderAbortRequested(event: FunderAbortRequested): void {}

export function handleGotRedemptionSignature(
  event: GotRedemptionSignature
): void {}

export function handleKeepFactoriesUpdateStarted(
  event: KeepFactoriesUpdateStarted
): void {}

export function handleKeepFactoriesUpdated(event: KeepFactoriesUpdated): void {}

export function handleLiquidated(event: Liquidated): void {}

export function handleLotSizesUpdateStarted(
  event: LotSizesUpdateStarted
): void {}

export function handleLotSizesUpdated(event: LotSizesUpdated): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRedeemed(event: Redeemed): void {}

export function handleRedemptionRequested(event: RedemptionRequested): void {}

export function handleRegisteredPubkey(event: RegisteredPubkey): void {}

export function handleSetupFailed(event: SetupFailed): void {}

export function handleSignerFeeDivisorUpdateStarted(
  event: SignerFeeDivisorUpdateStarted
): void {}

export function handleSignerFeeDivisorUpdated(
  event: SignerFeeDivisorUpdated
): void {}

export function handleStartedLiquidation(event: StartedLiquidation): void {}
