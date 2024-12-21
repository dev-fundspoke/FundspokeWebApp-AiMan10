export type AddressType = 'Business' | 'Legal/Mailing';

export interface Address {
  id: string;
  type: AddressType;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  website?: string;
  socialMediaLinks?: string[];
}

export const addressTypes: AddressType[] = ['Business', 'Legal/Mailing'];