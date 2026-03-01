import { makeAutoObservable } from "mobx";

export class DashboardStore {
    constructor() {
        makeAutoObservable(this);
    }

    counter = 0;

    increase = () => {
        this.counter++;
    }

    decrease = () => {
        this.counter--;
    }
}

const dashboardStore = new DashboardStore();

export default dashboardStore;