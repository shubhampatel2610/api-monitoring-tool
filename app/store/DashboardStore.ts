/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable } from "mobx";
import { Field } from "../common/Types/FieldType";
import AppConstants from "../utils/AppConstants";

export class DashboardStore {
    constructor() {
        makeAutoObservable(this);
    }

    globalLoading: boolean = false;

    showGlobalError: boolean = false;

    globalErrorMessage: string = "";

    searchField = new Field({
        name: AppConstants.SEARCH_FIELD.name,
        label: AppConstants.SEARCH_FIELD.label,
        placeholder: AppConstants.SEARCH_FIELD.placeholder,
        type: AppConstants.SEARCH_FIELD.type
    })

    expandedRows: any = null;

    addApiPopupVisibility: boolean = false;

    setGlobalLoading = (value: boolean) => {
        this.globalLoading = value;
    }

    setGlobalError = (value: boolean) => {
        this.showGlobalError = value;
    }

    setGlobalErrorMessage = (value: string) => {
        this.globalErrorMessage = value;
    }

    setExpandedRows = (value: any) => {
        this.expandedRows = value;
    }

    SetAddApiPopupVisibility = (value: boolean) => {
        this.addApiPopupVisibility = value;
    }
}

const dashboardStore = new DashboardStore();

export default dashboardStore;