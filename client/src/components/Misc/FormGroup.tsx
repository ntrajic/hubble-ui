// Copyright 2019 Authors of Hubble
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
import * as React from "react";

interface Props {
  label?: string | JSX.Element;
}

const css = require("./FormGroup.scss");
const FormGroup: React.SFC<Props> = ({ label, children }) => (
  <div className={css.container}>
    {label && <label className={css.label}>{label}</label>}
    {children}
  </div>
);

export default FormGroup;
