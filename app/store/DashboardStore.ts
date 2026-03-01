import { makeAutoObservable } from "mobx";
import { Field } from "../common/Types/FieldType";
import AppConstants from "../utils/AppConstants";

export class DashboardStore {
    constructor() {
        makeAutoObservable(this);
    }

    searchField = new Field({
        name: AppConstants.SEARCH_FIELD.name,
        label: AppConstants.SEARCH_FIELD.label,
        placeholder: AppConstants.SEARCH_FIELD.placeholder,
    })

}

const dashboardStore = new DashboardStore();

export default dashboardStore;