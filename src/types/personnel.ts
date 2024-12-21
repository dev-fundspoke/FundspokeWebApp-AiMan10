export type DemographicComposition = {
  women: number;
  youth: number;
  blackCommunities: number;
  personsWithDisabilities: number;
  visibleMinorities: number;
  twoSLGBTQIPlus: number;
  linguisticMinorityCommunities: number;
  newcomersToCanada: number;
  indigenousPeoples: number;
  other: number;
};

export interface Personnel {
  ownership: DemographicComposition;
  management: DemographicComposition;
}