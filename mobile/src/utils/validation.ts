export const isValidName = (text: string): boolean => {
  if (!text || text.trim().length === 0) return false;
  
  // Only letters and spaces allowed
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(text);
};

export const isValidItem = (text: string): boolean => {
  if (!text || text.trim().length === 0) return false;
  
  // Letters, numbers and spaces allowed
  const regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(text);
};

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
