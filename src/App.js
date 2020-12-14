/*
 * Copyright © 2020 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import React from "react";
import { hot } from "react-hot-loader";
import styles from "./styles.scss";

const App = () => <div className={styles.text}>Welcome to React!</div>;

export default hot(module)(App);
