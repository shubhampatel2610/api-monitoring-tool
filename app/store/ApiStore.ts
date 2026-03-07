/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from "mobx";
import { Field } from "../common/Types/FieldType";
import AppConstants from "../utils/AppConstants";
import { saveAPIData } from "../service/dashboardServices";

export class ApiStore {
    constructor() {
        makeAutoObservable(this);
    }

    apiNameField = new Field({
        name: AppConstants.API_NAME_FIELD.name,
        label: AppConstants.API_NAME_FIELD.label,
        placeholder: AppConstants.API_NAME_FIELD.placeholder,
        type: AppConstants.API_NAME_FIELD.type
    });

    apiUrlField = new Field({
        name: AppConstants.API_URL_FIELD.name,
        label: AppConstants.API_URL_FIELD.label,
        placeholder: AppConstants.API_URL_FIELD.placeholder,
        type: AppConstants.API_URL_FIELD.type
    });

    apiMethodField = new Field({
        name: AppConstants.API_METHOD_FIELD.name,
        label: AppConstants.API_METHOD_FIELD.label,
        placeholder: AppConstants.API_METHOD_FIELD.placeholder,
        type: AppConstants.API_METHOD_FIELD.type
    });

    apiTimeoutField = new Field({
        name: AppConstants.API_TIMEOUT_FIELD.name,
        label: AppConstants.API_TIMEOUT_FIELD.label,
        placeholder: AppConstants.API_TIMEOUT_FIELD.placeholder,
        type: AppConstants.API_TIMEOUT_FIELD.type
    });

    apiIntervalField = new Field({
        name: AppConstants.API_INTERVAL_FIELD.name,
        label: AppConstants.API_INTERVAL_FIELD.label,
        placeholder: AppConstants.API_INTERVAL_FIELD.placeholder,
        type: AppConstants.API_INTERVAL_FIELD.type
    });

    apiMonitoringTypeField = new Field({
        name: AppConstants.API_MONITORING_TYPE_FIELD.name,
        label: AppConstants.API_MONITORING_TYPE_FIELD.label,
        placeholder: AppConstants.API_MONITORING_TYPE_FIELD.placeholder,
        type: AppConstants.API_MONITORING_TYPE_FIELD.type
    });

    resetApiForm = () => {
        this.apiNameField.reset();
        this.apiUrlField.reset();
        this.apiMethodField.reset();
        this.apiTimeoutField.reset();
        this.apiIntervalField.reset();
        this.apiMonitoringTypeField.reset();
    }

    prepareApiPayload = () => {
        return {
            name: this.apiNameField.value,
            url: this.apiUrlField.value,
            method: this.apiMethodField.value.toUpperCase(),
            timeout: Number(this.apiTimeoutField.value) * 1000,
            monitoringType: this.apiMonitoringTypeField.value,
            interval: Number(this.apiIntervalField.value) ? Number(this.apiIntervalField.value) * 1000 : 1,
            isActive: true
        }
    }

    saveApiData = async (payload: any) => {
        const response = await saveAPIData(payload);
        return response;
    }

}

const apiStore = new ApiStore();

export default apiStore;