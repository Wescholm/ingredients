import { Claim as TClaim } from "../api/claim/Claim";

export const CLAIM_TITLE_FIELD = "name";

export const ClaimTitle = (record: TClaim): string => {
  return record.name || String(record.id);
};
