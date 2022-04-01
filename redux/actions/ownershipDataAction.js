import { UPDATE_OWNERSHIP_DATA } from "../consts"

export const updateOwnershipData = ownershipData => (
  {
    type: UPDATE_OWNERSHIP_DATA,
    payload: ownershipData,
  }
)