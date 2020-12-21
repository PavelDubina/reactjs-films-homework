/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from 'react'
import PropTypes from 'prop-types'

const Raiting = ({ res, styles }) => {
  return <div className={styles}>{res.vote_average}</div>
}

Raiting.proptypes = {
  res: PropTypes.object.isRequired,
  styles: PropTypes.string.isRequired,
}
export default Raiting