import { validateCommanderCard } from "./lib/action-economy.mjs";
import { DEALER_CARDS, getCommanderCard } from "./lib/dealer.mjs";

export async function runSelfTest() {
  const cardsValid = DEALER_CARDS.every((card) => {
    validateCommanderCard(card);
    return !Object.hasOwn(card, "max_ap") && !Object.hasOwn(card, "ap");
  });
  const lookupValid = getCommanderCard("dealer:operator").callsign === "OPERATOR";
  return {
    pass: cardsValid && lookupValid && DEALER_CARDS.length === 3,
    summary: "Deck registry → modifier guard → deterministic lookup",
    checks: [
      { name: "Three alpha cards", pass: DEALER_CARDS.length === 3 },
      { name: "No absolute AP", pass: cardsValid },
      { name: "Stable card lookup", pass: lookupValid },
    ],
    evidence: {
      cards: DEALER_CARDS.map(({ id, callsign, ap_modifier }) => ({
        id,
        callsign,
        ap_modifier,
      })),
    },
  };
}
