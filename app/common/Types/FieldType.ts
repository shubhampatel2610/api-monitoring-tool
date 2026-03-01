import AppConstants from "@/app/utils/AppConstants"
import { makeAutoObservable } from "mobx"

export interface FieldConfig {
    name: string
    label?: string
    placeholder?: string
    value?: string
    minLength?: number
    maxLength?: number
    required?: boolean
}

export class Field {
    name: string
    label: string
    placeholder: string
    value: string
    minLength?: number
    maxLength?: number
    required?: boolean
    error: string = ""

    constructor(config: FieldConfig) {
        this.name = config.name
        this.label = config.label ?? ""
        this.placeholder = config.placeholder ?? ""
        this.value = config.value ?? ""
        this.minLength = config.minLength
        this.maxLength = config.maxLength
        this.required = config.required ?? false

        makeAutoObservable(this)
    }

    setValue(val: string) {
        this.value = val
    }

    validate() {
        if (this.required && !this.value) {
            this.error = `${this.label} ${AppConstants.REQUIRED_POSTFIX}`
            return;
        }

        if (this.minLength && this.value.length < this.minLength) {
            this.error = `${AppConstants.MINIMUM_PREFIX} ${this.minLength} ${AppConstants.CHARS_REQUIRED_POSTFIX}`
            return;
        }

        if (this.maxLength && this.value.length > this.maxLength) {
            this.error = `${AppConstants.MAXIMUM_PREFIX} ${this.maxLength} ${AppConstants.CHARS_ALLOWED_POSTFIX}`
            return;
        }

        this.error = "";
    }
}