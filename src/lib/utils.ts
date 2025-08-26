import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatCurrency(amount, decimal = true) {
  if (amount === null || amount === undefined || isNaN(amount)) return "0.00";

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: decimal ? 2 : 0,
    maximumFractionDigits: decimal ? 2 : 0,
  });

  return formatter.format(amount).replace('NGN', '').trim();
}

export function capitalize(str: string) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
  }

