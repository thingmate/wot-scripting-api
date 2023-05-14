// export type IsValidRecord<GInput, GExpectedKey, GExpectedValue> = (
//   {
//     [GKey in keyof GInput]: GKey extends GExpectedKey
//     ? (
//       GInput[GKey] extends GExpectedValue
//         ? true
//         : false
//       )
//     : false;
//   }
//   )[keyof GInput] extends true ? true : false;


export type IRecordConstraint<GInput, GExpectedKey, GExpectedValue> = {
    [GKey in keyof GInput]: GKey extends GExpectedKey
    ? (
      GInput[GKey] extends GExpectedValue
        ? any
        : { ERROR: `Invalid value type`}
      )
    : { ERROR: `Invalid key type`};
  };
