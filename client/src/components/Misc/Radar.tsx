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

const css = require("./Radar.scss");

export const Radar = ({ active }: { active: boolean }) =>
  active ? <ActiveRadar animated={false} /> : <InactiveRadar />;

const ActiveRadar = ({ animated }: { animated: boolean }) => (
  <svg width="30" height="34">
    <path
      transform="translate(6.16 16.89)"
      fill="#C2C2C2"
      d="M16.807 12.869l-6.35-3.664 3.293-1.9.937.672c.016.012.035.016.052.026L13.53 5.158l-3.304-2.371 1.76-1.263L11.338 0 8.84 1.792 6.343 0l-.648 1.524 1.76 1.263L4.15 5.158 2.941 8.003c.017-.01.036-.014.053-.026l.937-.672 3.293 1.9-6.35 3.664L0 14.924c.075.022.147.059.226.059a.802.802 0 0 0 .403-.108l8.211-4.738 8.212 4.738a.802.802 0 0 0 .403.108c.079 0 .15-.037.226-.06l-.874-2.054zM5.371 6.271l3.47-2.49 3.469 2.49-3.47 2.002L5.371 6.27z"
    />
    <path
      transform="translate(4.85 9.61)"
      fill="#979797"
      d="M19.308 23.539a1 1 0 0 1-.92-.609L10.154 3.557 1.921 22.93a1 1 0 0 1-1.841-.783L9.234.609a.999.999 0 0 1 1.84 0l9.154 21.538a1 1 0 0 1-.92 1.392z"
    />
    <path
      // circle inner
      className={`${css.cinner} ${animated && css.animated}`}
      transform="translate(11.77 7.38)"
      fill="#FFC9BB"
      d="M3.23 6.462A3.23 3.23 0 1 0 3.23 0a3.23 3.23 0 0 0 0 6.462z"
    />
    <path
      // circle outer
      className={`${css.couter} ${animated && css.animated}`}
      transform="translate(10.77 6.38)"
      fill="#EF7C4B"
      d="M4.23 8.461A4.235 4.235 0 0 1 0 4.231 4.235 4.235 0 0 1 4.23 0a4.235 4.235 0 0 1 4.231 4.231 4.235 4.235 0 0 1-4.23 4.23zm0-6.46A2.234 2.234 0 0 0 2 4.23c0 1.23 1.001 2.23 2.23 2.23 1.23 0 2.231-1 2.231-2.23a2.234 2.234 0 0 0-2.23-2.23z"
    />
    <path
      // first left
      className={`${css.fleft} ${animated && css.animated}`}
      transform="translate(5.38 3.81)"
      fill="#EF7C4B"
      d="M2.816 13.598A9.549 9.549 0 0 1 0 6.8C0 4.23 1 1.815 2.816 0l1.415 1.414A7.564 7.564 0 0 0 2 6.8c0 2.035.792 3.947 2.23 5.385l-1.414 1.414z"
    />
    <path
      // first right
      className={`${css.fright} ${animated && css.animated}`}
      transform="translate(20.38 3.81)"
      fill="#EF7C4B"
      d="M1.414 13.598L0 12.184A7.563 7.563 0 0 0 2.23 6.8 7.564 7.564 0 0 0 0 1.414L1.414 0a9.55 9.55 0 0 1 2.817 6.8c0 2.568-1 4.983-2.817 6.798z"
    />
    <path
      // second left
      className={`${css.sleft} ${animated && css.animated}`}
      fill="#FFD6CB"
      d="M4.394 21.212A14.9 14.9 0 0 1 0 10.607 14.9 14.9 0 0 1 4.394 0l1.414 1.414A12.913 12.913 0 0 0 2 10.607c0 3.472 1.352 6.736 3.808 9.191l-1.414 1.414z"
    />
    <path
      // second right
      className={`${css.sright} ${animated && css.animated}`}
      transform="translate(24.19)"
      fill="#FFD6CB"
      d="M1.414 21.212L0 19.798a12.915 12.915 0 0 0 3.808-9.191C3.808 7.134 2.455 3.87 0 1.414L1.414 0a14.902 14.902 0 0 1 4.394 10.607 14.9 14.9 0 0 1-4.394 10.605z"
    />
  </svg>
);

