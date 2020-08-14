import React from 'react';
import Canvas from "./Canvas";
import Grid from "./Grid";
import LTB from "./LTB";
import Text from "./Text";
import Plain from "./Plain";
import Rectangle from "./Rectangle";
import Group from "./Group";
import Checkbox from "./Checkbox";
import InputUnderline from "./InputUnderline";
import Image from "./Image";
import Qrcode from "./Qrcode";
import Barcode from "./Barcode";
import Content from "./Content";
import Table from "./Table";
const typeMap = {
  Canvas,
  Grid,
  LTB,
  Text,
  Plain,
  Rectangle,
  Group,
  Checkbox,
  InputUnderline,
  Image,
  Qrcode,
  Barcode,
  Content: Content,
  Table
};
export default typeMap;