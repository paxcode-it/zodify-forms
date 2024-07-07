import {
  InputHTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
} from 'react'

export type PartialFieldInputAttributes = Partial<
  InputHTMLAttributes<HTMLInputElement>
>
export type PartialFieldSelectAttributes = Partial<
  SelectHTMLAttributes<HTMLSelectElement>
>
export type PartialFieldOptionAttributes = Partial<
  OptionHTMLAttributes<HTMLOptionElement>
>