const InactiveRadar = () => (
  <svg width="30" height="34">
    <path
      transform="translate(6.16 16.89)"
      fill="#DADADA"
      d="M16.807 12.869l-6.35-3.664 3.293-1.9.937.672c.016.012.035.016.052.026L13.53 5.158l-3.304-2.371 1.76-1.263L11.338 0 8.84 1.792 6.343 0l-.648 1.524 1.76 1.263L4.15 5.158 2.941 8.003c.017-.01.036-.014.053-.026l.937-.672 3.293 1.9-6.35 3.664L0 14.924c.075.022.147.059.226.059a.802.802 0 0 0 .403-.108l8.211-4.738 8.212 4.738a.802.802 0 0 0 .403.108c.079 0 .15-.037.226-.06l-.874-2.054zM5.371 6.271l3.47-2.49 3.469 2.49-3.47 2.002L5.371 6.27z"
    />
    <path
      transform="translate(4.85 9.61)"
      fill="#C7C7C7"
      d="M19.308 23.539a1 1 0 0 1-.92-.609L10.154 3.557 1.921 22.93a1 1 0 0 1-1.841-.783L9.234.609a.999.999 0 0 1 1.84 0l9.154 21.538a1 1 0 0 1-.92 1.392z"
    />
    <path
      transform="translate(11.77 7.38)"
      fill="#F1F1F1"
      d="M3.23 6.462A3.23 3.23 0 1 0 3.23 0a3.23 3.23 0 0 0 0 6.462z"
    />
    <path
      transform="translate(10.77 6.38)"
      fill="#DADADA"
      d="M4.23 8.461A4.235 4.235 0 0 1 0 4.231 4.235 4.235 0 0 1 4.23 0a4.235 4.235 0 0 1 4.231 4.231 4.235 4.235 0 0 1-4.23 4.23zm0-6.46A2.234 2.234 0 0 0 2 4.23c0 1.23 1.001 2.23 2.23 2.23 1.23 0 2.231-1 2.231-2.23a2.234 2.234 0 0 0-2.23-2.23z"
    />
    <path
      transform="translate(5.38 3.81)"
      fill="#DADADA"
      d="M2.816 13.598A9.549 9.549 0 0 1 0 6.8C0 4.23 1 1.815 2.816 0l1.415 1.414A7.564 7.564 0 0 0 2 6.8c0 2.035.792 3.947 2.23 5.385l-1.414 1.414z"
    />
    <path
      transform="translate(20.38 3.81)"
      fill="#DADADA"
      d="M1.414 13.598L0 12.184A7.563 7.563 0 0 0 2.23 6.8 7.564 7.564 0 0 0 0 1.414L1.414 0a9.55 9.55 0 0 1 2.817 6.8c0 2.568-1 4.983-2.817 6.798z"
    />
    <path
      fill="#F1F1F1"
      d="M4.394 21.212A14.9 14.9 0 0 1 0 10.607 14.9 14.9 0 0 1 4.394 0l1.414 1.414A12.913 12.913 0 0 0 2 10.607c0 3.472 1.352 6.736 3.808 9.191l-1.414 1.414z"
    />
    <path
      transform="translate(24.19)"
      fill="#F1F1F1"
      d="M1.414 21.212L0 19.798a12.915 12.915 0 0 0 3.808-9.191C3.808 7.134 2.455 3.87 0 1.414L1.414 0a14.902 14.902 0 0 1 4.394 10.607 14.9 14.9 0 0 1-4.394 10.605z"
    />
  </svg>
);
