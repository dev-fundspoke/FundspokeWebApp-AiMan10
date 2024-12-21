import type { Address } from '../../../types/address';

export const validateAddresses = (addresses: Address[]): Address[] => {
  if (!addresses?.length) {
    return [];
  }

  return addresses.map(address => {
    if (!address.type) {
      throw new Error('Address type is required');
    }

    if (!address.address?.line1 || !address.address?.city || 
        !address.address?.state || !address.address?.zipCode) {
      throw new Error('Address details are incomplete');
    }

    return {
      type: address.type,
      address: {
        line1: address.address.line1.trim(),
        line2: address.address.line2?.trim(),
        city: address.address.city.trim(),
        state: address.address.state.trim(),
        zipCode: address.address.zipCode.trim(),
        country: address.address.country?.trim() || 'Canada',
      },
      website: address.website?.trim(),
      socialMediaLinks: address.socialMediaLinks?.filter(Boolean) || [],
    };
  });
};