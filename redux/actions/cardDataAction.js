import { UPDATE_CARD_DATA } from "../consts"

export const updateCardData = data => (
  {
    type: UPDATE_CARD_DATA,
    payload: data,
  }
)