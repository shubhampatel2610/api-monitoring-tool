import { checkNumber, checkUrl } from "@/app/utils/helperFunctions"
import AppConstants from "../../utils/AppConstants"
import { makeAutoObservable } from "mobx"

export interface FieldConfig {
    name: string
    label?: string
    placeholder?: string
    value?: string
    minLength?: number
    maxLength?: number
    required?: boolean
    type: string
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
    type: string = "text"

    constructor(config: FieldConfig) {
        this.name = config.name
        this.label = config.label ?? ""
        this.placeholder = config.placeholder ?? ""
        this.value = config.value ?? ""
        this.minLength = config.minLength
        this.maxLength = config.maxLength
        this.required = config.required ?? false
        this.type = config.type ?? "text"

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

        if (this.type === "number" && this.value.length > 0 && !checkNumber(this.value)) {
            this.error = `${AppConstants.REQUEST_ENTER_PREFIX} ${AppConstants.NUMBER_FIELD_POSTFIX}`
            return;
        }

        if (this.type === "url" && this.value.length > 0 && !checkUrl(this.value)) {
            this.error = `${AppConstants.REQUEST_ENTER_PREFIX} ${AppConstants.URL_FIELD_POSTFIX}`
            return;
        }

        this.error = "";
    }

    reset() {
        this.value = "";
        this.error = "";
    }
}