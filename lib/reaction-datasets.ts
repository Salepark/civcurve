import type { Civilization } from "@/data/civilizations";
import { civilizations } from "@/data/civilizations";
import { faithHistory } from "@/data/faith-history";
import { artHistory } from "@/data/art-history";
import { scienceHistory } from "@/data/science-history";
import { techHistory } from "@/data/tech-history";
import { religionsHistory } from "@/data/religions-history";
import { literatureHistory } from "@/data/literature-history";
import { philosophyHistory } from "@/data/philosophy-history";
import { islamHistory } from "@/data/islam-history";

export const REACTION_DATASETS: Record<string, Civilization[]> = {
  civilizations,
  faith: faithHistory,
  art: artHistory,
  science: scienceHistory,
  tech: techHistory,
  religions: religionsHistory,
  literature: literatureHistory,
  philosophy: philosophyHistory,
  islam: islamHistory,
};

export function isValidReactionTarget(dataset: string, entryId: string): boolean {
  const entries = Object.hasOwn(REACTION_DATASETS, dataset) ? REACTION_DATASETS[dataset] : undefined;
  if (!entries) return false;
  return entries.some((e) => e.id === entryId);
}
