export const normalizePhoneNumber = (value: string) => {
  value = value?.substring(2).replace(/\D/g, '');
  const from0to3 = value.substring(0, 3);
  const from3to6 = value.substring(3, 6);
  const from6to8 = value.substring(6, 8);
  const from8to10 = value.substring(8, 10);

  if (value.length <= 3) {
    return `+7 (${value}`;
  }
  if (value.length <= 6) {
    return `+7 (${from0to3}) ${value.substring(3)}`;
  }
  if (value.length <= 8) {
    return `+7 (${from0to3}) ${from3to6}-${value.substring(6)}`;
  }
  if (value.length <= 10) {
    return `+7 (${from0to3}) ${from3to6}-${from6to8}-${value.substring(8)}`;
  }
  return `+7 (${from0to3}) ${from3to6}-${from6to8}-${from8to10}`;
};
