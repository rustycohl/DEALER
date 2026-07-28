const cards = [
  {
    schema: "gzg.dealer.commander-card/0.1",
    id: "dealer:listener",
    callsign: "LISTENER",
    role: "Signal Cartographer",
    sigil: "⌁",
    ability: "INT",
    ability_score: 14,
    skill_ranks: 2,
    situational: 0,
    ap_modifier: -1,
    base_cost: 4,
    method: "Map the quiet edge before committing.",
  },
  {
    schema: "gzg.dealer.commander-card/0.1",
    id: "dealer:operator",
    callsign: "OPERATOR",
    role: "Causal Technician",
    sigil: "◎",
    ability: "WIS",
    ability_score: 12,
    skill_ranks: 3,
    situational: 0,
    ap_modifier: 0,
    base_cost: 3,
    method: "Hold the line and make the clean read.",
  },
  {
    schema: "gzg.dealer.commander-card/0.1",
    id: "dealer:breaker",
    callsign: "BREAKER",
    role: "Threshold Runner",
    sigil: "⌬",
    ability: "DEX",
    ability_score: 16,
    skill_ranks: 1,
    situational: 1,
    ap_modifier: 1,
    base_cost: 2,
    method: "Spend friction to force the opening.",
  },
];

export const DEALER_CARDS = Object.freeze(
  cards.map((card) => Object.freeze({ ...card })),
);

export function getCommanderCard(id) {
  const card = DEALER_CARDS.find((candidate) => candidate.id === id);
  if (!card) {
    throw new RangeError(`Unknown Commander card: ${id}`);
  }
  return card;
}
