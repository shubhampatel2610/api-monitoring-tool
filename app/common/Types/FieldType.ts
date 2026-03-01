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
            this.error = `${this.label} is required`
            return;
        }

        if (this.minLength && this.value.length < this.minLength) {
            this.error = `Minimum ${this.minLength} characters required`
            return;
        }

        if (this.maxLength && this.value.length > this.maxLength) {
            this.error = `Maximum ${this.maxLength} characters allowed`
            return;
        }

        this.error = "";
    }
}