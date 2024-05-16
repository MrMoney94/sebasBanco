export const validatorID = (value: string): boolean => {
  return value.length >= 3 && value.length <= 10 && value.trim() !== '';
};

export const validatorName = (value: string): boolean => {
  return value.length >= 5 && value.length <= 100 && value.trim() !== '';
};

export const validatorDescription = (value: string): boolean => {
  return value.length >= 10 && value.length <= 200 && value.trim() !== '';
};

export const validatorLogo = (value: string): boolean => {
  return value.trim() !== '';
};

export const formatDate = (text: string): string => {
  const formattedText = text
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  return formattedText;
};

export const isValidDate = (inputDate: string): boolean => {
  const currentDate = new Date();
  const selectedDate = new Date(
    inputDate.replace(/\//g, '-').split('-').reverse().join('-'),
  );
  const compare = selectedDate.toISOString().split('T')[0];

  return compare >= currentDate.toISOString().split('T')[0];
};
