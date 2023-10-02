export type deviceOptions = 'xs' | 'sm' | 'md' | 'lg';
export type shadowOptions =
  | 'small'
  | 'regular'
  | 'large'
  | 'badge'
  | 'border'
  | 'none';
export type colorOptions =
  | 'primary'
  | 'secondary'
  | 'warn'
  | 'error'
  | 'inherit'
  | 'dark';

// type NavItem = { icon?: string; title: string; href?: string, slug: string; };

export type NavWithChild = {
  href?: string;
  slug: string;
  title: string;
  // child?: Omit<NavItem, "icon">[];
  child?: any[];
};

export type Meta = {
  page: number;
  total: number;
  pageSize: number;
  totalPage: number;
};

export interface ApiErrorDetail {
  field: string;
  message: string;
}

export interface ApiError {
  /** @deprecated não vai ser utilizado */
  error: boolean;
  /** @deprecated não vai ser utilizado */
  status: number;
  code: string;
  message: string;
  details?: ApiErrorDetail[];
}

export interface ResponseApi {
  data?: any[];
  error?: any[];
}

export interface SelectOption {
  value: string;
  label: string;
}
