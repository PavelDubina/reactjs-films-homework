/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import { CHANGE_CATEGORY, CHANGE_GENRE } from '../actions/actionTypes'

const initialState = {
  chosenCategory: 0,
  chosenGenre: 'Genre',
}

const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        chosenCategory: action.payload,
      }
    case CHANGE_GENRE:
      return {
        ...state,
        chosenGenre: action.payload,
      }
    default:
      return state
  }
}

export default navbarReducer
