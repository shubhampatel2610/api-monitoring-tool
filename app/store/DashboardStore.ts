import { makeAutoObservable } from "mobx";
import { Field } from "../common/Types/FieldType";

export class DashboardStore {
    constructor() {
        makeAutoObservable(this);
    }

    searchField = new Field({
        name: "searchField",
        label: "Search APIs",
        placeholder: "Search",
        minLength: 3,
    })

}

const dashboardStore = new DashboardStore();

export default dashboardStore;