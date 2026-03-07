"use client";

import ButtonComponent from "@/app/common/ButtonComponent/ButtonComponent";
import DropdownComponent from "@/app/common/DropdownComponent/DropdownComponent";
import InputTextComponent from "@/app/common/InputTextComponent/InputTextComponent";
import apiStore from "@/app/store/ApiStore";
import dashboardStore from "@/app/store/DashboardStore";
import AppConstants from "@/app/utils/AppConstants";
import { validateFormFields } from "@/app/utils/helperFunctions";
import { observer } from "mobx-react";
import { Dialog } from "primereact/dialog";

const AddApiPopup = observer(() => {
    const apiNameField = apiStore.apiNameField;
    const apiUrlField = apiStore.apiUrlField;
    const apiMethodField = apiStore.apiMethodField;
    const apiTimeoutField = apiStore.apiTimeoutField;
    const apiIntervalField = apiStore.apiIntervalField;
    const apiMonitoringTypeField = apiStore.apiMonitoringTypeField;

    const onCloseClick = () => {
        apiStore.resetApiForm();
        dashboardStore.SetAddApiPopupVisibility(false);
    }

    const onSaveClick = async () => {
        const formFields = [apiNameField, apiUrlField, apiMethodField, apiTimeoutField, apiMonitoringTypeField];

        if (apiMonitoringTypeField.value === AppConstants.SCHEDULED_MONITORING_TYPE) {
            formFields.push(apiIntervalField);
        }

        const validation = validateFormFields(formFields);

        if (validation) {
            const payload = apiStore.prepareApiPayload();
            const response = await apiStore.saveApiData(payload);
            console.log("Response >>> ", response)
        } else {
            console.log("INVALIDs")
        }
    }

    const FooterTemplate = () => {
        return <>
            <ButtonComponent
                label={AppConstants.SAVE_BTN_LABEL}
                onClick={onSaveClick}
            />
            <ButtonComponent
                label={AppConstants.CANCEL_BTN_LABEL}
                outlined
                onClick={onCloseClick}
            />
        </>;
    }

    return (
        <Dialog
            header="Add Api"
            visible={dashboardStore.addApiPopupVisibility}
            style={{ width: '70%' }}
            onHide={onCloseClick}
            footer={FooterTemplate}
        >
            <div className="grid col-12">
                <div className="sm:col-12 md:col-6 lg:col-6">
                    <InputTextComponent
                        field={apiNameField}
                    />
                </div>
                <div className="sm:col-12 md:col-6 lg:col-6">
                    <InputTextComponent
                        field={apiUrlField}
                    />
                </div>
            </div>
            <div className="grid col-12">
                <div className="sm:col-12 md:col-6 lg:col-6">
                    <DropdownComponent
                        field={apiMethodField}
                        options={AppConstants.API_METHOD_OPTIONS}
                    />
                </div>
                <div className="sm:col-12 md:col-6 lg:col-6">
                    <DropdownComponent
                        field={apiMonitoringTypeField}
                        options={AppConstants.API_MONITORING_TYPE_OPTIONS}
                        onChange={() => {
                            apiIntervalField.reset();
                        }}
                    />
                </div>
            </div>
            <div className="grid col-12">
                <div className="sm:col-12 md:col-6 lg:col-6">
                    <InputTextComponent
                        field={apiTimeoutField}
                    />
                </div>
                {(apiMonitoringTypeField.value === AppConstants.SCHEDULED_MONITORING_TYPE) && <div className="sm:col-12 md:col-6 lg:col-6">
                    <InputTextComponent
                        field={apiIntervalField}
                    />
                </div>}
            </div>
        </Dialog>
    )
});

export default AddApiPopup;