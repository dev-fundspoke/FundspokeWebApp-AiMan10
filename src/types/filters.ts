export interface FilterOption {
  value: string;
  label: string;
}

export interface FiltersProps {
  onSearch?: (value: string) => void;
  onDateRangeChange?: (value: string) => void;
  onCompanyChange?: (value: string) => void;
  onStatusChange?: (value: string) => void;
}