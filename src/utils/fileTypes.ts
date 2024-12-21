export const documentFileTypes = {
  documents: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.oasis.opendocument.text',
    'text/plain',
    'application/rtf',
  ],
  images: [
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'image/gif',
    'image/bmp',
    'image/tiff',
  ],
  presentations: [
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.oasis.opendocument.presentation',
  ],
};

export const getAcceptedFileTypes = (): string => {
  const extensions = {
    documents: '.pdf,.doc,.docx,.txt,.rtf,.odt',
    images: '.jpg,.jpeg,.png,.svg,.gif,.bmp,.tiff',
    presentations: '.ppt,.pptx,.odp',
  };

  return Object.values(extensions).join(',');
};

export const isValidFileType = (file: File): boolean => {
  const allTypes = [
    ...documentFileTypes.documents,
    ...documentFileTypes.images,
    ...documentFileTypes.presentations,
  ];
  return allTypes.includes(file.type);
};

export const getFileTypeCategory = (file: File): string => {
  if (documentFileTypes.documents.includes(file.type)) return 'Document';
  if (documentFileTypes.images.includes(file.type)) return 'Image';
  if (documentFileTypes.presentations.includes(file.type)) return 'Presentation';
  return 'Other';
};