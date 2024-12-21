export interface ContactInfo {
  email: string;
  phone: string;
}

export interface Contact {
  id: string;
  name: string;
  role: string;
  contactInfo: ContactInfo;
  linkedInProfile?: string;
  notes?: string;
}

export interface KeyContacts {
  primaryContact: Contact;
  secondaryContact?: Contact;
  keyTeamMembers: Contact[];
}