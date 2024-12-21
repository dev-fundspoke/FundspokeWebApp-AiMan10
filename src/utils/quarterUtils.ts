const generateQuarterOptions = (): { value: string; label: string }[] => {
  const options = [];
  const currentYear = new Date().getFullYear();
  
  // Generate options for current year and next 2 years
  for (let year = currentYear - 1; year <= currentYear + 2; year++) {
    for (let quarter = 1; quarter <= 4; quarter++) {
      options.push({
        value: `Q${quarter}-${year}`,
        label: `Q${quarter} ${year}`,
      });
    }
  }
  
  return options;
};

export const quarterOptions = generateQuarterOptions();